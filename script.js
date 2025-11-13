document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
  });
});

function startChat(studentName) {
  localStorage.setItem("chatWith", studentName);
  window.location.href = "chat.html";
}

function viewHistory() {
  const history = JSON.parse(localStorage.getItem("requestHistory")) || [];
  if (history.length === 0) {
    alert("No collaboration history found yet!");
  } else {
    alert("Your Collaboration History:\n" + history.join("\n"));
  }
}
