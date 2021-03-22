'use strict';

const body = document.querySelector('body');
const navBtn = document.querySelector('.menu-list li a');
const menu = document.querySelector('.menu-list');
const navBar = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
menuBtn.onclick = () => {
    menu.classList.add('active');
    menuBtn.classList.add('hide');
    body.classList.add('disableScroll');
};
cancelBtn.onclick = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disableScroll');
};
navBtn.onclick = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disableScroll');
};

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');
};
