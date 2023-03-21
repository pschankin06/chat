import {
    MODAL,
    EVETNS,
    DISPLAY_STYLES,
    CSS_CLASSES
} from './consts.js'

MODAL.SETTINGS_ENTER_BUTTON.addEventListener(EVETNS.CLICK, showSettingsModal);
MODAL.AUTHORIZATION__ENTER_BUTTON.addEventListener(EVETNS.CLICK, showAuthorizationModal);
MODAL.CONFIRMATION__ENTER_BUTTON.addEventListener(EVETNS.CLICK, event => {
    event.preventDefault();
    showConfirmationModal();
});
window.addEventListener(EVETNS.CLICK, event => hideModal(event)
);

for (let button of MODAL.EXIT_BUTTONS) {
    button.addEventListener(EVETNS.CLICK, event => exitModal(event));
}

function showSettingsModal() {
    MODAL.SETTINGS_SCREEN.style.display = DISPLAY_STYLES.FLEX;
}
function showSettingsModal() {
    MODAL.SETTINGS_SCREEN.style.display = DISPLAY_STYLES.FLEX;
}
function showAuthorizationModal() {
    MODAL.AUTHORIZATION_SCREEN.style.display = DISPLAY_STYLES.FLEX;
}
function showConfirmationModal() {
    MODAL.CONFIRMATION_SCREEN.style.display = DISPLAY_STYLES.FLEX;
    MODAL.AUTHORIZATION_SCREEN.style.display = DISPLAY_STYLES.NONE;
}

function exitModal(event) {
    const modalToExit = event.target.closest(CSS_CLASSES.MODAL_BOX);
    modalToExit.style.display = DISPLAY_STYLES.NONE;
}

function hideModal(event) {
    const isValid = (event.target == MODAL.SETTINGS_SCREEN || event.target == MODAL.AUTHORIZATION_SCREEN || event.target == MODAL.CONFIRMATION_SCREEN);

    if (isValid) {
        const modalToHide = event.target;
        modalToHide.style.display = DISPLAY_STYLES.NONE;
    }
}
