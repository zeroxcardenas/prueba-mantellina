// elementos
const btnProgramacion = document.getElementById('btn-en-vivo');
const radioPlayer = document.getElementById('audio-player');

// URL de la radio 
const streamUrl = "https://stream-179.zeno.fm/4r9xunshe18uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI0cjl4dW5zaGUxOHV2IiwiaG9zdCI6InN0cmVhbS0xNzkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjJuRjZoYzJRU3k2Q2FRak1jbGd2UlEiLCJpYXQiOjE3Nzg3MDI0OTcsImV4cCI6MTc3ODcwMjU1N30.1iob8TliuCMxFQZPFjVpBAOio8tuEfptuoSRO98-9rQ";

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
