export const sayMegaHi = () => console.log('Hello there!');

export const DOM = {
    "navLinks": "",
    "filter": "",
    "filterBtn": "",
    'toTop': "",
    "navClose": "",
    "navContainer": "",
    "navTopics": [],
    "lessons": [],
    "tabNav": []
}

export const cacheDom = () => {
    DOM["navLinks"] = Array.from(document.querySelectorAll(".nav__link"));
    DOM["filterEl"] = document.querySelector('.filter');
    DOM["filterBtn"] = Array.from(document.querySelectorAll(".filter__btn"));
    DOM["navTopics"] = Array.from(document.querySelectorAll('.nav__topic'));
    DOM['lessons'] = Array.from(document.querySelectorAll('.how-to-section'));
    DOM['tabNav'] = Array.from(document.querySelectorAll('.tab__nav'));
    DOM['toTop'] = document.querySelector(".to-top");
    DOM['navClose'] = document.querySelector('.nav__close');
    DOM['navContainer'] = document.querySelector('.nav__container');
}

// filtration logic

export const clearFilterMenu = () => DOM.filterBtn.forEach(el => el.classList.remove("filter__btn--active"));
export const setFilterActive = (el) => el.classList.add("filter__btn--active");

export const filterNav = (data) => {
    DOM.navTopics.filter(el => el.dataset.topic === data)
                 .forEach(el => el.style.display = "grid");
}

export const filterLessons = (data) => {
    DOM.lessons.filter(el => el.dataset.topic === data)
               .forEach(el => el.style.display = "block");
}

export const showAll = () => {
    DOM.navTopics.forEach(el => el.style.display = 'grid');
    DOM.lessons.forEach(el => el.style.display = 'block');
}

export const hideAll = () => {
    DOM.navTopics.forEach(el => el.style.display = 'none');
    DOM.lessons.forEach(el => el.style.display = 'none');
    
}

// Tab logic

export const getTabContent = (elem) => Array.from(elem.parentElement.parentElement.querySelectorAll('.tab__content'));

export const removeActive = (elem, content) => {
    Array.from(elem.parentElement.querySelectorAll('.tab__link'))
            .forEach(el => removeCls(el, "tab__link--active"));
    
    content.forEach(el => removeCls(el, 'tab__content--active'));
}

export const setActive = (elem, content) => {
    content.filter(el => el.dataset.tab === elem.dataset.tab )[0].classList.add('tab__content--active');
    elem.classList.add("tab__link--active");
}

// Scroll to top logic

export const scrollTop = () => {
    scrollTo(0);
}

export const show = () => DOM.toTop.classList.add('to-top--active');
export const hide = () => DOM.toTop.classList.remove('to-top--active');
export const getScrollTop = () => document.documentElement.scrollTop;

// Scroller logic

export const scrollToBlock = (id) => {
    const el = document.getElementById(id);
    
    scrollTo(+el.offsetTop);
}

// Menu logic

export const showMenu = () => {
    DOM.navContainer.classList.add("nav__container--active");
}
export const hideMenu = () => {
    DOM.navContainer.classList.remove("nav__container--active");
}


// Utility

export const containClass = (el, cls) => el.classList.contains(cls);

const addCls = (el, cls) => el.classList.add(cls);
const removeCls = (el, cls) => el.classList.remove(cls);

const scrollTo = (position) => {
    window.scroll({
        top: position,
        behavior: "smooth"
    });
}