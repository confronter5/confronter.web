// ===================== COUNTRIES DATA =====================
const countries = [
    { name: "Afghanistan", code: "AF", dial: "+93", regex: /^[0-9]{9}$/ },
    { name: "Albania", code: "AL", dial: "+355", regex: /^[0-9]{9}$/ },
    { name: "Algeria", code: "DZ", dial: "+213", regex: /^[0-9]{9}$/ },
    { name: "Andorra", code: "AD", dial: "+376", regex: /^[0-9]{6}$/ },
    { name: "Angola", code: "AO", dial: "+244", regex: /^[0-9]{9}$/ },
    { name: "Argentina", code: "AR", dial: "+54", regex: /^[0-9]{10,11}$/ },
    { name: "Armenia", code: "AM", dial: "+374", regex: /^[0-9]{8}$/ },
    { name: "Australia", code: "AU", dial: "+61", regex: /^[0-9]{9}$/ },
    { name: "Austria", code: "AT", dial: "+43", regex: /^[0-9]{10,13}$/ },
    { name: "Azerbaijan", code: "AZ", dial: "+994", regex: /^[0-9]{9}$/ },
    { name: "Bahamas", code: "BS", dial: "+1-242", regex: /^[0-9]{10}$/ },
    { name: "Bahrain", code: "BH", dial: "+973", regex: /^[0-9]{8}$/ },
    { name: "Bangladesh", code: "BD", dial: "+880", regex: /^[0-9]{10}$/ },
    { name: "Belarus", code: "BY", dial: "+375", regex: /^[0-9]{9}$/ },
    { name: "Belgium", code: "BE", dial: "+32", regex: /^[0-9]{9,10}$/ },
    { name: "Belize", code: "BZ", dial: "+501", regex: /^[0-9]{7}$/ },
    { name: "Benin", code: "BJ", dial: "+229", regex: /^[0-9]{8}$/ },
    { name: "Bhutan", code: "BT", dial: "+975", regex: /^[0-9]{8}$/ },
    { name: "Bolivia", code: "BO", dial: "+591", regex: /^[0-9]{8}$/ },
    { name: "Bosnia and Herzegovina", code: "BA", dial: "+387", regex: /^[0-9]{8}$/ },
    { name: "Botswana", code: "BW", dial: "+267", regex: /^[0-9]{8}$/ },
    { name: "Brazil", code: "BR", dial: "+55", regex: /^[0-9]{10,11}$/ },
    { name: "Brunei", code: "BN", dial: "+673", regex: /^[0-9]{7}$/ },
    { name: "Bulgaria", code: "BG", dial: "+359", regex: /^[0-9]{9}$/ },
    { name: "Burkina Faso", code: "BF", dial: "+226", regex: /^[0-9]{8}$/ },
    { name: "Burundi", code: "BI", dial: "+257", regex: /^[0-9]{8}$/ },
    { name: "Cambodia", code: "KH", dial: "+855", regex: /^[0-9]{8,9}$/ },
    { name: "Cameroon", code: "CM", dial: "+237", regex: /^[0-9]{9}$/ },
    { name: "Canada", code: "CA", dial: "+1", regex: /^[0-9]{10}$/ },
    { name: "Cape Verde", code: "CV", dial: "+238", regex: /^[0-9]{7}$/ },
    { name: "Central African Republic", code: "CF", dial: "+236", regex: /^[0-9]{8}$/ },
    { name: "Chad", code: "TD", dial: "+235", regex: /^[0-9]{8}$/ },
    { name: "Chile", code: "CL", dial: "+56", regex: /^[0-9]{9}$/ },
    { name: "China", code: "CN", dial: "+86", regex: /^[0-9]{11}$/ },
    { name: "Colombia", code: "CO", dial: "+57", regex: /^[0-9]{10}$/ },
    { name: "Comoros", code: "KM", dial: "+269", regex: /^[0-9]{7}$/ },
    { name: "Congo", code: "CG", dial: "+242", regex: /^[0-9]{9}$/ },
    { name: "Costa Rica", code: "CR", dial: "+506", regex: /^[0-9]{8}$/ },
    { name: "Croatia", code: "HR", dial: "+385", regex: /^[0-9]{9}$/ },
    { name: "Cuba", code: "CU", dial: "+53", regex: /^[0-9]{8}$/ },
    { name: "Cyprus", code: "CY", dial: "+357", regex: /^[0-9]{8}$/ },
    { name: "Czech Republic", code: "CZ", dial: "+420", regex: /^[0-9]{9}$/ },
    { name: "Denmark", code: "DK", dial: "+45", regex: /^[0-9]{8}$/ },
    { name: "Djibouti", code: "DJ", dial: "+253", regex: /^[0-9]{8}$/ },
    { name: "Dominica", code: "DM", dial: "+1-767", regex: /^[0-9]{10}$/ },
    { name: "Dominican Republic", code: "DO", dial: "+1-809", regex: /^[0-9]{10}$/ },
    { name: "Ecuador", code: "EC", dial: "+593", regex: /^[0-9]{9}$/ },
    { name: "Egypt", code: "EG", dial: "+20", regex: /^[0-9]{10}$/ },
    { name: "El Salvador", code: "SV", dial: "+503", regex: /^[0-9]{8}$/ },
    { name: "Equatorial Guinea", code: "GQ", dial: "+240", regex: /^[0-9]{9}$/ },
    { name: "Eritrea", code: "ER", dial: "+291", regex: /^[0-9]{7}$/ },
    { name: "Estonia", code: "EE", dial: "+372", regex: /^[0-9]{7,8}$/ },
    { name: "Eswatini", code: "SZ", dial: "+268", regex: /^[0-9]{8}$/ },
    { name: "Ethiopia", code: "ET", dial: "+251", regex: /^[0-9]{9}$/ },
    { name: "Fiji", code: "FJ", dial: "+679", regex: /^[0-9]{7}$/ },
    { name: "Finland", code: "FI", dial: "+358", regex: /^[0-9]{9}$/ },
    { name: "France", code: "FR", dial: "+33", regex: /^[0-9]{9}$/ },
    { name: "Gabon", code: "GA", dial: "+241", regex: /^[0-9]{7,8}$/ },
    { name: "Gambia", code: "GM", dial: "+220", regex: /^[0-9]{7}$/ },
    { name: "Georgia", code: "GE", dial: "+995", regex: /^[0-9]{9}$/ },
    { name: "Germany", code: "DE", dial: "+49", regex: /^[0-9]{10,11}$/ },
    { name: "Ghana", code: "GH", dial: "+233", regex: /^[0-9]{9}$/ },
    { name: "Greece", code: "GR", dial: "+30", regex: /^[0-9]{10}$/ },
    { name: "Guatemala", code: "GT", dial: "+502", regex: /^[0-9]{8}$/ },
    { name: "Guinea", code: "GN", dial: "+224", regex: /^[0-9]{9}$/ },
    { name: "Guinea-Bissau", code: "GW", dial: "+245", regex: /^[0-9]{7}$/ },
    { name: "Guyana", code: "GY", dial: "+592", regex: /^[0-9]{7}$/ },
    { name: "Haiti", code: "HT", dial: "+509", regex: /^[0-9]{8}$/ },
    { name: "Honduras", code: "HN", dial: "+504", regex: /^[0-9]{8}$/ },
    { name: "Hungary", code: "HU", dial: "+36", regex: /^[0-9]{9}$/ },
    { name: "Iceland", code: "IS", dial: "+354", regex: /^[0-9]{7}$/ },
    { name: "India", code: "IN", dial: "+91", regex: /^[0-9]{10}$/ },
    { name: "Indonesia", code: "ID", dial: "+62", regex: /^[0-9]{10,12}$/ },
    { name: "Iran", code: "IR", dial: "+98", regex: /^[0-9]{10}$/ },
    { name: "Iraq", code: "IQ", dial: "+964", regex: /^[0-9]{10}$/ },
    { name: "Ireland", code: "IE", dial: "+353", regex: /^[0-9]{9}$/ },
    { name: "Israel", code: "IL", dial: "+972", regex: /^[0-9]{9}$/ },
    { name: "Italy", code: "IT", dial: "+39", regex: /^[0-9]{9,10}$/ },
    { name: "Jamaica", code: "JM", dial: "+1-876", regex: /^[0-9]{10}$/ },
    { name: "Japan", code: "JP", dial: "+81", regex: /^[0-9]{10}$/ },
    { name: "Jordan", code: "JO", dial: "+962", regex: /^[0-9]{9}$/ },
    { name: "Kazakhstan", code: "KZ", dial: "+7", regex: /^[0-9]{10}$/ },
    { name: "Kenya", code: "KE", dial: "+254", regex: /^[0-9]{9}$/ },
    { name: "Kiribati", code: "KI", dial: "+686", regex: /^[0-9]{5}$/ },
    { name: "Kuwait", code: "KW", dial: "+965", regex: /^[0-9]{8}$/ },
    { name: "Kyrgyzstan", code: "KG", dial: "+996", regex: /^[0-9]{9}$/ },
    { name: "Laos", code: "LA", dial: "+856", regex: /^[0-9]{9,10}$/ },
    { name: "Latvia", code: "LV", dial: "+371", regex: /^[0-9]{8}$/ },
    { name: "Lebanon", code: "LB", dial: "+961", regex: /^[0-9]{7,8}$/ },
    { name: "Lesotho", code: "LS", dial: "+266", regex: /^[0-9]{8}$/ },
    { name: "Liberia", code: "LR", dial: "+231", regex: /^[0-9]{7,8}$/ },
    { name: "Libya", code: "LY", dial: "+218", regex: /^[0-9]{9,10}$/ },
    { name: "Liechtenstein", code: "LI", dial: "+423", regex: /^[0-9]{7}$/ },
    { name: "Lithuania", code: "LT", dial: "+370", regex: /^[0-9]{8}$/ },
    { name: "Luxembourg", code: "LU", dial: "+352", regex: /^[0-9]{9}$/ },
    { name: "Madagascar", code: "MG", dial: "+261", regex: /^[0-9]{9}$/ },
    { name: "Malawi", code: "MW", dial: "+265", regex: /^[0-9]{9}$/ },
    { name: "Malaysia", code: "MY", dial: "+60", regex: /^[0-9]{9,10}$/ },
    { name: "Maldives", code: "MV", dial: "+960", regex: /^[0-9]{7}$/ },
    { name: "Mali", code: "ML", dial: "+223", regex: /^[0-9]{8}$/ },
    { name: "Malta", code: "MT", dial: "+356", regex: /^[0-9]{8}$/ },
    { name: "Mauritania", code: "MR", dial: "+222", regex: /^[0-9]{8}$/ },
    { name: "Mauritius", code: "MU", dial: "+230", regex: /^[0-9]{8}$/ },
    { name: "Mexico", code: "MX", dial: "+52", regex: /^[0-9]{10}$/ },
    { name: "Moldova", code: "MD", dial: "+373", regex: /^[0-9]{8}$/ },
    { name: "Monaco", code: "MC", dial: "+377", regex: /^[0-9]{8,9}$/ },
    { name: "Mongolia", code: "MN", dial: "+976", regex: /^[0-9]{8}$/ },
    { name: "Montenegro", code: "ME", dial: "+382", regex: /^[0-9]{8}$/ },
    { name: "Morocco", code: "MA", dial: "+212", regex: /^[0-9]{9}$/ },
    { name: "Mozambique", code: "MZ", dial: "+258", regex: /^[0-9]{9}$/ },
    { name: "Myanmar", code: "MM", dial: "+95", regex: /^[0-9]{8,10}$/ },
    { name: "Namibia", code: "NA", dial: "+264", regex: /^[0-9]{9}$/ },
    { name: "Nauru", code: "NR", dial: "+674", regex: /^[0-9]{7}$/ },
    { name: "Nepal", code: "NP", dial: "+977", regex: /^[0-9]{10}$/ },
    { name: "Netherlands", code: "NL", dial: "+31", regex: /^[0-9]{9}$/ },
    { name: "New Zealand", code: "NZ", dial: "+64", regex: /^[0-9]{9,10}$/ },
    { name: "Nicaragua", code: "NI", dial: "+505", regex: /^[0-9]{8}$/ },
    { name: "Niger", code: "NE", dial: "+227", regex: /^[0-9]{8}$/ },
    { name: "Nigeria", code: "NG", dial: "+234", regex: /^[0-9]{10}$/ },
    { name: "North Korea", code: "KP", dial: "+850", regex: /^[0-9]{8,10}$/ },
    { name: "North Macedonia", code: "MK", dial: "+389", regex: /^[0-9]{8}$/ },
    { name: "Norway", code: "NO", dial: "+47", regex: /^[0-9]{8}$/ },
    { name: "Oman", code: "OM", dial: "+968", regex: /^[0-9]{8}$/ },
    { name: "Pakistan", code: "PK", dial: "+92", regex: /^[0-9]{10}$/ },
    { name: "Palau", code: "PW", dial: "+680", regex: /^[0-9]{7}$/ },
    { name: "Panama", code: "PA", dial: "+507", regex: /^[0-9]{8}$/ },
    { name: "Papua New Guinea", code: "PG", dial: "+675", regex: /^[0-9]{8}$/ },
    { name: "Paraguay", code: "PY", dial: "+595", regex: /^[0-9]{9}$/ },
    { name: "Peru", code: "PE", dial: "+51", regex: /^[0-9]{9}$/ },
    { name: "Philippines", code: "PH", dial: "+63", regex: /^[0-9]{10}$/ },
    { name: "Poland", code: "PL", dial: "+48", regex: /^[0-9]{9}$/ },
    { name: "Portugal", code: "PT", dial: "+351", regex: /^[0-9]{9}$/ },
    { name: "Qatar", code: "QA", dial: "+974", regex: /^[0-9]{8}$/ },
    { name: "Romania", code: "RO", dial: "+40", regex: /^[0-9]{9}$/ },
    { name: "Russia", code: "RU", dial: "+7", regex: /^[0-9]{10}$/ },
    { name: "Rwanda", code: "RW", dial: "+250", regex: /^[0-9]{9}$/ },
    { name: "Saint Lucia", code: "LC", dial: "+1-758", regex: /^[0-9]{10}$/ },
    { name: "Samoa", code: "WS", dial: "+685", regex: /^[0-9]{5,7}$/ },
    { name: "San Marino", code: "SM", dial: "+378", regex: /^[0-9]{6,10}$/ },
    { name: "Saudi Arabia", code: "SA", dial: "+966", regex: /^[0-9]{9}$/ },
    { name: "Senegal", code: "SN", dial: "+221", regex: /^[0-9]{9}$/ },
    { name: "Serbia", code: "RS", dial: "+381", regex: /^[0-9]{8,9}$/ },
    { name: "Seychelles", code: "SC", dial: "+248", regex: /^[0-9]{7}$/ },
    { name: "Sierra Leone", code: "SL", dial: "+232", regex: /^[0-9]{8}$/ },
    { name: "Singapore", code: "SG", dial: "+65", regex: /^[0-9]{8}$/ },
    { name: "Slovakia", code: "SK", dial: "+421", regex: /^[0-9]{9}$/ },
    { name: "Slovenia", code: "SI", dial: "+386", regex: /^[0-9]{8}$/ },
    { name: "Solomon Islands", code: "SB", dial: "+677", regex: /^[0-9]{7}$/ },
    { name: "Somalia", code: "SO", dial: "+252", regex: /^[0-9]{8,9}$/ },
    { name: "South Africa", code: "ZA", dial: "+27", regex: /^[0-9]{9}$/ },
    { name: "South Korea", code: "KR", dial: "+82", regex: /^[0-9]{9,10}$/ },
    { name: "South Sudan", code: "SS", dial: "+211", regex: /^[0-9]{9}$/ },
    { name: "Spain", code: "ES", dial: "+34", regex: /^[0-9]{9}$/ },
    { name: "Sri Lanka", code: "LK", dial: "+94", regex: /^[0-9]{9}$/ },
    { name: "Sudan", code: "SD", dial: "+249", regex: /^[0-9]{9}$/ },
    { name: "Suriname", code: "SR", dial: "+597", regex: /^[0-9]{7}$/ },
    { name: "Sweden", code: "SE", dial: "+46", regex: /^[0-9]{9,10}$/ },
    { name: "Switzerland", code: "CH", dial: "+41", regex: /^[0-9]{9}$/ },
    { name: "Syria", code: "SY", dial: "+963", regex: /^[0-9]{9}$/ },
    { name: "Taiwan", code: "TW", dial: "+886", regex: /^[0-9]{9}$/ },
    { name: "Tajikistan", code: "TJ", dial: "+992", regex: /^[0-9]{9}$/ },
    { name: "Tanzania", code: "TZ", dial: "+255", regex: /^[0-9]{9}$/ },
    { name: "Thailand", code: "TH", dial: "+66", regex: /^[0-9]{9}$/ },
    { name: "Timor-Leste", code: "TL", dial: "+670", regex: /^[0-9]{7,8}$/ },
    { name: "Togo", code: "TG", dial: "+228", regex: /^[0-9]{8}$/ },
    { name: "Tonga", code: "TO", dial: "+676", regex: /^[0-9]{5,7}$/ },
    { name: "Trinidad and Tobago", code: "TT", dial: "+1-868", regex: /^[0-9]{10}$/ },
    { name: "Tunisia", code: "TN", dial: "+216", regex: /^[0-9]{8}$/ },
    { name: "Turkey", code: "TR", dial: "+90", regex: /^[0-9]{10}$/ },
    { name: "Turkmenistan", code: "TM", dial: "+993", regex: /^[0-9]{8}$/ },
    { name: "Tuvalu", code: "TV", dial: "+688", regex: /^[0-9]{5,6}$/ },
    { name: "Uganda", code: "UG", dial: "+256", regex: /^[0-9]{9}$/ },
    { name: "Ukraine", code: "UA", dial: "+380", regex: /^[0-9]{9}$/ },
    { name: "United Arab Emirates", code: "AE", dial: "+971", regex: /^[0-9]{9}$/ },
    { name: "United Kingdom", code: "GB", dial: "+44", regex: /^[0-9]{10}$/ },
    { name: "United States", code: "US", dial: "+1", regex: /^[0-9]{10}$/ },
    { name: "Uruguay", code: "UY", dial: "+598", regex: /^[0-9]{8}$/ },
    { name: "Uzbekistan", code: "UZ", dial: "+998", regex: /^[0-9]{9}$/ },
    { name: "Vanuatu", code: "VU", dial: "+678", regex: /^[0-9]{7}$/ },
    { name: "Vatican City", code: "VA", dial: "+39", regex: /^[0-9]{10}$/ },
    { name: "Venezuela", code: "VE", dial: "+58", regex: /^[0-9]{10}$/ },
    { name: "Vietnam", code: "VN", dial: "+84", regex: /^[0-9]{9,10}$/ },
    { name: "Yemen", code: "YE", dial: "+967", regex: /^[0-9]{9}$/ },
    { name: "Zambia", code: "ZM", dial: "+260", regex: /^[0-9]{9}$/ },
    { name: "Zimbabwe", code: "ZW", dial: "+263", regex: /^[0-9]{9}$/ }
];

