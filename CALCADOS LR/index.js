var abreMenu = document.querySelector('.abre-menu');
var menuLateral = document.querySelector('.menu-lateral');
var fundoEscuro = document.createElement('div');
fundoEscuro.classList.add('fundo-escuro');

abreMenu.addEventListener('click', function() {
  menuLateral.style.left = '0';
  document.body.appendChild(fundoEscuro);
  setTimeout(function() {
    fundoEscuro.classList.add('ativo');
  }, 10);
});

fundoEscuro.addEventListener('click', function() {
  menuLateral.style.left = '-300px';
  fundoEscuro.classList.remove('ativo');
  setTimeout(function() {
    document.body.removeChild(fundoEscuro);
  }, 300);
});