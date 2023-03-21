import {
    getMessageHistory,
    createMessage
} from './main.js';

import {
    showHistoryNotification
} from './view.js';

import {
    parseData
} from './utils.js'

import {
    UI_ELEMENTS,
    EVETNS,
    SCROLL_INTO_VIEW_KEYS,
    STORAGE_KEYS
} from './consts.js';

    let historyMessagesShown = 0;
    const historyMessagesToShowAtOnce = 20;
    const historyJSON = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const messageHistory = parseData(historyJSON);
    console.log(messageHistory);

    document.addEventListener(EVETNS.DOM_CONTENT_LOADED, event => {
        ShowNearestHistory(event);
    });

    UI_ELEMENTS.DIALOGUE_SCREEN_WRAPPER.addEventListener(EVETNS.SCROLL, event => {
        showHistoryOnScroll(event);
    });

    function ShowNearestHistory(event) {
        getMessageHistory();
        showCurrentHistory(messageHistory, event.type);
        UI_ELEMENTS.DIALOGUE_SCREEN.scrollIntoView(
            {
                block: SCROLL_INTO_VIEW_KEYS.END, behavior: SCROLL_INTO_VIEW_KEYS.AUTO
            });
    }

    function showHistoryOnScroll(event) {
        const isScrollOnTop = (event.target.scrollTop === 0);
        if (isScrollOnTop) {
            showCurrentHistory(messageHistory, event.type);
        }
    }

    function showCurrentHistory(messageHistory, eventType) {
        let i = historyMessagesShown;
        const isMessageShown = messageHistory[i] < historyMessagesShown;
        const doesAllHistoryShown = historyMessagesShown >= messageHistory.length;

        for (; i < historyMessagesShown + historyMessagesToShowAtOnce; i++) {
            if (isMessageShown) {
                continue;
            } else if (doesAllHistoryShown) {
                showHistoryNotification();
                return;
            } else {
                createMessage(messageHistory[i], eventType);
            }
        }
        historyMessagesShown += historyMessagesToShowAtOnce;
    }


