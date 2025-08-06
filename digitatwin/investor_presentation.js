// RetrofitForge-AI Investor Presentation Automation
// Handles automated demo presentation for investors

class InvestorPresentation {
    constructor(digitalTwin) {
        this.digitalTwin = digitalTwin;
        this.isRunning = false;
        this.currentStep = 0;
        this.narrationOverlay = document.getElementById('narrationOverlay');
        this.narrationText = document.getElementById('narrationText');
        this.narrationProgress = document.getElementById('narrationProgress');

        // Presentation script with timings and actions
        this.presentationScript = [
            {
                duration: 8000,
                text: "Welcome to RetrofitForge-AI's Digital Twin Engine. We're analyzing 22 Bishopsgate, a 278-meter commercial tower in London's financial district.",
                action: () => this.focusOnBuilding(),
                section: 1
            },
            {
                duration: 10000,
                text: "Our patent-pending STGNN technology processes 2,537 active building models with 96.8% simulation accuracy in just 2.2 seconds.",
                action: () => this.highlightMetrics(),
                section: 1
            },
            {
                duration: 12000,
                text: "The SAM-GNN pipeline identifies 1,847 building components across walls, roof, windows, HVAC systems, and floor structures with unprecedented precision.",
                action: () => this.animateComponentAnalysis(),
                section: 2
            },
            {
                duration: 10000,
                text: "Our investment optimization engine delivers 34.2% ROI improvement through advanced uncertainty quantification and Bayesian modeling.",
                action: () => this.showROIOptimization(),
                section: 3
            },
            {
                duration: 8000,
                text: "Real-time analysis reveals annual energy savings of £274,000 and carbon reduction potential of 1,430 tonnes CO2 equivalent.",
                action: () => this.highlightSavings(),
                section: 7
            },
            {
                duration: 6000,
                text: "This represents the future of building intelligence - scalable, profitable, and essential for net-zero transition.",
                action: () => this.finalOverview(),
                section: 7
            }
        ];

        console.log('🎬 Investor presentation system initialized');
    }

    start() {
        if (this.isRunning) return;

        this.isRunning = true;
        this.currentStep = 0;

        console.log('🚀 Starting automated investor presentation');
        this.showNarrationOverlay();
        this.executeNextStep();
    }

    stop() {
        this.isRunning = false;
        this.hideNarrationOverlay();
        this.resetView();
        console.log('⏹️ Presentation stopped');
    }

    pause() {
        this.isRunning = false;
        console.log('⏸️ Presentation paused');
    }

