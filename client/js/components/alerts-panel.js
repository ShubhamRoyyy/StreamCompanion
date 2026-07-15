/*
==========================================================
Alerts Panel Component
==========================================================
*/

class AlertsPanel extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `

            <!-- Twitch Alerts -->

            <section class="alerts-card twitch-alerts">

                <div class="alerts-header">

                    <h2 class="card-title">
                        💜 Twitch Alerts
                    </h2>

                    <span class="alert-count">
                        3
                    </span>

                </div>

                <div class="alerts-list">

                    <div class="alert-item">

                        <span class="alert-icon">👤</span>

                        <span class="alert-text">

                            <strong>Alex</strong>
                            followed your channel

                        </span>

                    </div>

                    <div class="alert-item">

                        <span class="alert-icon">⭐</span>

                        <span class="alert-text">

                            <strong>John</strong>
                            subscribed (Tier 1)

                        </span>

                    </div>

                    <div class="alert-item">

                        <span class="alert-icon">💎</span>

                        <span class="alert-text">

                            <strong>Emma</strong>
                            cheered 500 Bits

                        </span>

                    </div>

                </div>

            </section>

            <!-- YouTube Alerts -->

            <section class="alerts-card youtube-alerts">

                <div class="alerts-header">

                    <h2 class="card-title">
                        ❤️ YouTube Alerts
                    </h2>

                    <span class="alert-count youtube">
                        2
                    </span>

                </div>

                <div class="alerts-list">

                    <div class="alert-item">

                        <span class="alert-icon">▶️</span>

                        <span class="alert-text">

                            <strong>Mike</strong>
                            subscribed

                        </span>

                    </div>

                    <div class="alert-item">

                        <span class="alert-icon">💰</span>

                        <span class="alert-text">

                            <strong>Rahul</strong>
                            sent ₹100 Super Chat

                        </span>

                    </div>

                </div>

            </section>

        `;

    }

}

customElements.define(
    "alerts-panel",
    AlertsPanel
);