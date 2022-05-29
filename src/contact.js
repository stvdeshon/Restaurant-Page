function contactPage() {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.classList.remove('off');
    const contactTitle = document.createElement('h1');
    const contactInfo = document.createElement('p');

    contactTitle.textContent = 'Contact Us';
    contactInfo.textContent = `Call us at 1-333-444-5555 to order in or for catering. We're
    located at 5th and Grande in Park Plaza. You can also email us at hevyKevy@gmail.com.`

    contact.appendChild(contactTitle);
    contact.appendChild(contactInfo);
    
    // const home = document.querySelector('.home');
    // const menu = document.querySelector('.menu');
    // home.classList.add('off');
    // menu.classList.add('off');
    content.appendChild(contact);
}


export default contactPage;