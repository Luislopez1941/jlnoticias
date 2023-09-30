

    // Agrega el evento al botón después de cargar el contenido
    const button = document.getElementById("toggle");
    const navItems = document.querySelector(".nav__items");
    const body = document.getElementById("body");

    button.addEventListener("click", () => {
      button.classList.toggle("activo");
      if (button.classList.contains("activo")) {
          navItems.style.display = "block"; // Muestra el menú
          document.body.style.overflowY = "hidden"; // Oculta el desplazamiento horizontal en el cuerpo
      } else {
          navItems.style.display = "none"; // Oculta el menú
          document.body.style.overflowY = "scroll"; // Oculta el desplazamiento horizontal en el cuerpo
          
      }
  });
  


