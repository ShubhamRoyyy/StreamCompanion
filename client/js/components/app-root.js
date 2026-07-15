/*
==========================================================
App Root Component
==========================================================
*/

import "./header.js";
import "./stats-panel.js";
import "./chat-panel.js";
import "./alerts-panel.js";
import "./obs-panel.js";

class AppRoot extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `

            <main class="container">

                <stream-header></stream-header>

                <stats-panel></stats-panel>

                <chat-panel></chat-panel>

                <alerts-panel></alerts-panel>

                <obs-panel></obs-panel>

            </main>

        `;

    }

}

customElements.define(
    "app-root",
    AppRoot
);