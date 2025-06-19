const countdownDate = new Date("June 28, 2025 12:00:00").getTime();

let finished = false;

const countdownFunction = setInterval(function () {
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
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('go-login-btn');
    btn.addEventListener('click', function () {
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

    // Easter egg animado usando <p id="easter-egg">
    const frases = ["sabias q soy un poyo bn guapo?", "SOY UNA GALGOLAAA", "sabias q soy muy bonito?", 
        "recuerda darle todo tu cariñito a cesarin", "tuviste un dia bonito hoy linda?", "d aki a friends o q",
        "te diria algo lindo pero le dices a mi poyo", "probablemente cuando estes leyendo esto este jugando lol NO JOKE JAJAJAJ",
        "hola si buenas tardes, me da 2 promos de azules y unos boneless y unas papas ^_^","TRALALELO TRALALALLALALA",
        "cesarin vs foster, quien ganara?", "ya dile a mi suegro q este año es de mi azul"];
    const egg = document.getElementById('easter-egg');
    if (egg) {
        egg.textContent = ""; // Inicialmente vacío
        setTimeout(() => {
            let frasesRestantes = [...frases];
            let current = frasesRestantes.splice(Math.floor(Math.random() * frasesRestantes.length), 1)[0];
            egg.textContent = current;
            egg.classList.add('fade-in');
            setInterval(() => {
                egg.classList.remove('fade-in');
                egg.classList.add('fade-out');
                setTimeout(() => {
                    if (frasesRestantes.length === 0) {
                        frasesRestantes = [...frases];
                    }
                    const idx = Math.floor(Math.random() * frasesRestantes.length);
                    current = frasesRestantes.splice(idx, 1)[0];
                    egg.textContent = current;
                    egg.classList.remove('fade-out');
                    egg.classList.add('fade-in');
                }, 500);
            }, 5000);
        }, 10001); // Espera 10 segundos antes de mostrar el easter egg
    }
});