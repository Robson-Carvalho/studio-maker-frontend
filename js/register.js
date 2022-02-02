const form = document.forms.register;

async function registerStudent(name, responsibleName, email, school, series) {
  const url = "https://studio-maker-backend.herokuapp.com/register";
  const data = {
    name,
    responsibleName,
    email,
    school,
    series,
  };
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  await fetch(url, init)
    .then((response) => response.json())
    .then((body) => returnToUser(body));

  clearData();
}

function returnToUser(data){
  const { message } = data
  alert(message)
}

function clearData() {
  form.reset();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, responsibleName, email, school, series } = form;
  registerStudent(
    name.value,
    responsibleName.value,
    email.value,
    school.value,
    series.value
  );
});
