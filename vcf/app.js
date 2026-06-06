// ====== Country Data with Phone Validation ======
const countryData = [
  { code: "AF", name: "Afghanistan", dial: "+93", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "AL", name: "Albania", dial: "+355", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "DZ", name: "Algeria", dial: "+213", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "AD", name: "Andorra", dial: "+376", minLen: 6, maxLen: 9, pattern: /^\d{6,9}$/ },
  { code: "AO", name: "Angola", dial: "+244", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "AR", name: "Argentina", dial: "+54", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "AM", name: "Armenia", dial: "+374", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "AU", name: "Australia", dial: "+61", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "AT", name: "Austria", dial: "+43", minLen: 10, maxLen: 13, pattern: /^\d{10,13}$/ },
  { code: "AZ", name: "Azerbaijan", dial: "+994", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "BH", name: "Bahrain", dial: "+973", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "BD", name: "Bangladesh", dial: "+880", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "BY", name: "Belarus", dial: "+375", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "BE", name: "Belgium", dial: "+32", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "BZ", name: "Belize", dial: "+501", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "BJ", name: "Benin", dial: "+229", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "BT", name: "Bhutan", dial: "+975", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "BO", name: "Bolivia", dial: "+591", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "BA", name: "Bosnia and Herzegovina", dial: "+387", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "BW", name: "Botswana", dial: "+267", minLen: 7, maxLen: 8, pattern: /^\d{7,8}$/ },
  { code: "BR", name: "Brazil", dial: "+55", minLen: 10, maxLen: 11, pattern: /^\d{10,11}$/ },
  { code: "BN", name: "Brunei", dial: "+673", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "BG", name: "Bulgaria", dial: "+359", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "BF", name: "Burkina Faso", dial: "+226", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "BI", name: "Burundi", dial: "+257", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "KH", name: "Cambodia", dial: "+855", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "CM", name: "Cameroon", dial: "+237", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "CA", name: "Canada", dial: "+1", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "CV", name: "Cape Verde", dial: "+238", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "CF", name: "Central African Republic", dial: "+236", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "TD", name: "Chad", dial: "+235", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "CL", name: "Chile", dial: "+56", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "CN", name: "China", dial: "+86", minLen: 11, maxLen: 11, pattern: /^\d{11}$/ },
  { code: "CO", name: "Colombia", dial: "+57", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "KM", name: "Comoros", dial: "+269", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "CG", name: "Congo", dial: "+242", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "CD", name: "Congo (DRC)", dial: "+243", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "CR", name: "Costa Rica", dial: "+506", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "HR", name: "Croatia", dial: "+385", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "CU", name: "Cuba", dial: "+53", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "CY", name: "Cyprus", dial: "+357", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "CZ", name: "Czech Republic", dial: "+420", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "DK", name: "Denmark", dial: "+45", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "DJ", name: "Djibouti", dial: "+253", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "DO", name: "Dominican Republic", dial: "+1", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "EC", name: "Ecuador", dial: "+593", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "EG", name: "Egypt", dial: "+20", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "SV", name: "El Salvador", dial: "+503", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "GQ", name: "Equatorial Guinea", dial: "+240", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "ER", name: "Eritrea", dial: "+291", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "EE", name: "Estonia", dial: "+372", minLen: 7, maxLen: 8, pattern: /^\d{7,8}$/ },
  { code: "ET", name: "Ethiopia", dial: "+251", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "FJ", name: "Fiji", dial: "+679", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "FI", name: "Finland", dial: "+358", minLen: 9, maxLen: 10, pattern: /^\d{9,10}$/ },
  { code: "FR", name: "France", dial: "+33", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "GA", name: "Gabon", dial: "+241", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "GM", name: "Gambia", dial: "+220", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "GE", name: "Georgia", dial: "+995", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "DE", name: "Germany", dial: "+49", minLen: 10, maxLen: 11, pattern: /^\d{10,11}$/ },
  { code: "GH", name: "Ghana", dial: "+233", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "GR", name: "Greece", dial: "+30", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "GT", name: "Guatemala", dial: "+502", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "GN", name: "Guinea", dial: "+224", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "GW", name: "Guinea-Bissau", dial: "+245", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "GY", name: "Guyana", dial: "+592", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "HT", name: "Haiti", dial: "+509", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "HN", name: "Honduras", dial: "+504", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "HK", name: "Hong Kong", dial: "+852", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "HU", name: "Hungary", dial: "+36", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "IS", name: "Iceland", dial: "+354", minLen: 7, maxLen: 9, pattern: /^\d{7,9}$/ },
  { code: "IN", name: "India", dial: "+91", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "ID", name: "Indonesia", dial: "+62", minLen: 10, maxLen: 12, pattern: /^\d{10,12}$/ },
  { code: "IR", name: "Iran", dial: "+98", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "IQ", name: "Iraq", dial: "+964", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "IE", name: "Ireland", dial: "+353", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "IL", name: "Israel", dial: "+972", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "IT", name: "Italy", dial: "+39", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "JM", name: "Jamaica", dial: "+1", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "JP", name: "Japan", dial: "+81", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "JO", name: "Jordan", dial: "+962", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "KZ", name: "Kazakhstan", dial: "+7", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "KE", name: "Kenya", dial: "+254", minLen: 9, maxLen: 9, pattern: /^[17]\d{8}$/ },
  { code: "KI", name: "Kiribati", dial: "+686", minLen: 5, maxLen: 5, pattern: /^\d{5}$/ },
  { code: "KW", name: "Kuwait", dial: "+965", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "KG", name: "Kyrgyzstan", dial: "+996", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "LA", name: "Laos", dial: "+856", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "LV", name: "Latvia", dial: "+371", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "LB", name: "Lebanon", dial: "+961", minLen: 7, maxLen: 8, pattern: /^\d{7,8}$/ },
  { code: "LS", name: "Lesotho", dial: "+266", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "LR", name: "Liberia", dial: "+231", minLen: 7, maxLen: 8, pattern: /^\d{7,8}$/ },
  { code: "LY", name: "Libya", dial: "+218", minLen: 9, maxLen: 10, pattern: /^\d{9,10}$/ },
  { code: "LI", name: "Liechtenstein", dial: "+423", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "LT", name: "Lithuania", dial: "+370", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "LU", name: "Luxembourg", dial: "+352", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "MO", name: "Macau", dial: "+853", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MG", name: "Madagascar", dial: "+261", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "MW", name: "Malawi", dial: "+265", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "MY", name: "Malaysia", dial: "+60", minLen: 9, maxLen: 10, pattern: /^\d{9,10}$/ },
  { code: "MV", name: "Maldives", dial: "+960", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "ML", name: "Mali", dial: "+223", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MT", name: "Malta", dial: "+356", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MR", name: "Mauritania", dial: "+222", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MU", name: "Mauritius", dial: "+230", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MX", name: "Mexico", dial: "+52", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "MD", name: "Moldova", dial: "+373", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MC", name: "Monaco", dial: "+377", minLen: 8, maxLen: 9, pattern: /^\d{8,9}$/ },
  { code: "MN", name: "Mongolia", dial: "+976", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "ME", name: "Montenegro", dial: "+382", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "MA", name: "Morocco", dial: "+212", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "MZ", name: "Mozambique", dial: "+258", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "MM", name: "Myanmar", dial: "+95", minLen: 8, maxLen: 10, pattern: /^\d{8,10}$/ },
  { code: "NA", name: "Namibia", dial: "+264", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "NR", name: "Nauru", dial: "+674", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "NP", name: "Nepal", dial: "+977", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "NL", name: "Netherlands", dial: "+31", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "NZ", name: "New Zealand", dial: "+64", minLen: 9, maxLen: 10, pattern: /^\d{9,10}$/ },
  { code: "NI", name: "Nicaragua", dial: "+505", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "NE", name: "Niger", dial: "+227", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "NG", name: "Nigeria", dial: "+234", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "KP", name: "North Korea", dial: "+850", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "MK", name: "North Macedonia", dial: "+389", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "NO", name: "Norway", dial: "+47", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "OM", name: "Oman", dial: "+968", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "PK", name: "Pakistan", dial: "+92", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "PA", name: "Panama", dial: "+507", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "PG", name: "Papua New Guinea", dial: "+675", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "PY", name: "Paraguay", dial: "+595", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "PE", name: "Peru", dial: "+51", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "PH", name: "Philippines", dial: "+63", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "PL", name: "Poland", dial: "+48", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "PT", name: "Portugal", dial: "+351", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "PR", name: "Puerto Rico", dial: "+1", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "QA", name: "Qatar", dial: "+974", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "RO", name: "Romania", dial: "+40", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "RU", name: "Russia", dial: "+7", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "RW", name: "Rwanda", dial: "+250", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "SA", name: "Saudi Arabia", dial: "+966", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "SN", name: "Senegal", dial: "+221", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "RS", name: "Serbia", dial: "+381", minLen: 8, maxLen: 9, pattern: /^\d{8,9}$/ },
  { code: "SG", name: "Singapore", dial: "+65", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "SK", name: "Slovakia", dial: "+421", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "SI", name: "Slovenia", dial: "+386", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "SO", name: "Somalia", dial: "+252", minLen: 8, maxLen: 9, pattern: /^\d{8,9}$/ },
  { code: "ZA", name: "South Africa", dial: "+27", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "KR", name: "South Korea", dial: "+82", minLen: 10, maxLen: 11, pattern: /^\d{10,11}$/ },
  { code: "SS", name: "South Sudan", dial: "+211", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "ES", name: "Spain", dial: "+34", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "LK", name: "Sri Lanka", dial: "+94", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "SD", name: "Sudan", dial: "+249", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "SR", name: "Suriname", dial: "+597", minLen: 7, maxLen: 7, pattern: /^\d{7}$/ },
  { code: "SE", name: "Sweden", dial: "+46", minLen: 9, maxLen: 10, pattern: /^\d{9,10}$/ },
  { code: "CH", name: "Switzerland", dial: "+41", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "SY", name: "Syria", dial: "+963", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "TW", name: "Taiwan", dial: "+886", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "TJ", name: "Tajikistan", dial: "+992", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "TZ", name: "Tanzania", dial: "+255", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "TH", name: "Thailand", dial: "+66", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "TG", name: "Togo", dial: "+228", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "TT", name: "Trinidad and Tobago", dial: "+1", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "TN", name: "Tunisia", dial: "+216", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "TR", name: "Turkey", dial: "+90", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "TM", name: "Turkmenistan", dial: "+993", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "UG", name: "Uganda", dial: "+256", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "UA", name: "Ukraine", dial: "+380", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "AE", name: "United Arab Emirates", dial: "+971", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "GB", name: "United Kingdom", dial: "+44", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "US", name: "United States", dial: "+1", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "UY", name: "Uruguay", dial: "+598", minLen: 8, maxLen: 8, pattern: /^\d{8}$/ },
  { code: "UZ", name: "Uzbekistan", dial: "+998", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "VE", name: "Venezuela", dial: "+58", minLen: 10, maxLen: 10, pattern: /^\d{10}$/ },
  { code: "VN", name: "Vietnam", dial: "+84", minLen: 9, maxLen: 10, pattern: /^\d{9,10}$/ },
  { code: "YE", name: "Yemen", dial: "+967", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "ZM", name: "Zambia", dial: "+260", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ },
  { code: "ZW", name: "Zimbabwe", dial: "+263", minLen: 9, maxLen: 9, pattern: /^\d{9}$/ }
];

// ====== API Base URL ======
const API_BASE = window.location.origin;

async function apiGet(endpoint) {
  const res = await fetch(API_BASE + endpoint);
  return res.json();
}

async function apiPost(endpoint, data) {
  const res = await fetch(API_BASE + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiPut(endpoint, data) {
  const res = await fetch(API_BASE + endpoint, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

// ====== DOM Elements ======
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const countrySelect = document.getElementById('countrySelect');
const phoneInput = document.getElementById('phoneInput');
const verifyForm = document.getElementById('verifyForm');
const formCard = document.getElementById('formCard');
const successScreen = document.getElementById('successScreen');
const submitBtn = document.getElementById('submitBtn');
const goBackBtn = document.getElementById('goBackBtn');
const addAnotherBtn = document.getElementById('addAnotherBtn');
const redirectSec = document.getElementById('redirectSec');
const redirectMsg = document.getElementById('redirectMsg');
const verifiedCountEl = document.getElementById('verifiedCount');
const remainingCountEl = document.getElementById('remainingCount');
const countdownEl = document.getElementById('countdown');
const vcfSection = document.getElementById('vcfSection');
const vcfDownloadBtn = document.getElementById('vcfDownloadBtn');
const clockDate = document.getElementById('clockDate');
const clockTime = document.getElementById('clockTime');
const batteryFill = document.getElementById('batteryFill');
const batteryPct = document.getElementById('batteryPct');
const chargingIcon = document.getElementById('chargingIcon');

// ====== WhatsApp Group Link ======
const WHATSAPP_GROUP = "https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1";

// ====== Initialize ======
function init() {
  populateCountries();
  loadTheme();
  loadCounts();
  loadVCFState();
  startClock();
  startBattery();
  startCountdown();
}

// ====== Populate Countries ======
function populateCountries() {
  countryData.sort((a, b) => a.name.localeCompare(b.name));
  countryData.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = `${c.name} (${c.dial})`;
    countrySelect.appendChild(opt);
  });
}

// ====== Theme Toggle ======
function loadTheme() {
  const saved = localStorage.getItem('ctw_theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('ctw_theme', 'light');
    themeIcon.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('ctw_theme', 'dark');
    themeIcon.textContent = '☀️';
  }
});

// ====== Clock & Date ======
function startClock() {
  function update() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockDate.textContent = `📅 ${dateStr}`;
    clockTime.textContent = `⏲️ ${timeStr}`;
  }
  update();
  setInterval(update, 1000);
}

// ====== Battery ======
function startBattery() {
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      function updateBattery() {
        const level = Math.round(battery.level * 100);
        batteryFill.style.width = level + '%';
        batteryPct.textContent = level + '%';
        batteryFill.className = 'battery-fill';
        if (level <= 20) batteryFill.classList.add('low');
        else if (level <= 50) batteryFill.classList.add('medium');
        chargingIcon.style.display = battery.charging ? 'inline' : 'none';
      }
      updateBattery();
      battery.addEventListener('levelchange', updateBattery);
      battery.addEventListener('chargingchange', updateBattery);
    });
  } else {
    batteryPct.textContent = '--%';
  }
}

