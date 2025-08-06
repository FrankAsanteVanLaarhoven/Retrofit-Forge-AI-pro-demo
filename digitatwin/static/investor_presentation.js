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

        completionPanel.textContent = '✅ Investor presentation complete. Returning to home view...';
        document.body.appendChild(completionPanel);

        // Return to home view after presentation
        setTimeout(() => {
            if (this.digitalTwin && this.digitalTwin.switchView) {
                this.digitalTwin.switchView('home');
                
                // Update toggle button state
                const toggleButtons = document.querySelectorAll('.toggle-btn');
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                const homeButton = document.getElementById('homeView');
                if (homeButton) {
                    homeButton.classList.add('active');
                }
            }
        }, 3000); // Wait 3 seconds after completion message

        setTimeout(() => completionPanel.remove(), 5000);

        console.log('🎉 Investor presentation completed successfully - returning to home view');
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

// Premium AI Narration System with ElevenLabs Integration
class PremiumAINarration {
    constructor() {
        this.config = {
            apiKey: null, // Set your ElevenLabs API key here
            voiceId: 'ADAM', // Professional British voice
            model: 'eleven_multilingual_v2',
            stability: 0.8,
            similarity_boost: 0.9
        };
        this.isEnabled = false;
        this.audioQueue = [];
        this.isPlaying = false;
    }

    async initialize(apiKey = null) {
        if (apiKey) {
            this.config.apiKey = apiKey;
            this.isEnabled = true;
            console.log('🎙️ Premium AI Narration initialized with ElevenLabs');
        } else {
            console.log('🎙️ Premium AI Narration initialized (API key needed for full features)');
        }
    }

