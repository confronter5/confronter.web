// Country verification metadata lookup dictionary
const countriesList = [
    { name: "Kenya", code: "254", regex: /^(254)(7\d{8}|1\d{8})$/ },
    { name: "Nigeria", code: "234", regex: /^(234)([789][01]\d{8})$/ },
    { name: "South Africa", code: "27", regex: /^(27)([678]\d{8})$/ },
    { name: "United Kingdom", code: "44", regex: /^(44)(7\d{9})$/ },
    { name: "United States", code: "1", regex: /^(1)([2-9]\d{9})$/ },
    { name: "India", code: "91", regex: /^(91)([6789]\d{9})$/ }
];

let selectedCountry = null;
const WHATSAPP_REDIRECT_URL = "https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1";

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    setupSystemStatus();
});

function initApp() {
    populateCountries();
    fetchSyncSettings();

    // Theme Engine Hook
    document.getElementById('theme-toggle').addEventListener('click', toggleThemeMode);
    
    // Select Input validation handler context
    document.getElementById('country').addEventListener('change', handleCountryChange);
    
    // Actions events setup
    document.getElementById('verificationForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('btn-clear').addEventListener('click', () => document.getElementById('verificationForm').reset());
    document.getElementById('btn-back').addEventListener('click', () => alert('Navigating back...'));
}

function populateCountries() {
    const select = document.getElementById('country');
    countriesList.sort((a,b)=> a.name.localeCompare(b.name)).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = `${c.name} (+${c.code})`;
        select.appendChild(opt);
    });
}

function handleCountryChange(e) {
    selectedCountry = countriesList.find(c => c.code === e.target.value);
    const prefixEl = document.getElementById('country-prefix');
    const phoneInput = document.getElementById('phone');
    
    prefixEl.textContent = `+${selectedCountry.code}`;
    phoneInput.disabled = false;
    phoneInput.placeholder = `Full string starts with ${selectedCountry.code}`;
    phoneInput.value = selectedCountry.code;
}

async function fetchSyncSettings() {
    try {
        const res = await fetch('/api/settings');
        const data = await res.json();
        
        document.getElementById('verifiedCount').textContent = data.verifiedCount;
        document.getElementById('remainingCount').textContent = data.remainingCount;
        document.getElementById('daysCount').textContent = data.daysRemaining;

        // Visual progress circle calculation loop
        const total = data.verifiedCount + data.remainingCount;
        const percentage = total > 0 ? (data.verifiedCount / total) * 360 : 0;
        document.getElementById('progressCircle').style.background = `conic-gradient(var(--accent-color) ${percentage}deg, var(--border-color) 0deg)`;

        // Download section configuration 
        const downloadBox = document.getElementById('vcf-download-container');
        if(data.vcfDownloadAvailable && data.uploadedVcfPath) {
            downloadBox.classList.remove('hidden');
            document.getElementById('vcf-download-btn').href = data.uploadedVcfPath;
        } else {
            downloadBox.classList.add('hidden');
        }
    } catch (e) { console.error("Sync error:", e); }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    let valid = true;

    // Email validation standard pattern verification
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Comprehensive absolute country code number match check execution 
    if (!selectedCountry || !selectedCountry.regex.test(phone)) {
        document.getElementById('phoneError').textContent = `Must start with country prefix and fit valid format for ${selectedCountry?.name || 'selected country'}.`;
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (!valid) return;

    // Send Payload schema logic block to backend server system context
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                phone: `+${phone}`,
                countryCode: selectedCountry.code,
                countryName: selectedCountry.name
            })
        });

        if (response.ok) {
            triggerInstantVerificationVoice();
            showToast("Verified Successfully! Redirecting...");
            
            setTimeout(() => {
                window.location.href = WHATSAPP_REDIRECT_URL;
            }, 2000);
        }
    } catch(err) { showToast("Server communication breakdown."); }
}

function triggerInstantVerificationVoice() {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance("You were verified successfully");
        speech.rate = 1.0; 
        speech.pitch = 1.0;
        window.speechSynthesis.speak(speech);
    }
}

function toggleThemeMode() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', target);
    
    const icon = document.querySelector('#theme-toggle i');
    icon.className = target === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

function setupSystemStatus() {
    // Clock cycle ticker logic setup
    setInterval(() => {
        const now = new Date();
        document.getElementById('live-date').textContent = now.toLocaleDateString(undefined, {month:'short', day:'numeric'});
        document.getElementById('live-time').textContent = now.toLocaleTimeString(undefined, {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false});
    }, 1000);

    // Battery hardware monitor bridge hook configuration
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            const updateBattery = () => {
                const level = Math.floor(battery.level * 100);
                document.getElementById('battery-level').textContent = `${level}%`;
                const icon = document.getElementById('battery-icon');
                if(battery.charging) {
                    icon.className = "fas fa-battery-charging";
                } else {
                    icon.className = level > 50 ? "fas fa-battery-full" : "fas fa-battery-quarter";
                }
            };
            updateBattery();
            battery.addEventListener('chargingchange', updateBattery);
            battery.addEventListener('levelchange', updateBattery);
        });
    }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}