// ===================== DOM ELEMENTS =====================
const countrySelect = document.getElementById('countrySelect');
const countryCode = document.getElementById('countryCode');
const phoneNumber = document.getElementById('phoneNumber');
const phoneHint = document.getElementById('phoneHint');
const vcfForm = document.getElementById('vcfForm');
const successOverlay = document.getElementById('successOverlay');
const redirectCount = document.getElementById('redirectCount');
const goBackBtn = document.getElementById('goBackBtn');
const addAnotherBtn = document.getElementById('addAnotherBtn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const progressRing = document.getElementById('progressRing');
const verifiedCount = document.getElementById('verifiedCount');
const verifiedLabel = document.getElementById('verifiedLabel');
const remainingLabel = document.getElementById('remainingLabel');
const liveTime = document.getElementById('liveTime');
const liveDate = document.getElementById('liveDate');
const batteryPercent = document.getElementById('batteryPercent');
const batteryIcon = document.getElementById('batteryIcon');
const chargingStatus = document.getElementById('chargingStatus');
const countdownTimer = document.getElementById('countdownTimer');
const downloadVcfBtn = document.getElementById('downloadVcfBtn');

const MAX_MEMBERS = 100;
const VCF_RELEASE_DATE = new Date('2025-12-31T00:00:00');
const WHATSAPP_GROUP = 'https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1';

let selectedCountry = null;
let verifiedMembers = parseInt(localStorage.getItem('verifiedCount') || '0');

// ===================== INITIALIZATION =====================
function init() {
    populateCountries();
    updateStats();
    startClock();
    startCountdown();
    setupTheme();
    setupBattery();
    setupEventListeners();
}

// ===================== COUNTRIES =====================
function populateCountries() {
    countries.sort((a, b) => a.name.localeCompare(b.name));
    countries.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = c.name + ' (' + c.dial + ')';
        countrySelect.appendChild(opt);
    });
}

