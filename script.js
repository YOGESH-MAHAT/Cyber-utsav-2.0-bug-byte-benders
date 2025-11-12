// script.js
document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("continue-btn");
  const introScreen = document.getElementById("intro-screen");
  const mainContent = document.getElementById("main-content");

  continueBtn.addEventListener("click", () => {
    // Add fade-out effect
    introScreen.classList.add("fade-out");

    // After fade-out transition, hide intro and show main content
    setTimeout(() => {
      introScreen.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1000); // match the transition duration in CSS
  });

  
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
  });
});