// ====== Countdown ======
function startCountdown() {
  async function update() {
    try {
      const stats = await apiGet('/api/stats');
      const end = new Date(stats.endDate);
      const now = new Date();
      const diff = end - now;
      if (diff <= 0) {
        countdownEl.textContent = "Expired";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      countdownEl.textContent = `${days}d ${String(hours).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`;
    } catch (e) {
      countdownEl.textContent = "--";
    }
  }
  update();
  setInterval(update, 1000);
}

// ====== Verified Counts ======
async function loadCounts() {
  try {
    const stats = await apiGet('/api/stats');
    verifiedCountEl.textContent = stats.verified;
    remainingCountEl.textContent = stats.remaining;
  } catch (e) {
    verifiedCountEl.textContent = '0';
    remainingCountEl.textContent = '--';
  }
}

// ====== VCF State ======
async function loadVCFState() {
  try {
    const vcf = await apiGet('/api/vcf');
    if (vcf.enabled && vcf.name && vcf.data) {
      vcfSection.classList.remove('hidden');
      vcfDownloadBtn.textContent = `⬇️ Download ${vcf.name}`;
      vcfDownloadBtn.href = vcf.data;
      vcfDownloadBtn.download = vcf.name;
    } else {
      vcfSection.classList.add('hidden');
    }
  } catch (e) {
    vcfSection.classList.add('hidden');
  }
}

// ====== Phone Validation ======
function getSelectedCountry() {
  const code = countrySelect.value;
  return countryData.find(c => c.code === code);
}

function validatePhone() {
  const country = getSelectedCountry();
  const raw = phoneInput.value.trim().replace(/\D/g, '');
  if (!country) return { valid: false, msg: 'Please select a country' };
  if (!raw) return { valid: false, msg: 'Please enter a phone number' };
  if (!country.pattern.test(raw)) {
    return { valid: false, msg: `Number must be ${country.minLen}-${country.maxLen} digits for ${country.name}` };
  }
  return { valid: true, fullNumber: country.dial + raw };
}

phoneInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '');
});

