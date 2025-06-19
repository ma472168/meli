(function() {
    const btn = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const body = document.body;

    // Aplica el tema guardado o el del sistema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if (btn) btn.innerText = '☀️';
        } else {
            body.classList.remove('dark-theme');
            if (btn) btn.innerText = '🌙';
        }
    }

    // Detecta preferencia del sistema si no hay preferencia guardada
    function initTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') {
            applyTheme(saved);
        } else if (prefersDark.matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }

    // Cambia el tema manualmente
    if (btn) {
        btn.addEventListener('click', function() {
            const isDark = body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            applyTheme(isDark ? 'dark' : 'light');
        });
    }

    // Cambia el tema si la preferencia del sistema cambia y no hay preferencia guardada
    prefersDark.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Inicializa el tema al cargar
    initTheme();
})();
