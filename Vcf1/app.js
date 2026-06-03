// ===== THEME MANAGEMENT (Dark Mode Default) =====
class ThemeManager {
    constructor() {
        this.body = document.body;
        this.moonIcon = document.getElementById('moonIcon');
        this.sunIcon = document.getElementById('sunIcon');
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }
    init() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') { this.setLightMode(); } else { this.setDarkMode(); }
        this.themeToggle.addEventListener('click', () => this.toggle());
    }
    setDarkMode() {
        this.body.classList.remove('light-mode');
        this.body.classList.add('dark-mode');
        if (this.moonIcon) this.moonIcon.style.display = 'block';
        if (this.sunIcon) this.sunIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark');
    }
    setLightMode() {
        this.body.classList.remove('dark-mode');
        this.body.classList.add('light-mode');
        if (this.moonIcon) this.moonIcon.style.display = 'none';
        if (this.sunIcon) this.sunIcon.style.display = 'block';
        localStorage.setItem('theme', 'light');
    }
    toggle() {
        if (this.body.classList.contains('dark-mode')) { this.setLightMode(); } else { this.setDarkMode(); }
    }
}

// ===== CIRCULAR MEMBERS COUNTER =====
class MembersCounter {
    constructor() {
        this.count = 0;
        this.targetCount = 0;
        this.element = document.getElementById('verifiedCount');
        this.init();
    }
    init() {
        this.loadCount();
        this.animateEntrance();
    }
    loadCount() {
        const stored = localStorage.getItem('verifiedMembers');
        const members = stored ? JSON.parse(stored) : [];
        this.targetCount = members.length;
        this.count = 0;
        this.updateDisplay();
    }
    updateDisplay() {
        if (this.count === this.targetCount) return;
        const diff = this.targetCount - this.count;
        const step = Math.max(1, Math.ceil(diff / 15));
        const animate = () => {
            if (Math.abs(this.targetCount - this.count) <= step) {
                this.count = this.targetCount;
                this.render();
                return;
            }
            this.count += step;
            this.render();
            requestAnimationFrame(animate);
        };
        animate();
    }
    render() {
        if (this.element) {
            this.element.textContent = this.count.toLocaleString();
            this.element.classList.add('updating');
            setTimeout(() => this.element.classList.remove('updating'), 300);
        }
    }
    animateEntrance() {
        const card = document.getElementById('membersCounter');
        if (card) {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 300);
        }
    }
    static addMember(memberData) {
        const stored = localStorage.getItem('verifiedMembers');
        const members = stored ? JSON.parse(stored) : [];
        members.push({
            ...memberData,
            verifiedAt: new Date().toISOString(),
            id: Date.now().toString(36) + Math.random().toString(36).substr(2)
        });
        localStorage.setItem('verifiedMembers', JSON.stringify(members));
        if (window.membersCounter) {
            window.membersCounter.targetCount = members.length;
            window.membersCounter.updateDisplay();
        }
        return members.length;
    }
    static memberExists(phone, email) {
        const stored = localStorage.getItem('verifiedMembers');
        const members = stored ? JSON.parse(stored) : [];
        return {
            phoneExists: members.some(m => m.phone === phone),
            emailExists: members.some(m => m.email === email)
        };
    }
    static getAllMembers() {
        const stored = localStorage.getItem('verifiedMembers');
        return stored ? JSON.parse(stored) : [];
    }
    static resetAll() {
        localStorage.removeItem('verifiedMembers');
        if (window.membersCounter) {
            window.membersCounter.targetCount = 0;
            window.membersCounter.count = 0;
            window.membersCounter.render();
        }
    }
}

