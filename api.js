const formElement = document.querySelector("#form");
const passportName = document.querySelector("#name");
const passportLogin = document.querySelector("#login");
const avatar = document.querySelector("#avatar");
const passportWrapper = document.querySelector("#passportWrapper");
const passport = document.querySelector("#passport");

async function getDataFromGithub(username) {
  return await fetch(`https://api.github.com/users/${username}`).then((response) => response.json());
}

function downloadImage(element, filename) {
      let linkEl = document.createElement("a");
      domtoimage.toPng(element, {width: 340, height: 500}).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        linkEl.href = dataUrl;
        linkEl.download = `${filename}.png`;
        linkEl.click();
    })
    .catch(function (error) {
        console.error('Não foi possível renderizar seu passaporte, aperte F5 e tente novamente! (:', error);
    });
  console.log(domtoimage);
}

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userData = await getDataFromGithub(e.target.login.value);
  const { login, name, avatar_url } = userData;
  passportLogin.innerText = `@${login.toLowerCase()}`;
  passportName.innerHTML = name && name.split(' ').join('&nbsp;');
  avatar.src = avatar_url;
  passport.addEventListener('click', () => {
    downloadImage(passport, `passport_${login}`)
  })
  setTimeout(() => {
    passportWrapper.classList.add("passport--active");
  }, 100);
  
});
