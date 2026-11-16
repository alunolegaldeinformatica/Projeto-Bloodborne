// INTERATIVIDADE DE MUTAR E DESMUTAR A MÚSICA
const musica = document.getElementById("musica-bloodborne");
const btnMusica = document.getElementById("btn-musica");
let tocando = false;

btnMusica.addEventListener("click", function() {
  if (!tocando) {
    musica.play();
    musica.muted = false;
    btnMusica.textContent = "🔊 Mutar Música";
    tocando = true;
  } else {
    musica.muted = !musica.muted;
    if (musica.muted) {
      btnMusica.textContent = "🔇 Desmutar Música";
    } else {
      btnMusica.textContent = "🔊 Mutar Música";
    }
  }
});

// INTERATIVIDADE DO BOTÃO DE VOLTAR AO INÍCIO
const btnTopo = document.getElementById("btn-topo");

// Mostra o botão apenas quando rolar a página para baixo
window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Faz a página subir ao clicar no botão
btnTopo.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
