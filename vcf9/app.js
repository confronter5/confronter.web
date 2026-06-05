const countries = [
    {code: "KE", name: "Kenya", dial: "+254", pattern: /^[17]\d{8}$/, len: 9, hint: "7XX XXX XXX or 1XX XXX XXX"},
    {code: "US", name: "USA", dial: "+1", pattern: /^[2-9]\d{9}$/, len: 10, hint: "XXX XXX XXXX"},
    {code: "GB", name: "UK", dial: "+44", pattern: /^[1-9]\d{9}$/, len: 10, hint: "7XXX XXXXXX"},
    {code: "NG", name: "Nigeria", dial: "+234", pattern: /^[7-9]\d{9}$/, len: 10, hint: "7XX XXX XXXX"},
    {code: "ZA", name: "South Africa", dial: "+27", pattern: /^[6-8]\d{8}$/, len: 9, hint: "7X XXX XXXX"},
    {code: "TZ", name: "Tanzania", dial: "+255", pattern: /^[67]\d{8}$/, len: 9, hint: "7XX XXX XXX"},
    {code: "UG", name: "Uganda", dial: "+256", pattern: /^[7]\d{8}$/, len: 9, hint: "7XX XXX XXX"},
    {code: "IN", name: "India", dial: "+91", pattern: /^[6-9]\d{9}$/, len: 10, hint: "9XXXX XXXXX"},
    {code: "GH", name: "Ghana", dial: "+233", pattern: /^[2-5]\d{8}$/, len: 9, hint: "2X XXX XXXX"},
    {code: "ET", name: "Ethiopia", dial: "+251", pattern: /^[7-9]\d{8}$/, len: 9, hint: "9XX XXX XXX"},
    {code: "RW", name: "Rwanda", dial: "+250", pattern: /^[7]\d{8}$/, len: 9, hint: "7XX XXX XXX"},
    {code: "BD", name: "Bangladesh", dial: "+880", pattern: /^[1-9]\d{9}$/, len: 10, hint: "1XXX XXXXXX"},
    {code: "PK", name: "Pakistan", dial: "+92", pattern: /^[3]\d{9}$/, len: 10, hint: "3XX XXXXXXX"},
    {code: "PH", name: "Philippines", dial: "+63", pattern: /^[9]\d{9}$/, len: 10, hint: "9XX XXX XXXX"},
    {code: "ID", name: "Indonesia", dial: "+62", pattern: /^[8]\d{9,11}$/, len: 10, hint: "8XX XXX XXXX"},
    {code: "CA", name: "Canada", dial: "+1", pattern: /^[2-9]\d{9}$/, len: 10, hint: "XXX XXX XXXX"},
    {code: "AU", name: "Australia", dial: "+61", pattern: /^[4]\d{8}$/, len: 9, hint: "4XX XXX XXX"},
    {code: "DE", name: "Germany", dial: "+49", pattern: /^[1-9]\d{10}$/, len: 11, hint: "1XX XXXXXXX"},
    {code: "FR", name: "France", dial: "+33", pattern: /^[6-7]\d{8}$/, len: 9, hint: "6XX XXX XXX"},
    {code: "BR", name: "Brazil", dial: "+55", pattern: /^[1-9]\d{10}$/, len: 11, hint: "9XXXX XXXXX"},
    {code: "MX", name: "Mexico", dial: "+52", pattern: /^[1-9]\d{9}$/, len: 10, hint: "1XX XXX XXXX"},
    {code: "JP", name: "Japan", dial: "+81", pattern: /^[7-9]\d{9}$/, len: 10, hint: "9X XXXX XXXX"},
    {code: "KR", name: "South Korea", dial: "+82", pattern: /^[1-9]\d{8,9}$/, len: 9, hint: "1X XXXX XXXX"},
    {code: "CN", name: "China", dial: "+86", pattern: /^[1]\d{10}$/, len: 11, hint: "1XX XXXX XXXX"},
    {code: "RU", name: "Russia", dial: "+7", pattern: /^[9]\d{9}$/, len: 10, hint: "9XX XXX XXXX"},
    {code: "TR", name: "Turkey", dial: "+90", pattern: /^[5]\d{9}$/, len: 10, hint: "5XX XXX XXXX"},
    {code: "SA", name: "Saudi Arabia", dial: "+966", pattern: /^[5]\d{8}$/, len: 9, hint: "5X XXX XXXX"},
    {code: "AE", name: "UAE", dial: "+971", pattern: /^[5]\d{8}$/, len: 9, hint: "5X XXX XXXX"},
    {code: "EG", name: "Egypt", dial: "+20", pattern: /^[1]\d{9}$/, len: 10, hint: "1XX XXX XXXX"},
    {code: "TH", name: "Thailand", dial: "+66", pattern: /^[6-9]\d{8}$/, len: 9, hint: "8X XXX XXXX"},
    {code: "VN", name: "Vietnam", dial: "+84", pattern: /^[3-9]\d{8}$/, len: 9, hint: "9X XXX XXXX"},
    {code: "MY", name: "Malaysia", dial: "+60", pattern: /^[1-9]\d{8,9}$/, len: 9, hint: "1X XXX XXXX"},
    {code: "SG", name: "Singapore", dial: "+65", pattern: /^[8-9]\d{7}$/, len: 8, hint: "8XXX XXXX"},
    {code: "IT", name: "Italy", dial: "+39", pattern: /^[3]\d{9}$/, len: 10, hint: "3XX XXX XXXX"},
    {code: "ES", name: "Spain", dial: "+34", pattern: /^[6-7]\d{8}$/, len: 9, hint: "6XX XXX XXX"},
    {code: "NL", name: "Netherlands", dial: "+31", pattern: /^[6]\d{8}$/, len: 9, hint: "6X XXX XXXX"},
    {code: "SE", name: "Sweden", dial: "+46", pattern: /^[7]\d{8}$/, len: 9, hint: "7X XXX XXXX"},
    {code: "NO", name: "Norway", dial: "+47", pattern: /^[4-9]\d{7}$/, len: 8, hint: "9XXX XXXX"},
    {code: "PL", name: "Poland", dial: "+48", pattern: /^[5-8]\d{8}$/, len: 9, hint: "5XX XXX XXX"},
    {code: "UA", name: "Ukraine", dial: "+380", pattern: /^[6-9]\d{8}$/, len: 9, hint: "9X XXX XXXX"},
    {code: "CO", name: "Colombia", dial: "+57", pattern: /^[3]\d{9}$/, len: 10, hint: "3XX XXX XXXX"},
    {code: "AR", name: "Argentina", dial: "+54", pattern: /^[1-9]\d{9}$/, len: 10, hint: "9XX XXX XXXX"},
    {code: "CL", name: "Chile", dial: "+56", pattern: /^[9]\d{8}$/, len: 9, hint: "9XXXX XXXX"},
    {code: "PE", name: "Peru", dial: "+51", pattern: /^[9]\d{8}$/, len: 9, hint: "9XX XXX XXX"}
];