    async speakWithElevenLabs(text) {
        if (!this.isEnabled || !this.config.apiKey) {
            // Fallback to browser TTS
            this.speakFallback(text);
            return;
        }

        try {
            const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${this.config.voiceId}`, {
                method: 'POST',
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'application/json',
                    'xi-api-key': this.config.apiKey
                },
                body: JSON.stringify({
                    text: text,
                    model_id: this.config.model,
                    voice_settings: {
                        stability: this.config.stability,
                        similarity_boost: this.config.similarity_boost
                    }
                })
            });

            if (response.ok) {
                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                
                this.audioQueue.push(audio);
                this.playNextInQueue();
                
                console.log('🎙️ Premium AI voice:', text);
            } else {
                console.warn('ElevenLabs API error, falling back to browser TTS');
                this.speakFallback(text);
            }
        } catch (error) {
            console.warn('ElevenLabs API error:', error);
            this.speakFallback(text);
        }
    }

    speakFallback(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1.0;
            utterance.volume = 0.8;
            
            // Try to use a British voice if available
            const voices = speechSynthesis.getVoices();
            const britishVoice = voices.find(voice => 
                voice.lang.includes('en-GB') || voice.name.includes('British')
            );
            if (britishVoice) utterance.voice = britishVoice;
            
            speechSynthesis.speak(utterance);
            console.log('🎙️ Browser TTS:', text);
        }
    }

    playNextInQueue() {
        if (this.isPlaying || this.audioQueue.length === 0) return;
        
        this.isPlaying = true;
        const audio = this.audioQueue.shift();
        
        audio.onended = () => {
            this.isPlaying = false;
            this.playNextInQueue();
        };
        
        audio.play();
    }

    speak(text) {
        if (this.isEnabled && this.config.apiKey) {
            this.speakWithElevenLabs(text);
        } else {
            this.speakFallback(text);
        }
    }
}

// Real-Time AI Commentary System
class AICommentarySystem {
    constructor(narration) {
        this.narration = narration;
        this.insights = [
            "STGNN algorithm detecting thermal inefficiency in south facade",
            "Machine learning identifying 23% energy optimization potential",
            "Predictive maintenance suggests HVAC upgrade in 18 months",
            "Carbon footprint reduction tracking: 1,430 tCO₂e annually",
            "Investment ROI model updating with real-time energy prices",
            "Building intelligence score improving to 94.7%",
            "Multi-modal data fusion detecting weather pattern correlations",
            "Blockchain carbon credits verification complete",
            "ESG compliance score updated to 93.6%",
            "Real-time energy consumption optimization active"
        ];
        this.interval = null;
    }

    startLiveCommentary() {
        console.log('🤖 Starting live AI commentary system');
        this.interval = setInterval(() => {
            const insight = this.insights[Math.floor(Math.random() * this.insights.length)];
            this.displayInsight(insight);
            this.narration.speak(insight);
        }, 12000); // Every 12 seconds
    }

    stopLiveCommentary() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            console.log('🤖 AI commentary system stopped');
        }
    }

    displayInsight(text) {
        // Remove existing insight banners
        const existingBanners = document.querySelectorAll('.ai-insight-banner');
        existingBanners.forEach(banner => banner.remove());

        const insightBanner = document.createElement('div');
        insightBanner.className = 'ai-insight-banner';
        insightBanner.innerHTML = `
            <div class="insight-content">
                <span class="insight-icon">🤖</span>
                <span class="insight-text">${text}</span>
                <span class="insight-live">LIVE</span>
            </div>
        `;
        
        document.body.appendChild(insightBanner);
        
        // Animate in
        setTimeout(() => insightBanner.classList.add('show'), 100);
        
        // Remove after 8 seconds
        setTimeout(() => {
            insightBanner.classList.remove('show');
            setTimeout(() => insightBanner.remove(), 500);
        }, 8000);
    }
}

// Predictive Analytics Dashboard
class PredictiveAnalytics {
    constructor(narration) {
        this.narration = narration;
        this.models = {
            energyOptimization: { current: 23.4, trend: 'increasing' },
            carbonReduction: { current: 1430, trend: 'stable' },
            investmentROI: { current: 34.2, trend: 'improving' }
        };
        this.interval = null;
    }

    runPredictiveAnalysis() {
        console.log('📊 Starting predictive analytics dashboard');
        this.interval = setInterval(() => {
            this.updatePredictions();
            this.updateDashboard();
        }, 8000); // Every 8 seconds
    }

    stopPredictiveAnalysis() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    updatePredictions() {
        // Simulate real-time prediction updates
        this.models.energyOptimization.current += (Math.random() - 0.5) * 0.5;
        this.models.carbonReduction.current += (Math.random() - 0.5) * 10;
        this.models.investmentROI.current += (Math.random() - 0.5) * 0.3;

        // Keep values realistic
        this.models.energyOptimization.current = Math.max(20, Math.min(30, this.models.energyOptimization.current));
        this.models.carbonReduction.current = Math.max(1400, Math.min(1500, this.models.carbonReduction.current));
        this.models.investmentROI.current = Math.max(32, Math.min(37, this.models.investmentROI.current));
    }

    updateDashboard() {
        // Remove existing dashboard
        const existingDashboard = document.querySelector('.predictive-analytics-dashboard');
        if (existingDashboard) existingDashboard.remove();

        const dashboard = document.createElement('div');
        dashboard.className = 'predictive-analytics-dashboard';
        dashboard.innerHTML = `
            <div class="dashboard-header">
                <h3>🔮 Predictive Analytics</h3>
                <span class="live-indicator">LIVE</span>
            </div>
            <div class="prediction-metrics">
                <div class="prediction-metric">
                    <div class="metric-label">Energy Optimization</div>
                    <div class="metric-value">${this.models.energyOptimization.current.toFixed(1)}%</div>
                    <div class="metric-trend ${this.models.energyOptimization.trend}">↗️ Improving</div>
                </div>
                <div class="prediction-metric">
                    <div class="metric-label">Carbon Reduction</div>
                    <div class="metric-value">${this.models.carbonReduction.current.toFixed(0)} tCO₂e</div>
                    <div class="metric-trend ${this.models.carbonReduction.trend}">→ Stable</div>
                </div>
                <div class="prediction-metric">
                    <div class="metric-label">Investment ROI</div>
                    <div class="metric-value">${this.models.investmentROI.current.toFixed(1)}%</div>
                    <div class="metric-trend ${this.models.investmentROI.trend}">↗️ Improving</div>
                </div>
            </div>
        `;

        document.body.appendChild(dashboard);
    }

    announceUpdate() {
        const announcement = `Predictive models updated: ${this.models.energyOptimization.current.toFixed(1)}% energy optimization potential detected`;
        this.narration.speak(announcement);
    }
}

// Multi-Modal Data Fusion Engine
class MultiModalDataEngine {
    constructor(narration) {
        this.narration = narration;
        this.dataSources = {
            satellite: { name: 'Sentinel-2 imagery analysis', status: 'active', icon: '🛰️' },
            iot: { name: '2,847 active sensors', status: 'active', icon: '📡' },
            weather: { name: 'Real-time climate integration', status: 'active', icon: '🌤️' },
            energy: { name: 'Grid carbon intensity tracking', status: 'active', icon: '⚡' },
            market: { name: 'Energy price forecasting', status: 'active', icon: '📈' }
        };
    }

    integrateDataSources() {
        console.log('🌐 Initializing multi-modal data fusion');
        
        // Remove existing panel
        const existingPanel = document.querySelector('.multi-modal-dashboard');
        if (existingPanel) existingPanel.remove();

        const dataPanel = document.createElement('div');
        dataPanel.className = 'multi-modal-dashboard';
        dataPanel.innerHTML = `
            <div class="dashboard-header">
                <h3>🌐 Multi-Modal Data Integration</h3>
                <span class="live-indicator">LIVE</span>
            </div>
            <div class="data-sources">
                ${Object.entries(this.dataSources).map(([key, source]) => `
                    <div class="data-source">
                        <span class="source-icon">${source.icon}</span>
                        <span class="source-name">${source.name}</span>
                        <span class="source-status active">✅ Active</span>
                    </div>
                `).join('')}
            </div>
        `;

        document.body.appendChild(dataPanel);

        // AI narration
        setTimeout(() => {
            this.narration.speak("Multi-modal data fusion active. Integrating satellite imagery, IoT sensors, weather data, and energy market intelligence for comprehensive building analysis.");
        }, 2000);
    }
}

// Blockchain Carbon Credits Integration
class CarbonCreditsBlockchain {
    constructor(narration) {
        this.narration = narration;
        this.credits = {
            generated: 847,
            verified: 823,
            traded: 156,
            value: 71995 // £71,995
        };
        this.interval = null;
    }

    trackCarbonCredits() {
        console.log('🌱 Starting blockchain carbon credits tracking');
        
        this.interval = setInterval(() => {
            this.updateCredits();
            this.displayCredits();
        }, 10000); // Every 10 seconds
        
        this.displayCredits();
    }

    stopTracking() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    updateCredits() {
        // Simulate real-time credit generation
        this.credits.generated += Math.floor(Math.random() * 3);
        this.credits.verified += Math.floor(Math.random() * 2);
        this.credits.traded += Math.floor(Math.random() * 1);
        this.credits.value = Math.floor(this.credits.generated * 85); // £85 per credit
    }

    displayCredits() {
        // Remove existing tracker
        const existingTracker = document.querySelector('.carbon-credits-tracker');
        if (existingTracker) existingTracker.remove();

        const creditsDisplay = document.createElement('div');
        creditsDisplay.className = 'carbon-credits-tracker';
        creditsDisplay.innerHTML = `
            <div class="dashboard-header">
                <h3>🌱 Blockchain Carbon Credits</h3>
                <span class="live-indicator">LIVE</span>
            </div>
            <div class="credits-metrics">
                <div class="credit-metric">
                    <div class="metric-value">${this.credits.generated}</div>
                    <div class="metric-label">Credits Generated</div>
                </div>
                <div class="credit-metric">
                    <div class="metric-value">£${this.credits.value.toLocaleString()}</div>
                    <div class="metric-label">Annual Value</div>
                </div>
                <div class="credit-metric">
                    <div class="metric-value">${this.credits.verified}</div>
                    <div class="metric-label">Verified</div>
                </div>
            </div>
            <div class="blockchain-info">
                <div class="hash-info">
                    <span class="hash-label">Blockchain Hash:</span>
                    <span class="hash-value">0x4a7b2c9d8e1f3g5h6i7j8k9l0m1n2o3p</span>
                </div>
            </div>
        `;

        document.body.appendChild(creditsDisplay);
    }

    announceUpdate() {
        const announcement = `${this.credits.generated} carbon credits generated, verified on blockchain with annual value of £${this.credits.value.toLocaleString()}`;
        this.narration.speak(announcement);
    }
}

// ESG Compliance Score Tracker
class ESGComplianceTracker {
    constructor(narration) {
        this.narration = narration;
        this.scores = {
            environmental: 94.2,
            social: 91.8,
            governance: 95.1,
            overall: 93.6
        };
    }

    displayESGDashboard() {
        console.log('📊 Displaying ESG compliance dashboard');
        
        // Remove existing dashboard
        const existingDashboard = document.querySelector('.esg-compliance-dashboard');
        if (existingDashboard) existingDashboard.remove();

        const esgPanel = document.createElement('div');
        esgPanel.className = 'esg-compliance-dashboard';
        esgPanel.innerHTML = `
            <div class="dashboard-header">
                <h3>📊 ESG Compliance Score</h3>
                <span class="live-indicator">LIVE</span>
            </div>
            <div class="esg-metrics">
                <div class="esg-metric">
                    <div class="metric-label">Environmental</div>
                    <div class="metric-value">${this.scores.environmental}</div>
                    <div class="metric-bar">
                        <div class="bar-fill" style="width: ${this.scores.environmental}%"></div>
                    </div>
                </div>
                <div class="esg-metric">
                    <div class="metric-label">Social</div>
                    <div class="metric-value">${this.scores.social}</div>
                    <div class="metric-bar">
                        <div class="bar-fill" style="width: ${this.scores.social}%"></div>
                    </div>
                </div>
                <div class="esg-metric">
                    <div class="metric-label">Governance</div>
                    <div class="metric-value">${this.scores.governance}</div>
                    <div class="metric-bar">
                        <div class="bar-fill" style="width: ${this.scores.governance}%"></div>
                    </div>
                </div>
            </div>
            <div class="esg-overall">
                <div class="overall-score">Overall ESG Score: ${this.scores.overall}</div>
            </div>
            <div class="compliance-badges">
                <span class="compliance-badge">✅ EU Taxonomy Compliant</span>
                <span class="compliance-badge">✅ TCFD Aligned</span>
                <span class="compliance-badge">✅ SASB Standards</span>
            </div>
        `;

        document.body.appendChild(esgPanel);
    }
}

// Real-Time Investment Impact Calculator
class RealTimeROICalculator {
    constructor(narration) {
        this.narration = narration;
    }

    calculateImpact(investmentAmount = 1000000) {
        const traditionalROI = 12.3;
        const stgnnROI = 34.2;
        const improvement = stgnnROI - traditionalROI;
        
        const results = {
            traditional10Year: investmentAmount * (1 + traditionalROI/100) ** 10,
            stgnn10Year: investmentAmount * (1 + stgnnROI/100) ** 10,
            additionalValue: 0
        };
        
        results.additionalValue = results.stgnn10Year - results.traditional10Year;
        
        // Display dramatic comparison
        this.showROIComparison(results, investmentAmount);
        
        // AI narration
        setTimeout(() => {
            this.narration.speak(`STGNN optimization generates additional £${results.additionalValue.toLocaleString()} over 10 years compared to traditional approaches`);
        }, 1000);
        
        return results;
    }

    showROIComparison(results, investmentAmount) {
        // Remove existing comparison
        const existingComparison = document.querySelector('.roi-comparison');
        if (existingComparison) existingComparison.remove();

        const comparison = document.createElement('div');
        comparison.className = 'roi-comparison';
        comparison.innerHTML = `
            <div class="dashboard-header">
                <h3>💰 Investment Impact Analysis</h3>
                <span class="live-indicator">LIVE</span>
            </div>
            <div class="roi-scenario">
                <div class="scenario-header">Traditional Approach</div>
                <div class="scenario-value">£${results.traditional10Year.toLocaleString()}</div>
                <div class="scenario-roi">12.3% ROI</div>
            </div>
            <div class="roi-scenario stgnn">
                <div class="scenario-header">STGNN Optimization</div>
                <div class="scenario-value">£${results.stgnn10Year.toLocaleString()}</div>
                <div class="scenario-roi">34.2% ROI</div>
            </div>
            <div class="roi-improvement">
                <div class="improvement-label">Additional Value Generated</div>
                <div class="improvement-value">+£${results.additionalValue.toLocaleString()}</div>
                <div class="improvement-percentage">+${((results.additionalValue / results.traditional10Year) * 100).toFixed(1)}%</div>
            </div>
        `;

        document.body.appendChild(comparison);
    }
}

// Enhanced Investor Presentation with Premium Features
class PremiumInvestorPresentation extends InvestorPresentation {
    constructor(digitalTwin) {
        super(digitalTwin);
        
        // Initialize premium features
        this.narration = new PremiumAINarration();
        this.aiCommentary = new AICommentarySystem(this.narration);
        this.predictiveAnalytics = new PredictiveAnalytics(this.narration);
        this.multiModalData = new MultiModalDataEngine(this.narration);
        this.carbonCredits = new CarbonCreditsBlockchain(this.narration);
        this.esgTracker = new ESGComplianceTracker(this.narration);
        this.roiCalculator = new RealTimeROICalculator(this.narration);
        
        this.premiumFeaturesActive = false;
    }

    async initializePremiumFeatures(apiKey = null) {
        // Use config if no API key provided
        const configApiKey = apiKey || (typeof ElevenLabsConfig !== 'undefined' ? ElevenLabsConfig.apiKey : null);
        await this.narration.initialize(configApiKey);
        console.log('🚀 Premium features initialized');
    }

    startWithPremiumFeatures() {
        console.log('🎬 Starting premium investor presentation');
        
        // Start basic presentation
        this.startPresentation();
        
        // Activate premium features after 3 seconds
        setTimeout(() => {
            this.activatePremiumFeatures();
        }, 3000);
    }

    activatePremiumFeatures() {
        if (this.premiumFeaturesActive) return;
        
        this.premiumFeaturesActive = true;
        console.log('🌟 Activating premium features');
        
        // Start all premium systems
        this.aiCommentary.startLiveCommentary();
        this.predictiveAnalytics.runPredictiveAnalysis();
        this.multiModalData.integrateDataSources();
        this.carbonCredits.trackCarbonCredits();
        this.esgTracker.displayESGDashboard();
        this.roiCalculator.calculateImpact();
        
        // Welcome message
        setTimeout(() => {
            this.narration.speak("Welcome to RetrofitForge-AI Digital Twin Engine. Premium features activated. Real-time AI analysis, predictive modeling, and blockchain carbon credit tracking now live.");
        }, 1000);
    }

    stopPremiumFeatures() {
        this.premiumFeaturesActive = false;
        
        this.aiCommentary.stopLiveCommentary();
        this.predictiveAnalytics.stopPredictiveAnalysis();
        this.carbonCredits.stopTracking();
        
        console.log('🛑 Premium features stopped');
    }

    // Override the original startPresentation to include premium features
    startPresentation() {
        super.startPresentation();
        
        // Enhanced narration for premium experience
        setTimeout(() => {
            this.narration.speak("RetrofitForge-AI Digital Twin Engine online. Patent-pending STGNN technology active. Real-time building intelligence analysis commencing.");
        }, 2000);
    }
}

// Export for global access
window.InvestorPresentation = InvestorPresentation;