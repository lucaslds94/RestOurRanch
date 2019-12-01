const navSlide = () => {
    const burger = document.querySelector('.menuIcon');
    const nav = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const userIcon = document.querySelector('.userIcon');
    const formBox = document.querySelector('.formBox');

    
    userIcon.addEventListener('click', () => {
        formBox.classList.toggle('navActive');
    });

    burger.addEventListener('click', () => {
        //Animação do menu
        nav.classList.toggle('navActive');

        //Animação dos links
        menuLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `menuFade 0.5s ease forwards ${index / 7+0.4}s`;    
            }     
        });
        //Animação do burger
        burger.classList.toggle('toggle');
    });
}

navSlide();
