const perguntas = document.querySelectorAll(".pergunta button");
const pergunta = document.querySelector(".pergunta button");

perguntas.forEach((e) =>
  e.addEventListener("click", (e) => {
    const pergunta = document.getElementById(
      e.target.getAttribute("aria-controls")
    );
    pergunta.classList.toggle("ativa");
    if (pergunta.classList.contains("ativa")) {
      e.target.setAttribute("aria-expanded", true);
    } else {
      e.target.setAttribute("aria-expanded", false);
    }
  })
);
