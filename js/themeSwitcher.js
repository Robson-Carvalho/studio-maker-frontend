const body = document.body;
const ball = document.querySelector(".ball");
const theme = {
  value: "light",
};

const changeTheme = () => {
  if (theme.value == "light") {
    body.style.backgroundColor = "#000";
    body.style.color = "#FFF";
    theme.value = "dark";
  } else if (theme.value == "dark") {
    body.style.backgroundColor = "#FFF";
    body.style.color = "#000";

    theme.value = "light";
  }
};

ball.addEventListener("click", () => {
  ball.classList.toggle("active");
  changeTheme();
});
