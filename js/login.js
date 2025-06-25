document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    let intentos = 0;
    
    const encodedPass = "cGl6emFfbWVsaV9hbW9y"; // try to decode this shit man imfkn crazy nigga 
    
    function verificarPassword(input) {
        try {
            // Decodificar y verificar
            return btoa(input.toLowerCase() + "_meli_amor") === encodedPass;
        } catch {
            return false;
        }
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = passwordInput.value;
        if (verificarPassword(password)) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'letter.html';
        } else {
            const mensajes = ["chismosote, esa no es", "NOnonONOno es", "skibidi wrong", "no es esa, pero te amo","ESOOOOO, tampoco es esa :v","esta muy easy papu, tu puedes bonita t amo esta bn facil"];
            const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
            alert(mensaje);
            intentos++;
            if (intentos == 20) {
                alert("Pista, es una comida que te encanta y que siempre pedimos en las citas.");
            }
        }
    });
});