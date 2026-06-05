const form = document.getElementById("verifyForm");
const messageBox = document.getElementById("messageBox");

const whatsappGroup =
"https://chat.whatsapp.com/G9qtX0Yuq61JjrklH8k803?s=cl&p=a&ilr=1";

/* ==========================
   SPEECH
========================== */

function speakSuccess() {
    const msg = new SpeechSynthesisUtterance(
        "You have been verified successfully"
    );
    msg.rate = 1;
    msg.pitch = 1;
    msg.volume = 1;
    speechSynthesis.speak(msg);
}

/* ==========================
   PHONE VALIDATION
   (STRICT COUNTRY FORMAT)
========================== */

function validatePhone(countryCode, phone) {

    const rules = {
        "+254": /^254\d{9}$/,
        "+255": /^255\d{9}$/,
        "+256": /^256\d{9}$/,
        "+250": /^250\d{9}$/,
        "+257": /^257\d{8}$/,
        "+211": /^211\d{9}$/,
        "+234": /^234\d{10}$/,
        "+27": /^27\d{9}$/,
        "+20": /^20\d{9,10}$/,
        "+1": /^1\d{10}$/,
        "+44": /^44\d{10}$/,
        "+91": /^91\d{10}$/,
        "+971": /^971\d{9}$/,
        "+86": /^86\d{11}$/,
        "+81": /^81\d{9,10}$/,
        "+49": /^49\d{10,11}$/,
        "+33": /^33\d{9}$/,
        "+39": /^39\d{9,10}$/,
        "+34": /^34\d{9}$/,
        "+61": /^61\d{9}$/,
        "+55": /^55\d{10,11}$/,
        "+7": /^7\d{10}$/
    };

    return rules[countryCode]
        ? rules[countryCode].test(phone)
        : false;
}

/* ==========================
   FORM SUBMIT
========================== */

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    let phone = document.getElementById("phone").value.trim();

    if (!country || !fullname || !email || !phone) {
        messageBox.innerText = "Please fill all fields";
        return;
    }

    // Ensure no "+" is used
    if (phone.startsWith("+")) {
        phone = phone.replace("+", "");
    }

    if (!validatePhone(country, phone)) {
        messageBox.innerText = "Invalid phone number format";
        return;
    }

    try {

        const res = await fetch("/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                country,
                phone
            })
        });

        const data = await res.json();

        if (data.success) {

            messageBox.innerText = "Verification Successful";

            speakSuccess();

            loadStats();

            setTimeout(() => {
                window.location.href = whatsappGroup;
            }, 2000);

        } else {
            messageBox.innerText = data.message || "Error occurred";
        }

    } catch (err) {
        messageBox.innerText = "Server error";
    }
});

/* ==========================
   LOAD STATS
========================== */

async function loadStats() {
    try {
        const res = await fetch("/api/stats");
        const data = await res.json();

        document.getElementById("verifiedCount").innerText =
            data.verifiedCount;

        document.getElementById("remainingCount").innerText =
            data.remainingCount;

        document.getElementById("countdownDays").innerText =
            data.countdownDays;

    } catch (err) {
        console.log(err);
    }
}

loadStats();

/* ==========================
   ADD ANOTHER NUMBER
========================== */

document.getElementById("addAnotherBtn")
.addEventListener("click", () => {
    form.reset();
    messageBox.innerText = "";
});

/* ==========================
   GO BACK
========================== */

document.getElementById("goBackBtn")
.addEventListener("click", () => {
    history.back();
});

/* ==========================
   DARK / LIGHT MODE
========================== */

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.innerText =
        document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
});

/* ==========================
   CLOCK
========================== */

function updateTime() {
    const now = new Date();

    document.getElementById("currentDate").innerText =
        now.toLocaleDateString();

    document.getElementById("currentTime").innerText =
        now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

/* ==========================
   BATTERY STATUS
========================== */

if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {

        function updateBattery() {
            document.getElementById("batteryStatus").innerText =
                `${Math.round(battery.level * 100)}% ${
                    battery.charging ? "(Charging)" : "(Not Charging)"
                }`;
        }

        updateBattery();

        battery.addEventListener("levelchange", updateBattery);
        battery.addEventListener("chargingchange", updateBattery);

    });
}
