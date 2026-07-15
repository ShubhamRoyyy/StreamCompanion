/*
==========================================================
Stats Panel Component
==========================================================
*/

class StatsPanel extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
            <section class="stats-card">

                <h2 class="card-title">
                    📊 Live Statistics
                </h2>

                <div class="stats-grid">

                    <div class="stat-box">

                        <div class="stat-label">
                            🟣 TW
                        </div>

                        <div
                            id="tw-count"
                            class="stat-value">

                            0

                        </div>

                    </div>

                    <div class="stat-box">

                        <div class="stat-label">
                            🔴 YT
                        </div>

                        <div
                            id="yt-count"
                            class="stat-value">

                            0

                        </div>

                    </div>

                    <div class="stat-box">

                        <div class="stat-label">
                            📱 YS
                        </div>

                        <div
                            id="ys-count"
                            class="stat-value">

                            0

                        </div>

                    </div>

                </div>

            </section>
        `;

    }

}

customElements.define(
    "stats-panel",
    StatsPanel
);