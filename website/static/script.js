const navSlide = () => {
    const burger = document.querySelector('.menuIcon');
    const nav = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const userIcon = document.querySelector('.userIcon');
    const formBox = document.querySelector('.formBox');

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
    
    // userIcon.addEventListener('click', () => {
    //     formBox.classList.toggle('navActive');
    // });
 
}

navSlide();

const loginSlide = () =>{
    // const x = document.getElementById('login');
    // const y = document.getElementById('registrar');
    const z = document.getElementById('btn');

    const registroButton = document.querySelector('.registroButton');
    const loginButton = document.querySelector('.loginButton');

    registroButton.addEventListener('click', ()=>{
        // x.style.left = "-400px";
        // y.style.left = "50px";
        z.style.left = "110px";
    })

    loginButton.addEventListener('click', ()=>{
        // x.style.left = "50px";
        // y.style.left = "450px";
        z.style.left = "0px";
    })
}

loginSlide();

