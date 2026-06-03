/* ======= FLOATING PARTICLES BACKGROUND ======= */
function createFloatingParticles() {
  const container = document.getElementById('bgParticles');
  if (!container) return;
  const particleCount = 40;

  for (let i = 0; i < particleCount; i++) {
    let particle = document.createElement('div');
    particle.className = 'floating-particle';
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';

    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#06b6d4', '#f59e0b'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(particle);
  }
}

/* ======= LOADER ======= */
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");
const progressText = document.getElementById("progressText");
const loaderStatus = document.getElementById("loaderStatus");

const messages = [
  "System Initializing",
  "Loading Neural Network",
  "Synchronizing Data",
  "Establishing Connection",
  "Access Granted"
];

const statusMessages = [
  "Connecting to neural network...",
  "Parsing binary sequences...",
  "Decrypting secure channels...",
  "Optimizing performance...",
  "Welcome to Confronter Tech Wizard"
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeWriter() {
  const currentMsg = messages[msgIndex];

  if (isDeleting) {
    loaderText.textContent = currentMsg.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    loaderText.textContent = currentMsg.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIndex === currentMsg.length) {
    isDeleting = true;
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    typingSpeed = 500;
  }

  const progress = Math.min((msgIndex / messages.length) * 100 + (charIndex / currentMsg.length) * 20, 100);
  const statusIndex = Math.floor((progress / 100) * statusMessages.length);
  if (loaderStatus && statusIndex < statusMessages.length) {
    loaderStatus.textContent = statusMessages[statusIndex];
  }

  if (progressText) {
    progressText.textContent = Math.floor(progress) + "%";
  }

  setTimeout(typeWriter, typingSpeed);
}

function initLoader() {
  if (!loaderText) return;
  typeWriter();

  // Create loader particles
  const particlesContainer = document.getElementById("particles");
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      let particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.background = [
        "#3b82f6", "#8b5cf6", "#10b981", "#06b6d4", "#f59e0b"
      ][Math.floor(Math.random() * 5)];
      particle.style.boxShadow = "0 0 " + (size * 3) + "px currentColor";
      particle.style.animationDuration = (Math.random() * 5 + 3) + "s";
      particle.style.animationDelay = (Math.random() * 5) + "s";
      particlesContainer.appendChild(particle);
    }
  }

  // Binary rain
  const binaryRain = document.getElementById("binaryRain");
  if (binaryRain) {
    for (let i = 0; i < 80; i++) {
      let span = document.createElement("span");
      span.className = "binary";
      span.innerText = Math.random() > 0.5 ? "101010" : "010101";
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = (Math.random() * 4 + 2) + "s";
      span.style.color = [
        "#3b82f6", "#8b5cf6", "#10b981", "#06b6d4", "#f59e0b"
      ][Math.floor(Math.random() * 5)];
      span.style.fontSize = (Math.random() * 12 + 8) + "px";
      span.style.animationDelay = (Math.random() * 3) + "s";
      binaryRain.appendChild(span);
    }
  }

  // Hide loader after animation
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.8s ease-out";
      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }
  }, 3200);
}

/* ======= SIDEBAR ======= */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main");

  sidebar.classList.toggle("show");

  if (window.innerWidth > 900) {
    sidebar.classList.toggle("hide");
    main.classList.toggle("full");
  }
}

function setActive(element) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
}

function showAlert(service) {
  alert('Coming soon: ' + service);
}

/* ======= TIME ======= */
function updateClock() {
  const now = new Date();

  const timeEl = document.getElementById("time");
  if (timeEl) {
    timeEl.innerHTML = '<i class="fas fa-clock"></i> ' + now.toLocaleTimeString();
  }

  let hour = now.getHours();
  let greet = "Good Evening";

  if (hour < 12) {
    greet = "Good Morning";
  } else if (hour < 17) {
    greet = "Good Afternoon";
  }

  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    greetingEl.innerHTML = '<i class="fas fa-bolt"></i> ' + greet;
  }
}

/* ======= BATTERY ======= */
async function batteryInfo() {
  if (navigator.getBattery) {
    const battery = await navigator.getBattery();

    function updateBattery() {
      let level = Math.floor(battery.level * 100);
      let charging = battery.charging ? "Charging" : "Not Charging";

      const batteryEl = document.getElementById("battery");
      if (batteryEl) {
        batteryEl.innerHTML = '<i class="fas fa-battery-three-quarters"></i> ' + level + '% - ' + charging;
      }
    }

    updateBattery();
    battery.addEventListener("chargingchange", updateBattery);
    battery.addEventListener("levelchange", updateBattery);
  }
}

/* ======= THEME ======= */
function toggleTheme() {
  document.body.classList.toggle("light");

  let icon = document.getElementById("themeIcon");
  if (icon) {
    if (document.body.classList.contains("light")) {
      icon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      icon.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
}

/* ======= AUTO CLOSE MOBILE SIDEBAR ======= */
function initMobileSidebar() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 900) {
        document.getElementById("sidebar").classList.remove("show");
      }
    });
  });
}

/* ======= PAYMENTS CLOCK & GREETING ======= */
function updatePaymentsClock() {
  const now = new Date();
  const h = now.getHours();

  let g = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : h < 21 ? 'Good Evening' : 'Good Night';

  const paymentsGreetingEl = document.getElementById("paymentsGreeting");
  const paymentsClockEl = document.getElementById("paymentsClock");

  if (paymentsGreetingEl) {
    paymentsGreetingEl.textContent = g + '!';
  }

  if (paymentsClockEl) {
    paymentsClockEl.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
}

/* ======= INITIALIZATION ======= */
document.addEventListener('DOMContentLoaded', function() {
  createFloatingParticles();
  initLoader();
  updateClock();
  setInterval(updateClock, 1000);
  batteryInfo();
  initMobileSidebar();
  updatePaymentsClock();
  setInterval(updatePaymentsClock, 1000);
});
