// ==================== CONFIG ====================
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1";
const VCF_RELEASE_DATE = new Date(2026, 5, 15, 23, 59);

const COUNTRY_CODES = [
    { code: "93", name: "Afghanistan (+93)" },
    { code: "355", name: "Albania (+355)" },
    { code: "213", name: "Algeria (+213)" },
    { code: "1-684", name: "American Samoa (+1-684)" },
    { code: "376", name: "Andorra (+376)" },
    { code: "244", name: "Angola (+244)" },
    { code: "1-264", name: "Anguilla (+1-264)" },
    { code: "672", name: "Antarctica (+672)" },
    { code: "1-268", name: "Antigua and Barbuda (+1-268)" },
    { code: "54", name: "Argentina (+54)" },
    { code: "374", name: "Armenia (+374)" },
    { code: "297", name: "Aruba (+297)" },
    { code: "61", name: "Australia (+61)" },
    { code: "43", name: "Austria (+43)" },
    { code: "994", name: "Azerbaijan (+994)" },
    { code: "1-242", name: "Bahamas (+1-242)" },
    { code: "973", name: "Bahrain (+973)" },
    { code: "880", name: "Bangladesh (+880)" },
    { code: "1-246", name: "Barbados (+1-246)" },
    { code: "375", name: "Belarus (+375)" },
    { code: "32", name: "Belgium (+32)" },
    { code: "501", name: "Belize (+501)" },
    { code: "229", name: "Benin (+229)" },
    { code: "1-441", name: "Bermuda (+1-441)" },
    { code: "975", name: "Bhutan (+975)" },
    { code: "591", name: "Bolivia (+591)" },
    { code: "387", name: "Bosnia and Herzegovina (+387)" },
    { code: "267", name: "Botswana (+267)" },
    { code: "55", name: "Brazil (+55)" },
    { code: "246", name: "British Indian Ocean Territory (+246)" },
    { code: "1-284", name: "British Virgin Islands (+1-284)" },
    { code: "673", name: "Brunei (+673)" },
    { code: "359", name: "Bulgaria (+359)" },
    { code: "226", name: "Burkina Faso (+226)" },
    { code: "257", name: "Burundi (+257)" },
    { code: "855", name: "Cambodia (+855)" },
    { code: "237", name: "Cameroon (+237)" },
    { code: "1", name: "Canada (+1)" },
    { code: "238", name: "Cape Verde (+238)" },
    { code: "1-345", name: "Cayman Islands (+1-345)" },
    { code: "236", name: "Central African Republic (+236)" },
    { code: "235", name: "Chad (+235)" },
    { code: "56", name: "Chile (+56)" },
    { code: "86", name: "China (+86)" },
    { code: "61", name: "Christmas Island (+61)" },
    { code: "61", name: "Cocos Islands (+61)" },
    { code: "57", name: "Colombia (+57)" },
    { code: "269", name: "Comoros (+269)" },
    { code: "682", name: "Cook Islands (+682)" },
    { code: "506", name: "Costa Rica (+506)" },
    { code: "385", name: "Croatia (+385)" },
    { code: "53", name: "Cuba (+53)" },
    { code: "599", name: "Curacao (+599)" },
    { code: "357", name: "Cyprus (+357)" },
    { code: "420", name: "Czech Republic (+420)" },
    { code: "243", name: "Democratic Republic of the Congo (+243)" },
    { code: "45", name: "Denmark (+45)" },
    { code: "253", name: "Djibouti (+253)" },
    { code: "1-767", name: "Dominica (+1-767)" },
    { code: "1-809", name: "Dominican Republic (+1-809)" },
    { code: "670", name: "East Timor (+670)" },
    { code: "593", name: "Ecuador (+593)" },
    { code: "20", name: "Egypt (+20)" },
    { code: "503", name: "El Salvador (+503)" },
    { code: "240", name: "Equatorial Guinea (+240)" },
    { code: "291", name: "Eritrea (+291)" },
    { code: "372", name: "Estonia (+372)" },
    { code: "251", name: "Ethiopia (+251)" },
    { code: "500", name: "Falkland Islands (+500)" },
    { code: "298", name: "Faroe Islands (+298)" },
    { code: "679", name: "Fiji (+679)" },
    { code: "358", name: "Finland (+358)" },
    { code: "33", name: "France (+33)" },
    { code: "689", name: "French Polynesia (+689)" },
    { code: "241", name: "Gabon (+241)" },
    { code: "220", name: "Gambia (+220)" },
    { code: "995", name: "Georgia (+995)" },
    { code: "49", name: "Germany (+49)" },
    { code: "233", name: "Ghana (+233)" },
    { code: "350", name: "Gibraltar (+350)" },
    { code: "30", name: "Greece (+30)" },
    { code: "299", name: "Greenland (+299)" },
    { code: "1-473", name: "Grenada (+1-473)" },
    { code: "1-671", name: "Guam (+1-671)" },
    { code: "502", name: "Guatemala (+502)" },
    { code: "44-1481", name: "Guernsey (+44-1481)" },
    { code: "224", name: "Guinea (+224)" },
    { code: "245", name: "Guinea-Bissau (+245)" },
    { code: "592", name: "Guyana (+592)" },
    { code: "509", name: "Haiti (+509)" },
    { code: "504", name: "Honduras (+504)" },
    { code: "852", name: "Hong Kong (+852)" },
    { code: "36", name: "Hungary (+36)" },
    { code: "354", name: "Iceland (+354)" },
    { code: "91", name: "India (+91)" },
    { code: "62", name: "Indonesia (+62)" },
    { code: "98", name: "Iran (+98)" },
    { code: "964", name: "Iraq (+964)" },
    { code: "353", name: "Ireland (+353)" },
    { code: "44-1624", name: "Isle of Man (+44-1624)" },
    { code: "972", name: "Israel (+972)" },
    { code: "39", name: "Italy (+39)" },
    { code: "225", name: "Ivory Coast (+225)" },
    { code: "1-876", name: "Jamaica (+1-876)" },
    { code: "81", name: "Japan (+81)" },
    { code: "44-1534", name: "Jersey (+44-1534)" },
    { code: "962", name: "Jordan (+962)" },
    { code: "7", name: "Kazakhstan (+7)" },
    { code: "254", name: "Kenya (+254)" },
    { code: "686", name: "Kiribati (+686)" },
    { code: "383", name: "Kosovo (+383)" },
    { code: "965", name: "Kuwait (+965)" },
    { code: "996", name: "Kyrgyzstan (+996)" },
    { code: "856", name: "Laos (+856)" },
    { code: "371", name: "Latvia (+371)" },
    { code: "961", name: "Lebanon (+961)" },
    { code: "266", name: "Lesotho (+266)" },
    { code: "231", name: "Liberia (+231)" },
    { code: "218", name: "Libya (+218)" },
    { code: "423", name: "Liechtenstein (+423)" },
    { code: "370", name: "Lithuania (+370)" },
    { code: "352", name: "Luxembourg (+352)" },
    { code: "853", name: "Macau (+853)" },
    { code: "389", name: "Macedonia (+389)" },
    { code: "261", name: "Madagascar (+261)" },
    { code: "265", name: "Malawi (+265)" },
    { code: "60", name: "Malaysia (+60)" },
    { code: "960", name: "Maldives (+960)" },
    { code: "223", name: "Mali (+223)" },
    { code: "356", name: "Malta (+356)" },
    { code: "692", name: "Marshall Islands (+692)" },
    { code: "222", name: "Mauritania (+222)" },
    { code: "230", name: "Mauritius (+230)" },
    { code: "262", name: "Mayotte (+262)" },
    { code: "52", name: "Mexico (+52)" },
    { code: "691", name: "Micronesia (+691)" },
    { code: "373", name: "Moldova (+373)" },
    { code: "377", name: "Monaco (+377)" },
    { code: "976", name: "Mongolia (+976)" },
    { code: "382", name: "Montenegro (+382)" },
    { code: "1-664", name: "Montserrat (+1-664)" },
    { code: "212", name: "Morocco (+212)" },
    { code: "258", name: "Mozambique (+258)" },
    { code: "95", name: "Myanmar (+95)" },
    { code: "264", name: "Namibia (+264)" },
    { code: "674", name: "Nauru (+674)" },
    { code: "977", name: "Nepal (+977)" },
    { code: "31", name: "Netherlands (+31)" },
    { code: "599", name: "Netherlands Antilles (+599)" },
    { code: "687", name: "New Caledonia (+687)" },
    { code: "64", name: "New Zealand (+64)" },
    { code: "505", name: "Nicaragua (+505)" },
    { code: "227", name: "Niger (+227)" },
    { code: "234", name: "Nigeria (+234)" },
    { code: "683", name: "Niue (+683)" },
    { code: "850", name: "North Korea (+850)" },
    { code: "1-670", name: "Northern Mariana Islands (+1-670)" },
    { code: "47", name: "Norway (+47)" },
    { code: "968", name: "Oman (+968)" },
    { code: "92", name: "Pakistan (+92)" },
    { code: "680", name: "Palau (+680)" },
    { code: "970", name: "Palestine (+970)" },
    { code: "507", name: "Panama (+507)" },
    { code: "675", name: "Papua New Guinea (+675)" },
    { code: "595", name: "Paraguay (+595)" },
    { code: "51", name: "Peru (+51)" },
    { code: "63", name: "Philippines (+63)" },
    { code: "64", name: "Pitcairn (+64)" },
    { code: "48", name: "Poland (+48)" },
    { code: "351", name: "Portugal (+351)" },
    { code: "1-787", name: "Puerto Rico (+1-787)" },
    { code: "974", name: "Qatar (+974)" },
    { code: "242", name: "Republic of the Congo (+242)" },
    { code: "262", name: "Reunion (+262)" },
    { code: "40", name: "Romania (+40)" },
    { code: "7", name: "Russia (+7)" },
    { code: "250", name: "Rwanda (+250)" },
    { code: "590", name: "Saint Barthelemy (+590)" },
    { code: "290", name: "Saint Helena (+290)" },
    { code: "1-869", name: "Saint Kitts and Nevis (+1-869)" },
    { code: "1-758", name: "Saint Lucia (+1-758)" },
    { code: "590", name: "Saint Martin (+590)" },
    { code: "508", name: "Saint Pierre and Miquelon (+508)" },
    { code: "1-784", name: "Saint Vincent and the Grenadines (+1-784)" },
    { code: "685", name: "Samoa (+685)" },
    { code: "378", name: "San Marino (+378)" },
    { code: "239", name: "Sao Tome and Principe (+239)" },
    { code: "966", name: "Saudi Arabia (+966)" },
    { code: "221", name: "Senegal (+221)" },
    { code: "381", name: "Serbia (+381)" },
    { code: "248", name: "Seychelles (+248)" },
    { code: "232", name: "Sierra Leone (+232)" },
    { code: "65", name: "Singapore (+65)" },
    { code: "1-721", name: "Sint Maarten (+1-721)" },
    { code: "421", name: "Slovakia (+421)" },
    { code: "386", name: "Slovenia (+386)" },
    { code: "677", name: "Solomon Islands (+677)" },
    { code: "252", name: "Somalia (+252)" },
    { code: "27", name: "South Africa (+27)" },
    { code: "82", name: "South Korea (+82)" },
    { code: "211", name: "South Sudan (+211)" },
    { code: "34", name: "Spain (+34)" },
    { code: "94", name: "Sri Lanka (+94)" },
    { code: "249", name: "Sudan (+249)" },
    { code: "597", name: "Suriname (+597)" },
    { code: "47", name: "Svalbard and Jan Mayen (+47)" },
    { code: "268", name: "Swaziland (+268)" },
    { code: "46", name: "Sweden (+46)" },
    { code: "41", name: "Switzerland (+41)" },
    { code: "963", name: "Syria (+963)" },
    { code: "886", name: "Taiwan (+886)" },
    { code: "992", name: "Tajikistan (+992)" },
    { code: "255", name: "Tanzania (+255)" },
    { code: "66", name: "Thailand (+66)" },
    { code: "228", name: "Togo (+228)" },
    { code: "690", name: "Tokelau (+690)" },
    { code: "676", name: "Tonga (+676)" },
    { code: "1-868", name: "Trinidad and Tobago (+1-868)" },
    { code: "216", name: "Tunisia (+216)" },
    { code: "90", name: "Turkey (+90)" },
    { code: "993", name: "Turkmenistan (+993)" },
    { code: "1-649", name: "Turks and Caicos Islands (+1-649)" },
    { code: "688", name: "Tuvalu (+688)" },
    { code: "1-340", name: "U.S. Virgin Islands (+1-340)" },
    { code: "256", name: "Uganda (+256)" },
    { code: "380", name: "Ukraine (+380)" },
    { code: "971", name: "United Arab Emirates (+971)" },
    { code: "44", name: "United Kingdom (+44)" },
    { code: "1", name: "United States (+1)" },
    { code: "598", name: "Uruguay (+598)" },
    { code: "998", name: "Uzbekistan (+998)" },
    { code: "678", name: "Vanuatu (+678)" },
    { code: "379", name: "Vatican (+379)" },
    { code: "58", name: "Venezuela (+58)" },
    { code: "84", name: "Vietnam (+84)" },
    { code: "681", name: "Wallis and Futuna (+681)" },
    { code: "212", name: "Western Sahara (+212)" },
    { code: "967", name: "Yemen (+967)" },
    { code: "260", name: "Zambia (+260)" },
    { code: "263", name: "Zimbabwe (+263)" }
];
// ================================================

