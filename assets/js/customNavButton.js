
const button = document.getElementById("contactButton");


const gradients = [
  "linear-gradient(135deg, #0f766e, #115e59)",   // Deep teal professional tone
  "linear-gradient(135deg, #2563eb, #1e40af)",   // Blue tone (trustworthy, techy)
  "linear-gradient(135deg, #1e293b, #334155)",   // Slate gray (premium corporate)
  "linear-gradient(135deg, #15803d, #166534)",   // Refined green (growth/progress)
  "linear-gradient(135deg, #4c1d95, #6d28d9)"    // Deep violet (innovation, luxury)
];

const textColors = [
  "#ffffff",
  "#f8fafc",
  "#e2e8f0",
  "#f0fdf4",
  "#f5f3ff"
];

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
button.style.transition = "color 1.2s ease-in-out, background 1.2s ease-in-out";
button.style.backgroundImage = gradients[current];
button.style.color = textColors[current];
button.style.fontWeight = "600";

// Text container
const textSpan = document.createElement("span");
textSpan.textContent = buttonTexts[current];
textSpan.style.position = "relative";
textSpan.style.zIndex = "1";
textSpan.style.display = "inline-block";
textSpan.style.transition = "opacity 0.8s ease, transform 0.8s ease";
button.textContent = "";
button.appendChild(textSpan);

setInterval(() => {
  const next = (current + 1) % gradients.length;

  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.zIndex = "0";
  overlay.style.backgroundImage = gradients[next];
  overlay.style.opacity = "0";
  overlay.style.transform = "translateY(20px)";
  overlay.style.transition = "opacity 1s ease, transform 1s ease";
  button.appendChild(overlay);

  // Animate overlay up & fade in
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
    overlay.style.transform = "translateY(0)";
  });

  // Animate text fade-up out
  textSpan.style.opacity = "0";
  textSpan.style.transform = "translateY(-10px)";

  setTimeout(() => {
    // Change text
    textSpan.textContent = buttonTexts[next];
    textSpan.style.color = textColors[next];

    // Fade-up new text in
    textSpan.style.opacity = "1";
    textSpan.style.transform = "translateY(0)";
  }, 500);

  setTimeout(() => {
    button.style.backgroundImage = gradients[next];
    overlay.remove();
    button.style.color = textColors[next];
    current = next;
  }, 1200);
}, 3000);