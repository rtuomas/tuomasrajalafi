'use strict';

console.log("test");

//Slowing the background video a little bit...
document.querySelector('video').playbackRate = 0.8;

const home = document.querySelector('#home');
const homeMenu = document.querySelector('#homeMenu');
const projects = document.querySelector('#projects');
const projectsMenu = document.querySelector('#projectsMenu');
const contact = document.querySelector('#contact');
const contactMenu = document.querySelector('#contactMenu');

const menu = document.querySelector('.toggle');
const show = document.querySelector('.show');
const logo = document.querySelector('.logo');
const head = document.querySelector('.head');
const content = document.querySelector('.content');
const contacts = document.querySelector('.contacts');


window.onload = () => {
    projects.style.display = "none";
    contact.style.display = "none";
}

homeMenu.addEventListener('click', () => {
    projects.style.display = "none";
    contact.style.display = "none";
    home.style.display = "block";
    contacts.style.transform = "scale(1) translate(0px)";
    closeMenu();

});

projectsMenu.addEventListener('click', () => {
    home.style.display = "none";
    contact.style.display = "none";
    projects.style.display = "block";
    contacts.style.transform = "scale(1) translate(0px)";
    mixColors();
    closeMenu();
});

contactMenu.addEventListener('click', () => {
    home.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "block";
    contacts.style.transform = "scale(2,2) translate(50px,-100px)";
    closeMenu();
});

//Fixing content when menu bar is activated
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    show.classList.toggle('active');
    logo.classList.toggle('active');
    head.classList.toggle('active');
    content.classList.toggle('active');
});

function mixColors(){
    const projectsWindow = ['frisbee','er', 'photoshop'];
    //This can is possible to randomized completely....
    const colors = ['255, 0, 0,.15', '255, 255, 0,.15', '128, 128, 0,.15',
     '0, 255, 0,.15', '0, 255, 255,.15', '0, 0, 255,.15', '255, 0, 255,.15'];
    for(let i=0;i<projectsWindow.length;i++){
        let random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById(projectsWindow[i]).style.backgroundColor = `rgba(${random_color})`;
    }
}

function closeMenu() {
    if(window.screen.availWidth<=798) {
        menu.classList.remove('active');
        show.classList.remove('active');
        logo.classList.remove('active');
        head.classList.remove('active');
        content.classList.remove('active');
    }
}