// Button Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Change Text/Color
document.getElementById("colorBtn").addEventListener("click", function () {
  this.style.backgroundColor = this.style.backgroundColor === "green" ? "#007acc" : "green";
  this.textContent = this.textContent === "Change My Color" ? "Changed!" : "Change My Color";
});

// Hover Effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "salmon";
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
});

// Keypress Detection
document.addEventListener("keydown", (e) => {
  document.getElementById("keypressOutput").textContent = `You pressed: ${e.key}`;
});

// Double Click Secret
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("You discovered the secret! 🎉");
});

// Slideshow
const images = [
  "https://placekitten.com/300/200",
  "https://placekitten.com/301/200",
  "https://placekitten.com/302/200"
];
let currentSlide = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % images.length;
  document.getElementById("slideImg").src = images[currentSlide];
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  document.getElementById("slideImg").src = images[currentSlide];
});

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContent = document.getElementById("tabContent");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabNum = btn.getAttribute("data-tab");
    tabContent.textContent = `You selected Tab ${tabNum}`;
  });
});

// Form Validation
const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateEmail(document.getElementById("email").value)) {
    alert("Please enter a valid email.");
    return;
  }
  if (password.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }
  alert("Form submitted successfully!");
});

// Real-time password feedback
password.addEventListener("input", () => {
  feedback.textContent = password.value.length < 8 ? "Password too short." : "";
});

// Helper function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
