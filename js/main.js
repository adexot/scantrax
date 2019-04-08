const log = console.log;
const getElement = (element) => document.querySelector(element);

window.addEventListener('load', () => {
    log('**** Welcome to ScanTranx ****');

    const mobileNavButton = getElement('#mobile-nav-button');
    const mobileNavMenu = getElement('#mobile-nav-menu');

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
});