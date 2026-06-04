// ===== COUNTRY DATA WITH PHONE FORMATS =====
const countryData = [
    { code: "AF", name: "Afghanistan", dial: "+93", format: /^\d{9}$/, hint: "9 digits (e.g., 701234567)" },
    { code: "AL", name: "Albania", dial: "+355", format: /^\d{9}$/, hint: "9 digits (e.g., 661234567)" },
    { code: "DZ", name: "Algeria", dial: "+213", format: /^\d{9}$/, hint: "9 digits (e.g., 551234567)" },
    { code: "AD", name: "Andorra", dial: "+376", format: /^\d{6}$/, hint: "6 digits (e.g., 312345)" },
    { code: "AO", name: "Angola", dial: "+244", format: /^\d{9}$/, hint: "9 digits (e.g., 923456789)" },
    { code: "AR", name: "Argentina", dial: "+54", format: /^\d{10}$/, hint: "10 digits (e.g., 91123456789)" },
    { code: "AM", name: "Armenia", dial: "+374", format: /^\d{8}$/, hint: "8 digits (e.g., 77123456)" },
    { code: "AU", name: "Australia", dial: "+61", format: /^\d{9}$/, hint: "9 digits (e.g., 412345678)" },
    { code: "AT", name: "Austria", dial: "+43", format: /^\d{10,11}$/, hint: "10-11 digits (e.g., 664123456)" },
    { code: "AZ", name: "Azerbaijan", dial: "+994", format: /^\d{9}$/, hint: "9 digits (e.g., 401234567)" },
    { code: "BS", name: "Bahamas", dial: "+1-242", format: /^\d{7}$/, hint: "7 digits (e.g., 3591234)" },
    { code: "BH", name: "Bahrain", dial: "+973", format: /^\d{8}$/, hint: "8 digits (e.g., 36001234)" },
    { code: "BD", name: "Bangladesh", dial: "+880", format: /^\d{10}$/, hint: "10 digits (e.g., 1712345678)" },
    { code: "BY", name: "Belarus", dial: "+375", format: /^\d{9}$/, hint: "9 digits (e.g., 291234567)" },
    { code: "BE", name: "Belgium", dial: "+32", format: /^\d{9}$/, hint: "9 digits (e.g., 470123456)" },
    { code: "BZ", name: "Belize", dial: "+501", format: /^\d{7}$/, hint: "7 digits (e.g., 6101234)" },
    { code: "BJ", name: "Benin", dial: "+229", format: /^\d{8}$/, hint: "8 digits (e.g., 90123456)" },
    { code: "BT", name: "Bhutan", dial: "+975", format: /^\d{8}$/, hint: "8 digits (e.g., 17123456)" },
    { code: "BO", name: "Bolivia", dial: "+591", format: /^\d{8}$/, hint: "8 digits (e.g., 71234567)" },
    { code: "BA", name: "Bosnia and Herzegovina", dial: "+387", format: /^\d{8}$/, hint: "8 digits (e.g., 61123456)" },
    { code: "BW", name: "Botswana", dial: "+267", format: /^\d{8}$/, hint: "8 digits (e.g., 74123456)" },
    { code: "BR", name: "Brazil", dial: "+55", format: /^\d{11}$/, hint: "11 digits (e.g., 11912345678)" },
    { code: "BN", name: "Brunei", dial: "+673", format: /^\d{7}$/, hint: "7 digits (e.g., 7123456)" },
    { code: "BG", name: "Bulgaria", dial: "+359", format: /^\d{9}$/, hint: "9 digits (e.g., 871234567)" },
    { code: "BF", name: "Burkina Faso", dial: "+226", format: /^\d{8}$/, hint: "8 digits (e.g., 70123456)" },
    { code: "BI", name: "Burundi", dial: "+257", format: /^\d{8}$/, hint: "8 digits (e.g., 79123456)" },
    { code: "KH", name: "Cambodia", dial: "+855", format: /^\d{8,9}$/, hint: "8-9 digits (e.g., 91234567)" },
    { code: "CM", name: "Cameroon", dial: "+237", format: /^\d{9}$/, hint: "9 digits (e.g., 671234567)" },
    { code: "CA", name: "Canada", dial: "+1", format: /^\d{10}$/, hint: "10 digits (e.g., 4161234567)" },
    { code: "CV", name: "Cape Verde", dial: "+238", format: /^\d{7}$/, hint: "7 digits (e.g., 9123456)" },
    { code: "CF", name: "Central African Republic", dial: "+236", format: /^\d{8}$/, hint: "8 digits (e.g., 70123456)" },
    { code: "TD", name: "Chad", dial: "+235", format: /^\d{8}$/, hint: "8 digits (e.g., 63123456)" },
    { code: "CL", name: "Chile", dial: "+56", format: /^\d{9}$/, hint: "9 digits (e.g., 912345678)" },
    { code: "CN", name: "China", dial: "+86", format: /^\d{11}$/, hint: "11 digits (e.g., 13800138000)" },
    { code: "CO", name: "Colombia", dial: "+57", format: /^\d{10}$/, hint: "10 digits (e.g., 3123456789)" },
    { code: "KM", name: "Comoros", dial: "+269", format: /^\d{7}$/, hint: "7 digits (e.g., 3212345)" },
    { code: "CG", name: "Congo", dial: "+242", format: /^\d{9}$/, hint: "9 digits (e.g., 055123456)" },
    { code: "CD", name: "Congo (DRC)", dial: "+243", format: /^\d{9}$/, hint: "9 digits (e.g., 812345678)" },
    { code: "CR", name: "Costa Rica", dial: "+506", format: /^\d{8}$/, hint: "8 digits (e.g., 83123456)" },
    { code: "HR", name: "Croatia", dial: "+385", format: /^\d{9}$/, hint: "9 digits (e.g., 911234567)" },
    { code: "CU", name: "Cuba", dial: "+53", format: /^\d{8}$/, hint: "8 digits (e.g., 51234567)" },
    { code: "CY", name: "Cyprus", dial: "+357", format: /^\d{8}$/, hint: "8 digits (e.g., 96123456)" },
    { code: "CZ", name: "Czech Republic", dial: "+420", format: /^\d{9}$/, hint: "9 digits (e.g., 601123456)" },
    { code: "DK", name: "Denmark", dial: "+45", format: /^\d{8}$/, hint: "8 digits (e.g., 20123456)" },
    { code: "DJ", name: "Djibouti", dial: "+253", format: /^\d{8}$/, hint: "8 digits (e.g., 77123456)" },
    { code: "DO", name: "Dominican Republic", dial: "+1-809", format: /^\d{10}$/, hint: "10 digits (e.g., 8091234567)" },
    { code: "EC", name: "Ecuador", dial: "+593", format: /^\d{9}$/, hint: "9 digits (e.g., 991234567)" },
    { code: "EG", name: "Egypt", dial: "+20", format: /^\d{10}$/, hint: "10 digits (e.g., 1012345678)" },
    { code: "SV", name: "El Salvador", dial: "+503", format: /^\d{8}$/, hint: "8 digits (e.g., 70123456)" },
    { code: "GQ", name: "Equatorial Guinea", dial: "+240", format: /^\d{9}$/, hint: "9 digits (e.g., 222123456)" },
    { code: "ER", name: "Eritrea", dial: "+291", format: /^\d{7}$/, hint: "7 digits (e.g., 7123456)" },
    { code: "EE", name: "Estonia", dial: "+372", format: /^\d{7,8}$/, hint: "7-8 digits (e.g., 5123456)" },
    { code: "ET", name: "Ethiopia", dial: "+251", format: /^\d{9}$/, hint: "9 digits (e.g., 911234567)" },
    { code: "FJ", name: "Fiji", dial: "+679", format: /^\d{7}$/, hint: "7 digits (e.g., 7012345)" },
    { code: "FI", name: "Finland", dial: "+358", format: /^\d{9,10}$/, hint: "9-10 digits (e.g., 401234567)" },
    { code: "FR", name: "France", dial: "+33", format: /^\d{9}$/, hint: "9 digits (e.g., 612345678)" },
    { code: "GA", name: "Gabon", dial: "+241", format: /^\d{8}$/, hint: "8 digits (e.g., 06123456)" },
    { code: "GM", name: "Gambia", dial: "+220", format: /^\d{7}$/, hint: "7 digits (e.g., 3012345)" },
    { code: "GE", name: "Georgia", dial: "+995", format: /^\d{9}$/, hint: "9 digits (e.g., 555123456)" },
    { code: "DE", name: "Germany", dial: "+49", format: /^\d{10,11}$/, hint: "10-11 digits (e.g., 15123456789)" },
    { code: "GH", name: "Ghana", dial: "+233", format: /^\d{9}$/, hint: "9 digits (e.g., 241234567)" },
    { code: "GR", name: "Greece", dial: "+30", format: /^\d{10}$/, hint: "10 digits (e.g., 6912345678)" },
    { code: "GT", name: "Guatemala", dial: "+502", format: /^\d{8}$/, hint: "8 digits (e.g., 51234567)" },
    { code: "GN", name: "Guinea", dial: "+224", format: /^\d{9}$/, hint: "9 digits (e.g., 621123456)" },
    { code: "GW", name: "Guinea-Bissau", dial: "+245", format: /^\d{7}$/, hint: "7 digits (e.g., 9551234)" },
    { code: "GY", name: "Guyana", dial: "+592", format: /^\d{7}$/, hint: "7 digits (e.g., 6091234)" },
    { code: "HT", name: "Haiti", dial: "+509", format: /^\d{8}$/, hint: "8 digits (e.g., 34123456)" },
    { code: "HN", name: "Honduras", dial: "+504", format: /^\d{8}$/, hint: "8 digits (e.g., 91234567)" },
    { code: "HK", name: "Hong Kong", dial: "+852", format: /^\d{8}$/, hint: "8 digits (e.g., 91234567)" },
    { code: "HU", name: "Hungary", dial: "+36", format: /^\d{9}$/, hint: "9 digits (e.g., 201234567)" },
    { code: "IS", name: "Iceland", dial: "+354", format: /^\d{7}$/, hint: "7 digits (e.g., 6123456)" },
    { code: "IN", name: "India", dial: "+91", format: /^\d{10}$/, hint: "10 digits (e.g., 9876543210)" },
    { code: "ID", name: "Indonesia", dial: "+62", format: /^\d{10,12}$/, hint: "10-12 digits (e.g., 8123456789)" },
    { code: "IR", name: "Iran", dial: "+98", format: /^\d{10}$/, hint: "10 digits (e.g., 9123456789)" },
    { code: "IQ", name: "Iraq", dial: "+964", format: /^\d{10}$/, hint: "10 digits (e.g., 7701234567)" },
    { code: "IE", name: "Ireland", dial: "+353", format: /^\d{9}$/, hint: "9 digits (e.g., 851234567)" },
    { code: "IL", name: "Israel", dial: "+972", format: /^\d{9}$/, hint: "9 digits (e.g., 501234567)" },
    { code: "IT", name: "Italy", dial: "+39", format: /^\d{10}$/, hint: "10 digits (e.g., 3123456789)" },
    { code: "JM", name: "Jamaica", dial: "+1-876", format: /^\d{7}$/, hint: "7 digits (e.g., 3012345)" },
    { code: "JP", name: "Japan", dial: "+81", format: /^\d{10}$/, hint: "10 digits (e.g., 9012345678)" },
    { code: "JO", name: "Jordan", dial: "+962", format: /^\d{9}$/, hint: "9 digits (e.g., 791234567)" },
    { code: "KZ", name: "Kazakhstan", dial: "+7", format: /^\d{10}$/, hint: "10 digits (e.g., 7012345678)" },
    { code: "KE", name: "Kenya", dial: "+254", format: /^\d{9}$/, hint: "9 digits (e.g., 712345678 or 793908671)" },
    { code: "KI", name: "Kiribati", dial: "+686", format: /^\d{5}$/, hint: "5 digits (e.g., 12345)" },
    { code: "KW", name: "Kuwait", dial: "+965", format: /^\d{8}$/, hint: "8 digits (e.g., 51234567)" },
    { code: "KG", name: "Kyrgyzstan", dial: "+996", format: /^\d{9}$/, hint: "9 digits (e.g., 700123456)" },
    { code: "LA", name: "Laos", dial: "+856", format: /^\d{10}$/, hint: "10 digits (e.g., 2023456789)" },
    { code: "LV", name: "Latvia", dial: "+371", format: /^\d{8}$/, hint: "8 digits (e.g., 21234567)" },
    { code: "LB", name: "Lebanon", dial: "+961", format: /^\d{7,8}$/, hint: "7-8 digits (e.g., 3123456)" },
    { code: "LS", name: "Lesotho", dial: "+266", format: /^\d{8}$/, hint: "8 digits (e.g., 59123456)" },
    { code: "LR", name: "Liberia", dial: "+231", format: /^\d{7,8}$/, hint: "7-8 digits (e.g., 77012345)" },
    { code: "LY", name: "Libya", dial: "+218", format: /^\d{9,10}$/, hint: "9-10 digits (e.g., 912345678)" },
    { code: "LI", name: "Liechtenstein", dial: "+423", format: /^\d{7}$/, hint: "7 digits (e.g., 2345678)" },
    { code: "LT", name: "Lithuania", dial: "+370", format: /^\d{8}$/, hint: "8 digits (e.g., 61234567)" },
    { code: "LU", name: "Luxembourg", dial: "+352", format: /^\d{9}$/, hint: "9 digits (e.g., 621123456)" },
    { code: "MO", name: "Macau", dial: "+853", format: /^\d{8}$/, hint: "8 digits (e.g., 66123456)" },
    { code: "MG", name: "Madagascar", dial: "+261", format: /^\d{9}$/, hint: "9 digits (e.g., 321234567)" },
    { code: "MW", name: "Malawi", dial: "+265", format: /^\d{9}$/, hint: "9 digits (e.g., 881234567)" },
    { code: "MY", name: "Malaysia", dial: "+60", format: /^\d{9,10}$/, hint: "9-10 digits (e.g., 123456789)" },
    { code: "MV", name: "Maldives", dial: "+960", format: /^\d{7}$/, hint: "7 digits (e.g., 7712345)" },
    { code: "ML", name: "Mali", dial: "+223", format: /^\d{8}$/, hint: "8 digits (e.g., 70123456)" },
    { code: "MT", name: "Malta", dial: "+356", format: /^\d{8}$/, hint: "8 digits (e.g., 77123456)" },
    { code: "MR", name: "Mauritania", dial: "+222", format: /^\d{8}$/, hint: "8 digits (e.g., 22123456)" },
    { code: "MU", name: "Mauritius", dial: "+230", format: /^\d{8}$/, hint: "8 digits (e.g., 51234567)" },
    { code: "MX", name: "Mexico", dial: "+52", format: /^\d{10}$/, hint: "10 digits (e.g., 5512345678)" },
    { code: "MD", name: "Moldova", dial: "+373", format: /^\d{8}$/, hint: "8 digits (e.g., 60123456)" },
    { code: "MC", name: "Monaco", dial: "+377", format: /^\d{8,9}$/, hint: "8-9 digits (e.g., 61234567)" },
    { code: "MN", name: "Mongolia", dial: "+976", format: /^\d{8}$/, hint: "8 digits (e.g., 88123456)" },
    { code: "ME", name: "Montenegro", dial: "+382", format: /^\d{8}$/, hint: "8 digits (e.g., 67123456)" },
    { code: "MA", name: "Morocco", dial: "+212", format: /^\d{9}$/, hint: "9 digits (e.g., 612345678)" },
    { code: "MZ", name: "Mozambique", dial: "+258", format: /^\d{9}$/, hint: "9 digits (e.g., 841234567)" },
    { code: "MM", name: "Myanmar", dial: "+95", format: /^\d{8,10}$/, hint: "8-10 digits (e.g., 91234567)" },
    { code: "NA", name: "Namibia", dial: "+264", format: /^\d{9}$/, hint: "9 digits (e.g., 811234567)" },
    { code: "NR", name: "Nauru", dial: "+674", format: /^\d{7}$/, hint: "7 digits (e.g., 5551234)" },
    { code: "NP", name: "Nepal", dial: "+977", format: /^\d{10}$/, hint: "10 digits (e.g., 9801234567)" },
    { code: "NL", name: "Netherlands", dial: "+31", format: /^\d{9}$/, hint: "9 digits (e.g., 612345678)" },
    { code: "NZ", name: "New Zealand", dial: "+64", format: /^\d{8,10}$/, hint: "8-10 digits (e.g., 21234567)" },
    { code: "NI", name: "Nicaragua", dial: "+505", format: /^\d{8}$/, hint: "8 digits (e.g., 81234567)" },
    { code: "NE", name: "Niger", dial: "+227", format: /^\d{8}$/, hint: "8 digits (e.g., 90123456)" },
    { code: "NG", name: "Nigeria", dial: "+234", format: /^\d{10}$/, hint: "10 digits (e.g., 8012345678)" },
    { code: "KP", name: "North Korea", dial: "+850", format: /^\d{8,10}$/, hint: "8-10 digits" },
    { code: "MK", name: "North Macedonia", dial: "+389", format: /^\d{8}$/, hint: "8 digits (e.g., 70123456)" },
    { code: "NO", name: "Norway", dial: "+47", format: /^\d{8}$/, hint: "8 digits (e.g., 41234567)" },
    { code: "OM", name: "Oman", dial: "+968", format: /^\d{8}$/, hint: "8 digits (e.g., 90123456)" },
    { code: "PK", name: "Pakistan", dial: "+92", format: /^\d{10}$/, hint: "10 digits (e.g., 3012345678)" },
    { code: "PW", name: "Palau", dial: "+680", format: /^\d{7}$/, hint: "7 digits (e.g., 7751234)" },
    { code: "PS", name: "Palestine", dial: "+970", format: /^\d{9}$/, hint: "9 digits (e.g., 591234567)" },
    { code: "PA", name: "Panama", dial: "+507", format: /^\d{8}$/, hint: "8 digits (e.g., 61234567)" },
    { code: "PG", name: "Papua New Guinea", dial: "+675", format: /^\d{8}$/, hint: "8 digits (e.g., 70123456)" },
    { code: "PY", name: "Paraguay", dial: "+595", format: /^\d{9}$/, hint: "9 digits (e.g., 961234567)" },
    { code: "PE", name: "Peru", dial: "+51", format: /^\d{9}$/, hint: "9 digits (e.g., 912345678)" },
    { code: "PH", name: "Philippines", dial: "+63", format: /^\d{10}$/, hint: "10 digits (e.g., 9123456789)" },
    { code: "PL", name: "Poland", dial: "+48", format: /^\d{9}$/, hint: "9 digits (e.g., 512345678)" },
    { code: "PT", name: "Portugal", dial: "+351", format: /^\d{9}$/, hint: "9 digits (e.g., 912345678)" },
    { code: "PR", name: "Puerto Rico", dial: "+1-787", format: /^\d{10}$/, hint: "10 digits" },
    { code: "QA", name: "Qatar", dial: "+974", format: /^\d{8}$/, hint: "8 digits (e.g., 33123456)" },
    { code: "RO", name: "Romania", dial: "+40", format: /^\d{9}$/, hint: "9 digits (e.g., 712345678)" },
    { code: "RU", name: "Russia", dial: "+7", format: /^\d{10}$/, hint: "10 digits (e.g., 9123456789)" },
    { code: "RW", name: "Rwanda", dial: "+250", format: /^\d{9}$/, hint: "9 digits (e.g., 781234567)" },
    { code: "SA", name: "Saudi Arabia", dial: "+966", format: /^\d{9}$/, hint: "9 digits (e.g., 512345678)" },
    { code: "SN", name: "Senegal", dial: "+221", format: /^\d{9}$/, hint: "9 digits (e.g., 701234567)" },
    { code: "RS", name: "Serbia", dial: "+381", format: /^\d{8,9}$/, hint: "8-9 digits (e.g., 64123456)" },
    { code: "SG", name: "Singapore", dial: "+65", format: /^\d{8}$/, hint: "8 digits (e.g., 81234567)" },
    { code: "SK", name: "Slovakia", dial: "+421", format: /^\d{9}$/, hint: "9 digits (e.g., 901234567)" },
    { code: "SI", name: "Slovenia", dial: "+386", format: /^\d{8}$/, hint: "8 digits (e.g., 40123456)" },
    { code: "SO", name: "Somalia", dial: "+252", format: /^\d{8,9}$/, hint: "8-9 digits (e.g., 61234567)" },
    { code: "ZA", name: "South Africa", dial: "+27", format: /^\d{9}$/, hint: "9 digits (e.g., 831234567)" },
    { code: "KR", name: "South Korea", dial: "+82", format: /^\d{9,10}$/, hint: "9-10 digits (e.g., 1012345678)" },
    { code: "SS", name: "South Sudan", dial: "+211", format: /^\d{9}$/, hint: "9 digits (e.g., 912345678)" },
    { code: "ES", name: "Spain", dial: "+34", format: /^\d{9}$/, hint: "9 digits (e.g., 612345678)" },
    { code: "LK", name: "Sri Lanka", dial: "+94", format: /^\d{9}$/, hint: "9 digits (e.g., 712345678)" },
    { code: "SD", name: "Sudan", dial: "+249", format: /^\d{9}$/, hint: "9 digits (e.g., 911234567)" },
    { code: "SR", name: "Suriname", dial: "+597", format: /^\d{7}$/, hint: "7 digits (e.g., 7412345)" },
    { code: "SE", name: "Sweden", dial: "+46", format: /^\d{9}$/, hint: "9 digits (e.g., 701234567)" },
    { code: "CH", name: "Switzerland", dial: "+41", format: /^\d{9}$/, hint: "9 digits (e.g., 791234567)" },
    { code: "SY", name: "Syria", dial: "+963", format: /^\d{9}$/, hint: "9 digits (e.g., 933123456)" },
    { code: "TW", name: "Taiwan", dial: "+886", format: /^\d{9}$/, hint: "9 digits (e.g., 912345678)" },
    { code: "TJ", name: "Tajikistan", dial: "+992", format: /^\d{9}$/, hint: "9 digits (e.g., 917123456)" },
    { code: "TZ", name: "Tanzania", dial: "+255", format: /^\d{9}$/, hint: "9 digits (e.g., 712345678)" },
    { code: "TH", name: "Thailand", dial: "+66", format: /^\d{9}$/, hint: "9 digits (e.g., 812345678)" },
    { code: "TG", name: "Togo", dial: "+228", format: /^\d{8}$/, hint: "8 digits (e.g., 90123456)" },
    { code: "TT", name: "Trinidad and Tobago", dial: "+1-868", format: /^\d{7}$/, hint: "7 digits (e.g., 6123456)" },
    { code: "TN", name: "Tunisia", dial: "+216", format: /^\d{8}$/, hint: "8 digits (e.g., 20123456)" },
    { code: "TR", name: "Turkey", dial: "+90", format: /^\d{10}$/, hint: "10 digits (e.g., 5321234567)" },
    { code: "TM", name: "Turkmenistan", dial: "+993", format: /^\d{8}$/, hint: "8 digits (e.g., 65123456)" },
    { code: "UG", name: "Uganda", dial: "+256", format: /^\d{9}$/, hint: "9 digits (e.g., 701234567)" },
    { code: "UA", name: "Ukraine", dial: "+380", format: /^\d{9}$/, hint: "9 digits (e.g., 671234567)" },
    { code: "AE", name: "United Arab Emirates", dial: "+971", format: /^\d{9}$/, hint: "9 digits (e.g., 501234567)" },
    { code: "GB", name: "United Kingdom", dial: "+44", format: /^\d{10}$/, hint: "10 digits (e.g., 7712345678)" },
    { code: "US", name: "United States", dial: "+1", format: /^\d{10}$/, hint: "10 digits (e.g., 2125550123)" },
    { code: "UY", name: "Uruguay", dial: "+598", format: /^\d{8}$/, hint: "8 digits (e.g., 94123456)" },
    { code: "UZ", name: "Uzbekistan", dial: "+998", format: /^\d{9}$/, hint: "9 digits (e.g., 901234567)" },
    { code: "VE", name: "Venezuela", dial: "+58", format: /^\d{10}$/, hint: "10 digits (e.g., 4121234567)" },
    { code: "VN", name: "Vietnam", dial: "+84", format: /^\d{9,10}$/, hint: "9-10 digits (e.g., 912345678)" },
    { code: "YE", name: "Yemen", dial: "+967", format: /^\d{9}$/, hint: "9 digits (e.g., 711234567)" },
    { code: "ZM", name: "Zambia", dial: "+260", format: /^\d{9}$/, hint: "9 digits (e.g., 971234567)" },
    { code: "ZW", name: "Zimbabwe", dial: "+263", format: /^\d{9}$/, hint: "9 digits (e.g., 771234567)" }
];

