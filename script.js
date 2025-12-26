const roles = [
  "Automation Framework Engineer",
  "CI/CD Quality Specialist",
  "Test Platform Builder",
  "Reliability-Focused SDET"
];

let index = 0;
const rotateEl = document.getElementById("rotate");

function rotateText() {
  rotateEl.textContent = roles[index];
  index = (index + 1) % roles.length;
}

rotateText();
setInterval(rotateText, 2000);