let contacts = JSON.parse(localStorage.getItem('vcf_contacts') || '[]');
let autoRedirectTimer = null;
let currentCountryCode = '';

function populateCountryCodes() {
    const select = document.getElementById('countryCode');
    const sorted = COUNTRY_CODES.sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        select.appendChild(option);
    });
}
populateCountryCodes();

function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(p);
    }
}
createParticles();

const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const root = document.documentElement;

function setTheme(theme) {
    if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        root.removeAttribute('data-theme');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
});

function updateClock() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short', month: 'short', day: '2-digit', year: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    document.getElementById('statusDate').textContent = dateStr;
    document.getElementById('statusTime').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

async function updateBattery() {
    try {
        if ('getBattery' in navigator) {
            const battery = await navigator.getBattery();
            function renderBattery() {
                const level = Math.round(battery.level * 100);
                const fill = document.getElementById('batteryFill');
                const percent = document.getElementById('batteryPercent');
                const charging = document.getElementById('chargingIcon');
                fill.style.width = level + '%';
                percent.textContent = level + '%';
                fill.className = 'battery-fill ' + (level > 50 ? 'high' : level > 20 ? 'medium' : 'low');
                charging.style.display = battery.charging ? 'inline' : 'none';
            }
            renderBattery();
            battery.addEventListener('levelchange', renderBattery);
            battery.addEventListener('chargingchange', renderBattery);
        } else {
            document.getElementById('batteryPercent').textContent = 'N/A';
        }
    } catch (e) {
        document.getElementById('batteryPercent').textContent = 'N/A';
    }
}
updateBattery();