// ===== FORM HANDLING =====
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.fullName = document.getElementById('fullName');
        this.countryCode = document.getElementById('countryCode');
        this.phoneNumber = document.getElementById('phoneNumber');
        this.phonePrefix = document.getElementById('phonePrefix');
        this.email = document.getElementById('email');
        this.whatsappSection = document.getElementById('whatsappSection');
        this.init();
    }
    init() {
        this.populateCountries();
        this.setupEventListeners();
    }
    populateCountries() {
        const countries = [
            { code: '+93', name: 'Afghanistan 🇦🇫' },
            { code: '+355', name: 'Albania 🇦🇱' },
            { code: '+213', name: 'Algeria 🇩🇿' },
            { code: '+376', name: 'Andorra 🇦🇩' },
            { code: '+244', name: 'Angola 🇦🇴' },
            { code: '+54', name: 'Argentina 🇦🇷' },
            { code: '+374', name: 'Armenia 🇦🇲' },
            { code: '+61', name: 'Australia 🇦🇺' },
            { code: '+43', name: 'Austria 🇦🇹' },
            { code: '+994', name: 'Azerbaijan 🇦🇿' },
            { code: '+973', name: 'Bahrain 🇧🇭' },
            { code: '+880', name: 'Bangladesh 🇧🇩' },
            { code: '+375', name: 'Belarus 🇧🇾' },
            { code: '+32', name: 'Belgium 🇧🇪' },
            { code: '+501', name: 'Belize 🇧🇿' },
            { code: '+229', name: 'Benin 🇧🇯' },
            { code: '+975', name: 'Bhutan 🇧🇹' },
            { code: '+591', name: 'Bolivia 🇧🇴' },
            { code: '+387', name: 'Bosnia 🇧🇦' },
            { code: '+267', name: 'Botswana 🇧🇼' },
            { code: '+55', name: 'Brazil 🇧🇷' },
            { code: '+673', name: 'Brunei 🇧🇳' },
            { code: '+359', name: 'Bulgaria 🇧🇬' },
            { code: '+226', name: 'Burkina Faso 🇧🇫' },
            { code: '+257', name: 'Burundi 🇧🇮' },
            { code: '+855', name: 'Cambodia 🇰🇭' },
            { code: '+237', name: 'Cameroon 🇨🇲' },
            { code: '+1', name: 'Canada 🇨🇦' },
            { code: '+238', name: 'Cape Verde 🇨🇻' },
            { code: '+236', name: 'Central African Republic 🇨🇫' },
            { code: '+235', name: 'Chad 🇹🇩' },
            { code: '+56', name: 'Chile 🇨🇱' },
            { code: '+86', name: 'China 🇨🇳' },
            { code: '+57', name: 'Colombia 🇨🇴' },
            { code: '+269', name: 'Comoros 🇰🇲' },
            { code: '+242', name: 'Congo 🇨🇬' },
            { code: '+243', name: 'Congo DRC 🇨🇩' },
            { code: '+506', name: 'Costa Rica 🇨🇷' },
            { code: '+385', name: 'Croatia 🇭🇷' },
            { code: '+53', name: 'Cuba 🇨🇺' },
            { code: '+357', name: 'Cyprus 🇨🇾' },
            { code: '+420', name: 'Czech Republic 🇨🇿' },
            { code: '+45', name: 'Denmark 🇩🇰' },
            { code: '+253', name: 'Djibouti 🇩🇯' },
            { code: '+1', name: 'Dominica 🇩🇲' },
            { code: '+1', name: 'Dominican Republic 🇩🇴' },
            { code: '+593', name: 'Ecuador 🇪🇨' },
            { code: '+20', name: 'Egypt 🇪🇬' },
            { code: '+503', name: 'El Salvador 🇸🇻' },
            { code: '+240', name: 'Equatorial Guinea 🇬🇶' },
            { code: '+291', name: 'Eritrea 🇪🇷' },
            { code: '+372', name: 'Estonia 🇪🇪' },
            { code: '+251', name: 'Ethiopia 🇪🇹' },
            { code: '+679', name: 'Fiji 🇫🇯' },
            { code: '+358', name: 'Finland 🇫🇮' },
            { code: '+33', name: 'France 🇫🇷' },
            { code: '+241', name: 'Gabon 🇬🇦' },
            { code: '+220', name: 'Gambia 🇬🇲' },
            { code: '+995', name: 'Georgia 🇬🇪' },
            { code: '+49', name: 'Germany 🇩🇪' },
            { code: '+233', name: 'Ghana 🇬🇭' },
            { code: '+30', name: 'Greece 🇬🇷' },
            { code: '+502', name: 'Guatemala 🇬🇹' },
            { code: '+224', name: 'Guinea 🇬🇳' },
            { code: '+245', name: 'Guinea-Bissau 🇬🇼' },
            { code: '+592', name: 'Guyana 🇬🇾' },
            { code: '+509', name: 'Haiti 🇭🇹' },
            { code: '+504', name: 'Honduras 🇭🇳' },
            { code: '+36', name: 'Hungary 🇭🇺' },
            { code: '+354', name: 'Iceland 🇮🇸' },
            { code: '+91', name: 'India 🇮🇳' },
            { code: '+62', name: 'Indonesia 🇮🇩' },
            { code: '+98', name: 'Iran 🇮🇷' },
            { code: '+964', name: 'Iraq 🇮🇶' },
            { code: '+353', name: 'Ireland 🇮🇪' },
            { code: '+972', name: 'Israel 🇮🇱' },
            { code: '+39', name: 'Italy 🇮🇹' },
            { code: '+225', name: 'Ivory Coast 🇨🇮' },
            { code: '+1', name: 'Jamaica 🇯🇲' },
            { code: '+81', name: 'Japan 🇯🇵' },
            { code: '+962', name: 'Jordan 🇯🇴' },
            { code: '+7', name: 'Kazakhstan 🇰🇿' },
            { code: '+254', name: 'Kenya 🇰🇪' },
            { code: '+686', name: 'Kiribati 🇰🇮' },
            { code: '+965', name: 'Kuwait 🇰🇼' },
            { code: '+996', name: 'Kyrgyzstan 🇰🇬' },
            { code: '+856', name: 'Laos 🇱🇦' },
            { code: '+371', name: 'Latvia 🇱🇻' },
            { code: '+961', name: 'Lebanon 🇱🇧' },
            { code: '+266', name: 'Lesotho 🇱🇸' },
            { code: '+231', name: 'Liberia 🇱🇷' },
            { code: '+218', name: 'Libya 🇱🇾' },
            { code: '+423', name: 'Liechtenstein 🇱🇮' },
            { code: '+370', name: 'Lithuania 🇱🇹' },
            { code: '+352', name: 'Luxembourg 🇱🇺' },
            { code: '+261', name: 'Madagascar 🇲🇬' },
            { code: '+265', name: 'Malawi 🇲🇼' },
            { code: '+60', name: 'Malaysia 🇲🇾' },
            { code: '+960', name: 'Maldives 🇲🇻' },
            { code: '+223', name: 'Mali 🇲🇱' },
            { code: '+356', name: 'Malta 🇲🇹' },
            { code: '+692', name: 'Marshall Islands 🇲🇭' },
            { code: '+222', name: 'Mauritania 🇲🇷' },
            { code: '+230', name: 'Mauritius 🇲🇺' },
            { code: '+52', name: 'Mexico 🇲🇽' },
            { code: '+691', name: 'Micronesia 🇫🇲' },
            { code: '+373', name: 'Moldova 🇲🇩' },
            { code: '+377', name: 'Monaco 🇲🇨' },
            { code: '+976', name: 'Mongolia 🇲🇳' },
            { code: '+382', name: 'Montenegro 🇲🇪' },
            { code: '+212', name: 'Morocco 🇲🇦' },
            { code: '+258', name: 'Mozambique 🇲🇿' },
            { code: '+95', name: 'Myanmar 🇲🇲' },
            { code: '+264', name: 'Namibia 🇳🇦' },
            { code: '+674', name: 'Nauru 🇳🇷' },
            { code: '+977', name: 'Nepal 🇳🇵' },
            { code: '+31', name: 'Netherlands 🇳🇱' },
            { code: '+64', name: 'New Zealand 🇳🇿' },
            { code: '+505', name: 'Nicaragua 🇳🇮' },
            { code: '+227', name: 'Niger 🇳🇪' },
            { code: '+234', name: 'Nigeria 🇳🇬' },
            { code: '+850', name: 'North Korea 🇰🇵' },
            { code: '+389', name: 'North Macedonia 🇲🇰' },
            { code: '+47', name: 'Norway 🇳🇴' },
            { code: '+968', name: 'Oman 🇴🇲' },
            { code: '+92', name: 'Pakistan 🇵🇰' },
            { code: '+680', name: 'Palau 🇵🇼' },
            { code: '+507', name: 'Panama 🇵🇦' },
            { code: '+675', name: 'Papua New Guinea 🇵🇬' },
            { code: '+595', name: 'Paraguay 🇵🇾' },
            { code: '+51', name: 'Peru 🇵🇪' },
            { code: '+63', name: 'Philippines 🇵🇭' },
            { code: '+48', name: 'Poland 🇵🇱' },
            { code: '+351', name: 'Portugal 🇵🇹' },
            { code: '+974', name: 'Qatar 🇶🇦' },
            { code: '+40', name: 'Romania 🇷🇴' },
            { code: '+7', name: 'Russia 🇷🇺' },
            { code: '+250', name: 'Rwanda 🇷🇼' },
            { code: '+1', name: 'Saint Kitts and Nevis 🇰🇳' },
            { code: '+1', name: 'Saint Lucia 🇱🇨' },
            { code: '+1', name: 'Saint Vincent 🇻🇨' },
            { code: '+685', name: 'Samoa 🇼🇸' },
            { code: '+378', name: 'San Marino 🇸🇲' },
            { code: '+239', name: 'Sao Tome 🇸🇹' },
            { code: '+966', name: 'Saudi Arabia 🇸🇦' },
            { code: '+221', name: 'Senegal 🇸🇳' },
            { code: '+381', name: 'Serbia 🇷🇸' },
            { code: '+248', name: 'Seychelles 🇸🇨' },
            { code: '+232', name: 'Sierra Leone 🇸🇱' },
            { code: '+65', name: 'Singapore 🇸🇬' },
            { code: '+421', name: 'Slovakia 🇸🇰' },
            { code: '+386', name: 'Slovenia 🇸🇮' },
            { code: '+677', name: 'Solomon Islands 🇸🇧' },
            { code: '+252', name: 'Somalia 🇸🇴' },
            { code: '+27', name: 'South Africa 🇿🇦' },
            { code: '+82', name: 'South Korea 🇰🇷' },
            { code: '+211', name: 'South Sudan 🇸🇸' },
            { code: '+34', name: 'Spain 🇪🇸' },
            { code: '+94', name: 'Sri Lanka 🇱🇰' },
            { code: '+249', name: 'Sudan 🇸🇩' },
            { code: '+597', name: 'Suriname 🇸🇷' },
            { code: '+46', name: 'Sweden 🇸🇪' },
            { code: '+41', name: 'Switzerland 🇨🇭' },
            { code: '+963', name: 'Syria 🇸🇾' },
            { code: '+992', name: 'Tajikistan 🇹🇯' },
            { code: '+255', name: 'Tanzania 🇹🇿' },
            { code: '+66', name: 'Thailand 🇹🇭' },
            { code: '+228', name: 'Togo 🇹🇬' },
            { code: '+676', name: 'Tonga 🇹🇴' },
            { code: '+1', name: 'Trinidad and Tobago 🇹🇹' },
            { code: '+216', name: 'Tunisia 🇹🇳' },
            { code: '+90', name: 'Turkey 🇹🇷' },
            { code: '+993', name: 'Turkmenistan 🇹🇲' },
            { code: '+688', name: 'Tuvalu 🇹🇻' },
            { code: '+256', name: 'Uganda 🇺🇬' },
            { code: '+380', name: 'Ukraine 🇺🇦' },
            { code: '+971', name: 'UAE 🇦🇪' },
            { code: '+44', name: 'United Kingdom 🇬🇧' },
            { code: '+1', name: 'United States 🇺🇸' },
            { code: '+598', name: 'Uruguay 🇺🇾' },
            { code: '+998', name: 'Uzbekistan 🇺🇿' },
            { code: '+678', name: 'Vanuatu 🇻🇺' },
            { code: '+39', name: 'Vatican City 🇻🇦' },
            { code: '+58', name: 'Venezuela 🇻🇪' },
            { code: '+84', name: 'Vietnam 🇻🇳' },
            { code: '+967', name: 'Yemen 🇾🇪' },
            { code: '+260', name: 'Zambia 🇿🇲' },
            { code: '+263', name: 'Zimbabwe 🇿🇼' }
        ];
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = country.name + ' (' + country.code + ')';
            this.countryCode.appendChild(option);
        });
    }
    setupEventListeners() {
        this.countryCode.addEventListener('change', () => {
            const code = this.countryCode.value;
            this.phonePrefix.textContent = code || '+';
            this.phoneNumber.disabled = !code;
            if (code) { this.phoneNumber.focus(); }
        });
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    validateForm() {
        let isValid = true;
        document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        if (!this.fullName.value.trim()) {
            document.getElementById('nameError').classList.add('show');
            isValid = false;
        }
        if (!this.countryCode.value) {
            document.getElementById('countryError').classList.add('show');
            isValid = false;
        }
        const code = this.countryCode.value;
        const phone = this.phoneNumber.value;
        const fullPhone = code + phone;
        if (!phone || !/^\d+$/.test(phone)) {
            document.getElementById('phoneError').classList.add('show');
            isValid = false;
        } else if (code && !phone.startsWith(code.replace('+', ''))) {
            document.getElementById('phoneError').classList.add('show');
            isValid = false;
        }
        const duplicates = MembersCounter.memberExists(fullPhone, this.email.value);
        if (duplicates.phoneExists) {
            document.getElementById('duplicateError').classList.add('show');
            isValid = false;
        }
        if (duplicates.emailExists) {
            document.getElementById('emailDuplicateError').classList.add('show');
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email.value)) {
            document.getElementById('emailError').classList.add('show');
            isValid = false;
        }
        return isValid;
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.validateForm()) return;
        const memberData = {
            name: this.fullName.value.trim(),
            countryCode: this.countryCode.value,
            phone: this.countryCode.value + this.phoneNumber.value,
            email: this.email.value.trim()
        };
        MembersCounter.addMember(memberData);
        document.getElementById('successModal').classList.add('show');
        if (this.whatsappSection) { this.whatsappSection.classList.add('show'); }
        this.form.reset();
        this.phonePrefix.textContent = '+';
        this.phoneNumber.disabled = true;
    }
}

