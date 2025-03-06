// Funzione per attivare/disattivare il dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Aggiungi un listener per il click sul pulsante dark mode.
document.getElementById("toggle-dark-mode").addEventListener("click", toggleDarkMode);

// Funzione per gestire la geolocalizzazione
function handleGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition, // Funzione di successo
            handleGeolocationError // Funzione di errore
        );
    } else {
        displayLocation("Geolocalizzazione non supportata dal browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    displayLocation(`📍 Posizione: ${lat.toFixed(4)}, ${lon.toFixed(4)}`); // Formatta le coordinate
}

function handleGeolocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            displayLocation("L'utente ha negato l'accesso alla posizione.");
            break;
        case error.POSITION_UNAVAILABLE:
            displayLocation("Informazioni sulla posizione non disponibili.");
            break;
        case error.TIMEOUT:
            displayLocation("La richiesta di posizione è scaduta.");
            break;
        case error.UNKNOWN_ERROR:
            displayLocation("Errore sconosciuto durante il recupero della posizione.");
            break;
    }
}

function displayLocation(message) {
    // Cerca un elemento con classe 'geolocalizzazione' nel documento corrente e imposta il testo
    const locationElement = document.querySelector(".geolocalizzazione");
    if (locationElement) {
        locationElement.innerText = message;
    }
}

//Chiamiamo la funzione per avere la geolocalizzazione.
document.addEventListener('DOMContentLoaded', handleGeolocation);
