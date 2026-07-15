/*
==========================================================
Chat Engine
==========================================================
*/

const messages = [];

const subscribers = [];

export function subscribe(callback) {

    subscribers.push(callback);

    callback(messages);

}

export function addMessage(data) {

    const message = {

        id: crypto.randomUUID(),

        platform: data.platform,

        username: data.username,

        text: data.text,

        timestamp: Date.now(),

        icon: data.icon

    };

    messages.push(message);

    if (messages.length > 150) {

        messages.shift();

    }

    subscribers.forEach(callback => callback(messages));

}