// ===== DOM ELEMENTS =====
const countrySelect = document.getElementById('countrySelect');
const countryCode = document.getElementById('countryCode');
const phoneNumber = document.getElementById('phoneNumber');
const formatHint = document.getElementById('formatHint');
const vcfForm = document.getElementById('vcfForm');
const validationMsg = document.getElementById('validationMsg');
const successOverlay = document.getElementById('successOverlay');
const redirectSeconds = document.getElementById('redirectSeconds');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const verifiedCount = document.getElementById('verifiedCount');
const remainingCount = document.getElementById('remainingCount');
const liveTime = document.getElementById('liveTime');
const liveDate = document.getElementById('liveDate');
const batteryInfo = document.getElementById('batteryInfo');
const chargingStatus = document.getElementById('chargingStatus');
const countdownDisplay = document.getElementById('countdownDisplay');
const downloadVcfBtn = document.getElementById('downloadVcfBtn');

// ===== WHATSAPP GROUP LINK =====
const GROUP_LINK = 'https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1';

// ===== VCF RELEASE DATE =====
const VCF_RELEASE_DATE = new Date();
VCF_RELEASE_DATE.setDate(VCF_RELEASE_DATE.getDate() + 30);

// ===== INITIALIZE =====
function init() {
    populateCountries();
    startLiveClock();
    startBatteryMonitor();
    startCountdown();
    loadStats();
    setupTheme();
}

