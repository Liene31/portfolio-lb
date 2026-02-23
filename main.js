const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerMenuEl = document.getElementById("hamburger-menu");
const closeIcon = document.getElementById("close-icon");
const menuIcon = document.getElementById("menu-icon");

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerMenuEl.classList.contains("show-menu")) {
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburgerMenuEl.classList.remove("show-menu");
  } else {
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburgerMenuEl.classList.add("show-menu");
  }
});
