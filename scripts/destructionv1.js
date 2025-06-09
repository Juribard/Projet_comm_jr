window.addEventListener('DOMContentLoaded', function() {
    const confirmation = confirm("Êtes-vous sûr de vouloir lancer la séquence d'autodestruction ?");
    if (confirmation) {
        // Chemin relatif correct depuis /pages/ vers /scripts/
        const ambiance = new Audio('../scripts/ytmp3free.cc_alien-nostromo-destruct-sequence-youtubemp3free.org.mp3');
        ambiance.loop = true;
        ambiance.play().catch(e => alert("Erreur audio : " + e.message));
    }
});