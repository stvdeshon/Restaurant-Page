import homePage from './homepage.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';


const pageLoaders = (() => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const footer = document.createElement('footer');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');
    homeTab.innerHTML = 'Home';
    menuTab.innerHTML = 'Menu';
    contactTab.innerHTML = 'Contact Us';
    footer.textContent = 'Stephen Deshon 2022';
    header.append(homeTab);
    header.append(menuTab);
    header.append(contactTab);
    document.body.prepend(header);
    homePage();
    document.body.appendChild(footer);


    homeTab.addEventListener('click', () => {
        content.innerHTML = '';
        homePage();
    });

    menuTab.addEventListener('click', () => {
        content.innerHTML = '';
        menuPage();
    });

    contactTab.addEventListener('click', () => {
        content.innerHTML = '';
        contactPage();
    });

})();
