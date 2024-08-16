document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nombre = form.querySelector("input[name='nombre']").value;
            const email = form.querySelector("input[name='email']").value;
            const mensaje = form.querySelector("textarea[name='mensaje']").value;

            if (nombre && email && mensaje) {
                alert("Gracias por tu mensaje, " + nombre + "!");
                form.reset();
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    }

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});
