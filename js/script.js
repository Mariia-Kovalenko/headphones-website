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
            console.log(e.target.tagName);
            if(e.target && e.target.closest('img')){
                nav.style.right = 0;
                bodyTag.style.overflow = 'hidden';
                if(close.classList.contains('hide')){
                    close.classList.remove('hide');
                }
            }
        });
        close.addEventListener('click', (e) => {
            if(e.target && e.target.closest('img')){
                nav.style.right = '-100%';
                bodyTag.style.overflow = '';
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


    function toggleDisplay(itemShow, itemHide = null) {
        if(itemShow.classList.length === 0 || itemShow.classList.contains('hide')){
            itemShow.classList.remove('hide');
            itemShow.classList.add('show');

            if(itemHide) {
                itemHide.classList.remove('show');
                itemHide.classList.add('hide');
            }
        }
    }

    function renderTheme(theme){
        // console.log(`theme is ${theme}`);
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

        if(theme === 'dark'){
            if (bodyTag.classList.length == 0 || bodyTag.classList.contains('light-bg')){
                bodyTag.classList.remove('dark-text');
                bodyTag.classList.remove('light-bg');

                bodyTag.classList.add('light-text');
                bodyTag.classList.add('dark-bg');
            }

            toggleDisplay(logoLight, logoDark);
            toggleDisplay(moonLight, moonDark);
            toggleDisplay(sunLight);
            toggleDisplay(cartLight, cartDark);
            toggleDisplay(profileLight, profileDark);
            toggleDisplay(burgerLight, burgerDark);
            toggleDisplay(closeLight, closeDark);

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

            toggleDisplay(logoDark, logoLight);
            toggleDisplay(moonDark, moonLight);
            toggleDisplay(sunLight);
            toggleDisplay(cartDark, cartLight);
            toggleDisplay(profileDark, profileLight);
            toggleDisplay(burgerDark, burgerLight);
            toggleDisplay(closeDark, closeLight);   

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