countrySelect.addEventListener('change', () => {
  phoneInput.placeholder = getSelectedCountry()?.minLen + ' digits';
});

// ====== Form Submit ======
verifyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phoneCheck = validatePhone();
  const country = getSelectedCountry();

  let hasError = false;

  if (!name) {
    showError(document.getElementById('fullName').closest('.form-group'));
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showError(document.getElementById('email').closest('.form-group'));
    hasError = true;
  }

  if (!phoneCheck.valid) {
    const phoneGroup = phoneInput.closest('.form-group');
    phoneGroup.classList.add('has-error');
    document.getElementById('phoneError').textContent = phoneCheck.msg;
    hasError = true;
  }

  if (hasError) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Verifying...';

  try {
    // Save to backend
    await apiPost('/api/members', {
      name: name,
      email: email,
      phone: phoneCheck.fullNumber,
      country: country.name
    });

    // Update counts
    await loadCounts();

    // Play speech
    speakSuccess();

    // Show success screen
    formCard.style.display = 'none';
    successScreen.classList.add('active');

    // Countdown redirect
    let sec = 2;
    redirectSec.textContent = sec;
    const timer = setInterval(() => {
      sec--;
      redirectSec.textContent = sec;
      if (sec <= 0) {
        clearInterval(timer);
        window.location.href = WHATSAPP_GROUP;
      }
    }, 1000);

  } catch (err) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Verify & Join Group';
    alert('Error submitting. Please try again.');
  }
});

function showError(group) {
  group.classList.add('has-error');
}

function clearErrors() {
  document.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
}

// ====== Speech ======
function speakSuccess() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance("You were verified successfully");
    utter.rate = 0.95;
    utter.pitch = 1.0;
    utter.volume = 1.0;
    window.speechSynthesis.speak(utter);
  }
}

// ====== Success Buttons ======
goBackBtn.addEventListener('click', () => {
  resetForm();
});

addAnotherBtn.addEventListener('click', () => {
  resetForm();
});

function resetForm() {
  verifyForm.reset();
  clearErrors();
  formCard.style.display = 'block';
  successScreen.classList.remove('active');
  submitBtn.disabled = false;
  submitBtn.textContent = 'Verify & Join Group';
  phoneInput.placeholder = 'Phone number';
}

// ====== Start ======
document.addEventListener('DOMContentLoaded', init);