    resume() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.executeNextStep();
            console.log('▶️ Presentation resumed');
        }
    }

    executeNextStep() {
        if (!this.isRunning || this.currentStep >= this.presentationScript.length) {
            this.completePresentaton();
            return;
        }

        const step = this.presentationScript[this.currentStep];

        // Update section if needed
        if (step.section !== this.digitalTwin.currentSection) {
            this.digitalTwin.currentSection = step.section;
            this.digitalTwin.updateSectionInfo();
        }

        // Show narration text
        this.showNarrationText(step.text);

        // Execute step action
        if (step.action) {
            step.action();
        }

        // Animate progress bar
        this.animateProgress(step.duration);

        // Schedule next step
        setTimeout(() => {
            this.currentStep++;
            this.executeNextStep();
        }, step.duration);

        console.log(`📢 Presentation step ${this.currentStep + 1}: ${step.text.substring(0, 50)}...`);
    }

    showNarrationOverlay() {
        this.narrationOverlay.classList.add('active');
    }

    hideNarrationOverlay() {
        this.narrationOverlay.classList.remove('active');
    }

    showNarrationText(text) {
        this.narrationText.textContent = text;

        // Speak the text if speech synthesis is available
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1.0;
            utterance.volume = 0.8;
            speechSynthesis.speak(utterance);
        }
    }

    animateProgress(duration) {
        this.narrationProgress.style.width = '0%';
        this.narrationProgress.style.transition = `width ${duration}ms linear`;

        setTimeout(() => {
            this.narrationProgress.style.width = '100%';
        }, 100);

        setTimeout(() => {
            this.narrationProgress.style.width = '0%';
            this.narrationProgress.style.transition = 'width 0.3s ease';
        }, duration);
    }

    // Presentation action methods
    focusOnBuilding() {
        const building = this.digitalTwin.config.targetBuilding;

        this.digitalTwin.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                building.longitude - 0.001,
                building.latitude - 0.001,
                300
            ),
            orientation: {
                heading: Cesium.Math.toRadians(45.0),
                pitch: Cesium.Math.toRadians(-45.0),
                roll: 0.0
            },
            duration: 3.0
        });

        // Highlight building info panel
        const buildingInfo = document.getElementById('buildingInfo');
        buildingInfo.classList.add('animate-glow');
        setTimeout(() => buildingInfo.classList.remove('animate-glow'), 3000);
    }

    highlightMetrics() {
        // Animate metric cards
        const metricCards = document.querySelectorAll('.metric-card');
        metricCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-glow');
                setTimeout(() => card.classList.remove('animate-glow'), 2000);
            }, index * 500);
        });

        // Update metrics with animation
        this.animateMetricUpdates();
    }

    animateMetricUpdates() {
        const metrics = this.digitalTwin.config.analysisMetrics;

        // Animate active models count
        this.animateCounter('activeModels', 0, metrics.activeModels, 2000);

        // Animate accuracy percentage
        this.animateCounter('accuracy', 0, metrics.accuracy, 2000, '%');

        // Animate processing speed
        this.animateCounter('processing', 0, metrics.processingSpeed, 2000, 's');
    }

    animateCounter(elementId, start, end, duration, suffix = '') {
        const element = document.getElementById(elementId);
        const startTime = Date.now();
        const range = end - start;

        const updateCounter = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = start + (range * this.easeOut(progress));

            if (suffix === '%' || suffix === 's') {
                element.textContent = current.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(current).toLocaleString() + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    }

    easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    animateComponentAnalysis() {
        // Switch to closer view for component analysis
        const building = this.digitalTwin.config.targetBuilding;

        this.digitalTwin.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                building.longitude - 0.0005,
                building.latitude,
                150
            ),
            orientation: {
                heading: Cesium.Math.toRadians(90.0),
                pitch: Cesium.Math.toRadians(-60.0),
                roll: 0.0
            },
            duration: 2.0
        });

        // Highlight live analysis panel
        const liveAnalysis = document.getElementById('liveAnalysis');
        liveAnalysis.classList.add('animate-slide-right');

        // Animate component rows
        const componentRows = liveAnalysis.querySelectorAll('.component-row');
        componentRows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('animate-glow');
                setTimeout(() => row.classList.remove('animate-glow'), 1500);
            }, index * 800);
        });
    }

    showROIOptimization() {
        // Create temporary ROI visualization
        this.createROIVisualization();

        // Camera movement for investment view
        const building = this.digitalTwin.config.targetBuilding;

        this.digitalTwin.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                building.longitude,
                building.latitude - 0.002,
                400
            ),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-30.0),
                roll: 0.0
            },
            duration: 2.5
        });
    }

    createROIVisualization() {
        const roiPanel = document.createElement('div');
        roiPanel.className = 'roi-visualization';
        roiPanel.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            z-index: 2000;
            color: white;
            border: 2px solid #00ff88;
        `;

        roiPanel.innerHTML = `
            <h2 style="color: #00ff88; margin-bottom: 20px;">🚀 STGNN Investment Optimization</h2>
            <div style="display: flex; gap: 30px; justify-content: center;">
                <div>
                    <div style="font-size: 2.5rem; font-weight: bold; color: #ff4444;">12.3%</div>
                    <div>Traditional ROI</div>
                </div>
                <div style="font-size: 2rem; padding-top: 20px;">→</div>
                <div>
                    <div style="font-size: 2.5rem; font-weight: bold; color: #00ff88;">34.2%</div>
                    <div>RetrofitForge ROI</div>
                </div>
            </div>
            <div style="margin-top: 20px; font-size: 1.2rem; color: #00ff88;">
                +34.2% Improvement with STGNN™ Technology
            </div>
        `;

        document.body.appendChild(roiPanel);

        // Remove after 8 seconds
        setTimeout(() => roiPanel.remove(), 8000);
    }

    highlightSavings() {
        // Create savings visualization
        this.createSavingsVisualization();

        // Highlight carbon metrics in summary cards
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach(card => {
            card.classList.add('animate-glow');
            setTimeout(() => card.classList.remove('animate-glow'), 3000);
        });
    }

    createSavingsVisualization() {
        const savingsPanel = document.createElement('div');
        savingsPanel.className = 'savings-visualization';
        savingsPanel.style.cssText = `
            position: absolute;
            top: 20%;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            padding: 25px;
            border-radius: 12px;
            z-index: 2000;
            color: white;
            border: 2px solid #00ff88;
            max-width: 300px;
        `;

        savingsPanel.innerHTML = `
            <h3 style="color: #00ff88; margin-bottom: 15px;">💰 Annual Impact</h3>
            <div style="margin-bottom: 15px;">
                <div style="font-size: 1.8rem; font-weight: bold; color: #00ff88;">£274,000</div>
                <div style="font-size: 0.9rem; color: #aaa;">Energy Savings</div>
            </div>
            <div style="margin-bottom: 15px;">
                <div style="font-size: 1.8rem; font-weight: bold; color: #00ff88;">1,430 tCO₂e</div>
                <div style="font-size: 0.9rem; color: #aaa;">Carbon Reduction</div>
            </div>
            <div style="padding-top: 15px; border-top: 1px solid #333; font-size: 0.9rem;">
                <strong>Payback Period:</strong> 2.7 years<br>
                <strong>NPV:</strong> £3.4M over 10 years
            </div>
        `;

        document.body.appendChild(savingsPanel);

        // Remove after 6 seconds
        setTimeout(() => savingsPanel.remove(), 6000);
    }

    finalOverview() {
        // Return to overview camera position
        const building = this.digitalTwin.config.targetBuilding;

        this.digitalTwin.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                building.longitude - 0.003,
                building.latitude - 0.003,
                600
            ),
            orientation: {
                heading: Cesium.Math.toRadians(45.0),
                pitch: Cesium.Math.toRadians(-20.0),
                roll: 0.0
            },
            duration: 4.0
        });

        // Show final impact summary
        this.showFinalSummary();
    }

    showFinalSummary() {
        const summaryPanel = document.createElement('div');
        summaryPanel.className = 'final-summary';
        summaryPanel.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 204, 102, 0.1));
            backdrop-filter: blur(15px);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            z-index: 2000;
            color: white;
            border: 2px solid #00ff88;
            max-width: 500px;
        `;

        summaryPanel.innerHTML = `
            <h2 style="color: #00ff88; margin-bottom: 20px;">🔬 RetrofitForge-AI Digital Twin Engine</h2>
            <div style="margin-bottom: 20px; font-size: 1.1rem; line-height: 1.5;">
                The world's first patent-pending STGNN technology for building intelligence, 
                delivering measurable climate impact and investment returns at portfolio scale.
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #00ff88;">2,537</div>
                    <div style="font-size: 0.9rem;">Active Models</div>
                </div>
                <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #00ff88;">96.8%</div>
                    <div style="font-size: 0.9rem;">Accuracy</div>
                </div>
                <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #00ff88;">+34.2%</div>
                    <div style="font-size: 0.9rem;">ROI Improvement</div>
                </div>
                <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #00ff88;">1,430</div>
                    <div style="font-size: 0.9rem;">tCO₂e Reduction</div>
                </div>
            </div>
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
                <strong style="color: #00ff88;">Ready to revolutionize your building portfolio?</strong>
            </div>
        `;

        document.body.appendChild(summaryPanel);

        // Remove after 8 seconds
        setTimeout(() => summaryPanel.remove(), 8000);
    }

    completePresentaton() {
        this.isRunning = false;
        this.hideNarrationOverlay();

        // Show completion message
        const completionPanel = document.createElement('div');
        completionPanel.className = 'presentation-complete';
        completionPanel.style.cssText = `
            position: absolute;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 255, 136, 0.9);
            color: white;
            padding: 20px 30px;
            border-radius: 25px;
            font-weight: bold;
            z-index: 2000;
        `;

        completionPanel.textContent = '✅ Investor presentation complete. Questions?';
        document.body.appendChild(completionPanel);

        setTimeout(() => completionPanel.remove(), 5000);

        console.log('🎉 Investor presentation completed successfully');
    }

    resetView() {
        // Reset to initial view
        const building = this.digitalTwin.config.targetBuilding;

        this.digitalTwin.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(
                building.longitude - 0.002,
                building.latitude - 0.002,
                400
            ),
            orientation: {
                heading: Cesium.Math.toRadians(45.0),
                pitch: Cesium.Math.toRadians(-30.0),
                roll: 0.0
            }
        });
    }
}

// Export for global access
window.InvestorPresentation = InvestorPresentation;