/*
==========================================================
OBS Panel Component
==========================================================
*/

class ObsPanel extends HTMLElement {

    connectedCallback() {

        this.render();

        this.initializeAccordion();

    }

    initializeAccordion() {

        const headers = this.querySelectorAll(".obs-section-header");

        headers.forEach(header => {

            header.addEventListener("click", () => {

                const section = header.parentElement;

                section.classList.toggle("open");

            });

        });

    }

    render() {

        this.innerHTML = `

            <section class="obs-card">

                <h2 class="card-title">
                    🖥️ OBS Controls
                </h2>

                <!-- Scenes -->

                <div class="obs-section">

                    <div class="obs-section-header">

                        <div>

                            <span class="obs-arrow">▶</span>

                            🎬 Scenes

                        </div>

                        <span
                            id="scene-count"
                            class="obs-count">

                            0 Scenes

                        </span>

                    </div>

                    <div
                        id="scene-list"
                        class="obs-content">

                        Waiting for OBS...

                    </div>

                </div>

                <!-- Sources -->

                <div class="obs-section">

                    <div class="obs-section-header">

                        <div>

                            <span class="obs-arrow">▶</span>

                            📦 Sources

                        </div>

                        <span
                            id="source-count"
                            class="obs-count">

                            0 Sources

                        </span>

                    </div>

                    <div
                        id="source-list"
                        class="obs-content">

                        Waiting for OBS...

                    </div>

                </div>

                <!-- Audio -->

                <div class="obs-section">

                    <div class="obs-section-header">

                        <div>

                            <span class="obs-arrow">▶</span>

                            🎤 Audio

                        </div>

                    </div>

                    <div class="obs-content">

                        <button class="obs-button">

                            🎤 Mic

                        </button>

                        <button class="obs-button">

                            🔊 Desktop Audio

                        </button>

                    </div>

                </div>

            </section>

        `;

    }

}

customElements.define("obs-panel", ObsPanel);