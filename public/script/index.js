'use strict';

const body = document.querySelector('body');
const navBtn = document.querySelectorAll('.menu-list li a');
const menu = document.querySelector('.menu-list');
const navBar = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.onclick = () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('active');
        body.classList.add('disableScroll');
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('active');
        body.classList.remove('disableScroll');
    }
    menuOpen = !menuOpen;
};

navBtn.forEach((btn) => {
    btn.onclick = () => {
        menu.classList.remove('active');
        body.classList.remove('disableScroll');
        menuBtn.classList.remove('open');
        menuOpen = !menuOpen;
    };
});

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');
};

const sendPostRequest = (data) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
};

const logAscii = () => {
    console.log(`

██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝
                                                                                                                                         
    


 
██╗  ██╗███████╗███╗   ██╗██████╗ ██╗   ██╗
██║  ██║██╔════╝████╗  ██║██╔══██╗╚██╗ ██╔╝
███████║█████╗  ██╔██╗ ██║██████╔╝ ╚████╔╝ 
██╔══██║██╔══╝  ██║╚██╗██║██╔══██╗  ╚██╔╝  
██║  ██║███████╗██║ ╚████║██║  ██║   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   
                                               
██████╗  █████╗  ██████╗                   
██╔══██╗██╔══██╗██╔═══██╗                  
██████╔╝███████║██║   ██║                  
██╔══██╗██╔══██║██║   ██║                  
██████╔╝██║  ██║╚██████╔╝                  
╚═════╝ ╚═╝  ╚═╝ ╚═════╝                   
                                                                                                
    `);
};
