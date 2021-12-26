
// Modal Website

const modal = ()=>{
    const __modal__btn = document.querySelectorAll('.show-modal');
    const __show_modal = document.querySelector('.wrap__modal');
    const __modal__close = document.querySelector('.modal__close');

    __modal__btn.forEach(elem =>{
        elem.addEventListener('click',()=>{
            __show_modal.style.display = "flex";
        });
    })
    __modal__close.addEventListener('click',()=>{
        __show_modal.transform = "translateY(-1800px)";
        __show_modal.style.display = "none";
    })
}
modal();

let i = 0;

const menuBurger = ()=>{
    const Check = document.getElementById("check");
    const __menuIcon = document.querySelector('.svg__menu');
    Check.addEventListener('click',()=>{
        i++;
        if(i%2!==0){
            console.log(__menuIcon)
            __menuIcon.style.backgroundImage = "url(./img/menu-close.png)";
        }
        else{
            __menuIcon.style.backgroundImage = "url(./img/menu-burger.png)";            
        }
    });
}
menuBurger();

