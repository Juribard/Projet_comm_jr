window.addEventListener('DOMContentLoaded', function() {
    // Affiche un popup de validation
    const confirmation = confirm("Êtes-vous sûr de vouloir lancer la séquence d'autodestruction ?");
    if (confirmation) {
        // Lancer l'ambiance sonore (adapte le chemin si besoin)
        const ambiance = new Audio('ytmp3free.cc_alien-nostromo-destruct-sequence-youtubemp3free.org.mp3');
        ambiance.loop = true; // Optionnel : boucle la musique
        ambiance.play();
    }
});