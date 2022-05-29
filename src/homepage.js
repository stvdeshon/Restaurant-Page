function homePage() {

    const content = document.querySelector('#content');
    const home = document.createElement('div');
    //first class is to toggle this specific modal, second is for styling all modals
    home.classList.add('home');
    home.classList.remove('off');

    const title = document.createElement('h1');
    title.textContent = `Hevy Kevy's Hotwings and Grill`;

    const blurb = document.createElement('p');
    blurb.classList.add('blurb');
    blurb.textContent = `Hevy Kevy's hotwings are the best around with an award winning recipe.
    They come in a variety of heat levels ranging from Safe to the highly challenging
    Ring of Fire. For those not interested in spicy wings we also offer honey mustard
    BBQ wings, smoked wings, and a variety of dipping sauces. If you're not in the mood for
    wings you might try our cheeseburger, buffalo burger, and our fajita. A variety
    of beverages are also available. Please come and enjoy yourself at Hevy Kevy's Hotwings 
    and Grill!`;

    const hours = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    const monFri = document.createElement('p');
    const weekEnd = document.createElement('p');

    hoursTitle.classList.add('hours');
    monFri.classList.add('hours');
    weekEnd.classList.add('hours');

    hoursTitle.textContent = `Hours`;
    monFri.textContent = `Monday through Friday: 10am to 9pm`;
    weekEnd.textContent = `Saturday and Sunday: 10am to 11pm`;

    hours.appendChild(hoursTitle);
    hours.appendChild(monFri);
    hours.appendChild(weekEnd);


    home.appendChild(title);
    home.appendChild(blurb);
    home.appendChild(hours);

    content.appendChild(home);

    // const menu = document.querySelector('.menu');
    // const contact = document.querySelector('.contact');
    // menu.classList.add('off');
    // contact.classList.add('off');

}


export default homePage;