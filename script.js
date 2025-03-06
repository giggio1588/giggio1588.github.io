document.getElementById("toggle-dark-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocalizzazione non supportata dal browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    document.getElementById("location").innerText = `📍 Posizione: ${lat}, ${lon}`;
}

// Nasconde i pulsanti di navigazione se non esistono articoli precedenti o successivi
document.addEventListener("DOMContentLoaded", function() {
    let prevButton = document.getElementById("prev-article");
    let nextButton = document.getElementById("next-article");
    
    // Controlla se i file esistono provando a caricarli con una richiesta fetch
    function checkFileExists(url, button) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    button.style.display = 'none';
                }
            })
            .catch(() => button.style.display = 'none');
    }

    checkFileExists('3-marzo-2025.html', prevButton);
    checkFileExists('5-marzo-2025.html', nextButton);
});