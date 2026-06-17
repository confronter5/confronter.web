const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// ====== Data Storage (file persistence) ======
const DATA_FILE = path.join(__dirname, 'data.json');

function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) { console.error('Load error:', e); }
  return {
    members: [],
    target: 30,
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    vcfEnabled: false,
    vcfName: null,
    vcfData: null,
    payments: []  // Store payment records
  };
}

function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (e) { console.error('Save error:', e); }
}

let data = loadData();

// ====== PAYHERO CONFIG ======
// IMPORTANT: Set these as Vercel Environment Variables!
// PAYHERO_API_USERNAME = your_api_username
// PAYHERO_API_PASSWORD = your_api_password
// PAYHERO_CHANNEL_ID = your_channel_id (e.g., 133)
const PAYHERO_BASE_URL = 'https://backend.payhero.co.ke/api/v2';

function getPayHeroAuth() {
  const username = process.env.PAYHERO_API_USERNAME || '';
  const password = process.env.PAYHERO_API_PASSWORD || '';
  return 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
}

function getPayHeroChannelId() {
  return process.env.PAYHERO_CHANNEL_ID || '';
}

// ====== MIME Types ======
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.vcf': 'text/vcard',
  '.csv': 'text/csv',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

// ====== CORS Headers ======
function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ====== Parse Body ======
function parseBody(req, callback) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      callback(JSON.parse(body));
    } catch {
      callback({});
    }
  });
}

