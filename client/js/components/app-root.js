/*
==========================================================
App Root Component
==========================================================
*/

class AppRoot extends HTMLElement {

    connectedCallback() {

        this.render();

    }

    render() {

        this.innerHTML = `

            <main class="container">

                <h1 style="text-align:center;margin-top:40px;">
                    🎮 Stream Companion
                </h1>

                <p style="text-align:center;color:gray;margin-top:12px;">
                    Application Shell Loaded
                </p>

            </main>

        `;

    }

}

customElements.define("app-root", AppRoot);