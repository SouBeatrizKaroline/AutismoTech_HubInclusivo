// Alternar contraste
document.getElementById('toggle-contrast').addEventListener('click', function () {
  document.body.classList.toggle('high-contrast');
});

// Aumentar o tamanho do texto
document.getElementById('increase-text').addEventListener('click', function () {
  const root = document.documentElement;
  const currentSize = parseFloat(getComputedStyle(root).fontSize);
  if (currentSize < 32) {
    root.style.fontSize = `${currentSize * 1.1}px`;
  }
});

// Diminuir o tamanho do texto
document.getElementById('decrease-text').addEventListener('click', function () {
  const root = document.documentElement;
  const currentSize = parseFloat(getComputedStyle(root).fontSize);
  if (currentSize > 10) {
    root.style.fontSize = `${currentSize / 1.1}px`;
  }
});

// Resetar o zoom
document.getElementById('reset-zoom').addEventListener('click', function () {
  document.documentElement.style.fontSize = '';
});

// Alternar tradução em Libras
document.getElementById('toggle-libras').addEventListener('click', function () {
  const librasSign = document.getElementById('libras-sign');
  if (librasSign) {
    librasSign.classList.toggle('active');
  } else {
    alert("O componente de Libras ainda não foi implementado!");
  }
});

// Navegação por teclas
document.addEventListener('keydown', function (event) {
  if (event.altKey) {
    switch (event.key) {
      case 'ArrowUp':
        document.getElementById('increase-text').click();
        break;
      case 'ArrowDown':
        document.getElementById('decrease-text').click();
        break;
      case 'ArrowLeft':
        document.getElementById('toggle-contrast').click();
        break;
      case 'ArrowRight':
        document.getElementById('reset-zoom').click();
        break;
    }
    event.preventDefault();
  }
});
