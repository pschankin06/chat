import {
    CSS_CLASSES,
    timeFormat
} from './consts.js'

import { format } from 'date-fns';

export function parseData(data) {
    try {
        const messagesData = JSON.parse(data);
        return messagesData;
    } catch (error) {
        alert(`${error.name} ${error.message} ${error.stack}`);
    }
}

export function chooseClasses(messageBox, messageAuthor) {
    const isValid = messageAuthor === 'Я';

    if (isValid) {
        messageBox.classList.add(CSS_CLASSES.MINE, CSS_CLASSES.SENDED);
    } else {
        messageBox.classList.add(CSS_CLASSES.COMPANION, CSS_CLASSES.RECEIVED);
    }
}

export function addTime(messageBox, messageData) {
    const messageDate = messageBox.querySelector(CSS_CLASSES.TIME);
    messageDate.innerHTML = `${format(new Date(messageData.createdAt), timeFormat)}`;
}