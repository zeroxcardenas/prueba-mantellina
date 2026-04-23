// elementos
const btnProgramacion = document.getElementById('btn-en-vivo');
const radioPlayer = document.getElementById('audio-player');

// URL de la radio 
const streamUrl = "https://stream.zeno.fm/0r0xa792kwzuv";

btnProgramacion.addEventListener('click', () => {
    // Si la fuente está vacía, le asignamos la URL
    if (radioPlayer.src !== streamUrl) {
        radioPlayer.src = streamUrl;
    }

    if (radioPlayer.paused) {
        radioPlayer.play();
        btnProgramacion.innerText = "⏸️ Pausar Radio";
        btnProgramacion.style.backgroundColor = "#e74c3c"; // Cambia a rojo
    } else {
        radioPlayer.pause();
        btnProgramacion.innerText = "▶️ Escuchar Ahora";
        btnProgramacion.style.backgroundColor = "blueviolet"; // Vuelve al color original
    }
});