const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Storage structures
let submissions = [];
let adminSettings = {
    vcfDownloadAvailable: true,
    uploadedVcfPath: null,
    uploadedVcfName: '',
    daysRemaining: 30,
    verifiedCount: 1420, 
    remainingCount: 80
};

// Setup file upload configurations
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './'),
    filename: (req, file, cb) => cb(null, 'global_contacts.vcf')
});
const upload = multer({ storage });

// API Endpoints
app.get('/api/settings', (req, res) => res.json(adminSettings));

app.post('/api/settings', (req, res) => {
    adminSettings = { ...adminSettings, ...req.body };
    res.json({ success: true, settings: adminSettings });
});

app.post('/api/upload-vcf', upload.single('vcfFile'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    adminSettings.uploadedVcfPath = '/global_contacts.vcf';
    adminSettings.uploadedVcfName = req.file.originalname;
    res.json({ success: true, path: adminSettings.uploadedVcfPath });
});

app.get('/api/submissions', (req, res) => res.json(submissions));

app.post('/api/submit', (req, res) => {
    const { email, phone, countryCode, countryName } = req.body;
    if (!email || !phone) return res.status(400).json({ error: 'Missing fields' });

    const newRecord = {
        id: Date.now(),
        email,
        phone,
        countryCode,
        countryName,
        timestamp: new Date().toLocaleString()
    };
    submissions.push(newRecord);
    
    // Adjust real-time counters
    adminSettings.verifiedCount += 1;
    if (adminSettings.remainingCount > 0) adminSettings.remainingCount -= 1;

    res.json({ success: true });
});

app.post('/api/submissions/delete', (req, res) => {
    const { id } = req.body;
    submissions = submissions.filter(item => item.id !== id);
    res.json({ success: true });
});

// Export Data Routes
app.get('/api/export/csv', (req, res) => {
    let csvContent = "ID,Timestamp,Email,Country,Phone\n";
    submissions.forEach(s => {
        csvContent += `${s.id},"${s.timestamp}","${s.email}","${s.countryName}",${s.phone}\n`;
    });
    res.setHeader('Content-Type', 'text/csv');
    res.attachment('submissions.csv');
    res.send(csvContent);
});

app.get('/api/export/vcf', (req, res) => {
    let vcfContent = "";
    submissions.forEach((s, idx) => {
        vcfContent += `BEGIN:VCARD\nVERSION:3.0\nFN:Wizard Client ${idx+1}\nTEL;TYPE=CELL:${s.phone}\nEMAIL:${s.email}\nEND:VCARD\n`;
    });
    res.setHeader('Content-Type', 'text/vcard');
    res.attachment('generated_users.vcf');
    res.send(vcfContent);
});

app.get('/api/export/txt', (req, res) => {
    let txtContent = "CONFRONTER TECH WIZARD SUBMISSIONS\n==================================\n";
    submissions.forEach(s => {
        txtContent += `[${s.timestamp}] Email: ${s.email} | Phone: ${s.phone} (${s.countryName})\n`;
    });
    res.setHeader('Content-Type', 'text/plain');
    res.attachment('submissions.txt');
    res.send(txtContent);
});

app.listen(PORT, () => console.log(`Server running smoothly on http://localhost:${PORT}`));
