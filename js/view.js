import {
    getCode,
    saveCode,
    changeName,
    sendMessageText,
} from './main.js';

import {
    UI_ELEMENTS,
    EVETNS,
    SCROLL_INTO_VIEW_KEYS,
    DISPLAY_STYLES,
    inputElement
} from './consts.js';

UI_ELEMENTS.DIALOGUE__FORM.addEventListener(EVETNS.SUBMIT, event => {
    event.preventDefault();
    sendMessageText(UI_ELEMENTS.CHAT_INPUT.value);
    clearInput(event);
});
UI_ELEMENTS.AUTHORIZATION__FORM.addEventListener(EVETNS.SUBMIT, event => {
    event.preventDefault();
    getCode();
    clearInput(event);
});
UI_ELEMENTS.CONFIRMATION__FORM.addEventListener(EVETNS.SUBMIT, event => {
    event.preventDefault();
    saveCode();
    clearInput(event);
});
UI_ELEMENTS.SETTINGS_FORM.addEventListener(EVETNS.SUBMIT, event => {
    event.preventDefault();
    changeName();
    clearInput(event);
});

function clearInput(event) {
    const input = event.target.querySelector(inputElement);
    input.value = null;
}

export function showMessageBox(messageBox, eventType) {
    const isEventLoadsHistory = (eventType === EVETNS.SCROLL || eventType === EVETNS.DOM_CONTENT_LOADED);
    if (isEventLoadsHistory) {
        UI_ELEMENTS.DIALOGUE_SCREEN.prepend(messageBox);
        UI_ELEMENTS.DIALOGUE_SCREEN.scrollIntoView(
            {
                block: SCROLL_INTO_VIEW_KEYS.NEAREST, behavior: SCROLL_INTO_VIEW_KEYS.SMOOTH
            });
    } else {
        UI_ELEMENTS.DIALOGUE_SCREEN.append(messageBox);
        UI_ELEMENTS.DIALOGUE_SCREEN.lastElementChild.scrollIntoView(
            {
                behavior: SCROLL_INTO_VIEW_KEYS.SMOOTH
            });
    }
}

export function showHistoryNotification() {
    UI_ELEMENTS.HISTORY_NOTIFICATION.style.display = DISPLAY_STYLES.BLOCK;
    setTimeout(() => {
        UI_ELEMENTS.HISTORY_NOTIFICATION.style.display = DISPLAY_STYLES.NONE;
    }, 3000);
    UI_ELEMENTS.DIALOGUE_SCREEN.scrollIntoView(
        {
            block: SCROLL_INTO_VIEW_KEYS.NEAREST, behavior: SCROLL_INTO_VIEW_KEYS.SMOOTH
        });
}