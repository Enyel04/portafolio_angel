document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll("[data-target]");
    const content = document.querySelectorAll("[data-content]");
 

    
  
    targets.forEach(target => {
      target.addEventListener("click", () => {
        content.forEach(c => {
          c.classList.remove("active");
                             });
  
        const t = document.querySelector(target.dataset.target);
        t.classList.add("active");
            });
        });

  
  });



  function navegacionresponsiva() {
    const navElement = document.querySelector(".nav");
    navElement.classList.toggle("mostrar");
}


  
  


  document.addEventListener("DOMContentLoaded", function () {
    let sliderInner = document.querySelector(".slider--inner");
    let images = sliderInner.querySelectorAll("img");
    let index = 0;
  
    setInterval(function () {
      let percentage = -100 * index;
      sliderInner.style.transform = "translateX(" + percentage + "%)";
  
      index = (index + 1) % images.length;
  
    }, 2000);
  
    images.forEach(image => {
      let webpSrc = image.getAttribute("data-jpg");
      let imgSrc = image.getAttribute("src");
      let supportsWebp = (typeof createImageBitmap === "function");
  
      if (supportsWebp && webpSrc) {
        image.setAttribute("src", webpSrc);
      }
    });
  });
  