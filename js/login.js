document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = passwordInput.value;
        // Cambia aquí la contraseña correcta si es necesario
        if (password === 'yomilala') {
            window.location.href = 'letter.html';
        } else {
            const mensajes = ["chismosote, esa no es", "NOnonONOno es", "skibidi wrong", "no es esa, pero te amo","ESOOOOO, tampoco es esa :v","esta muy easy papu, tu puedes bonita t amo esta bn facil" ];
            const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
            alert(mensaje);
        }
    });

    // Easter egg: cambia la frase cada 5 segundos en el span con id 'easter-egg'
    const frases = ["sabias que soy un poyo?", "AMARTE DUELEEEEE, nah q buena rola pa", "si"];
    const egg = document.getElementById('easter-egg');
    if (egg) {
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % frases.length;
            egg.textContent = frases[idx];
        }, 5000);
    }
});