countrySelect.addEventListener('change', () => {
    selectedCountry = countries.find(c => c.code === countrySelect.value);
    if (selectedCountry) {
        countryCode.textContent = selectedCountry.dial;
        const digits = selectedCountry.regex.toString().match(/\d+/);
        phoneHint.textContent = 'Enter ' + selectedCountry.dial + ' followed by your number (' + digits + ' digits)';
        phoneHint.className = 'hint';
        phoneNumber.value = '';
        phoneNumber.focus();
    }
});

// ===================== PHONE VALIDATION =====================
phoneNumber.addEventListener('input', () => {
    if (!selectedCountry) {
        phoneHint.textContent = 'Select a country first';
        phoneHint.className = 'hint error';
        return;
    }
    const val = phoneNumber.value.replace(/\D/g, '');
    phoneNumber.value = val;

    if (selectedCountry.regex.test(val)) {
        phoneHint.textContent = 'Valid phone number format';
        phoneHint.className = 'hint success';
    } else {
        const expected = selectedCountry.regex.toString().match(/\d+/)[0];
        phoneHint.textContent = 'Expected ' + expected + ' digits, got ' + val.length;
        phoneHint.className = 'hint error';
    }
});

// ===================== FORM SUBMIT =====================
vcfForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedCountry) {
        phoneHint.textContent = 'Please select a country';
        phoneHint.className = 'hint error';
        return;
    }

    const rawNum = phoneNumber.value.replace(/\D/g, '');
    if (!selectedCountry.regex.test(rawNum)) {
        phoneHint.textContent = 'Invalid phone number for selected country';
        phoneHint.className = 'hint error';
        return;
    }

    const submissions = JSON.parse(localStorage.getItem('vcfSubmissions') || '[]');
    const fullPhone = selectedCountry.dial + rawNum;

    if (submissions.some(s => s.phone === fullPhone)) {
        phoneHint.textContent = 'This number is already verified!';
        phoneHint.className = 'hint error';
        return;
    }

    submissions.push({
        name: document.getElementById('fullName').value,
        country: selectedCountry.name,
        phone: fullPhone,
        timestamp: new Date().toISOString()
    });

    localStorage.setItem('vcfSubmissions', JSON.stringify(submissions));
    verifiedMembers = submissions.length;
    localStorage.setItem('verifiedCount', verifiedMembers.toString());

    playSuccessSound();
    showSuccess();
    updateStats();
});

function playSuccessSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.15);
        oscillator.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.3);
        oscillator.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.45);

        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.8);

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('You were verified successfully');
            utterance.rate = 0.9;
            utterance.pitch = 1;
            setTimeout(() => speechSynthesis.speak(utterance), 200);
        }
    } catch (err) {
        console.log('Audio not supported');
    }
}

function showSuccess() {
    successOverlay.classList.remove('hidden');
    setTimeout(() => successOverlay.classList.add('show'), 10);

    let count = 2;
    redirectCount.textContent = count;

    const timer = setInterval(() => {
        count--;
        redirectCount.textContent = count;
        if (count <= 0) {
            clearInterval(timer);
            window.open(WHATSAPP_GROUP, '_blank');
        }
    }, 1000);

    successOverlay.dataset.timer = timer;
}

// ===================== BUTTONS =====================
goBackBtn.addEventListener('click', () => {
    if (successOverlay.dataset.timer) clearInterval(parseInt(successOverlay.dataset.timer));
    successOverlay.classList.remove('show');
    setTimeout(() => successOverlay.classList.add('hidden'), 400);
});

addAnotherBtn.addEventListener('click', () => {
    if (successOverlay.dataset.timer) clearInterval(parseInt(successOverlay.dataset.timer));
    successOverlay.classList.remove('show');
    setTimeout(() => {
        successOverlay.classList.add('hidden');
        vcfForm.reset();
        countryCode.textContent = '+';
        phoneHint.textContent = 'Select a country first';
        phoneHint.className = 'hint';
        selectedCountry = null;
    }, 400);
});

