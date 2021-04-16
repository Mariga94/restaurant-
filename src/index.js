import _ from 'lodash';
import './style.css';
import backgroundIcon from './background.jpg';

const content = document.getElementById('content');

function context() {
    const header = document.createElement('header');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent ='Restaurant';
    const list = document.createElement('div');
    list.classList.add('nav-flex');
    const listElementOne= document.createElement('a');
    listElementOne.setAttribute('href', '#home');
    listElementOne.innerHTML ='Home';
    //second element
    const listElement2= document.createElement('a');
    listElement2.setAttribute('href', '#about');
    listElement2.innerHTML ='About';
    //third element
    const listElement3= document.createElement('a');
    listElement3.setAttribute('href', '#menu');
    listElement3.innerHTML ='Menu';
    //fourth element
    const listElement4= document.createElement('a');
    listElement4.setAttribute('href', '#order');
    listElement4.innerHTML ='Order';
    //fourth element
    const listElement5= document.createElement('a');
    listElement5.setAttribute('href', '#contact');
    listElement5.innerHTML ='Contact';

    //add image
    const mybackgroundIcon = new Image();
    mybackgroundIcon.src = backgroundIcon;
    list.innerHTML += listElementOne.outerHTML + listElement2.outerHTML+ listElement3.outerHTML+ listElement4.outerHTML+ listElement5.outerHTML ;
    navbar.innerHTML += logo.outerHTML + list.outerHTML ;
    // header.appendChild(mybackgroundIcon);
    header.appendChild(navbar);

    return header;
}

content.appendChild(context());
//