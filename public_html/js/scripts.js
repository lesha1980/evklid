window.addEventListener('DOMContentLoaded', function(){
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
  },

  effect: 'fade',

});

document.querySelectorAll(".list-steps__link").forEach(function(step){
    step.addEventListener("click", function(ev){
      const path = ev.currentTarget.dataset.path;
      document.querySelectorAll(".section-how-work__step").forEach(
        function(el){
           el.classList.remove("step-content-active");
        }
      );
      document.querySelectorAll(".list-steps__item").forEach(
        function(el){
          el.removeAttribute("aria-selected");
        }
      );
      parent = step.parentElement;
      parent.setAttribute("aria-selected", "true");
      document.querySelector(`[data-target="${path}"]`).classList.add("step-content-active");
      const rightColumn = document.querySelector('.section-how-work__right-column');

      switch(path) {
        case '2':
          rightColumn.classList.replace(rightColumn.classList.item(1), "section-how-work__right-column-estimate");
          break;
        case '3':
          rightColumn.classList.replace(rightColumn.classList.item(1), "section-how-work__right-column-contractor");
          break;
        case '4':
          rightColumn.classList.replace(rightColumn.classList.item(1), "section-how-work__right-column-inspection");
          break;
        default:
          rightColumn.classList.replace(rightColumn.classList.item(1), "section-how-work__right-column-consultation");
          break;
      }
    })
})

$( function() {
  $( "#accordion" ).accordion();
} );

document.querySelector(".header__menu-burger").addEventListener("click", function(ev){
    var menuBurger = document.getElementById("header__menu-burger");
    menuBurger.style.visibility="hidden";

    var menu = document.getElementById("header__menu-burger-menu");
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.transitionProperty = "visibility, opacity";
    menu.style.transitionDuration = "700ms";
    menu.style.transitionTimingFunction = "ease-in";

    var menuIcon = document.getElementById("header_close-icon");
    menuIcon.style.visibility = "visible";
    menuIcon.style.opacity = "1";
    menuIcon.style.transitionProperty = "visibility, opacity";
    menuIcon.style.transitionDuration = "700ms";
    menuIcon.style.transitionTimingFunction = "ease-in";

    var menuNav = document.getElementById("header__nav-burger")
    menuNav.style.visibility = "visible";
    menuNav.style.opacity = "1";
    menuNav.style.transitionProperty = "visibility, opacity";
    menuNav.style.transitionDuration = "700ms";
    menuNav.style.transitionTimingFunction = "ease-in";
})

document.querySelector(".header__close-icon").addEventListener("click", function(ev){
    var menuBurger = document.getElementById("header__menu-burger");
    menuBurger.style.visibility="visible";
    var menu = document.getElementById("header__menu-burger-menu");
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    menu.style.transitionProperty = "visibility, opacity";
    menu.style.transitionDuration = "700ms";
    menu.style.transitionTimingFunction = "ease";

    var menuIcon = document.getElementById("header_close-icon");
    menuIcon.style.visibility = "hidden";
    menuIcon.style.opacity = "0";
    menuIcon.style.transitionProperty = "visibility, opacity";
    menuIcon.style.transitionDuration = "700ms";
    menuIcon.style.transitionTimingFunction = "ease";

    var menuNav = document.getElementById("header__nav-burger")
    menuNav.style.visibility = "hidden";
    menuNav.style.opacity = "0";
    menuNav.style.transitionProperty = "visibility, opacity";
    menuNav.style.transitionDuration = "700ms";
    menuNav.style.transitionTimingFunction = "ease";
})

});
