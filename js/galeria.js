const bicicletas = document.querySelectorAll(".bicicleta-imagens img");
const bicicletasContainer = document.querySelector(".bicicleta-imagens");

bicicletas.forEach((e) => {
  e.addEventListener("click", (e) => {
    const imagem = e.target;
    const media = matchMedia("(min-width: 940px)").matches;
    const gapMedia = matchMedia(
      "(min-width: 460px) and (max-width: 820px)"
    ).matches;
    if (media || gapMedia) {
      bicicletasContainer.prepend(imagem);
    }
  });
});
