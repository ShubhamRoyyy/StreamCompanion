/*
==========================================================
Header Component
==========================================================
*/

class StreamHeader extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
            <header class="header">

                <h1 class="app-title">
                    🎮 Stream Companion
                </h1>

                <div class="status-row">

                    <div
                        id="twitch-status"
                        class="status-chip offline">

                        🟣 Twitch

                    </div>

                    <div
                        id="youtube-status"
                        class="status-chip offline">

                        🔴 YouTube

                    </div>

                    <div
                        id="connection-status"
                        class="status-chip online">

                        🟢 Connected

                    </div>

                </div>

            </header>
        `;

    }

}

customElements.define(
    "stream-header",
    StreamHeader
);