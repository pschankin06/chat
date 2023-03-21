export const UI_ELEMENTS = {
    DIALOGUE__FORM: document.querySelector('.chat__screen-form'),
    CHAT_INPUT: document.querySelector('.chat__screen-input'),
    MESSAGE_TEMPLATE: document.querySelector('.template__message'),
    DIALOGUE_SCREEN_WRAPPER: document.querySelector('.chat__screen-wrapper'),
    DIALOGUE_SCREEN: document.querySelector('.chat__screen-dialogue'),
    AUTHORIZATION__FORM: document.querySelector('.modal-box__authorization-form'),
    AUTHORIZATION__INPUT: document.querySelector('.modal-box__authorization-input'),
    CONFIRMATION__FORM: document.querySelector('.modal-box__confirmation-form'),
    CONFIRMATION_INPUT: document.querySelector('.modal-box__confirmation-input'),
    SETTINGS_FORM: document.querySelector('.modal-box__settings-form'),
    SETTINGS_INPUT: document.querySelector('.modal-box__settings-input'),
    HISTORY_NOTIFICATION: document.querySelector('.chat__screen-notification')
}

export const MODAL = {
    SETTINGS_ENTER_BUTTON: document.querySelector('.chat__screen-settings'),
    SETTINGS_SCREEN: document.querySelector('.modal-box__settings'),
    SETTINGS_EXIT_BUTTON: document.querySelector('.modal-box__settings-exit'),
    AUTHORIZATION__ENTER_BUTTON: document.querySelector('.chat__screen-exit'),
    AUTHORIZATION_SCREEN: document.querySelector('.modal-box__authorization'),
    AUTHORIZATION__EXIT_BUTTON: document.querySelector('.modal-box__authorization-exit'),
    AUTHORIZATION__INPUT: document.querySelector('.modal-box__authorization-input'),
    CONFIRMATION__ENTER_BUTTON: document.querySelector('.modal-box__authorization-button--enter'),
    CONFIRMATION_SCREEN: document.querySelector('.modal-box__confirmation'),
    CONFIRMATION__EXIT_BUTTON: document.querySelector('.modal-box__confirmation-exit'),
    EXIT_BUTTONS: document.querySelectorAll('.modal-box__exit')
}

export const EVETNS = {
    CLICK: 'click',
    DOM_CONTENT_LOADED: 'DOMContentLoaded',
    SCROLL: 'scroll',
    SUBMIT: 'submit'
}

export const DISPLAY_STYLES = {
    FLEX: 'flex',
    NONE: 'none',
    BLOCK: 'block'
}

export const CSS_CLASSES = {
    MODAL_BOX: '.modal-box',
    MINE: 'chat__screen-message--mine',
    COMPANION: 'chat__screen-message--companion',
    SENDED: 'chat__screen-message--sended',
    RECEIVED: 'chat__screen-message--received',
    TIME: '.chat__screen-message-time',
    MESSAGE: 'chat__screen-message',
    MESSAGE_TEXT: '.chat__screen-message-text'
}

export const SCROLL_INTO_VIEW_KEYS = {
    END: 'end',
    AUTO: 'auto',
    NEAREST: 'nearest',
    SMOOTH: 'smooth'
}

export const STORAGE_KEYS = {
    HISTORY: 'messageHistory',
    EMAIL: 'email',
    TOKEN: 'token'
}

export const REQUEST = {
    METHOD_POST: 'POST',
    METHOD_PATCH: 'PATCH',
    METHOD_GET: 'GET',
    CONTENT_TYPE: 'application/json;charset=utf-8',
    BEARER: 'Bearer'
}

export const ALERT_MESSAGES = {
    EMAIL: 'Incorrect email. Try again',
    TOKEN: 'Incorrect token. Try again',
    NAME: 'Incorrect name. Try again'
}

export const timeFormat = 'HH:mm';
export const inputElement = 'input';
