document.addEventListener('DOMContentLoaded', function () {
    const phone = document.querySelector('.phone');
    const connection = document.querySelector('.connection');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.header2');

    if (!overlay) {
        console.error("Overlay element not found.");
        return;
    }

    window.addEventListener('scroll', function (e) {
        const scrollY = window.scrollY || window.pageYOffset;
        console.log(scrollY);
        if (scrollY > 380) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    });

    phone.addEventListener('click', () => {
        phone.classList.toggle('active');
        if (phone.classList.contains('active')) {
            menu.classList.add('active');
            connection.classList.add('connection');
        } else {
            menu.classList.remove('active');
            connection.classList.add('connection');
        }
    });
});
