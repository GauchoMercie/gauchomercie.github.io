const player = document.getElementById('player');
const trackList = document.getElementById('trackList').getElementsByTagName('li');
const playButton = document.getElementById('playAlbum');

let currentTrack = 0;

// Cargar primera canción al inicio
player.src = trackList[currentTrack].getAttribute('data-src');
trackList[currentTrack].classList.add('active');

// Al hacer clic en una canción
for (let i = 0; i < trackList.length; i++) {
    trackList[i].addEventListener('click', function () {
        loadTrack(i);
        player.play();
    });
}

// Cuando termina una canción
player.addEventListener('ended', function () {
    nextTrack();
});

// Función para cargar una canción
function loadTrack(index) {
    trackList[currentTrack].classList.remove('active');
    currentTrack = index;
    player.src = trackList[currentTrack].getAttribute('data-src');
    player.load();
    trackList[currentTrack].classList.add('active');
}

// Función para avanzar al siguiente tema
function nextTrack() {
    if (currentTrack < trackList.length - 1) {
        loadTrack(currentTrack + 1);
        player.play();
    } else {
        // Si era el último tema, mostrar otra vez el botón
        playButton.style.display = 'inline';
    }
}

// Cuando se pulsa la imagen del botón principal
playButton.addEventListener('click', function (e) {
    e.preventDefault(); // evita que el <a> haga algo raro
    this.style.display = 'none'; // oculta el botón
    player.play();
});
