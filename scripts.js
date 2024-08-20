document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const menuClose = document.querySelector(".menu-close");
    const menuItems = document.querySelectorAll(".menu li a");
    const menuOverlay = document.querySelector(".menu-overlay");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            menuOverlay.style.opacity = menu.classList.contains("active") ? '1' : '0';
        });

        menuClose.addEventListener("click", () => {
            menu.classList.remove("active");
            menuOverlay.style.opacity = '0';
        });

        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                menu.classList.remove("active");
                menuOverlay.style.opacity = '0';
            });
        });

        menuOverlay.addEventListener("click", () => {
            menu.classList.remove("active");
            menuOverlay.style.opacity = '0';
        });
    }
});