// ===================== STATS =====================
function updateStats() {
    const verified = Math.min(verifiedMembers, MAX_MEMBERS);
    const remaining = Math.max(0, MAX_MEMBERS - verified);
    const percent = (verified / MAX_MEMBERS) * 1000;

    verifiedCount.textContent = verified;
    verifiedLabel.textContent = verified;
    remainingLabel.textContent = remaining;

    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (percent / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
}

// ===================== CLOCK =====================
function startClock() {
    function update() {
        const now = new Date();
        liveTime.textContent = now.toLocaleTimeString('en-US', { hour12: true });
        liveDate.textContent = now.toLocaleDateString('en-US', { 
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
        });
    }
    update();
    setInterval(update, 1000);
}

// ===================== BATTERY =====================
function setupBattery() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            function updateBattery() {
                const level = Math.round(battery.level * 100);
                batteryPercent.textContent = level + '%';

                let icon = 'fa-battery-empty';
                if (level > 80) icon = 'fa-battery-full';
                else if (level > 60) icon = 'fa-battery-three-quarters';
                else if (level > 40) icon = 'fa-battery-half';
                else if (level > 20) icon = 'fa-battery-quarter';

                batteryIcon.className = 'fas ' + icon;
                batteryIcon.style.color = level < 20 ? 'var(--danger)' : 'var(--accent)';

                chargingStatus.textContent = battery.charging ? 'Charging' : '';
            }
            updateBattery();
            battery.addEventListener('levelchange', updateBattery);
            battery.addEventListener('chargingchange', updateBattery);
        });
    } else {
        batteryPercent.textContent = 'N/A';
        batteryIcon.className = 'fas fa-battery-full';
    }
}

// ===================== COUNTDOWN =====================
function startCountdown() {
    function update() {
        const now = new Date();
        const diff = 23 - now;

        if (diff <= 0) {
            countdownTimer.textContent = 'VCF IS OUT!';
            downloadVcfBtn.classList.remove('hidden');
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = 
            '<span>' + days + 'd</span> <span>' + hours + 'h</span> <span>' + minutes + 'm</span> <span>' + seconds + 's</span>';
    }
    update();
    setInterval(update, 1000);
}

downloadVcfBtn.addEventListener('click', () => {
    const vcfContent = 'BEGIN:VCARD\nVERSION:3.0\nFN:Confronter Tech Wizard\nORG:Confronter Tech\nTEL;TYPE=CELL:+254793908671\nEMAIL:contact@confronter.tech\nURL:https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803\nEND:VCARD';

    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Confronter_Tech_Wizard.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// ===================== THEME =====================
function setupTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===================== EVENT LISTENERS =====================
function setupEventListeners() {
    window.addEventListener('storage', (e) => {
        if (e.key === 'verifiedCount') {
            verifiedMembers = parseInt(e.newValue || '0');
            updateStats();
        }
    });
}

// ===================== START =====================
document.addEventListener('DOMContentLoaded', init);
