const buttons = document.querySelectorAll(".animated-contact-btn");

const gradients = [
  "linear-gradient(135deg, #0f766e, #115e59)",
  "linear-gradient(135deg, #2563eb, #1e40af)",
  "linear-gradient(135deg, #1e293b, #334155)",
  "linear-gradient(135deg, #15803d, #166534)",
  "linear-gradient(135deg, #4c1d95, #6d28d9)"
];

const textColors = ["#ffffff", "#f8fafc", "#e2e8f0", "#f0fdf4", "#f5f3ff"];
const buttonTexts = [
  "Free Consultation",
  "Hire Developers",
  "Get a Quote",
  "Ai Applications",
  "Start Your Project"
];

buttons.forEach((button) => {
  let current = 0;

  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.transition = "color 1.2s ease-in-out, background 1.2s ease-in-out";
  button.style.backgroundImage = gradients[current];
  button.style.color = textColors[current];
  button.style.fontWeight = "600";

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

    requestAnimationFrame(() => {
      overlay.style.opacity = "1";
      overlay.style.transform = "translateY(0)";
    });

    textSpan.style.opacity = "0";
    textSpan.style.transform = "translateY(-10px)";

    setTimeout(() => {
      textSpan.textContent = buttonTexts[next];
      textSpan.style.color = textColors[next];
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
});
