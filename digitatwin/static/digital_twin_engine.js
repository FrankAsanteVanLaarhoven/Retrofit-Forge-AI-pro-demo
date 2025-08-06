// RetrofitForge-AI Digital Twin Engine - Core Application
// Version: 1.0.0 - Investor Demo

class DigitalTwinEngine {
    constructor() {
        this.viewer = null;
        this.currentSection = 1;
        this.totalSections = 7;
        this.isInitialized = false;
        this.presentationMode = false;
        this.buildingData = null;
        this.analysisData = null;

        // Configuration
        this.config = {
            cesiumToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNDU2ZTNmMy0zMzczLTQwMTUtYTU0Ni1iZGE4OTVkYmFiNjciLCJpZCI6MzI5MTQ5LCJpYXQiOjE3NTQ0NDA2NDR9.TM0xevdP4PDCSVDtxPMi-lGrCcA5XyVwIT_OChcvp3Y',
            targetBuilding: {
                name: '22 Bishopsgate, London EC2',
                longitude: -0.0813,
                latitude: 51.5155,
                height: 278, // meters
                floors: 62,
                floorArea: 121000, // m²
                type: 'Commercial Office Tower'
            },
            analysisMetrics: {
                activeModels: 2537,
                accuracy: 96.8,
                processingSpeed: 2.2,
                componentCount: 1847,
                annualSavings: 274000,
                carbonReduction: 1430,
                roiImprovement: 34.2
            }
        };

        console.log('🔬 RetrofitForge-AI Digital Twin Engine initialized');
    }

