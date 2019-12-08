const navSlide = () => {
    const burger = document.querySelector('.menuIcon');
    const nav = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    burger.addEventListener('click', () => {
        //Animação do menu
        nav.classList.toggle('burgerActive');

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

const loginSlide = () =>{
    const buttonBox = document.querySelector('.buttonBox');
    const userIcon = document.querySelector('.userIcon img');

    userIcon.addEventListener('click', ()=>{
        buttonBox.classList.toggle('navActive')
    })
}

loginSlide();

