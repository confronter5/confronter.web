// Country verification metadata
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
    document.getElementById('theme-toggle').addEventListener('click', toggleThemeMode);
    document.getElementById('country').addEventListener('change', handleCountryChange);
    document.getElementById('verificationForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('btn-clear').addEventListener('click', () => {
        document.getElementById('verificationForm').reset();
        document.getElementById('country-prefix').textContent = "+";
        document.getElementById('phone').disabled = true;
    });
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
    phoneInput.value = selectedCountry.code; // Pre-fills the country code as requested
    phoneInput.focus();
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    
    let valid = true;

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone validation
    if (!selectedCountry || !selectedCountry.regex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (!valid) return;

    // Visual feedback
    submitBtn.disabled = true;
    submitBtn.textContent = "Verifying...";

    // Play Voice Success instantly
    triggerInstantVerificationVoice();
    showToast("Verified Successfully! Redirecting...");

    try {
        // Attempt to save to backend
        await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                phone: `+${phone}`,
                countryCode: selectedCountry.code,
                countryName: selectedCountry.name
            })
        });
    } catch(err) {
        console.log("Offline mode: Proceeding to redirect anyway.");
    }

    // STRICT REDIRECT: Happens after 2 seconds regardless of server status
    setTimeout(() => {
        window.location.replace(WHATSAPP_REDIRECT_URL);
    }, 2000);
}

function triggerInstantVerificationVoice() {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance("You were verified successfully");
        speech.lang = 'en-US';
        speech.volume = 1;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
    }
}

// ... (Rest of the functions: fetchSyncSettings, toggleThemeMode, setupSystemStatus, showToast remain the same)
