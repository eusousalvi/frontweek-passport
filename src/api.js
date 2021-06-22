const formElement = document.querySelector("#passport-form");
const inputElement = document.querySelector('input[type="text"]');

let userData = {};

async function getDataFromGithub(username) {
  return await fetch(`https://api.github.com/users/${username}`).then((response) => response.json());
}

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  userData = await getDataFromGithub(inputElement.value);
});
