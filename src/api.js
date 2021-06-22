const formElement = document.querySelector("#form");

async function getDataFromGithub(username) {
  return await fetch(`https://api.github.com/users/${username}`).then((response) => response.json());
}

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userData = await getDataFromGithub(e.target.login.value);
  const {login, name, avatar_url} = userData;
  const user = {login, name, avatar_url};
  console.log(user)
});
