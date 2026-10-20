const START_LIKES = 0;
let likes = START_LIKES;

const likeBtn = document.getElementById("like-btn");
const resetBtn = document.getElementById("reset-btn");
const likeCount = document.getElementById("like-count");
const themeToggle = document.getElementById("theme-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const panels = document.querySelectorAll(".panel");

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = likes;
});

// Reset: back to the starting count
resetBtn.addEventListener("click", () => {
  likes = START_LIKES;
  likeCount.textContent = likes;
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
  document.getElementById("theme-text").textContent = themeToggle.checked ? "Light mode" : "Dark mode";
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    link.classList.add("active");
    document.getElementById(link.dataset.target).classList.add("active");
  });
});