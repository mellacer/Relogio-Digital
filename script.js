const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const btnBg = document.getElementById("btn-bg");
const boxBg = document.getElementById("box-bg");
const fechar = document.querySelector(".fechar");
const cores = document.querySelectorAll(".cores button");

const relogio = setInterval(function time() {
  let dateToday = new Date();

  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
}, 1000);

btnBg.addEventListener("click", () => {
  boxBg.classList.add("ativo");
});

fechar.addEventListener("click", fecharBox);
fechar.addEventListener("touchstart", fecharBox);

function fecharBox(e) {
  e.preventDefault();
  e.stopPropagation();
  boxBg.classList.remove("ativo");
}

cores.forEach((botao) => {
  botao.addEventListener("click", () => {
    const fundo = botao.getAttribute("data-bg");
    document.body.style.background = fundo;
  });
});

function trocaCor(cor) {
  document.body.style.background = cor;
  document.body.style.backgroundImage = "none";
}

function corAleatoria() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundImage = "none";
}

function aplicaCorPersonalizada() {
  const corInput = document.querySelector(".input-cor").value;
  trocaCor(corInput);
}

function escolherImagem(imagem) {
  const reader = new FileReader();

  reader.onload = function (evento) {
    const urlImagem = evento.target.result;
    document.body.style.backgroundImage = `url('${urlImagem}')`;
  };

  reader.readAsDataURL(imagem);
}
