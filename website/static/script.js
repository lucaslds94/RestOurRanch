const navSlide = () => {
    const burger = document.querySelector('.menuIcon');
    const nav = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    
    burger.addEventListener('click', () => {
        // Toggle no burger
        nav.classList.toggle('navActive');

        //Animação dos links
        menuLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `menuFade 0.5s ease forwards ${index / 7+0.4}s`;    
            }
        });
    });
}

navSlide();