function updateCountdown() {
    const now = new Date();
    const diff = VCF_RELEASE_DATE - now;
    if (diff <= 0) {
        document.getElementById('cdDays').textContent = '00';
        document.getElementById('cdHours').textContent = '00';
        document.getElementById('cdMins').textContent = '00';
        document.getElementById('cdSecs').textContent = '00';
        return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
    const secs = Math.floor((diff % (1000*60)) / 1000);
    document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
    document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cdSecs').textContent = String(secs).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ========== PHONE INPUT HANDLING ==========
const countrySelect = document.getElementById('countryCode');
const phoneInput = document.getElementById('phoneNumber');
const phonePrefix = document.getElementById('phonePrefix');
const phoneWrapper = document.getElementById('phoneWrapper');

countrySelect.addEventListener('change', function() {
    this.classList.remove('error');
    document.getElementById('countryError').classList.remove('show');

    currentCountryCode = this.value;

    if (currentCountryCode) {
        phonePrefix.textContent = '+' + currentCountryCode;
        phoneInput.disabled = false;
        phoneWrapper.classList.add('active');
        phoneInput.focus();
        // Auto-prefix the country code if input is empty
        if (!phoneInput.value) {
            phoneInput.value = currentCountryCode;
        }
    } else {
        phonePrefix.textContent = '+';
        phoneInput.disabled = true;
        phoneWrapper.classList.remove('active');
        phoneInput.value = '';
    }
});

phoneInput.addEventListener('input', function() {
    this.classList.remove('error');
    document.getElementById('phoneError').classList.remove('show');
    document.getElementById('duplicateError').classList.remove('show');

    // Strip non-digits
    let val = this.value.replace(/\D/g, '');

    // If user deletes the country code prefix, restore it
    if (currentCountryCode && !val.startsWith(currentCountryCode)) {
        val = currentCountryCode + val;
    }

    this.value = val;
});

phoneInput.addEventListener('keydown', function(e) {
    // Prevent deleting the country code prefix
    const prefixLen = currentCountryCode ? currentCountryCode.length : 0;
    const cursorPos = this.selectionStart;

    if ((e.key === 'Backspace' || e.key === 'Delete') && cursorPos <= prefixLen) {
        e.preventDefault();
    }
});

phoneInput.addEventListener('focus', function() {
    if (currentCountryCode && !this.value) {
        this.value = currentCountryCode;
    }
});
// ==========================================

function normalizePhone(phone) {
    return phone.replace(/\D/g, '');
}

function buildDisplayPhone(countryCode, phoneNumber) {
    return '+' + countryCode + normalizePhone(phoneNumber).replace(countryCode, '');
}

function isDuplicatePhone(countryCode, phoneNumber) {
    const fullNumber = buildDisplayPhone(countryCode, phoneNumber);
    return contacts.some(c => c.displayPhone === fullNumber);
}

function isDuplicateEmail(email) {
    const normalizedEmail = email.toLowerCase().trim();
    return contacts.some(c => c.email.toLowerCase().trim() === normalizedEmail);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();

    let valid = true;

    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));

    if (!fullName || fullName.length < 2) {
        document.getElementById('fullName').classList.add('error');
        document.getElementById('nameError').classList.add('show');
        valid = false;
    }

    if (!countryCode) {
        document.getElementById('countryCode').classList.add('error');
        document.getElementById('countryError').classList.add('show');
        valid = false;
    }

    // Phone validation: must start with country code, digits only, min length after code
    const phoneDigitsOnly = /^\d+$/;
    const minDigitsAfterCode = 5;

    if (!phoneNumber || !phoneDigitsOnly.test(phoneNumber)) {
        document.getElementById('phoneNumber').classList.add('error');
        document.getElementById('phoneError').classList.add('show');
        valid = false;
    } else if (countryCode && !phoneNumber.startsWith(countryCode)) {
        document.getElementById('phoneNumber').classList.add('error');
        document.getElementById('phoneError').classList.add('show');
        valid = false;
    } else if (countryCode && phoneNumber.length < countryCode.length + minDigitsAfterCode) {
        document.getElementById('phoneNumber').classList.add('error');
        document.getElementById('phoneError').classList.add('show');
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        document.getElementById('emailError').classList.add('show');
        valid = false;
    }

    if (valid) {
        if (isDuplicatePhone(countryCode, phoneNumber)) {
            document.getElementById('phoneNumber').classList.add('error');
            document.getElementById('duplicateError').classList.add('show');
            valid = false;
        }

        if (isDuplicateEmail(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('emailDuplicateError').classList.add('show');
            valid = false;
        }
    }

    if (!valid) return;

    contacts.push({
        id: Date.now(),
        fullName,
        countryCode,
        phoneNumber,
        displayPhone: buildDisplayPhone(countryCode, phoneNumber),
        email,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('vcf_contacts', JSON.stringify(contacts));

    document.getElementById('successModal').classList.add('show');

    const waSection = document.getElementById('whatsappSection');
    document.getElementById('whatsappBtn').href = WHATSAPP_GROUP_LINK;
    waSection.classList.add('show');

    let countdown = 2;
    const msg = document.getElementById('autoRedirectMsg');
    msg.textContent = `Redirecting to WhatsApp in ${countdown}s...`;

    autoRedirectTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            msg.textContent = `Redirecting to WhatsApp in ${countdown}s...`;
        } else {
            clearInterval(autoRedirectTimer);
            window.open(WHATSAPP_GROUP_LINK, '_blank');
        }
    }, 1000);
});

function closeModal() {
    document.getElementById('successModal').classList.remove('show');
    document.getElementById('contactForm').reset();
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));

    // Reset phone input state
    currentCountryCode = '';
    phonePrefix.textContent = '+';
    phoneInput.disabled = true;
    phoneWrapper.classList.remove('active');

    if (autoRedirectTimer) clearInterval(autoRedirectTimer);
}

function addAnother() {
    closeModal();
    document.getElementById('fullName').focus();
}

['fullName', 'email'].forEach(id => {
    document.getElementById(id).addEventListener('input', function() {
        this.classList.remove('error');
        const errorMap = {
            'fullName': 'nameError',
            'email': ['emailError', 'emailDuplicateError']
        };
        const errs = errorMap[id];
        if (Array.isArray(errs)) {
            errs.forEach(e => document.getElementById(e).classList.remove('show'));
        } else {
            document.getElementById(errs).classList.remove('show');
        }
    });
});
