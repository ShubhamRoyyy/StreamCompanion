/*
==========================================================
App Root Component
==========================================================
*/

import "./header.js";

class AppRoot extends HTMLElement {

    connectedCallback() {

        this.render();

    }

    render() {

        this.innerHTML = `
            <main class="container">

                <stream-header></stream-header>

            </main>
        `;

    }

}

customElements.define("app-root", AppRoot);