    async initialize() {
        try {
            this.showLoadingScreen();
            await this.setupCesium();
            await this.loadBuildingData();
            await this.setupScene();
            this.setupUI();
            this.hideLoadingScreen();
            this.isInitialized = true;

            console.log('✅ Digital Twin Engine fully initialized');
            this.startRealTimeUpdates();

        } catch (error) {
            console.error('❌ Failed to initialize Digital Twin Engine:', error);
            this.showError('Failed to initialize Digital Twin Engine. Please check your Cesium Ion token.');
        }
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const progressFill = document.getElementById('progressFill');
        const loadingStatus = document.getElementById('loadingStatus');

        loadingScreen.classList.add('active');

        const loadingSteps = [
            'Connecting to Cesium Ion...',
            'Loading 3D building models...',
            'Initializing STGNN™ engine...',
            'Processing point cloud data...',
            'Analyzing building components...',
            'Calculating carbon metrics...',
            'Optimizing investment ROI...',
            'Ready for investor demo!'
        ];

        let currentStep = 0;
        const stepInterval = setInterval(() => {
            if (currentStep < loadingSteps.length) {
                loadingStatus.textContent = loadingSteps[currentStep];
                progressFill.style.width = ((currentStep + 1) / loadingSteps.length * 100) + '%';
                currentStep++;
            } else {
                clearInterval(stepInterval);
            }
        }, 600);
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            loadingScreen.classList.remove('active');
        }, 1000);
    }

    async setupCesium() {
        // Set Cesium Ion token
        Cesium.Ion.defaultAccessToken = this.config.cesiumToken;

        // Initialize Cesium viewer with simplified configuration
        this.viewer = new Cesium.Viewer('cesiumContainer', {
            homeButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            navigationHelpButton: false,
            animation: false,
            timeline: false,
            fullscreenButton: false,
            vrButton: false,
            geocoder: false,
            infoBox: false,
            selectionIndicator: false,
            shadows: false,
            shouldAnimate: true
        });

        // Set scene properties
        this.viewer.scene.globe.enableLighting = false;
        this.viewer.scene.backgroundColor = Cesium.Color.fromCssColorString('#0a141c');

        console.log('✅ Cesium viewer initialized');
    }

    async loadBuildingData() {
        // Use fallback building for demo
        console.log('🔧 Using fallback building for demo');
        this.createFallbackBuilding();
    }

    createFallbackBuilding() {
        // Create a simple representation of 22 Bishopsgate
        const building = this.viewer.entities.add({
            name: this.config.targetBuilding.name,
            position: Cesium.Cartesian3.fromDegrees(
                this.config.targetBuilding.longitude,
                this.config.targetBuilding.latitude,
                this.config.targetBuilding.height / 2
            ),
            box: {
                dimensions: new Cesium.Cartesian3(40.0, 40.0, this.config.targetBuilding.height),
                material: Cesium.Color.fromCssColorString('#00ff88').withAlpha(0.8),
                outline: true,
                outlineColor: Cesium.Color.WHITE
            }
        });

        console.log('✅ Fallback building created');
    }

    async setupScene() {
        // Position camera for optimal building view
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(
                this.config.targetBuilding.longitude - 0.002,
                this.config.targetBuilding.latitude - 0.002,
                400
            ),
            orientation: {
                heading: Cesium.Math.toRadians(45.0),
                pitch: Cesium.Math.toRadians(-30.0),
                roll: 0.0
            }
        });

        // Add simplified point cloud analysis
        this.createSimplePointCloud();

        console.log('✅ Scene setup complete');
    }

    createSimplePointCloud() {
        const building = this.config.targetBuilding;
        
        // Create a simple point cloud around the building
        for (let i = 0; i < 100; i++) {
            const angle = (i / 100) * Math.PI * 2;
            const radius = 20 + Math.random() * 10;
            const height = Math.random() * building.height;
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(
                    building.longitude + x * 0.00001,
                    building.latitude + y * 0.00001,
                    height
                ),
                point: {
                    pixelSize: 4,
                    color: Cesium.Color.CYAN,
                    outlineColor: Cesium.Color.WHITE,
                    outlineWidth: 1
                }
            });
        }
        
        console.log('✅ Simple point cloud created');
    }



    addAnalysisMarkers() {
        const building = this.config.targetBuilding;

        // Main building marker
        const mainMarker = this.viewer.entities.add({
            name: 'RetrofitForge Analysis Center',
            position: Cesium.Cartesian3.fromDegrees(
                building.longitude,
                building.latitude,
                building.height + 20
            ),
            billboard: {
                image: this.createMarkerCanvas('🔬 STGNN Analysis'),
                scale: 1.0,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                scaleByDistance: new Cesium.NearFarScalar(100, 1.0, 2000, 0.3)
            }
        });

        // Add click handler for analysis popup
        this.viewer.selectedEntityChanged.addEventListener((entity) => {
            if (entity && entity.properties) {
                this.showAnalysisPopup(entity);
            }
        });

        console.log('✅ Analysis markers added');
    }

    createMarkerCanvas(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 50;
        const ctx = canvas.getContext('2d');

        // Background
        ctx.fillStyle = 'rgba(0, 255, 136, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text  
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 5);

        return canvas;
    }

    setupUI() {
        // Update building information
        this.updateBuildingInfo();

        // Setup navigation
        this.setupNavigation();

        // Setup screen toggle controls
        this.setupScreenToggles();

        // Setup presentation controls
        this.setupPresentationControls();

        // Setup real-time metric updates
        this.setupMetricUpdates();

        console.log('✅ UI setup complete');
    }

    updateBuildingInfo() {
        const building = this.config.targetBuilding;
        const metrics = this.config.analysisMetrics;

        document.getElementById('buildingName').textContent = building.name;
        document.getElementById('buildingType').textContent = building.type;
        document.getElementById('buildingHeight').textContent = `${building.height}m, ${building.floors} floors`;
        document.getElementById('floorArea').textContent = `${building.floorArea.toLocaleString()} m²`;

        // Update analysis metrics
        document.querySelector('.analysis-metrics .metric-row:nth-child(1) strong').textContent = metrics.componentCount.toLocaleString();
        document.querySelector('.analysis-metrics .metric-row:nth-child(2) strong').textContent = `£${metrics.annualSavings.toLocaleString()}/year`;
        document.querySelector('.analysis-metrics .metric-row:nth-child(3) strong').textContent = `${metrics.carbonReduction} tCO₂e/year`;
        document.querySelector('.analysis-metrics .metric-row:nth-child(4) strong').textContent = `+${metrics.roiImprovement}%`;
    }

    setupNavigation() {
        document.getElementById('prevSection').addEventListener('click', () => {
            this.previousSection();
        });

        document.getElementById('nextSection').addEventListener('click', () => {
            this.nextSection();
        });

        document.getElementById('closeDemo').addEventListener('click', () => {
            this.closeDemo();
        });

        this.updateSectionInfo();
    }

    setupPresentationControls() {
        document.getElementById('startPresentation').addEventListener('click', () => {
            this.startInvestorPresentation();
        });

        document.getElementById('pausePresentation').addEventListener('click', () => {
            this.pausePresentation();
        });

        document.getElementById('fullscreenMode').addEventListener('click', () => {
            this.toggleFullscreen();
        });

        document.getElementById('exportReport').addEventListener('click', () => {
            this.exportAnalysisReport();
        });
    }

    setupMetricUpdates() {
        // Simulate real-time updates
        setInterval(() => {
            this.updateLiveMetrics();
        }, 3000);
    }

    updateLiveMetrics() {
        const accuracyElement = document.getElementById('accuracy');
        const processingElement = document.getElementById('processing');

        // Small variations to simulate real-time updates
        const baseAccuracy = this.config.analysisMetrics.accuracy;
        const baseProcessing = this.config.analysisMetrics.processingSpeed;

        const newAccuracy = baseAccuracy + (Math.random() - 0.5) * 0.4;
        const newProcessing = baseProcessing + (Math.random() - 0.5) * 0.3;

        accuracyElement.textContent = newAccuracy.toFixed(1) + '%';
        processingElement.textContent = newProcessing.toFixed(1) + 's';

        // Add update animation
        accuracyElement.classList.add('metric-updating');
        processingElement.classList.add('metric-updating');

        setTimeout(() => {
            accuracyElement.classList.remove('metric-updating');
            processingElement.classList.remove('metric-updating');
        }, 600);
    }

    setupScreenToggles() {
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        
        console.log('🎛️ Setting up screen toggles:', toggleButtons.length, 'buttons found');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const view = button.getAttribute('data-view');
                console.log('🔄 Toggle button clicked:', view);
                
                this.switchView(view);
                
                // Update active state
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                console.log('✅ View switched to:', view);
            });
        });
        
        console.log('✅ Screen toggles setup complete');
        
        // Setup interactive holographic components
        this.setupHolographicInteraction();
    }

    setupHolographicInteraction() {
        console.log('🔮 Setting up holographic component interaction');
        
        // Add click handlers for building components
        document.addEventListener('click', (event) => {
            // Check if click is on a building component area
            const clickedElement = event.target;
            
            // Simulate component detection (in real implementation, this would be 3D object picking)
            if (Math.random() < 0.3) { // 30% chance to trigger component analysis
                this.showComponentAnalysis();
            }
        });
        
        console.log('✅ Holographic interaction setup complete');
    }

    showComponentAnalysis() {
        // Remove existing analysis panel
        const existingPanel = document.querySelector('.component-analysis-panel');
        if (existingPanel) existingPanel.remove();

        // Simulate component data
        const componentTypes = [
            { type: 'Structural Wall', efficiency: 94.2, carbonImpact: 45, optimization: 12, investment: 125000, recommendations: ['Thermal insulation upgrade recommended', 'Carbon capture integration possible', 'Smart monitoring system installation'] },
            { type: 'HVAC System', efficiency: 85.4, carbonImpact: 78, optimization: 23, investment: 89000, recommendations: ['Heat pump replacement suggested', 'Smart thermostat installation', 'Energy recovery system integration'] },
            { type: 'Window System', efficiency: 88.9, carbonImpact: 34, optimization: 18, investment: 67000, recommendations: ['Triple glazing upgrade recommended', 'Solar control coating application', 'Automated shading system'] },
            { type: 'Roof System', efficiency: 91.7, carbonImpact: 56, optimization: 15, investment: 145000, recommendations: ['Solar panel installation recommended', 'Green roof system integration', 'Thermal barrier enhancement'] }
        ];

        const component = componentTypes[Math.floor(Math.random() * componentTypes.length)];

        const analysisPanel = document.createElement('div');
        analysisPanel.className = 'component-analysis-panel';
        analysisPanel.innerHTML = `
            <h3>🔬 ${component.type} Deep Dive</h3>
            <div class="component-metrics">
                <div class="component-metric">
                    <span class="metric-name">Efficiency</span>
                    <span class="metric-value">${component.efficiency}%</span>
                </div>
                <div class="component-metric">
                    <span class="metric-name">Carbon Impact</span>
                    <span class="metric-value">${component.carbonImpact} tCO₂e</span>
                </div>
                <div class="component-metric">
                    <span class="metric-name">Optimization Potential</span>
                    <span class="metric-value">+${component.optimization}%</span>
                </div>
                <div class="component-metric">
                    <span class="metric-name">Investment Required</span>
                    <span class="metric-value">£${component.investment.toLocaleString()}</span>
                </div>
            </div>
            <div class="ai-recommendations">
                <h4>🤖 AI Recommendations:</h4>
                <ul class="recommendation-list">
                    ${component.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
        `;

        document.body.appendChild(analysisPanel);

        // Auto-remove after 8 seconds
        setTimeout(() => {
            analysisPanel.style.opacity = '0';
            analysisPanel.style.transform = 'translate(-50%, -50%) scale(0.9)';
            setTimeout(() => analysisPanel.remove(), 300);
        }, 8000);

        // AI narration
        if (window.investorPresentation && window.investorPresentation.narration) {
            const analysis = `Analyzing ${component.type}: ${component.efficiency}% efficiency, ${component.carbonImpact} tCO₂e annual impact, ${component.optimization}% optimization potential`;
            window.investorPresentation.narration.speak(analysis);
        }
    }

    switchView(view) {
        console.log(`🔄 Switching to ${view} view`);
        
        switch(view) {
            case 'pointcloud':
                this.showPointCloudView();
                break;
            case 'digitaltwin':
                this.showDigitalTwinView();
                break;
            case 'home':
                this.showHomeView();
                break;
        }
    }

    showPointCloudView() {
        // Show current point cloud visualization
        this.viewer.scene.globe.show = true;
        this.viewer.scene.skyAtmosphere.show = true;
        
        // Ensure point cloud is visible
        this.viewer.entities.values.forEach(entity => {
            if (entity.point) {
                entity.show = true;
            }
        });
        
        console.log('☁️ Point Cloud view activated');
    }

    showDigitalTwinView() {
        // Create a more detailed digital twin visualization
        this.createDigitalTwinVisualization();
        console.log('🏢 Digital Twin view activated');
    }

    showHomeView() {
        // Return to home/main screen
        this.resetToHomeView();
        console.log('🏠 Home view activated');
    }

    createDigitalTwinVisualization() {
        // Clear existing entities
        this.viewer.entities.removeAll();
        
        // Create a more sophisticated building model
        const building = this.config.targetBuilding;
        
        // Create building structure with different materials
        this.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(
                building.longitude,
                building.latitude,
                building.height / 2
            ),
            box: {
                dimensions: new Cesium.Cartesian3(50, 50, building.height),
                material: Cesium.Color.fromCssColorString('#4a90e2').withAlpha(0.8),
                outline: true,
                outlineColor: Cesium.Color.WHITE
            }
        });
        
        // Add detailed components
        this.addDetailedBuildingComponents();
        
        // Add energy flow visualization
        this.addEnergyFlowVisualization();
    }

    addDetailedBuildingComponents() {
        const building = this.config.targetBuilding;
        
        // Add windows
        for (let i = 0; i < 20; i++) {
            const angle = (i / 20) * Math.PI * 2;
            const radius = 25;
            const height = Math.random() * building.height;
            
            this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(
                    building.longitude + Math.cos(angle) * radius * 0.00001,
                    building.latitude + Math.sin(angle) * radius * 0.00001,
                    height
                ),
                box: {
                    dimensions: new Cesium.Cartesian3(2, 2, 3),
                    material: Cesium.Color.fromCssColorString('#87ceeb').withAlpha(0.9),
                    outline: true,
                    outlineColor: Cesium.Color.WHITE
                }
            });
        }
        
        // Add HVAC systems
        this.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(
                building.longitude,
                building.latitude,
                building.height + 5
            ),
            cylinder: {
                length: 10,
                topRadius: 5,
                bottomRadius: 5,
                material: Cesium.Color.fromCssColorString('#ff6b6b').withAlpha(0.8),
                outline: true,
                outlineColor: Cesium.Color.WHITE
            }
        });
    }

    addEnergyFlowVisualization() {
        const building = this.config.targetBuilding;
        
        // Create energy flow particles
        for (let i = 0; i < 50; i++) {
            const angle = (i / 20) * Math.PI * 2;
            const radius = 30;
            
            this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(
                    building.longitude + Math.cos(angle) * radius * 0.00001,
                    building.latitude + Math.sin(angle) * radius * 0.00001,
                    Math.random() * 100
                ),
                point: {
                    pixelSize: 6,
                    color: Cesium.Color.fromCssColorString('#00ff88'),
                    outlineColor: Cesium.Color.WHITE,
                    outlineWidth: 2
                }
            });
        }
    }

    resetToHomeView() {
        // Clear all entities
        this.viewer.entities.removeAll();
        
        // Reset camera to overview position
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(
                this.config.targetBuilding.longitude - 0.002,
                this.config.targetBuilding.latitude - 0.002,
                400
            ),
            orientation: {
                heading: Cesium.Math.toRadians(45.0),
                pitch: Cesium.Math.toRadians(-30.0),
                roll: 0.0
            }
        });
        
        // Show simple point cloud
        this.createSimplePointCloud();
        
        // Reset UI elements
        this.updateSectionInfo();
    }

    startRealTimeUpdates() {
        // Camera animation
        this.startCameraAnimation();

        // Component analysis animation
        this.startComponentHighlighting();

        console.log('✅ Real-time updates started');
    }

    startCameraAnimation() {
        let angle = 0;
        const building = this.config.targetBuilding;

        setInterval(() => {
            if (!this.presentationMode) {
                angle += 0.002;
                const radius = 0.003;

                this.viewer.camera.setView({
                    destination: Cesium.Cartesian3.fromDegrees(
                        building.longitude + Math.cos(angle) * radius,
                        building.latitude + Math.sin(angle) * radius,
                        400 + Math.sin(angle * 0.5) * 100
                    ),
                    orientation: {
                        heading: angle,
                        pitch: Cesium.Math.toRadians(-30.0 + Math.sin(angle * 0.3) * 10),
                        roll: 0.0
                    }
                });
            }
        }, 100);
    }

    startComponentHighlighting() {
        if (!this.analysisData) return;

        let currentHighlight = 0;

        setInterval(() => {
            // Reset previous highlight
            if (currentHighlight > 0) {
                const prevEntity = this.viewer.entities.values[currentHighlight - 1];
                if (prevEntity && prevEntity.point) {
                    prevEntity.point.pixelSize = 3;
                }
            }

            // Highlight current component
            if (currentHighlight < this.analysisData.length) {
                const entity = this.viewer.entities.values[currentHighlight];
                if (entity && entity.point) {
                    entity.point.pixelSize = 6;
                }
                currentHighlight++;
            } else {
                currentHighlight = 0;
            }
        }, 50);
    }

    // Section navigation methods
    nextSection() {
        if (this.currentSection < this.totalSections) {
            this.currentSection++;
            this.updateSectionInfo();
            this.animateToSection(this.currentSection);
        }
    }

    previousSection() {
        if (this.currentSection > 1) {
            this.currentSection--;
            this.updateSectionInfo();
            this.animateToSection(this.currentSection);
        }
    }

    updateSectionInfo() {
        const sectionTitles = [
            'Digital Twin Engine',
            'SAM-GNN Pipeline',
            'Investment Optimization',
            'Multi-Modal Data',
            'Carbon Infrastructure',
            'STGNN Forecasting',
            'Carbon Intelligence & ESG'
        ];

        document.getElementById('sectionTitle').textContent = sectionTitles[this.currentSection - 1];
        document.getElementById('currentSection').textContent = this.currentSection;
        document.getElementById('totalSections').textContent = this.totalSections;
    }

    animateToSection(section) {
        const building = this.config.targetBuilding;
        const sectionViews = [
            // Section 1: Overview
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude - 0.002, building.latitude - 0.002, 400),
                heading: 45, pitch: -30
            },
            // Section 2: SAM-GNN Pipeline  
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude - 0.001, building.latitude, 200),
                heading: 90, pitch: -45
            },
            // Section 3: Investment Optimization
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude, building.latitude - 0.001, 300),
                heading: 0, pitch: -60
            },
            // Section 4: Multi-Modal Data
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude + 0.001, building.latitude, 250),
                heading: 270, pitch: -30
            },
            // Section 5: Carbon Infrastructure
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude, building.latitude + 0.001, 350),
                heading: 180, pitch: -45
            },
            // Section 6: STGNN Forecasting
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude - 0.0005, building.latitude + 0.0005, 150),
                heading: 225, pitch: -75
            },
            // Section 7: Carbon Intelligence
            {
                destination: Cesium.Cartesian3.fromDegrees(building.longitude, building.latitude, 500),
                heading: 315, pitch: -15
            }
        ];

        const view = sectionViews[section - 1];
        this.viewer.camera.flyTo({
            destination: view.destination,
            orientation: {
                heading: Cesium.Math.toRadians(view.heading),
                pitch: Cesium.Math.toRadians(view.pitch),
                roll: 0.0
            },
            duration: 2.0
        });
    }

    // Presentation methods
    startInvestorPresentation() {
        this.presentationMode = true;
        document.body.classList.add('presentation-mode');

        // Create presentation automation
        const presentation = new InvestorPresentation(this);
        presentation.start();

        console.log('🎬 Investor presentation started');
    }

    pausePresentation() {
        this.presentationMode = false;
        document.body.classList.remove('presentation-mode');
        console.log('⏸️ Presentation paused');
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    exportAnalysisReport() {
        const report = this.generateAnalysisReport();
        this.downloadReport(report);
        console.log('📊 Analysis report exported');
    }

    generateAnalysisReport() {
        const building = this.config.targetBuilding;
        const metrics = this.config.analysisMetrics;

        return {
            building: building,
            analysis: {
                timestamp: new Date().toISOString(),
                totalComponents: metrics.componentCount,
                accuracy: metrics.accuracy,
                processingTime: metrics.processingSpeed,
                carbonReduction: metrics.carbonReduction,
                energySavings: metrics.annualSavings,
                roiImprovement: metrics.roiImprovement
            },
            recommendations: [
                'Prioritize HVAC system optimization for maximum energy savings',
                'Implement smart window glazing for improved thermal performance',
                'Consider rooftop solar installation for carbon offset',
                'Upgrade building envelope insulation in identified areas'
            ]
        };
    }

    downloadReport(report) {
        const dataStr = JSON.stringify(report, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `RetrofitForge-Analysis-${Date.now()}.json`;
        link.click();

        URL.revokeObjectURL(url);
    }

    showAnalysisPopup(entity) {
        if (!entity.properties) return;

        const component = entity.properties.component;
        const efficiency = entity.properties.efficiency?.getValue();
        const carbonImpact = entity.properties.carbonImpact?.getValue();

        const popup = document.createElement('div');
        popup.className = 'analysis-popup';
        popup.innerHTML = `
            <h4>Component Analysis</h4>
            <p><strong>Type:</strong> ${component}</p>
            <p><strong>Efficiency:</strong> ${efficiency?.toFixed(1)}%</p>
            <p><strong>Carbon Impact:</strong> ${carbonImpact?.toFixed(1)} tCO₂e</p>
            <button onclick="this.parentElement.remove()">Close</button>
        `;

        document.body.appendChild(popup);

        setTimeout(() => popup.remove(), 5000);
    }

    closeDemo() {
        if (confirm('Are you sure you want to close the Digital Twin Engine demo?')) {
            window.close();
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => errorDiv.remove(), 5000);
    }
}

// Export for use by other modules
window.DigitalTwinEngine = DigitalTwinEngine;