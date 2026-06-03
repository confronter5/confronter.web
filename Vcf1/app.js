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

// ===== COUNTRY PHONE VALIDATION =====
const countryPhoneRules = {
    '+93': { name: 'Afghanistan', minLen: 9, maxLen: 9, startsWith: ['7'], example: '793908671' },
    '+355': { name: 'Albania', minLen: 9, maxLen: 9, startsWith: ['6'], example: '691234567' },
    '+213': { name: 'Algeria', minLen: 9, maxLen: 9, startsWith: ['5', '6', '7'], example: '551234567' },
    '+376': { name: 'Andorra', minLen: 6, maxLen: 6, startsWith: ['3', '4', '6'], example: '312345' },
    '+244': { name: 'Angola', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+54': { name: 'Argentina', minLen: 10, maxLen: 10, startsWith: ['1', '2', '3'], example: '9112345678' },
    '+374': { name: 'Armenia', minLen: 8, maxLen: 8, startsWith: ['3', '4', '5', '7', '9'], example: '91234567' },
    '+61': { name: 'Australia', minLen: 9, maxLen: 9, startsWith: ['4'], example: '412345678' },
    '+43': { name: 'Austria', minLen: 10, maxLen: 10, startsWith: ['6'], example: '6412345678' },
    '+994': { name: 'Azerbaijan', minLen: 9, maxLen: 9, startsWith: ['4', '5', '6', '7'], example: '501234567' },
    '+973': { name: 'Bahrain', minLen: 8, maxLen: 8, startsWith: ['3'], example: '31234567' },
    '+880': { name: 'Bangladesh', minLen: 10, maxLen: 10, startsWith: ['1'], example: '1712345678' },
    '+375': { name: 'Belarus', minLen: 9, maxLen: 9, startsWith: ['2', '3', '4', '5'], example: '291234567' },
    '+32': { name: 'Belgium', minLen: 9, maxLen: 9, startsWith: ['4'], example: '471234567' },
    '+501': { name: 'Belize', minLen: 7, maxLen: 7, startsWith: ['6'], example: '6123456' },
    '+229': { name: 'Benin', minLen: 8, maxLen: 8, startsWith: ['4', '5', '6'], example: '61234567' },
    '+975': { name: 'Bhutan', minLen: 8, maxLen: 8, startsWith: ['1', '7'], example: '77123456' },
    '+591': { name: 'Bolivia', minLen: 8, maxLen: 8, startsWith: ['6', '7'], example: '71234567' },
    '+387': { name: 'Bosnia', minLen: 8, maxLen: 8, startsWith: ['6'], example: '61234567' },
    '+267': { name: 'Botswana', minLen: 8, maxLen: 8, startsWith: ['7'], example: '71234567' },
    '+55': { name: 'Brazil', minLen: 11, maxLen: 11, startsWith: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], example: '11912345678' },
    '+673': { name: 'Brunei', minLen: 7, maxLen: 7, startsWith: ['7', '8'], example: '7123456' },
    '+359': { name: 'Bulgaria', minLen: 9, maxLen: 9, startsWith: ['8'], example: '871234567' },
    '+226': { name: 'Burkina Faso', minLen: 8, maxLen: 8, startsWith: ['5', '6', '7'], example: '61234567' },
    '+257': { name: 'Burundi', minLen: 8, maxLen: 8, startsWith: ['7', '2'], example: '71234567' },
    '+855': { name: 'Cambodia', minLen: 8, maxLen: 9, startsWith: ['1', '6', '7', '8', '9'], example: '91234567' },
    '+237': { name: 'Cameroon', minLen: 9, maxLen: 9, startsWith: ['6'], example: '612345678' },
    '+1': { name: 'Canada/USA', minLen: 10, maxLen: 10, startsWith: ['2', '3', '4', '5', '6', '7', '8', '9'], example: '4161234567' },
    '+238': { name: 'Cape Verde', minLen: 7, maxLen: 7, startsWith: ['5', '9'], example: '9123456' },
    '+236': { name: 'Central African Republic', minLen: 8, maxLen: 8, startsWith: ['7'], example: '71234567' },
    '+235': { name: 'Chad', minLen: 8, maxLen: 8, startsWith: ['6', '7', '9'], example: '61234567' },
    '+56': { name: 'Chile', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+86': { name: 'China', minLen: 11, maxLen: 11, startsWith: ['1'], example: '13812345678' },
    '+57': { name: 'Colombia', minLen: 10, maxLen: 10, startsWith: ['3'], example: '3123456789' },
    '+269': { name: 'Comoros', minLen: 7, maxLen: 7, startsWith: ['3', '7'], example: '7123456' },
    '+242': { name: 'Congo', minLen: 9, maxLen: 9, startsWith: ['0', '4', '5', '6'], example: '551234567' },
    '+243': { name: 'Congo DRC', minLen: 9, maxLen: 9, startsWith: ['8', '9'], example: '812345678' },
    '+506': { name: 'Costa Rica', minLen: 8, maxLen: 8, startsWith: ['6', '7', '8'], example: '71234567' },
    '+385': { name: 'Croatia', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+53': { name: 'Cuba', minLen: 8, maxLen: 8, startsWith: ['5'], example: '51234567' },
    '+357': { name: 'Cyprus', minLen: 8, maxLen: 8, startsWith: ['9'], example: '91234567' },
    '+420': { name: 'Czech Republic', minLen: 9, maxLen: 9, startsWith: ['6', '7'], example: '612345678' },
    '+45': { name: 'Denmark', minLen: 8, maxLen: 8, startsWith: ['2', '3', '4', '5', '6', '7', '8', '9'], example: '21234567' },
    '+253': { name: 'Djibouti', minLen: 8, maxLen: 8, startsWith: ['7', '8'], example: '71234567' },
    '+593': { name: 'Ecuador', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+20': { name: 'Egypt', minLen: 10, maxLen: 10, startsWith: ['1'], example: '1012345678' },
    '+503': { name: 'El Salvador', minLen: 8, maxLen: 8, startsWith: ['6', '7'], example: '71234567' },
    '+240': { name: 'Equatorial Guinea', minLen: 9, maxLen: 9, startsWith: ['2', '5', '6'], example: '551234567' },
    '+291': { name: 'Eritrea', minLen: 7, maxLen: 7, startsWith: ['1', '7'], example: '7123456' },
    '+372': { name: 'Estonia', minLen: 8, maxLen: 8, startsWith: ['5'], example: '51234567' },
    '+251': { name: 'Ethiopia', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+679': { name: 'Fiji', minLen: 7, maxLen: 7, startsWith: ['7', '9'], example: '7123456' },
    '+358': { name: 'Finland', minLen: 9, maxLen: 10, startsWith: ['4', '5'], example: '412345678' },
    '+33': { name: 'France', minLen: 9, maxLen: 9, startsWith: ['6', '7'], example: '612345678' },
    '+241': { name: 'Gabon', minLen: 8, maxLen: 8, startsWith: ['2', '4', '5', '6', '7'], example: '61234567' },
    '+220': { name: 'Gambia', minLen: 7, maxLen: 7, startsWith: ['2', '3', '4', '5', '6', '7', '8', '9'], example: '2123456' },
    '+995': { name: 'Georgia', minLen: 9, maxLen: 9, startsWith: ['5'], example: '512345678' },
    '+49': { name: 'Germany', minLen: 10, maxLen: 11, startsWith: ['1', '5', '6', '7', '8', '9'], example: '1512345678' },
    '+233': { name: 'Ghana', minLen: 9, maxLen: 9, startsWith: ['2', '5'], example: '512345678' },
    '+30': { name: 'Greece', minLen: 10, maxLen: 10, startsWith: ['6'], example: '6912345678' },
    '+502': { name: 'Guatemala', minLen: 8, maxLen: 8, startsWith: ['3', '4', '5'], example: '41234567' },
    '+224': { name: 'Guinea', minLen: 9, maxLen: 9, startsWith: ['6'], example: '612345678' },
    '+245': { name: 'Guinea-Bissau', minLen: 7, maxLen: 7, startsWith: ['5', '6', '7'], example: '6123456' },
    '+592': { name: 'Guyana', minLen: 7, maxLen: 7, startsWith: ['6'], example: '6123456' },
    '+509': { name: 'Haiti', minLen: 8, maxLen: 8, startsWith: ['3', '4'], example: '41234567' },
    '+504': { name: 'Honduras', minLen: 8, maxLen: 8, startsWith: ['3', '8', '9'], example: '91234567' },
    '+36': { name: 'Hungary', minLen: 9, maxLen: 9, startsWith: ['2', '3', '7'], example: '201234567' },
    '+354': { name: 'Iceland', minLen: 7, maxLen: 7, startsWith: ['6', '7', '8'], example: '6123456' },
    '+91': { name: 'India', minLen: 10, maxLen: 10, startsWith: ['6', '7', '8', '9'], example: '9123456789' },
    '+62': { name: 'Indonesia', minLen: 10, maxLen: 12, startsWith: ['8'], example: '8123456789' },
    '+98': { name: 'Iran', minLen: 10, maxLen: 10, startsWith: ['9'], example: '9123456789' },
    '+964': { name: 'Iraq', minLen: 10, maxLen: 10, startsWith: ['7'], example: '7123456789' },
    '+353': { name: 'Ireland', minLen: 9, maxLen: 9, startsWith: ['8'], example: '871234567' },
    '+972': { name: 'Israel', minLen: 9, maxLen: 9, startsWith: ['5'], example: '512345678' },
    '+39': { name: 'Italy', minLen: 10, maxLen: 10, startsWith: ['3'], example: '3123456789' },
    '+225': { name: 'Ivory Coast', minLen: 8, maxLen: 8, startsWith: ['0', '4', '5', '7'], example: '71234567' },
    '+81': { name: 'Japan', minLen: 10, maxLen: 10, startsWith: ['7', '8', '9'], example: '9012345678' },
    '+962': { name: 'Jordan', minLen: 9, maxLen: 9, startsWith: ['7'], example: '712345678' },
    '+7': { name: 'Kazakhstan', minLen: 10, maxLen: 10, startsWith: ['7'], example: '7123456789' },
    '+254': { name: 'Kenya', minLen: 9, maxLen: 9, startsWith: ['1', '7'], example: '712345678' },
    '+686': { name: 'Kiribati', minLen: 5, maxLen: 5, startsWith: ['7', '9'], example: '71234' },
    '+965': { name: 'Kuwait', minLen: 8, maxLen: 8, startsWith: ['5', '6', '9'], example: '51234567' },
    '+996': { name: 'Kyrgyzstan', minLen: 9, maxLen: 9, startsWith: ['5', '7'], example: '512345678' },
    '+856': { name: 'Laos', minLen: 9, maxLen: 10, startsWith: ['2', '5', '7', '9'], example: '201234567' },
    '+371': { name: 'Latvia', minLen: 8, maxLen: 8, startsWith: ['2'], example: '21234567' },
    '+961': { name: 'Lebanon', minLen: 7, maxLen: 8, startsWith: ['3', '7', '8'], example: '71234567' },
    '+266': { name: 'Lesotho', minLen: 8, maxLen: 8, startsWith: ['5', '6'], example: '51234567' },
    '+231': { name: 'Liberia', minLen: 7, maxLen: 8, startsWith: ['4', '5', '6', '7'], example: '61234567' },
    '+218': { name: 'Libya', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+423': { name: 'Liechtenstein', minLen: 7, maxLen: 7, startsWith: ['7'], example: '7123456' },
    '+370': { name: 'Lithuania', minLen: 8, maxLen: 8, startsWith: ['6'], example: '61234567' },
    '+352': { name: 'Luxembourg', minLen: 9, maxLen: 9, startsWith: ['6'], example: '621234567' },
    '+261': { name: 'Madagascar', minLen: 9, maxLen: 9, startsWith: ['3'], example: '321234567' },
    '+265': { name: 'Malawi', minLen: 9, maxLen: 9, startsWith: ['8', '9'], example: '881234567' },
    '+60': { name: 'Malaysia', minLen: 9, maxLen: 10, startsWith: ['1'], example: '123456789' },
    '+960': { name: 'Maldives', minLen: 7, maxLen: 7, startsWith: ['7', '9'], example: '7123456' },
    '+223': { name: 'Mali', minLen: 8, maxLen: 8, startsWith: ['5', '6', '7', '8', '9'], example: '61234567' },
    '+356': { name: 'Malta', minLen: 8, maxLen: 8, startsWith: ['7', '9'], example: '71234567' },
    '+692': { name: 'Marshall Islands', minLen: 7, maxLen: 7, startsWith: ['4', '5', '6'], example: '6123456' },
    '+222': { name: 'Mauritania', minLen: 8, maxLen: 8, startsWith: ['2', '3', '4'], example: '31234567' },
    '+230': { name: 'Mauritius', minLen: 8, maxLen: 8, startsWith: ['5'], example: '51234567' },
    '+52': { name: 'Mexico', minLen: 10, maxLen: 10, startsWith: ['1'], example: '1234567890' },
    '+691': { name: 'Micronesia', minLen: 7, maxLen: 7, startsWith: ['3', '9'], example: '9123456' },
    '+373': { name: 'Moldova', minLen: 8, maxLen: 8, startsWith: ['6', '7'], example: '61234567' },
    '+377': { name: 'Monaco', minLen: 8, maxLen: 8, startsWith: ['4'], example: '41234567' },
    '+976': { name: 'Mongolia', minLen: 8, maxLen: 8, startsWith: ['8', '9'], example: '81234567' },
    '+382': { name: 'Montenegro', minLen: 8, maxLen: 8, startsWith: ['6'], example: '61234567' },
    '+212': { name: 'Morocco', minLen: 9, maxLen: 9, startsWith: ['6', '7'], example: '612345678' },
    '+258': { name: 'Mozambique', minLen: 9, maxLen: 9, startsWith: ['8', '9'], example: '841234567' },
    '+95': { name: 'Myanmar', minLen: 8, maxLen: 10, startsWith: ['9'], example: '91234567' },
    '+264': { name: 'Namibia', minLen: 9, maxLen: 9, startsWith: ['8'], example: '812345678' },
    '+674': { name: 'Nauru', minLen: 7, maxLen: 7, startsWith: ['5', '7'], example: '5123456' },
    '+977': { name: 'Nepal', minLen: 10, maxLen: 10, startsWith: ['9', '8'], example: '9812345678' },
    '+31': { name: 'Netherlands', minLen: 9, maxLen: 9, startsWith: ['6'], example: '612345678' },
    '+64': { name: 'New Zealand', minLen: 8, maxLen: 10, startsWith: ['2'], example: '21234567' },
    '+505': { name: 'Nicaragua', minLen: 8, maxLen: 8, startsWith: ['7', '8'], example: '81234567' },
    '+227': { name: 'Niger', minLen: 8, maxLen: 8, startsWith: ['8', '9'], example: '81234567' },
    '+234': { name: 'Nigeria', minLen: 10, maxLen: 10, startsWith: ['7', '8', '9'], example: '8123456789' },
    '+850': { name: 'North Korea', minLen: 9, maxLen: 10, startsWith: ['1', '2', '8', '9'], example: '191234567' },
    '+389': { name: 'North Macedonia', minLen: 8, maxLen: 8, startsWith: ['7'], example: '71234567' },
    '+47': { name: 'Norway', minLen: 8, maxLen: 8, startsWith: ['4', '9'], example: '41234567' },
    '+968': { name: 'Oman', minLen: 8, maxLen: 8, startsWith: ['7', '9'], example: '71234567' },
    '+92': { name: 'Pakistan', minLen: 10, maxLen: 10, startsWith: ['3'], example: '3123456789' },
    '+680': { name: 'Palau', minLen: 7, maxLen: 7, startsWith: ['7', '8'], example: '7123456' },
    '+507': { name: 'Panama', minLen: 8, maxLen: 8, startsWith: ['6'], example: '61234567' },
    '+675': { name: 'Papua New Guinea', minLen: 8, maxLen: 8, startsWith: ['7'], example: '71234567' },
    '+595': { name: 'Paraguay', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+51': { name: 'Peru', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+63': { name: 'Philippines', minLen: 10, maxLen: 10, startsWith: ['9'], example: '9123456789' },
    '+48': { name: 'Poland', minLen: 9, maxLen: 9, startsWith: ['5', '6', '7', '8'], example: '512345678' },
    '+351': { name: 'Portugal', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+974': { name: 'Qatar', minLen: 8, maxLen: 8, startsWith: ['3', '5', '6', '7'], example: '31234567' },
    '+40': { name: 'Romania', minLen: 9, maxLen: 9, startsWith: ['7'], example: '712345678' },
    '+7': { name: 'Russia', minLen: 10, maxLen: 10, startsWith: ['9'], example: '9123456789' },
    '+250': { name: 'Rwanda', minLen: 9, maxLen: 9, startsWith: ['7', '8'], example: '781234567' },
    '+685': { name: 'Samoa', minLen: 5, maxLen: 7, startsWith: ['7', '8'], example: '7123456' },
    '+378': { name: 'San Marino', minLen: 8, maxLen: 10, startsWith: ['3'], example: '31234567' },
    '+239': { name: 'Sao Tome', minLen: 7, maxLen: 7, startsWith: ['9'], example: '9123456' },
    '+966': { name: 'Saudi Arabia', minLen: 9, maxLen: 9, startsWith: ['5'], example: '512345678' },
    '+221': { name: 'Senegal', minLen: 9, maxLen: 9, startsWith: ['7'], example: '712345678' },
    '+381': { name: 'Serbia', minLen: 8, maxLen: 9, startsWith: ['6'], example: '61234567' },
    '+248': { name: 'Seychelles', minLen: 7, maxLen: 7, startsWith: ['2', '5'], example: '5123456' },
    '+232': { name: 'Sierra Leone', minLen: 8, maxLen: 8, startsWith: ['7', '8', '9'], example: '71234567' },
    '+65': { name: 'Singapore', minLen: 8, maxLen: 8, startsWith: ['8', '9'], example: '81234567' },
    '+421': { name: 'Slovakia', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+386': { name: 'Slovenia', minLen: 8, maxLen: 8, startsWith: ['3', '4', '5', '6', '7'], example: '31234567' },
    '+677': { name: 'Solomon Islands', minLen: 7, maxLen: 7, startsWith: ['7', '8'], example: '7123456' },
    '+252': { name: 'Somalia', minLen: 7, maxLen: 9, startsWith: ['6', '9'], example: '61234567' },
    '+27': { name: 'South Africa', minLen: 9, maxLen: 9, startsWith: ['6', '7', '8'], example: '712345678' },
    '+82': { name: 'South Korea', minLen: 10, maxLen: 10, startsWith: ['1'], example: '1012345678' },
    '+211': { name: 'South Sudan', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+34': { name: 'Spain', minLen: 9, maxLen: 9, startsWith: ['6', '7'], example: '612345678' },
    '+94': { name: 'Sri Lanka', minLen: 9, maxLen: 9, startsWith: ['7'], example: '712345678' },
    '+249': { name: 'Sudan', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+597': { name: 'Suriname', minLen: 7, maxLen: 7, startsWith: ['6', '7', '8'], example: '7123456' },
    '+46': { name: 'Sweden', minLen: 9, maxLen: 10, startsWith: ['7'], example: '712345678' },
    '+41': { name: 'Switzerland', minLen: 9, maxLen: 9, startsWith: ['7'], example: '712345678' },
    '+963': { name: 'Syria', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+992': { name: 'Tajikistan', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+255': { name: 'Tanzania', minLen: 9, maxLen: 9, startsWith: ['6', '7'], example: '712345678' },
    '+66': { name: 'Thailand', minLen: 9, maxLen: 9, startsWith: ['6', '8', '9'], example: '812345678' },
    '+228': { name: 'Togo', minLen: 8, maxLen: 8, startsWith: ['9'], example: '91234567' },
    '+676': { name: 'Tonga', minLen: 5, maxLen: 7, startsWith: ['8', '9'], example: '8123456' },
    '+216': { name: 'Tunisia', minLen: 8, maxLen: 8, startsWith: ['2', '4', '5', '9'], example: '21234567' },
    '+90': { name: 'Turkey', minLen: 10, maxLen: 10, startsWith: ['5'], example: '5123456789' },
    '+993': { name: 'Turkmenistan', minLen: 8, maxLen: 8, startsWith: ['6'], example: '61234567' },
    '+688': { name: 'Tuvalu', minLen: 5, maxLen: 5, startsWith: ['8', '9'], example: '81234' },
    '+256': { name: 'Uganda', minLen: 9, maxLen: 9, startsWith: ['7'], example: '712345678' },
    '+380': { name: 'Ukraine', minLen: 9, maxLen: 9, startsWith: ['6', '7', '9'], example: '671234567' },
    '+971': { name: 'UAE', minLen: 9, maxLen: 9, startsWith: ['5'], example: '512345678' },
    '+44': { name: 'United Kingdom', minLen: 10, maxLen: 10, startsWith: ['7'], example: '7123456789' },
    '+598': { name: 'Uruguay', minLen: 8, maxLen: 8, startsWith: ['9'], example: '91234567' },
    '+998': { name: 'Uzbekistan', minLen: 9, maxLen: 9, startsWith: ['9'], example: '912345678' },
    '+678': { name: 'Vanuatu', minLen: 7, maxLen: 7, startsWith: ['5', '7'], example: '5123456' },
    '+58': { name: 'Venezuela', minLen: 10, maxLen: 10, startsWith: ['4'], example: '4123456789' },
    '+84': { name: 'Vietnam', minLen: 9, maxLen: 9, startsWith: ['3', '5', '7', '8', '9'], example: '912345678' },
    '+967': { name: 'Yemen', minLen: 9, maxLen: 9, startsWith: ['7', '9'], example: '712345678' },
    '+260': { name: 'Zambia', minLen: 9, maxLen: 9, startsWith: ['9', '7'], example: '912345678' },
    '+263': { name: 'Zimbabwe', minLen: 9, maxLen: 9, startsWith: ['7', '8'], example: '712345678' }
};

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
        this.currentRule = null;
        this.init();
    }
    init() {
        this.populateCountries();
        this.setupEventListeners();
        this.updatePhoneHint();
    }
    populateCountries() {
        const codes = Object.keys(countryPhoneRules).sort();
        codes.forEach(code => {
            const rule = countryPhoneRules[code];
            const option = document.createElement('option');
            option.value = code;
            option.textContent = rule.name + ' ' + code;
            this.countryCode.appendChild(option);
        });
    }
    setupEventListeners() {
        this.countryCode.addEventListener('change', () => {
            const code = this.countryCode.value;
            this.phonePrefix.textContent = code || '+';
            this.phoneNumber.disabled = !code;
            this.currentRule = code ? countryPhoneRules[code] : null;
            this.updatePhoneHint();
            this.updatePlaceholder();
            if (code) { this.phoneNumber.focus(); }
        });
        this.phoneNumber.addEventListener('input', () => {
            this.validatePhoneLive();
        });
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    updatePhoneHint() {
        const hintEl = document.querySelector('#phoneWrapper').parentElement.querySelector('.hint');
        if (this.currentRule) {
            hintEl.textContent = this.currentRule.name + ' phone: ' + this.currentRule.minLen + '-' + this.currentRule.maxLen + ' digits. Example: ' + this.currentRule.example;
        } else {
            hintEl.textContent = 'Select a country first';
        }
    }
    updatePlaceholder() {
        if (this.currentRule) {
            this.phoneNumber.placeholder = this.currentRule.example;
        } else {
            this.phoneNumber.placeholder = '793908671';
        }
    }
    validatePhoneLive() {
        const phone = this.phoneNumber.value;
        const phoneError = document.getElementById('phoneError');
        if (!this.currentRule) return true;

        // Remove non-digits
        const digitsOnly = phone.replace(/\D/g, '');

        if (digitsOnly.length > 0) {
            const startsWithValid = this.currentRule.startsWith.some(prefix => digitsOnly.startsWith(prefix));
            const lengthValid = digitsOnly.length >= this.currentRule.minLen && digitsOnly.length <= this.currentRule.maxLen;

            if (!startsWithValid) {
                phoneError.textContent = '⚠ Phone must start with ' + this.currentRule.startsWith.join(', ') + ' for ' + this.currentRule.name;
                phoneError.classList.add('show');
                return false;
            }
            if (!lengthValid) {
                phoneError.textContent = '⚠ Phone must be ' + this.currentRule.minLen + '-' + this.currentRule.maxLen + ' digits for ' + this.currentRule.name;
                phoneError.classList.add('show');
                return false;
            }
        }

        phoneError.classList.remove('show');
        return true;
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
        const phone = this.phoneNumber.value.replace(/\D/g, '');
        const fullPhone = code + phone;

        if (!phone) {
            document.getElementById('phoneError').textContent = '⚠ Please enter your phone number';
            document.getElementById('phoneError').classList.add('show');
            isValid = false;
        } else if (this.currentRule) {
            const startsWithValid = this.currentRule.startsWith.some(prefix => phone.startsWith(prefix));
            const lengthValid = phone.length >= this.currentRule.minLen && phone.length <= this.currentRule.maxLen;

            if (!startsWithValid) {
                document.getElementById('phoneError').textContent = '⚠ Phone must start with ' + this.currentRule.startsWith.join(', ') + ' for ' + this.currentRule.name;
                document.getElementById('phoneError').classList.add('show');
                isValid = false;
            } else if (!lengthValid) {
                document.getElementById('phoneError').textContent = '⚠ Phone must be ' + this.currentRule.minLen + '-' + this.currentRule.maxLen + ' digits for ' + this.currentRule.name;
                document.getElementById('phoneError').classList.add('show');
                isValid = false;
            }
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

        const code = this.countryCode.value;
        const phoneDigits = this.phoneNumber.value.replace(/\D/g, '');
        const memberData = {
            name: this.fullName.value.trim(),
            countryCode: code,
            phone: code + phoneDigits,
            email: this.email.value.trim()
        };

        MembersCounter.addMember(memberData);
        document.getElementById('successModal').classList.add('show');
        if (this.whatsappSection) { this.whatsappSection.classList.add('show'); }
        this.form.reset();
        this.phonePrefix.textContent = '+';
        this.phoneNumber.disabled = true;
        this.currentRule = null;
        this.updatePhoneHint();
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
