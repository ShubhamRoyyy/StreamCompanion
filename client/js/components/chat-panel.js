import { subscribe } from "../chat.js";

class ChatPanel extends HTMLElement {

    connectedCallback() {

        this.render();

        this.chatContainer =
            this.querySelector("#chat-container");

        subscribe(messages => {

            this.renderMessages(messages);

        });

    }

    render() {

        this.innerHTML = `

            <section class="chat-card">

                <h2 class="card-title">

                    💬 Live Chat

                </h2>

                <div id="chat-container">

                </div>

            </section>

        `;

    }

    renderMessages(messages) {

        this.chatContainer.innerHTML = messages.map(message => `

            <div class="chat-message ${message.platform}">

                <strong>

                    ${message.icon}
                    ${message.username}:

                </strong>

                ${message.text}

            </div>

        `).join("");

        this.chatContainer.scrollTop =
            this.chatContainer.scrollHeight;

    }

}

customElements.define(
    "chat-panel",
    ChatPanel
);