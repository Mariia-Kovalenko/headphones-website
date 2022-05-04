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

    function setInitialTheme(){
        if(localStorage.getItem('theme') == null){
            localStorage.setItem('theme', currentTheme);
        } else {
            currentTheme = localStorage.getItem('theme');
        }

        bodyTag.style.transition = '.5s';
        renderTheme(localStorage.getItem('theme'));
    }

    function renderTheme(theme){
        console.log(`theme is ${theme}`);
        const logoLight = document.querySelector('#logo-light');
        const logoDark = document.querySelector('#logo-dark');
        const themeDarkBtn = document.querySelector('#theme-dark');
        const themeLightBtn = document.querySelector('#theme-light');

        const cartLight = document.querySelector('#cart-light');
        const cartDark = document.querySelector('#cart-dark');

        const profileLight = document.querySelector('#profile-light');
        const profileDark = document.querySelector('#profile-dark');

        const moonLight = document.querySelector('#moon-light');
        const moonDark = document.querySelector('#moon-dark');
        const sunLight = document.querySelector('#sun-light');

        const closeLight = document.querySelector('#close-light');
        const closeDark = document.querySelector('#close-dark');
        const burgerLight = document.querySelector('#burger-light');
        const burgerDark = document.querySelector('#burger-dark');

        moonLight.style.transitionDelay = '.4s';
        moonDark.style.transitionDelay = '.4s';

        if(theme === 'dark'){
            if (bodyTag.classList.length == 0 || bodyTag.classList.contains('light-bg')){
                bodyTag.classList.remove('dark-text');
                bodyTag.classList.remove('light-bg');
                bodyTag.classList.add('light-text');
                bodyTag.classList.add('dark-bg');
            }

            if(logoLight.classList.length === 0 || logoLight.classList.contains('hide')){
                logoLight.classList.remove('hide');
                logoLight.classList.add('show');

                logoDark.classList.remove('show');
                logoDark.classList.add('hide');
            }

            if (moonLight.classList.length === 0 || moonLight.classList.contains('hide')) {
                moonLight.classList.remove('hide');
                moonLight.classList.add('show');
                moonDark.classList.remove('show');
                moonDark.classList.add('hide');
            }

            if (sunLight.classList.length === 0 || sunLight.classList.contains('hide')) {
                sunLight.classList.remove('hide');
                sunLight.classList.add('show');
            }

            if (cartLight.classList.length === 0 || cartLight.classList.contains('hide')) {
                cartLight.classList.remove('hide');
                cartLight.classList.add('show');

                cartDark.classList.remove('show');
                cartDark.classList.add('hide');
            }

            if (profileLight.classList.length === 0 || profileLight.classList.contains('hide')) {
                profileLight.classList.remove('hide');
                profileLight.classList.add('show');

                profileDark.classList.remove('show');
                profileDark.classList.add('hide');
            }

            if (burgerLight.classList.length === 0 || burgerLight.classList.contains('hide')) {
                burgerLight.classList.remove('hide');
                burgerLight.classList.add('show');

                burgerDark.classList.remove('show');
                burgerDark.classList.add('hide');
            }

            if (closeLight.classList.length === 0 || closeLight.classList.contains('hide')) {
                closeLight.classList.remove('hide');
                closeLight.classList.add('show');

                closeDark.classList.remove('show');
                closeDark.classList.add('hide');
            }

            if (!themeDarkBtn.classList.contains('theme-active')){
                themeDarkBtn.classList.add('theme-active');
                
                if (themeLightBtn.classList.contains('theme-active')){
                    themeLightBtn.classList.remove('theme-active');
                }
            }
            
        }
        if(theme === 'light'){
            if(bodyTag.classList.length == 0 || bodyTag.classList.contains('light-text')) {
                bodyTag.classList.remove('light-text');
                bodyTag.classList.remove('dark-bg');
                bodyTag.classList.add('dark-text');
                bodyTag.classList.add('light-bg');
            }

            if(logoLight.classList.length === 0 || logoDark.classList.contains('hide')){
                logoDark.classList.remove('hide');
                logoDark.classList.add('show');
                logoLight.classList.remove('show');
                logoLight.classList.add('hide');
            }

            if (moonDark.classList.length === 0 || moonDark.classList.contains('hide')) {
                moonDark.classList.remove('hide');
                moonDark.classList.add('show');
                moonLight.classList.remove('show');
                moonLight.classList.add('hide');
            }

            if (sunLight.classList.length === 0 || sunLight.classList.contains('hide')) {
                sunLight.classList.remove('hide');
                sunLight.classList.add('show');
            }

            if (cartDark.classList.length === 0 || cartDark.classList.contains('hide')) {
                cartDark.classList.remove('hide');
                cartDark.classList.add('show');

                cartLight.classList.remove('show');
                cartLight.classList.add('hide');
            }

            if (profileDark.classList.length === 0 || profileDark.classList.contains('hide')) {
                profileDark.classList.remove('hide');
                profileDark.classList.add('show');

                profileLight.classList.remove('show');
                profileLight.classList.add('hide');
            }

            if (burgerDark.classList.length === 0 || burgerDark.classList.contains('hide')) {
                burgerDark.classList.remove('hide');
                burgerDark.classList.add('show');

                burgerLight.classList.remove('show');
                burgerLight.classList.add('hide');
            }

            if (closeDark.classList.length === 0 || closeDark.classList.contains('hide')) {
                closeDark.classList.remove('hide');
                closeDark.classList.add('show');

                closeLight.classList.remove('show');
                closeLight.classList.add('hide');
            }

            if (!themeLightBtn.classList.contains('theme-active')){
                themeLightBtn.classList.add('theme-active');

                if (themeDarkBtn.classList.contains('theme-active')){
                    themeDarkBtn.classList.remove('theme-active');
                }
            }
        }
    }

    function changeTheme(buttons){
        buttons.addEventListener('click', (e) => {
            if(e.target && (e.target.tagName === 'IMG')){
                // change buttons active class
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
                    //change to dark theme
                    localStorage.setItem('theme', 'dark');
                    renderTheme(localStorage.getItem('theme'));
                    

                } else if(parent.id == 'theme-light'){
                    //change to light theme
                    localStorage.setItem('theme', 'light');
                    renderTheme(localStorage.getItem('theme'));
                }
            }
        });
    }

    setInitialTheme();
    mouseTracker(mouse, trackerContainer);
    changeTheme(themeBtns);
    toggleMenu(burgerBtn, navigation, closeBtn);
});

