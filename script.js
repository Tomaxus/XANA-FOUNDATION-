document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los elementos que queremos animar
    const hiddenElements = document.querySelectorAll('.hidden');

    // Configuramos el observador
    // threshold: 0.15 significa que la animación se dispara cuando el 15% del elemento es visible
    const observerOptions = {
        root: null, // observa con respecto al viewport (la pantalla)
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Ajuste para que la animación empiece un poco antes
    };

    // Definimos la función que se ejecuta cuando se observa una intersección
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está entrando en pantalla
            if (entry.isIntersecting) {
                // Añadimos la clase 'visible' que tiene las transiciones CSS
                entry.target.classList.add('visible');
                // (Opcional) Dejamos de observar el elemento una vez animado para mejorar rendimiento
                observer.unobserve(entry.target);
            }
        });
    };

    // Creamos el observador con las opciones y el callback
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Le decimos al observador que vigile cada uno de los elementos ocultos
    hiddenElements.forEach(element => {
        observer.observe(element);
    });

    console.log("Animaciones de scroll cargadas correctamente.");
});