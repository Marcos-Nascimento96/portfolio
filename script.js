// Efeito de digitação
const texto = "Estagiário de TI | Qualidade (QA) | Em transição de carreira";
const el = document.getElementById("digitando");
let i = 0;

function digitar() {
  if (i < texto.length) {
    el.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 50);
  }
}
digitar();

// Botão voltar ao topo
const btn = document.getElementById("btnTopo");

window.onscroll = function () {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// AOS (animações ao rolar)
AOS.init();