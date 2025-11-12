
document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("continue-btn");
  const introScreen = document.getElementById("intro-screen");
  const mainContent = document.getElementById("main-content");

  continueBtn.addEventListener("click", () => {
    
    introScreen.classList.add("fade-out");

    
    setTimeout(() => {
      introScreen.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1000); 
  });

  
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
  });
});
