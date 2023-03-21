'use strict';
import { } from './history.js'

import {
    showMessageBox,
} from './view.js';

import {
    parseData,
    chooseClasses,
    addTime
} from './utils.js'

import {
    UI_ELEMENTS,
    STORAGE_KEYS,
    CSS_CLASSES,
    REQUEST,
    ALERT_MESSAGES
} from './consts.js'
import Cookies from 'js-cookie';

export const SERVER = {
    URL: 'https://edu.strada.one/api/user',
    URL_USER_DATA: 'https://edu.strada.one/api/user/me',
    URL_MESSAGES: 'https://edu.strada.one/api/messages',
    URL_WEB_SOCKET: 'wss://edu.strada.one/websockets?',
    TOKEN: Cookies.get('token')
}

const socket = new WebSocket(`${SERVER.URL_WEB_SOCKET}${SERVER.TOKEN}`);
socket.onopen = () => console.log('connected');
socket.onmessage = event => {
    try {
        console.log('listening');
        console.log(event.data);
        const eventData = parseData(event.data);
        createMessage(eventData, event.type);
    }
    catch (error) {
        if (error instanceof ValidationError) {
            alert(`Incorrect data: ${error.message}`);
        } else if (error instanceof SyntaxError) { 
            alert( `JSON syntax error: ${error.message}`);
        } else {
            throw error;
        }
    }
}

    export function sendMessageText(messageText) {
        try {
            socket.send(JSON.stringify({ 'text': messageText }));
        } catch (error) {
            alert(`${error.name} ${error.message} ${error.stack}`);
        }
    }

    export function createMessage(messageData, eventType) {
        const email = messageData.user.email;
        const name = messageData.user.name;
        const myEmail = Cookies.get(STORAGE_KEYS.EMAIL);
        const myMessage = 'Я';
        const messageAuthor = (email === myEmail) ? myMessage : name;

        const messageBox = document.createElement('div');
        messageBox.classList.add(CSS_CLASSES.MESSAGE);
        chooseClasses(messageBox, messageAuthor);
        messageBox.append(UI_ELEMENTS.MESSAGE_TEMPLATE.content.cloneNode(true));

        const messageText = messageBox.querySelector(CSS_CLASSES.MESSAGE_TEXT);
        messageText.innerHTML = `${messageAuthor}: ${messageData.text}`;

        addTime(messageBox, messageData)
        showMessageBox(messageBox, eventType);
    }

    export function getCode() {
        const emailValue = UI_ELEMENTS.AUTHORIZATION__INPUT.value;
        const email = { email: emailValue };
        const isValid = (emailValue.length > 0 && emailValue.includes('@') && emailValue.includes('.'));
        try {
            if (isValid) {
                fetch(SERVER.URL, {
                    method: REQUEST.METHOD_POST,
                    headers: {
                        'Content-Type': REQUEST.CONTENT_TYPE
                    },
                    body: JSON.stringify(email)
                });
                Cookies.set(STORAGE_KEYS.EMAIL, UI_ELEMENTS.AUTHORIZATION__INPUT.value, { expires: 365 });
            } else {
                alert(ALERT_MESSAGES.EMAIL);
                UI_ELEMENTS.AUTHORIZATION__INPUT.value = null;
            }
        } catch (error) {
            alert(`${error.name} ${error.message} ${error.stack}`);
        }
    }

    export function saveCode() {
        const token = UI_ELEMENTS.CONFIRMATION_INPUT.value;
        const isValid = token.length > 0;
        if (isValid) {
            Cookies.set(STORAGE_KEYS.TOKEN, token, { expires: 365 });
        } else {
            alert(ALERT_MESSAGES.TOKEN);
            UI_ELEMENTS.CONFIRMATION_INPUT.value = null
        }
    }

    export async function changeName() {
        const nameValue = UI_ELEMENTS.SETTINGS_INPUT.value;
        const name = { name: nameValue };
        const isValid = nameValue.length > 0;
        try {
            if (isValid) {
                await fetch(SERVER.URL, {
                    method: REQUEST.METHOD_PATCH,
                    headers: {
                        'Content-Type': REQUEST.CONTENT_TYPE,
                        Authorization: `${REQUEST.BEARER} ${SERVER.TOKEN}`
                    },
                    body: JSON.stringify(name)
                });

                const response = await fetch(SERVER.URL_USER_DATA, {
                    method: REQUEST.METHOD_GET,
                    headers: {
                        'Content-Type': REQUEST.CONTENT_TYPE,
                        Authorization: `${REQUEST.BEARER} ${SERVER.TOKEN}`
                    },
                });
                const userData = await response.json();
                console.log(userData);
                console.log(name);
            } else {
                alert(ALERT_MESSAGES.NAME);
                UI_ELEMENTS.SETTINGS_INPUT.value = null;
            }
        } catch (error) {
            alert(`${error.name} ${error.message} ${error.stack}`);
        }
    }

    export async function getMessageHistory() {
        const response = await fetch(SERVER.URL_MESSAGES, {
            method: REQUEST.METHOD_GET,
            headers: {
                'Content-Type': REQUEST.CONTENT_TYPE,
                Authorization: `${REQUEST.BEARER} ${SERVER.TOKEN}`
            },
        });
        const messageHistory = await response.json();
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(messageHistory.messages));
    }