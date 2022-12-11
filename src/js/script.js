const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

close.addEventListener('click', ()=> {
    menu.classList.remove('active');
});


const percent = document.querySelectorAll('.skills-rating__percent'),
        lines = document.querySelectorAll('.skills-rating__line span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

