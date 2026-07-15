/*
==========================================================
OBS Panel Component
==========================================================
*/

class ObsPanel extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `

            <section class="obs-card">

                <div class="obs-header">

                    <h2 class="card-title">
                        🖥️ OBS Controls
                    </h2>

                </div>

                <details class="obs-section">

                    <summary>

                        <span>🎬 Scenes</span>

                        <span class="obs-count">
                            0 Scenes
                        </span>

                    </summary>

                    <div class="obs-content" id="scene-list">

                        Waiting for OBS...

                    </div>

                </details>

                <details class="obs-section">

                    <summary>

                        <span>📦 Sources</span>

                        <span class="obs-count">
                            0 Sources
                        </span>

                    </summary>

                    <div class="obs-content" id="source-list">

                        Waiting for OBS...

                    </div>

                </details>

                <details class="obs-section">

                    <summary>

                        <span>🎤 Audio</span>

                    </summary>

                    <div class="obs-content">

                        <button class="obs-button">
                            🎤 Mic
                        </button>

                        <button class="obs-button">
                            🔊 Desktop Audio
                        </button>

                    </div>

                </details>

            </section>

        `;

    }

}

customElements.define("obs-panel", ObsPanel);