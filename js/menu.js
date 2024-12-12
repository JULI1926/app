// JavaScript para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.hamburger');
    function toggleMenu(event) {
        this.classList.toggle('is-active');
        document.querySelector(".menuppal").classList.toggle("is_active");
        event.preventDefault();
    }
    menu.addEventListener('click', toggleMenu, false);

    var menuLinks = document.querySelectorAll('.menuppal a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            menu.classList.remove('is-active');
            document.querySelector(".menuppal").classList.remove("is_active");
            // Navegar a la sección correspondiente
            var targetId = link.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(function() {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Ajusta el tiempo de espera si es necesario
            }
            event.preventDefault();
        });
    });
});