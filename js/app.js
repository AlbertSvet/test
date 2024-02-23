new Swiper('.image-slider',{
    navigation: {
        nextEl: '.salon__right',
        prevEl: '.salon__left',
    },
     slidesPerView:5,
     loop:true,
     spaceBetween:20,
     speed:4000,
     centeredSlides: true,
    
     
   
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        type: 'bullets',
    }, 
    autoplay: {
        delay: 100,

    }, 

    breakpoints: {
        320: {
            slidesPerView:2,
            
        },
        480: {
            slidesPerView:3,
            
        },
        768: {
            slidesPerView:5,
        }
        

        
       

    },

});


// =============================================================================================================//
// Бургер-меню
// const iconMenu = document.querySelector('.header__icon');
// const menuBody = document.querySelector('.header__body');
// const lis = document.querySelector('.header__lis');
// if (iconMenu) {
//     iconMenu.addEventListener("click", function (e) {
//         iconMenu.classList.toggle('_active');   
//         menuBody.classList.toggle('_active');
//         lis.classList.toggle('_active');
//     });
// }

// =============================================================================================================//

const section = document.querySelectorAll('[data-act]');
const btn = document.querySelectorAll('.pagin__btn');
btn[0].classList.add('active');
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    section.forEach((el, i) => {
        
        if (el.offsetTop <= scrollDistance) {
            
            btn.forEach(btnEl => {
                btnEl.classList.remove('active');
            });
            btn[i].classList.add('active');
        }
    });
});
btn.forEach((btnEl, index) => {
    btnEl.addEventListener('click', () => {
        section[index].scrollIntoView({ behavior: 'smooth' });
    });
});


// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


