const log = console.log;
const getElement = (element) => document.querySelector(element);

window.addEventListener('load', () => {
    log('**** Welcome to ScanTranx ****');

    const mobileNavButton = getElement('#mobile-nav-button');
    const mobileNavMenu = getElement('#mobile-nav-menu');
    const playButton = getElement('.play--button');
    const posPlayButton = getElement('.pos-play--button');
    const navBar = getElement('.nav--container');

    let isNavActive = false;
    mobileNavButton.addEventListener('click', () => {
        if (!isNavActive) {
            mobileNavButton.classList.add('active');
            mobileNavMenu.classList.add('active');
        } else {
            mobileNavButton.classList.remove('active');
            mobileNavMenu.classList.remove('active');
        }
        isNavActive = !isNavActive;
    });

    const modal = getElement('#modal');
    playButton && playButton.addEventListener('click', () => {

        modal.classList.add('modal--show');
    });

    posPlayButton && posPlayButton.addEventListener('click', () => {
        modal.classList.add('modal--show');
    });

    modal && modal.addEventListener('click', () => {
        modal.classList.remove('modal--show');
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('fixed');
        } else {
            navBar.classList.remove('fixed');
        }
    });
});