const WHATSAPP_GROUP = "https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1";

let selectedCountry = null;

function init() {
    populateCountries();
    updateDateTime();
    updateBattery();
    loadStats();
    checkVCF();
    startCountdown();
    setInterval(updateDateTime, 1000);
    setInterval(loadStats, 5000);
}

function populateCountries() {
    const sel = document.getElementById('country');
    countries.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = `${c.name} (${c.dial})`;
        sel.appendChild(opt);
    });
}

function updatePhoneFormat() {
    const code = document.getElementById('country').value;
    selectedCountry = countries.find(c => c.code === code);
    const display = document.getElementById('code-display');
    const hint = document.getElementById('phone-hint');
    const phone = document.getElementById('phone');
    
    if (selectedCountry) {
        display.textContent = selectedCountry.dial.replace('+', '');
        hint.textContent = selectedCountry.hint;
        hint.className = '';
        phone.placeholder = selectedCountry.hint;
        phone.value = '';
    } else {
        display.textContent = '---';
        hint.textContent = 'Select country first';
    }
}

function validatePhone() {
    if (!selectedCountry) return false;
    const phone = document.getElementById('phone').value.replace(/\s/g, '');
    const hint = document.getElementById('phone-hint');
    
    if (!phone) {
        hint.textContent = selectedCountry.hint;
        hint.className = '';
        return false;
    }
    
    if (!/^\d+$/.test(phone)) {
        hint.textContent = "Numbers only";
        hint.className = "error";
        return false;
    }
    
    if (phone.length !== selectedCountry.len) {
        hint.textContent = `Must be ${selectedCountry.len} digits`;
        hint.className = "error";
        return false;
    }
    
    if (!selectedCountry.pattern.test(phone)) {
        hint.textContent = "Invalid format for this country";
        hint.className = "error";
        return false;
    }
    
    hint.textContent = "✓ Valid";
    hint.className = "success";
    return true;
}

