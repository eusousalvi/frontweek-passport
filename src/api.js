const formElement = document.querySelector("#form");

async function getDataFromGithub(username) {
  return await fetch(`https://api.github.com/users/${username}`).then((response) => response.json());
}

function downloadImage(element, filename) {
  html2canvas(element).then((canvas) => {
    let linkEl = document.createElement("a");
    linkEl.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    linkEl.download = `${filename}.jpg`;
    linkEl.click();
  });
}

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userData = await getDataFromGithub(e.target.login.value);
  const { login, name, avatar_url } = userData;
  const user = { login, name, avatar_url };
  downloadImage(formElement, `frontend-week-passport-${name}`);
});