// ===== COUNTDOWN TIMER =====
class CountdownTimer {
    constructor() {
        this.daysEl = document.getElementById('cdDays');
        this.hoursEl = document.getElementById('cdHours');
        this.minsEl = document.getElementById('cdMins');
        this.secsEl = document.getElementById('cdSecs');
        this.targetDate = new Date('2026-06-15T00:00:00').getTime();
        this.init();
    }
    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    }
    update() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;
        if (distance < 0) {
            if (this.daysEl) this.daysEl.textContent = '00';
            if (this.hoursEl) this.hoursEl.textContent = '00';
            if (this.minsEl) this.minsEl.textContent = '00';
            if (this.secsEl) this.secsEl.textContent = '00';
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
        if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
        if (this.minsEl) this.minsEl.textContent = String(minutes).padStart(2, '0');
        if (this.secsEl) this.secsEl.textContent = String(seconds).padStart(2, '0');
    }
}

// ===== STATUS BAR =====
class StatusBar {
    constructor() {
        this.dateEl = document.getElementById('statusDate');
        this.timeEl = document.getElementById('statusTime');
        this.batteryFill = document.getElementById('batteryFill');
        this.batteryPercent = document.getElementById('batteryPercent');
        this.chargingIcon = document.getElementById('chargingIcon');
        this.init();
    }
    init() {
        this.updateDateTime();
        setInterval(() => this.updateDateTime(), 1000);
        this.updateBattery();
    }
    updateDateTime() {
        const now = new Date();
        if (this.dateEl) this.dateEl.textContent = now.toLocaleDateString('en-GB');
        if (this.timeEl) this.timeEl.textContent = now.toLocaleTimeString('en-GB');
    }
    async updateBattery() {
        if ('getBattery' in navigator) {
            try {
                const battery = await navigator.getBattery();
                const render = () => {
                    const level = Math.round(battery.level * 100);
                    if (this.batteryFill) this.batteryFill.style.width = level + '%';
                    if (this.batteryPercent) this.batteryPercent.textContent = level + '%';
                    if (this.batteryFill) {
                        this.batteryFill.className = 'battery-fill';
                        if (level > 60) this.batteryFill.classList.add('high');
                        else if (level > 20) this.batteryFill.classList.add('medium');
                        else this.batteryFill.classList.add('low');
                    }
                    if (this.chargingIcon) this.chargingIcon.style.display = battery.charging ? 'inline' : 'none';
                };
                render();
                battery.addEventListener('levelchange', render);
                battery.addEventListener('chargingchange', render);
            } catch (e) {
                if (this.batteryPercent) this.batteryPercent.textContent = '--%';
            }
        } else {
            if (this.batteryPercent) this.batteryPercent.textContent = '--%';
        }
    }
}