// ===== POPULATE COUNTRIES =====
function populateCountries() {
    countryData.sort((a, b) => a.name.localeCompare(b.name));
    countryData.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.name} (${country.dial})`;
        countrySelect.appendChild(option);
    });
}

// ===== COUNTRY CHANGE HANDLER =====
countrySelect.addEventListener('change', function() {
    const selected = countryData.find(c => c.code === this.value);
    if (selected) {
        countryCode.textContent = selected.dial;
        formatHint.textContent = `Format: ${selected.hint}`;
        phoneNumber.placeholder = selected.hint.split('(')[1]?.replace(')', '') || 'Enter phone number';
        phoneNumber.value = '';
        phoneNumber.focus();
    }
});

// ===== PHONE VALIDATION =====
function validatePhone() {
    const selected = countryData.find(c => c.code === countrySelect.value);
    if (!selected) {
        showValidation('Please select a country first', 'error');
        return false;
    }

    const rawNumber = phoneNumber.value.replace(/\D/g, '');
    if (!rawNumber) {
        showValidation('Please enter a phone number', 'error');
        return false;
    }

    if (!selected.format.test(rawNumber)) {
        showValidation(`Invalid format for ${selected.name}. ${selected.hint}`, 'error');
        return false;
    }

    showValidation('Valid phone number format!', 'success');
    return true;
}

phoneNumber.addEventListener('blur', validatePhone);
phoneNumber.addEventListener('input', function() {
    validationMsg.textContent = '';
    validationMsg.className = 'validation-msg';
});

function showValidation(msg, type) {
    validationMsg.textContent = msg;
    validationMsg.className = `validation-msg ${type}`;
}

// ===== FORM SUBMISSION =====
vcfForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    if (!fullName) {
        showValidation('Please enter your full name', 'error');
        return;
    }

    if (!validatePhone()) return;

    // Save to localStorage
    saveVerification();

    // Play success sound
    playSuccessSound();

    // Show success overlay
    successOverlay.classList.remove('hidden');

    // Countdown redirect
    let seconds = 2;
    redirectSeconds.textContent = seconds;

    const timer = setInterval(() => {
        seconds--;
        redirectSeconds.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            window.location.href = GROUP_LINK;
        }
    }, 1000);
});

// ===== SUCCESS SOUND =====
function playSuccessSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        const notes = [
            { freq: 523.25, duration: 200 },
            { freq: 659.25, duration: 200 },
            { freq: 783.99, duration: 300 },
            { freq: 1046.50, duration: 500 }
        ];

        let currentTime = audioCtx.currentTime;

        notes.forEach(note => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.frequency.value = note.freq;
            osc.type = 'sine';

            gain.gain.setValueAtTime(0.15, currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, currentTime + note.duration / 1000);

            osc.start(currentTime);
            osc.stop(currentTime + note.duration / 1000);

            currentTime += note.duration / 1000;
        });

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('You were verified successfully');
            utterance.rate = 0.9;
            utterance.pitch = 1.1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);
        }
    } catch (e) {
        console.log('Audio not supported');
    }
}

// ===== GO BACK =====
function goBack() {
    successOverlay.classList.add('hidden');
    vcfForm.reset();
    countryCode.textContent = '+';
    formatHint.textContent = 'Select a country to see format';
    validationMsg.textContent = '';
    validationMsg.className = 'validation-msg';
}

// ===== ADD ANOTHER =====
function addAnother() {
    successOverlay.classList.add('hidden');
    vcfForm.reset();
    countryCode.textContent = '+';
    formatHint.textContent = 'Select a country to see format';
    validationMsg.textContent = '';
    validationMsg.className = 'validation-msg';
    document.getElementById('fullName').focus();
}

// ===== SAVE VERIFICATION =====
function saveVerification() {
    const selected = countryData.find(c => c.code === countrySelect.value);
    const verification = {
        id: Date.now(),
        name: document.getElementById('fullName').value.trim(),
        country: selected.name,
        dialCode: selected.dial,
        phone: phoneNumber.value.replace(/\D/g, ''),
        email: document.getElementById('email').value.trim(),
        bio: document.getElementById('bio').value.trim(),
        timestamp: new Date().toISOString()
    };

    let verifications = JSON.parse(localStorage.getItem('vcfVerifications') || '[]');
    verifications.push(verification);
    localStorage.setItem('vcfVerifications', JSON.stringify(verifications));

    loadStats();
}

// ===== LOAD STATS =====
function loadStats() {
    const verifications = JSON.parse(localStorage.getItem('vcfVerifications') || '[]');
    const total = verifications.length;
    const maxCapacity = 500; // Max capacity
    const remaining = Math.max(0, maxCapacity - total);

    verifiedCount.textContent = total;
    remainingCount.textContent = `${remaining} remaining`;

    // Color change based on capacity
    if (remaining < 50) {
        remainingCount.style.color = 'var(--error)';
    } else if (remaining < 150) {
        remainingCount.style.color = 'var(--warning)';
    } else {
        remainingCount.style.color = 'var(--success)';
    }
}

// ===== THEME TOGGLE =====
function setupTheme() {
    const savedTheme = localStorage.getItem('vcfTheme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('vcfTheme', 'light');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('vcfTheme', 'dark');
        }
    });
}

// ===== LIVE CLOCK =====
function startLiveClock() {
    function updateClock() {
        const now = new Date();
        liveTime.textContent = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        liveDate.textContent = now.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// ===== BATTERY MONITOR =====
function startBatteryMonitor() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            updateBattery(battery);

            battery.addEventListener('levelchange', () => updateBattery(battery));
            battery.addEventListener('chargingchange', () => updateBattery(battery));
        });
    } else {
        batteryInfo.textContent = 'N/A';
    }
}

function updateBattery(battery) {
    const level = Math.round(battery.level * 100);
    batteryInfo.textContent = `${level}%`;

    if (battery.charging) {
        chargingStatus.textContent = '⚡ Charging';
        chargingStatus.style.color = 'var(--success)';
    } else {
        const time = battery.dischargingTime;
        if (time !== Infinity && !isNaN(time)) {
            const hours = Math.floor(time / 3600);
            const mins = Math.floor((time % 3600) / 60);
            chargingStatus.textContent = `${hours}h ${mins}m left`;
        } else {
            chargingStatus.textContent = '';
        }
        chargingStatus.style.color = 'var(--text-secondary)';
    }

    // Color based on level
    if (level <= 20) {
        batteryInfo.style.color = 'var(--error)';
    } else if (level <= 50) {
        batteryInfo.style.color = 'var(--warning)';
    } else {
        batteryInfo.style.color = 'var(--success)';
    }
}

// ===== COUNTDOWN =====
function startCountdown() {
    function updateCountdown() {
        const now = new Date();
        const diff = VCF_RELEASE_DATE - now;

        if (diff <= 0) {
            document.getElementById('countdownDays').textContent = '00';
            document.getElementById('countdownHours').textContent = '00';
            document.getElementById('countdownMinutes').textContent = '00';
            document.getElementById('countdownSeconds').textContent = '00';
            downloadVcfBtn.classList.remove('hidden');
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdownDays').textContent = String(days).padStart(2, '0');
        document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== DOWNLOAD VCF =====
function downloadVCF() {
    const verifications = JSON.parse(localStorage.getItem('vcfVerifications') || '[]');

    if (verifications.length === 0) {
        alert('No verified contacts to download yet!');
        return;
    }

    let vcfContent = '';

    verifications.forEach((v, index) => {
        vcfContent += `BEGIN:VCARD\n`;
        vcfContent += `VERSION:3.0\n`;
        vcfContent += `FN:${v.name}\n`;
        vcfContent += `TEL;TYPE=CELL:${v.dialCode}${v.phone}\n`;
        if (v.email) vcfContent += `EMAIL:${v.email}\n`;
        if (v.bio) vcfContent += `NOTE:${v.bio}\n`;
        vcfContent += `ADR;TYPE=HOME:;;${v.country};;;;\n`;
        vcfContent += `REV:${v.timestamp}\n`;
        vcfContent += `END:VCARD\n`;
    });

    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'confronter_tech_wizard_contacts.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===== INIT ON LOAD =====
document.addEventListener('DOMContentLoaded', init);

