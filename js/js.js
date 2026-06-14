document.addEventListener("DOMContentLoaded", () => {
    
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    
    document.documentElement.setAttribute("data-theme", savedTheme);
    actualizarIconoTema(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = "dark";
        
        if (currentTheme === "dark") {
            newTheme = "light";
        }
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        actualizarIconoTema(newTheme);
    });

    function actualizarIconoTema(theme) {
        const icon = themeToggleBtn.querySelector("i");
        if (theme === "dark") {
            icon.className = "fa-solid fa-sun";  
            icon.style.color = "#eab308";         
        } else {
            icon.className = "fa-solid fa-moon"; 
            icon.style.color = "#64748b";
        }
    }

    const targets = document.querySelectorAll(".navegacion__tabs p");
    const contents = document.querySelectorAll("[data-content]");

    targets.forEach(target => {
        target.addEventListener("click", () => {
            targets.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            
            target.classList.add("active");
            
            const contentId = target.getAttribute("data-target");
            document.querySelector(contentId).classList.add("active");
        });
    });

    let sliderInner = document.querySelector(".slider--inner");
    if (sliderInner) {
        let images = sliderInner.querySelectorAll("img");
        let index = 0;
      
        setInterval(function () {
            index = (index + 1) % images.length;
            let percentage = -100 * index;
            sliderInner.style.transform = `translateX(${percentage}%)`;
        }, 2500);
    }
});

// --- Lógica del Menú Hamburguesa (Móviles) ---
function navegacionresponsiva() {
    const navElement = document.getElementById("nav");
    navElement.classList.toggle("mostrar");
}