const log = console.log;
const getElement = (element) => document.querySelector(element);

window.addEventListener('load', () => {
    log('**** Welcome to ScanTranx ****');

    const mobileNavButton = getElement('#mobile-nav-button');

    let isNavActive = false;
    mobileNavButton.addEventListener('click', () => {
        if (!isNavActive) {
            mobileNavButton.classList.add('active');
        } else {
            mobileNavButton.classList.remove('active');
        }
        isNavActive = !isNavActive;
    });
});