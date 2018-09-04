if (module.hot) {
    module.hot.accept()
}

import '../sass/main.scss'
import * as View from './models/view.js'
import Prism from 'prismjs';



const setListeners = () => {
    // activate scroll component
    View.DOM.navLinks.forEach(el => el.addEventListener('click', navHandler));
    // activate filter component
    View.DOM.filterEl.addEventListener("click", filterHandler);
    // activate tab component
    View.DOM.tabNav.forEach(el => el.addEventListener('click', tabHandler));
    // active scroll to top component
    window.addEventListener('scroll', toTopListener);
    View.DOM.toTop.addEventListener('click', toTopHandler);
    // active menu component
    View.DOM.navClose.addEventListener('click', menuHandler);
}

const navHandler = (e) => {
    e.preventDefault();

    scroller(e.target.hash.slice(1));
}

const filterHandler = (e) => {
    const target = e.target;
    
    if (View.containClass(target, 'filter__btn')) {
        filterMenuHighlight(target);
        filtration(target.dataset.topic);
    }
}

const filtration = (data) => {

    if (data === 'all') {
        View.showAll();
    } else {
        View.hideAll();
        View.filterNav(data);
        View.filterLessons(data);
    } 
}

const filterMenuHighlight = (el) => {
    View.clearFilterMenu();
    View.setFilterActive(el);
}

const tabHandler = (e) => {
    const target = e.target;
        
    if (View.containClass(target, 'tab__link')) {
        switchTab(target, target.dataset.tab);
    }
}

const switchTab = (el, tabNumber) => {
    // get list of tabs
    const tabContent = View.getTabContent(el);

    // remove all active classes 
    View.removeActive(el, tabContent);

    // set new active classes for choosen tab
    View.setActive(el, tabContent);
}

// scroll to top logic

const toTopHandler = (e) => {
    View.scrollTop();
}

const toTopListener = (e) => {
    if ( View.getScrollTop() >= 1000) {
        View.show();
    } else {
        View.hide();
    }
}

// Scroller logic

const scroller = (id) => {
    View.scrollToBlock(id);
}

// Menu logic

const menuHandler = (e) => {
    console.log(e.target);
    if (View.containClass(View.DOM.navContainer, "nav__container--active")) {
        View.hideMenu();
    } else {
        View.showMenu();
    }
}

// Inicialization

const init = () => {
    View.cacheDom();
    setListeners();

    // Activate Prism
    Prism.highlightAll();
}

init();