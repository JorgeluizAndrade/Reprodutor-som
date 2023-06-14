function tocaSom(seletordeaudio) {
  const elemento = document.querySelector(seletordeaudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado");
  }
}

const listadeteclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listadeteclas.length; contador++) {
  const tecla = listadeteclas[contador];
  const instrumento = tecla.classList[1];

  const idaudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idaudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
