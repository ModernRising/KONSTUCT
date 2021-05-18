const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItem = menu.querySelectorAll(".menu__item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger_active");
  menu.classList.toggle("menu_active");

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});
});
