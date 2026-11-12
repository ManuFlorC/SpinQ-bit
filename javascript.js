// Esperamos a que toda la página cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Poner el año actual automáticamente en el pie de página
    const spanAnio = document.getElementById("anio");
    if (spanAnio) {
        spanAnio.textContent = new Date().getFullYear();
    }

    // 2. Mensaje secreto en la consola del navegador (por si algún músico friki inspecciona la web)
    console.log(
        "%c⚠️ SISTEMA HACKEADO POR MC A K.O. ⚠️",
        "background: #ff007f; color: #000; font-size: 16px; font-weight: bold; padding: 6px;"
    );
    console.log(
        "%cSi estás leyendo esto y tocas la batería en Gijón, deja de mirar código y escríbenos.",
        "color: #00ff66; font-size: 13px;"
    );

    // 3. Efecto "Glitch" aleatorio en el título principal cada pocos segundos
    const titulo = document.querySelector(".titulo-glitch");
    if (titulo) {
        const textoOriginal = titulo.getAttribute("data-text");
        const caracteresRaros = "!<>-_\\/[]{}—=+*^?#________";

        setInterval(() => {
            let iteraciones = 0;
            const intervaloGlitch = setInterval(() => {
                titulo.innerText = textoOriginal
                    .split("")
                    .map((letra, indice) => {
                        if (indice < iteraciones) {
                            return textoOriginal[indice];
                        }
                        return caracteresRaros[Math.floor(Math.random() * caracteresRaros.length)];
                    })
                    .join("");

                if (iteraciones >= textoOriginal.length) {
                    clearInterval(intervaloGlitch);
                }
                iteraciones += 1 / 2;
            }, 30);
        }, 6000); // Se activa cada 6 segundos para dar rollo cyberpunk sin marear
    }
});
