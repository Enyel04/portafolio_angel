document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica de Pestañas del Portafolio ---
    const targets = document.querySelectorAll(".navegacion__tabs p");
    const contents = document.querySelectorAll("[data-content]");

    targets.forEach(target => {
        target.addEventListener("click", () => {
            // 1. Quitar clase active de todos los botones y contenidos
            targets.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            
            // 2. Agregar clase active al botón presionado
            target.classList.add("active");
            
            // 3. Mostrar el contenido correspondiente
            const contentId = target.getAttribute("data-target");
            document.querySelector(contentId).classList.add("active");
        });
    });

    // --- Lógica del Slider Automático (Modales) ---
    let sliderInner = document.querySelector(".slider--inner");
    if (sliderInner) {
        let images = sliderInner.querySelectorAll("img");
        let index = 0;
      
        setInterval(function () {
            index = (index + 1) % images.length;
            let percentage = -100 * index;
            sliderInner.style.transform = `translateX(${percentage}%)`;
        }, 2500); // Aumentado a 2.5s para que se aprecie mejor la imagen
    }
});

// --- Lógica del Menú Hamburguesa (Móviles) ---
function navegacionresponsiva() {
    const navElement = document.getElementById("nav");
    navElement.classList.toggle("mostrar");
}