// ====== PAYHERO API HELPERS ======
async function payHeroStkPush(amount, phoneNumber, externalReference, customerName, callbackUrl) {
  const channelId = getPayHeroChannelId();
  if (!channelId) {
    return { success: false, message: 'PayHero channel ID not configured' };
  }

  // Format phone number to 254XXXXXXXXX
  let formattedPhone = phoneNumber.replace(/\D/g, '');
  if (formattedPhone.startsWith('0')) {
    formattedPhone = '254' + formattedPhone.substring(1);
  } else if (formattedPhone.startsWith('+')) {
    formattedPhone = formattedPhone.substring(1);
  }

  const payload = {
    amount: parseInt(amount),
    phone_number: formattedPhone,
    channel_id: parseInt(channelId),
    provider: 'm-pesa',
    external_reference: externalReference,
    customer_name: customerName || 'Customer',
    callback_url: callbackUrl || ''
  };

  try {
    const response = await fetch(PAYHERO_BASE_URL + '/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getPayHeroAuth()
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return { success: response.ok, ...result };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function payHeroTransactionStatus(reference) {
  try {
    const response = await fetch(PAYHERO_BASE_URL + '/transaction-status/' + reference, {
      method: 'GET',
      headers: {
        'Authorization': getPayHeroAuth()
      }
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// ====== Request Handler (works for both local & Vercel) ======
function handleRequest(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // ====== API Routes ======

  // GET /api/members - Get all members
  if (pathname === '/api/members' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data.members));
    return;
  }

  // POST /api/members - Add new member
  if (pathname === '/api/members' && req.method === 'POST') {
    parseBody(req, (body) => {
      const member = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        name: body.name || '',
        email: body.email || '',
        phone: body.phone || '',
        country: body.country || '',
        status: 'verified',
        date: new Date().toISOString(),
        notes: ''
      };
      data.members.push(member);
      saveData(data);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(member));
    });
    return;
  }

  // PUT /api/members/:id - Update member status
  if (pathname.startsWith('/api/members/') && req.method === 'PUT') {
    const id = pathname.split('/')[3];
    parseBody(req, (body) => {
      const member = data.members.find(m => m.id === id);
      if (member) {
        if (body.status) member.status = body.status;
        if (body.notes !== undefined) member.notes = body.notes;
        saveData(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(member));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Member not found' }));
      }
    });
    return;
  }

  // PUT /api/members/bulk - Bulk update status
  if (pathname === '/api/members/bulk' && req.method === 'PUT') {
    parseBody(req, (body) => {
      const ids = body.ids || [];
      ids.forEach(id => {
        const m = data.members.find(x => x.id === id);
        if (m && body.status) m.status = body.status;
      });
      saveData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ updated: ids.length }));
    });
    return;
  }

  // GET /api/stats - Get stats
  if (pathname === '/api/stats' && req.method === 'GET') {
    const verified = data.members.filter(m => m.status === 'verified').length;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      total: data.members.length,
      verified: verified,
      target: data.target,
      remaining: Math.max(0, data.target - verified),
      endDate: data.endDate
    }));
    return;
  }

  // PUT /api/stats - Update target and endDate
  if (pathname === '/api/stats' && req.method === 'PUT') {
    parseBody(req, (body) => {
      if (body.target !== undefined) data.target = parseInt(body.target) || 30;
      if (body.endDate) data.endDate = body.endDate;
      saveData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  // DELETE /api/members - Reset all (admin only)
  if (pathname === '/api/members' && req.method === 'DELETE') {
    parseBody(req, (body) => {
      if (body.password === 'confronter1') {
        data.members = [];
        saveData(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unauthorized' }));
      }
    });
    return;
  }

  // GET /api/vcf - Get VCF file info
  if (pathname === '/api/vcf' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      enabled: data.vcfEnabled,
      name: data.vcfName,
      data: data.vcfData
    }));
    return;
  }

  // PUT /api/vcf - Update VCF settings
  if (pathname === '/api/vcf' && req.method === 'PUT') {
    parseBody(req, (body) => {
      if (body.enabled !== undefined) data.vcfEnabled = body.enabled;
      if (body.name !== undefined) data.vcfName = body.name;
      if (body.data !== undefined) data.vcfData = body.data;
      saveData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  // DELETE /api/vcf - Remove VCF
  if (pathname === '/api/vcf' && req.method === 'DELETE') {
    parseBody(req, (body) => {
      if (body.password === 'confronter1') {
        data.vcfEnabled = false;
        data.vcfName = null;
        data.vcfData = null;
        saveData(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unauthorized' }));
      }
    });
    return;
  }

  // ====== PAYHERO PAYMENT ROUTES ======

  // POST /api/payhero/initiate - Initiate STK Push
  if (pathname === '/api/payhero/initiate' && req.method === 'POST') {
    parseBody(req, async (body) => {
      const { amount, phone, customerName, service } = body;

      if (!amount || !phone) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Amount and phone are required' }));
        return;
      }

      const externalReference = 'CNF-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
      const callbackUrl = (req.headers.host ? 'https://' + req.headers.host : '') + '/api/payhero/callback';

      const result = await payHeroStkPush(amount, phone, externalReference, customerName || 'Customer', callbackUrl);

      if (result.success) {
        // Save payment record
        const paymentRecord = {
          id: externalReference,
          amount: parseInt(amount),
          phone: phone,
          customerName: customerName || 'Customer',
          service: service || 'General',
          status: 'pending',
          checkoutId: result.checkout_request_id || result.CheckoutRequestID || null,
          merchantRequestId: result.merchant_request_id || result.MerchantRequestID || null,
          date: new Date().toISOString(),
          payheroResponse: result
        };
        data.payments.push(paymentRecord);
        saveData(data);
      }

      res.writeHead(result.success ? 200 : 400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    });
    return;
  }

  // GET /api/payhero/status/:reference - Check transaction status
  if (pathname.startsWith('/api/payhero/status/') && req.method === 'GET') {
    const reference = pathname.split('/')[4];
    payHeroTransactionStatus(reference).then(result => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    });
    return;
  }

  // POST /api/payhero/callback - PayHero webhook callback
  if (pathname === '/api/payhero/callback' && req.method === 'POST') {
    parseBody(req, (body) => {
      console.log('PayHero Callback:', JSON.stringify(body));

      const checkoutId = body.CheckoutRequestID || body.checkout_request_id;
      const merchantRequestId = body.MerchantRequestID || body.merchant_request_id;
      const resultCode = body.ResultCode || body.result_code;
      const resultDesc = body.ResultDesc || body.result_desc;
      const transactionId = body.TransactionID || body.transaction_id;
      const amount = body.TransactionAmount || body.amount;

      // Find and update payment record
      const payment = data.payments.find(p =>
        p.checkoutId === checkoutId || p.merchantRequestId === merchantRequestId
      );

      if (payment) {
        payment.status = resultCode === 0 ? 'completed' : 'failed';
        payment.resultCode = resultCode;
        payment.resultDesc = resultDesc;
        payment.transactionId = transactionId;
        payment.callbackData = body;
        payment.updatedAt = new Date().toISOString();
        saveData(data);
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Callback received' }));
    });
    return;
  }

  // GET /api/payhero/payments - Get all payment records (admin)
  if (pathname === '/api/payhero/payments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data.payments || []));
    return;
  }

  // ====== Static File Serving ======
  let filePath = pathname === '/' ? '/index.html' : pathname;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

// ====== Local Server (for development) ======
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(handleRequest);
  server.listen(PORT, () => {
    console.log('🚀 Server running on http://localhost:' + PORT);
  });
}

// ====== Export for Vercel (serverless) ======
module.exports = handleRequest;
