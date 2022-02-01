const mobileMenu = document.querySelector(".mobileMenu");
const menu = document.querySelector(".menu");
const actions = document.querySelector(".actions");
const buttonsActions = document.querySelector(".buttons");
const active = "active";
const itens = document.querySelectorAll(".item");

mobileMenu.addEventListener("click", () => {
  actions.classList.toggle(active);
});

itens.forEach((item) => {
  item.addEventListener("click", () => {
    actions.classList.remove(active);
  });
});
