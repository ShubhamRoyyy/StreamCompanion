/*
==========================================================
Header Component
==========================================================
*/

class StreamHeader extends HTMLElement {

    connectedCallback() {

        this.render();

        this.connectionChip =
            this.querySelector("#connection-status");

        window.addEventListener(
            "socket-connected",
            () => this.setConnected(true)
        );

        window.addEventListener(
            "socket-disconnected",
            () => this.setConnected(false)
        );

    }

    setConnected(isConnected) {

        if (!this.connectionChip) return;

        if (isConnected) {

            this.connectionChip.classList.remove("offline");
            this.connectionChip.classList.add("online");

            this.connectionChip.innerHTML =
                "🟢 Connected";

        } else {

            this.connectionChip.classList.remove("online");
            this.connectionChip.classList.add("offline");

            this.connectionChip.innerHTML =
                "⚫ Disconnected";

        }

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
                        class="status-chip offline">

                        ⚫ Disconnected

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