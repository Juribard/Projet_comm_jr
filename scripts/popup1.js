let audio = null;

document.getElementById('image-jeu').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Je ne suis pas Julien!");
    // Lancer la musique (adapte le nom du fichier si besoin)
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio('../scripts/ytmp3free.cc_les-nuls-musique-dascenseur-youtubemp3free.org.mp3');
    audio.play();
});