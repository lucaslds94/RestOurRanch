const navSlide = () => {
    const burger = document.querySelector('.menuIcon');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');
    });
}

navSlide();
