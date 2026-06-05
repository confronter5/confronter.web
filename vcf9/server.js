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
    vcfData: null
  };
}

function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (e) { console.error('Save error:', e); }
}

let data = loadData();

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
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// ====== Export for Vercel (serverless) ======
module.exports = handleRequest;
