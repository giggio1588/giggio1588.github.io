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
