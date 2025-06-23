// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Added!";
      btn.disabled = true;
      btn.style.backgroundColor = "#4caf50"; // green
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const buttons = document.querySelectorAll(".add-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Added!";
      btn.disabled = true;
      btn.style.backgroundColor = "#4caf50";
    });
  });
});
