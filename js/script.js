'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const mouse = document.querySelector('#mouse-tracker'),
            trackerContainer = document.querySelector('.banner__img'),
            themeBtns = document.querySelector('.nav__theme'),
            burgerBtn = document.querySelector('.nav__burger'),
            navigation = document.querySelector('.nav__inner'),
            closeBtn = document.querySelector('.nav__close'),
            bodyTag = document.querySelector('body');

    let currentTheme = "dark";

    function mouseTracker(mouseSelector, containerSelector){
        if(document.documentElement.clientWidth > 920){
            containerSelector.addEventListener('mousemove', (event) => {
                let x = (event.clientX - containerSelector.offsetLeft) * 100 / containerSelector.offsetWidth  + "%";
                let y = (event.clientY - containerSelector.offsetTop) * 100 / containerSelector.offsetHeight  + "%";
            
                mouseSelector.style.transition = '0s';
                mouseSelector.style.left = x;
                mouseSelector.style.top = y;
            });
            
            document.addEventListener('mouseout', () => {
                mouseSelector.style.transition = "0.7s";
                mouseSelector.style.left = "50%";
                mouseSelector.style.top = "50%";
            });
        }
    }

    function setInitialTheme(buttons){
        if(localStorage.getItem('theme') == null){
            localStorage.setItem('theme', currentTheme);
        } else {
            currentTheme = localStorage.getItem('theme');
        }

        Array.from(buttons.children).forEach(btn => {
            if(currentTheme == 'dark' && btn.id == 'theme-dark'){
                btn.classList.add('theme-active');
            } else if(currentTheme == 'light' && btn.id == 'theme-light'){
                btn.classList.add('theme-active');
            }
        });
    }

    function changeTheme(buttons){
        buttons.addEventListener('click', (e) => {
            if(e.target && (e.target.tagName === 'IMG')){
                Array.from(buttons.children).forEach(btn => {
                    btn.classList.remove('theme-active');
                });
                const parent = e.target.parentElement;
                if(parent.classList.contains('theme-active')){
                    parent.classList.remove('theme-active');
                } else {
                    parent.classList.add('theme-active');
                }
                if(parent.id == 'theme-dark'){
                    localStorage.setItem('theme', 'dark');
                } else if(parent.id == 'theme-light'){
                    localStorage.setItem('theme', 'light');
                }
            }
        });
        renderTheme(localStorage.getItem('theme'));
    }

    function toggleMenu(burgerBtn, nav, close){
        burgerBtn.addEventListener('click', (e) => {
            if(e.target && (e.target.tagName === 'IMG')){
                nav.style.right = 0;
                if(close.classList.contains('hide')){
                    close.classList.remove('hide');
                }
            }
        });
        close.addEventListener('click', (e) => {
            if(e.target && (e.target.tagName === 'IMG')){
                nav.style.right = '-100%';
            }
            if(!close.classList.contains('hide')){
                close.classList.add('hide');
            }
        });
    }

    function renderTheme(theme){
        const logoLight = document.querySelector('.logo-light');
        const logoDark = document.querySelector('.logo-dark');
        
        if(theme === 'dark'){
            if(logoLight.classList.contains('hide')){
                logoLight.classList.remove('hide');
                logoLight.classList.add('show');
                logoDark.classList.add('hide');
            }
            if(bodyTag.classList.contains('dark-text')){
                bodyTag.classList.remove('dark-text');
                bodyTag.classList.remove('light-bg');
                bodyTag.classList.add('light-text');
                bodyTag.classList.add('dark-bg');
            }
            
        }
        if(theme === 'light'){
            if(logoDark.classList.contains('hide')){
                logoDark.classList.remove('hide');
                logoDark.classList.add('show');
                logoLight.classList.add('hide');
            }
            bodyTag.classList.remove('light-text');
            bodyTag.classList.remove('dark-bg');
            bodyTag.classList.add('dark-text');
            bodyTag.classList.add('light-bg');
        }
    }

    renderTheme(localStorage.getItem('theme'));
    setInitialTheme(themeBtns);
    mouseTracker(mouse, trackerContainer);
    changeTheme(themeBtns);
    toggleMenu(burgerBtn, navigation, closeBtn);
});