function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const phone = document.getElementById('phone').value.replace(/\s/g, '');
    
    if (!name) {
        alert('Name required');
        return;
    }
    
    if (!email || !email.includes('@')) {
        alert('Valid email required');
        return;
    }
    
    if (!selectedCountry) {
        alert('Select country');
        return;
    }
    
    if (!validatePhone()) {
        alert('Fix phone number');
        return;
    }
    
    const fullPhone = selectedCountry.dial + phone;
    
    // Check duplicates
    const verified = JSON.parse(localStorage.getItem('verified') || '[]');
    const dupEmail = verified.find(u => u.email === email);
    const dupPhone = verified.find(u => u.phone === fullPhone);
    const dupName = verified.find(u => u.name && u.name.toLowerCase() === name.toLowerCase());
    
    if (dupEmail) {
        alert('❌ This email is already registered!');
        return;
    }
    if (dupPhone) {
        alert('❌ This phone number is already registered!');
        return;
    }
    if (dupName) {
        alert('❌ This name is already registered!');
        return;
    }
    
    // Save
    verified.push({name, email, phone: fullPhone, country: selectedCountry.code, countryName: selectedCountry.name, date: new Date().toISOString()});
    localStorage.setItem('verified', JSON.stringify(verified));
    
    // Play success sound
    speak("You were verified successfully");
    
    // Show success
    document.getElementById('verifyForm').style.display = 'none';
    document.getElementById('success').style.display = 'block';
    
    // Update stats
    updateStats();
    
    // Redirect in 2 seconds
    setTimeout(() => {
        window.location.href = WHATSAPP_GROUP;
    }, 2000);
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = 0.9;
        utter.pitch = 1;
        window.speechSynthesis.speak(utter);
    }
}

function goBack() {
    window.location.reload();
}

function addAnother() {
    document.getElementById('verifyForm').style.display = 'block';
    document.getElementById('success').style.display = 'none';
    document.getElementById('verifyForm').reset();
    document.getElementById('code-display').textContent = '---';
    selectedCountry = null;
}

function updateStats() {
    const verified = JSON.parse(localStorage.getItem('verified') || '[]');
    const total = 30;
    const count = verified.length;
    const remaining = Math.max(0, total - count);
    
    document.getElementById('verified-count').textContent = count;
    document.getElementById('remaining-count').textContent = remaining;
    
    localStorage.setItem('stats', JSON.stringify({count, remaining, total}));
}

function loadStats() {
    const stats = JSON.parse(localStorage.getItem('stats') || '{"count":0,"remaining":30,"total":30}');
    document.getElementById('verified-count').textContent = stats.count;
    document.getElementById('remaining-count').textContent = stats.remaining;
}

function startCountdown() {
    function update() {
        const target = new Date(localStorage.getItem('countdownTarget') || '');
        if (isNaN(target)) {
            const days = parseInt(localStorage.getItem('daysLeft') || '30');
            const now = new Date();
            const t = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
            localStorage.setItem('countdownTarget', t.toISOString());
        }
        
        const end = new Date(localStorage.getItem('countdownTarget'));
        const diff = end - new Date();
        
        if (diff <= 0) {
            document.getElementById('days-left').textContent = '00';
            document.getElementById('hours-left').textContent = '00';
            document.getElementById('mins-left').textContent = '00';
            document.getElementById('secs-left').textContent = '00';
            return;
        }
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days-left').textContent = String(d).padStart(2, '0');
        document.getElementById('hours-left').textContent = String(h).padStart(2, '0');
        document.getElementById('mins-left').textContent = String(m).padStart(2, '0');
        document.getElementById('secs-left').textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}

function checkVCF() {
    const vcf = localStorage.getItem('vcfData');
    const enabled = localStorage.getItem('vcfEnabled') === 'true';
    const section = document.getElementById('vcf-download');
    const link = document.getElementById('vcf-link');
    
    if (vcf && enabled) {
        const blob = new Blob([vcf], {type: 'text/vcard'});
        link.href = URL.createObjectURL(blob);
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    document.getElementById('datetime').textContent = `📅 ${date} ⏲️ ${time}`;
}

function updateBattery() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(bat => {
            const pct = Math.round(bat.level * 100);
            const icon = bat.charging ? '⚡' : '🔋';
            document.getElementById('battery').textContent = `${icon} ${pct}%`;
            
            bat.addEventListener('levelchange', () => {
                const p = Math.round(bat.level * 100);
                document.getElementById('battery').textContent = `${bat.charging ? '⚡' : '🔋'} ${p}%`;
            });
            bat.addEventListener('chargingchange', () => {
                const p = Math.round(bat.level * 100);
                document.getElementById('battery').textContent = `${bat.charging ? '⚡' : '🔋'} ${p}%`;
            });
        });
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const current = html.getAttribute('data-theme');
    
    if (current === 'dark') {
        html.removeAttribute('data-theme');
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').textContent = '🌙';
}

window.addEventListener('DOMContentLoaded', init);
