const sandwich = document.querySelector(".menu-sandwich");
const menuLinks = document.querySelector(".menu-links");

sandwich.addEventListener("click", () => {
  sandwich.classList.toggle("active");
  menuLinks.classList.toggle("active");
});
