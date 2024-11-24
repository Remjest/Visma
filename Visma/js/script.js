console.log("Delaem");

let clientWidth = document.body.getBoundingClientRect().width;

//-----------------------JS GENERAL-------------------------\\

if (typeof window.ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(() => {
        const contentWidth = document.body.getBoundingClientRect().width;
        if (Math.round(clientWidth * 10) === Math.round(contentWidth * 10)) return;
        clientWidth = contentWidth;
    });
    resizeObserver.observe(document.body);
}

const headerSearchWrapper = document.querySelector('.header__line-wrapper');
const headerSearchImg = document.querySelector('.header__search img');

document.addEventListener('click', (e) => {
    if (clientWidth > 600) return;
    if (e.target.closest('.header__search img')) {
        headerSearchWrapper.classList.toggle('header__line-wrapper_active');
    } else if (!e.target.closest('.header__search')) {
        headerSearchWrapper.classList.remove('header__line-wrapper_active');
    }
});

const headerLangs = document.querySelector('.header__langs');

document.addEventListener('click', (e) => {
    if (e.target.closest('.header__langs')) {
        headerLangs.classList.toggle('header__langs_active');
    } else if (!e.target.closest('.header__langs')) {
        headerLangs.classList.remove('header__langs_active');
    }
});


const headerNavPoints = document.querySelectorAll(".header__point");
const headerNav = document.querySelector(".header__nav");

document.addEventListener('click', (e) => {
    if (clientWidth > 1000) return;
    if (e.target.closest('.header__nav')) {
        if (headerNav.classList.contains('header__nav_active')) {
            // Закрытие - мгновенное
            headerNav.style.transition = 'height ease-in 0s';
        } else {
            // Открытие - с анимацией
            headerNav.style.transition = 'height ease-in 0.3s';
        }
        headerNav.classList.toggle('header__nav_active');
    } else if (!e.target.closest('.header__nav')) {
        // Закрытие - мгновенное
        headerNav.style.transition = 'height ease-in 0s';
        headerNav.classList.remove('header__nav_active');
    }
});

headerNavPoints.forEach((point) => {
    point.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const link = point.querySelector('a');
        
        if (link) {
            const href = link.getAttribute('href');
            const anchor = document.querySelector(href);
            if (anchor) {
                const dir = href == '#contacts' ? 'end' : 'start';
                anchor.scrollIntoView({ block: dir, behavior: 'smooth' }); // Прокручиваем к элементу
            } 
        }
    });
});


const footerNavPoints = document.querySelectorAll('.nav');
const footerNav = document.querySelector('.footer__navs');

footerNav.addEventListener('click', (e) => {
    if (clientWidth > 1000) return;
    if (e.target.closest('.nav')) {
        e.target.closest('.nav').classList.toggle('nav_active');
    }
});

if (typeof window.IntersectionObserver !== 'undefined') {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                document.querySelector('.header__point_active').classList.remove('header__point_active');
                const id = entry.target.getAttribute('id');
                document.querySelector(`[href='#${id}']`).parentElement.classList.add('header__point_active');
            }
        })
    }, { threshold: 0.2 });

    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) => {
        scrollObserver.observe(scroller);
    });
}

//-----------------------JS MAIN-------------------------\\

const sectionWrapper2 = document.querySelector('.section2__wrapper');

sectionWrapper2.addEventListener('click', (e) => {
    if (clientWidth > 1000) return;
    if (e.target.closest('.section2__more img')) {
        sectionWrapper2.classList.toggle('section2__wrapper_active');
    }
});

const sectionWrapper3 = document.querySelector('.section3__wrapper');

sectionWrapper3.addEventListener('click', (e) => {
    if (clientWidth > 1000) return;
    if (e.target.closest('.section3__more img')) {
        sectionWrapper3.classList.toggle('section3__wrapper_active');
    }
});