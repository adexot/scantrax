const log = console.log;
const getElement = (element) => document.querySelector(element);

window.addEventListener('load', () => {
    log('**** Welcome to ScanTranx ****');

    const mobileNavToggle = getElement('#mobile-nav-toggle');

    log(mobileNavToggle);
});