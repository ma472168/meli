const countdownDate = new Date("June 28, 2025 12:00:00").getTime();

let finished = false;

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    let distance = countdownDate - now;

    let days, hours, minutes, seconds, milliseconds;

    if (distance <= 0 && !finished) {
        finished = true;
        clearInterval(countdownFunction);
        days = hours = minutes = seconds = milliseconds = 0;
    } else if (distance <= 0 && finished) {
        days = hours = minutes = seconds = milliseconds = 0;
    } else {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        milliseconds = Math.floor((distance % 1000) / 10);
    }

    // Si existen los elementos individuales, actualízalos
    if (
        document.getElementById("days") &&
        document.getElementById("hours") &&
        document.getElementById("minutes") &&
        document.getElementById("seconds") &&
        document.getElementById("milliseconds")
    ) {
        document.getElementById("days").innerText = days + "d";
        document.getElementById("hours").innerText = hours + "h";
        document.getElementById("minutes").innerText = minutes + "m";
        document.getElementById("seconds").innerText = seconds + "s";
        document.getElementById("milliseconds").innerText = ("00" + milliseconds).slice(-2) + "ms";
    } else {
        // Fallback para el innerHTML anterior
        document.getElementById("countdown").innerHTML = 
            days + "d " + hours + "h " + minutes + "m " + seconds + "s " + ("00" + milliseconds).slice(-2) + "ms";
    }
}, 10);

// Lógica del botón para ir al login
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('go-login-btn');
    btn.addEventListener('click', function() {
        if (finished) {
            window.location.href = "login.html";
        } else {
            const mensajes = ["aun falta tiempo para tu sorpresita bonita, te amo",
                              "aun no papu, pero dile a tu poyo q lo kieres.",
                              "paciencia chikuela loka.",
                              "ni q fueras uno d mis poyos pa incistirme tanto jasdjajsd :v.",
                              "perate pues ni q fueran enchiladukis.",
                              "ando en ohana baby, pero ahorita q se desbloque voy a mi casa JASJDJAJD.",];
            const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
            alert(mensaje);
        }
    });
});