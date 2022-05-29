function menuPage() {

    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.remove('off');

    //hotwing menu
    const hotwings = document.createElement('div');
    hotwings.classList.add('menu-div');
    const hotHeading = document.createElement('h2');
    hotHeading.textContent = 'Our Wings';
    hotwings.appendChild(hotHeading);
    const hotMenu = document.createElement('p');
    hotMenu.innerHTML = 'Our wings come in batches of 10 for $14.<br>Safe<br>Spicy<br>Scorcing<br>Extra Scorching<br>Ring of Fire<br>Honey Mustard BBQ<br>Teriyaki<br>Smoked';
    hotwings.appendChild(hotMenu);
    menu.appendChild(hotwings);


    //grill menu
    const grill = document.createElement('div');
    grill.classList.add('menu-div');
    const grillHeading = document.createElement('h2');
    grillHeading.textContent = 'From the Grill';
    grill.appendChild(grillHeading);
    const grillMenu = document.createElement('p');
    grillMenu.innerHTML = 'Cheeseburger    $7<br> Double Cheeseburger    $10<br>Buffalo Burger    $8<br>Fajita    $10<br>Carne Asada Burrito    $10';
    grill.appendChild(grillMenu);
    menu.appendChild(grill);

    //dessert menu
    const dessert = document.createElement('div');
    dessert.classList.add('menu-div');
    const dessertHeading = document.createElement('h2');
    dessertHeading.textContent = 'Dessert';
    dessert.appendChild(dessertHeading);
    const dessertMenu = document.createElement('p');
    dessertMenu.textContent = 'We have various ice creams (great after eating spicy food!) and pies. Our pies change seasonally.';
    dessert.appendChild(dessertMenu);
    menu.appendChild(dessert);

    content.appendChild(menu);

    // const home = document.querySelector('.home');
    // const contact = document.querySelector('.contact');
    // home.classList.add('off');
    // contact.classList.add('off');

}


export default menuPage;