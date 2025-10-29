const button = document.getElementById("contactButton");

const gradients = [
  "linear-gradient(135deg, #1b8f3a, #34a853)",
  "linear-gradient(135deg, #28b053, #00c6ff)",
  "linear-gradient(135deg, #ff416c, #ff4b2b)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)"
];

const textColors = [
  "#ffffff",
  "#f7f9ff",
  "#fff7f7",
  "#f0e6ff",
  "#5a2a2a"
];

// Button text messages that will change each cycle
const buttonTexts = [
  "Contact Us",
  "Let's Talk",
  "Get a Quote",
  "Work With Us",
  "Start Your Project"
];

let current = 0;

// Base styles
button.style.position = "relative";
button.style.overflow = "hidden";
button.style.transition = "color 1.2s ease-in-out";
button.style.backgroundImage = gradients[current];
button.style.color = textColors[current];

// Add text fade animation container
const textSpan = document.createElement("span");
textSpan.textContent = buttonTexts[current];
textSpan.style.position = "relative";
textSpan.style.zIndex = "1";
textSpan.style.transition = "opacity 1s ease-in-out";
button.textContent = "";
button.appendChild(textSpan);

setInterval(() => {
  const next = (current + 1) % gradients.length;

  // Background overlay fade
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.zIndex = "0";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 1.2s ease-in-out";
  overlay.style.backgroundImage = gradients[next];
  button.appendChild(overlay);

  // Fade in next background
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
  });

  // Smooth text fade-out/in
  textSpan.style.opacity = "0";
  setTimeout(() => {
    textSpan.textContent = buttonTexts[next];
    textSpan.style.color = textColors[next];
    textSpan.style.opacity = "1";
  }, 600); // halfway point

  // After fade completes
  setTimeout(() => {
    button.style.backgroundImage = gradients[next];
    overlay.remove();
    button.style.color = textColors[next];
    current = next;
  }, 1200);
}, 3000);
