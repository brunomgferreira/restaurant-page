import './styles/main.scss'
import fineDining from './assets/fineDining.png'
import { homePage } from './homePage';
import { menuPage } from './menuPage';
import { contactPage } from './contactPage';

const body = document.querySelector('body');
const main = document.getElementById('main');

body.style.backgroundImage = `url(${fineDining})`;

function clearMain() {
    main.innerHTML = '';
}

function changeMain(childs) {
    clearMain();
    childs.forEach(child => {
        main.appendChild(child);
    });
}

function add(e){
    clearMain()
    if(e.target.id === 'homeBtn') {
        homeBtn.classList = 'btn active';
        menuBtn.classList = 'btn';
        contactBtn.classList = 'btn';
        changeMain(homePage());
    } 
    else if(e.target.id === 'menuBtn') {
        homeBtn.classList = 'btn';
        menuBtn.classList = 'btn active';
        contactBtn.classList = 'btn';
        changeMain(menuPage());
    }
    else if(e.target.id === 'contactBtn') {
        homeBtn.classList = 'btn';
        menuBtn.classList = 'btn';
        contactBtn.classList = 'btn active';
        changeMain(contactPage()); 
    }
}

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click', add);
menuBtn.addEventListener('click', add);
contactBtn.addEventListener('click', add);

window.onload = () => {
    changeMain(homePage());
}