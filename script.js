// Agregar evento para que el player flotante se muestre al hacer clic en el botón de play
document.getElementById('audio-player').addEventListener('play', function() {
  document.querySelector('.player-flotante').style.display = 'block';
});

// Agregar evento para que el player flotante se oculte al hacer clic en el botón de pause
document.getElementById('audio-player').addEventListener('pause', function() {
  document.querySelector('.player-flotante').style.display = 'none';
});