// ===== MODAL FUNCTIONS =====
function addAnother() {
    document.getElementById('successModal').classList.remove('show');
    const whatsappSection = document.getElementById('whatsappSection');
    if (whatsappSection) whatsappSection.classList.remove('show');
    const form = document.getElementById('contactForm');
    if (form) form.reset();
    const phonePrefix = document.getElementById('phonePrefix');
    if (phonePrefix) phonePrefix.textContent = '+';
    const phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber) phoneNumber.disabled = true;
}

function closeModal() {
    document.getElementById('successModal').classList.remove('show');
}

// ===== PARTICLES =====
class Particles {
    constructor() {
        this.container = document.getElementById('particles');
        if (this.container) this.init();
    }
    init() {
        for (let i = 0; i < 30; i++) {
            this.createParticle();
        }
    }
    createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = 'position:absolute;width:' + (Math.random() * 4 + 1) + 'px;height:' + (Math.random() * 4 + 1) + 'px;background:rgba(16,185,129,' + (Math.random() * 0.3 + 0.1) + ');border-radius:50%;left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;animation:floatParticle ' + (Math.random() * 10 + 10) + 's linear infinite;pointer-events:none;';
        this.container.appendChild(particle);
    }
}

const particleStyle = document.createElement('style');
particleStyle.textContent = '@keyframes floatParticle{0%{transform:translateY(0) rotate(0deg);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(-100vh) rotate(360deg);opacity:0}}';
document.head.appendChild(particleStyle);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
    window.membersCounter = new MembersCounter();
    window.contactForm = new ContactForm();
    window.countdownTimer = new CountdownTimer();
    window.statusBar = new StatusBar();
    window.particles = new Particles();
});
