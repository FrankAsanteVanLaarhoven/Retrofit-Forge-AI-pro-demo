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
        if (this.config.cesiumToken === 'YOUR_CESIUM_ION_TOKEN') {
            console.warn('⚠️ Please set your Cesium Ion token in the configuration');
            // Use public token for demo
            Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzNjItYTQ4NC1kYTQyZGM0YzJmNDAiLCJpZCI6NTc3MjIsImlhdCI6MTYyNzg0NjQ4MX0.x0vKZZr9SIeE8AAqMwjU0yVJyYzIx5Uo90_W8YXXI9k';
        } else {
            Cesium.Ion.defaultAccessToken = this.config.cesiumToken;
        }

        // Initialize Cesium viewer
        this.viewer = new Cesium.Viewer('cesiumContainer', {
            terrainProvider: Cesium.createWorldTerrain(),
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
            shadows: true,
            shouldAnimate: true
        });

        // Set scene properties for optimal rendering
        this.viewer.scene.globe.enableLighting = true;
        this.viewer.scene.globe.atmosphereHue = 0.1;

        // Add custom lighting for point clouds
        this.viewer.scene.light = new Cesium.DirectionalLight({
            direction: new Cesium.Cartesian3(-0.5, 0.5, -0.5),
            color: new Cesium.Color(1.0, 1.0, 1.0, 1.0),
            intensity: 2.0
        });

        console.log('✅ Cesium viewer initialized');
    }

    async loadBuildingData() {
        // Load London 3D buildings
        try {
            const buildingsTileset = await Cesium.Cesium3DTileset.fromIonAssetId(96188);
            this.viewer.scene.primitives.add(buildingsTileset);

            // Style buildings to highlight our target
            buildingsTileset.style = new Cesium.Cesium3DTileStyle({
                color: {
                    conditions: [
                        // Highlight target building in green
                        ['${Height} >= 250 && ${Height} <= 300', 'rgba(0, 255, 136, 0.8)'],
                        // Other tall buildings in blue
                        ['${Height} >= 100', 'rgba(74, 144, 226, 0.7)'],
                        // Mid-rise buildings
                        ['${Height} >= 50', 'rgba(170, 162, 204, 0.6)'],
                        // Low-rise buildings
                        ['true', 'rgba(200, 200, 200, 0.5)']
                    ]
                }
            });

            console.log('✅ London building data loaded');

        } catch (error) {
            console.warn('⚠️ Could not load building tileset, using fallback');
            this.createFallbackBuilding();
        }
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

        // Add point cloud analysis overlay
        await this.createPointCloudAnalysis();

        // Add building analysis markers
        this.addAnalysisMarkers();

        console.log('✅ Scene setup complete');
    }

    async createPointCloudAnalysis() {
        const building = this.config.targetBuilding;
        const pointCloudData = [];

        // Generate building envelope analysis points
        // Walls (4 facades)
        for (let wall = 0; wall < 4; wall++) {
            const angle = (wall * Math.PI) / 2;
            for (let height = 0; height < building.height; height += 3) {
                for (let segment = -20; segment <= 20; segment += 2) {
                    const x = Math.cos(angle) * 20 + segment * Math.sin(angle) * 0.1;
                    const y = Math.sin(angle) * 20 + segment * Math.cos(angle) * 0.1;

                    pointCloudData.push({
                        position: Cesium.Cartesian3.fromDegrees(
                            building.longitude + x * 0.00001,
                            building.latitude + y * 0.00001,
                            height
                        ),
                        component: 'wall',
                        color: Cesium.Color.CYAN,
                        efficiency: 85 + Math.random() * 15,
                        carbonImpact: Math.random() * 5 + 2
                    });
                }
            }
        }

        // Roof analysis points
        for (let x = -15; x <= 15; x += 2) {
            for (let y = -15; y <= 15; y += 2) {
                pointCloudData.push({
                    position: Cesium.Cartesian3.fromDegrees(
                        building.longitude + x * 0.00001,
                        building.latitude + y * 0.00001,
                        building.height
                    ),
                    component: 'roof',
                    color: Cesium.Color.GREEN,
                    efficiency: 70 + Math.random() * 30,
                    carbonImpact: Math.random() * 8 + 3
                });
            }
        }

        // Windows (scattered on facades)
        for (let i = 0; i < 200; i++) {
            const wall = Math.floor(Math.random() * 4);
            const angle = (wall * Math.PI) / 2;
            const height = Math.random() * (building.height - 20) + 10;
            const position = Math.random() * 30 - 15;

            const x = Math.cos(angle) * 22 + position * Math.sin(angle) * 0.05;
            const y = Math.sin(angle) * 22 + position * Math.cos(angle) * 0.05;

            pointCloudData.push({
                position: Cesium.Cartesian3.fromDegrees(
                    building.longitude + x * 0.00001,
                    building.latitude + y * 0.00001,
                    height
                ),
                component: 'window',
                color: Cesium.Color.ORANGE,
                efficiency: 75 + Math.random() * 20,
                carbonImpact: Math.random() * 3 + 1
            });
        }

        // HVAC systems (roof and mid-levels)
        for (let i = 0; i < 50; i++) {
            const isRoof = Math.random() > 0.6;
            const height = isRoof ? building.height : Math.random() * building.height;

            pointCloudData.push({
                position: Cesium.Cartesian3.fromDegrees(
                    building.longitude + (Math.random() - 0.5) * 0.0003,
                    building.latitude + (Math.random() - 0.5) * 0.0003,
                    height
                ),
                component: 'hvac',
                color: Cesium.Color.PURPLE,
                efficiency: 60 + Math.random() * 25,
                carbonImpact: Math.random() * 10 + 5
            });
        }

        // Add all points to the scene
        pointCloudData.forEach((point, index) => {
            const entity = this.viewer.entities.add({
                position: point.position,
                point: {
                    pixelSize: 3,
                    color: point.color,
                    outlineColor: Cesium.Color.WHITE,
                    outlineWidth: 1,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    scaleByDistance: new Cesium.NearFarScalar(100, 1.0, 1000, 0.5)
                },
                properties: {
                    component: point.component,
                    efficiency: point.efficiency,
                    carbonImpact: point.carbonImpact,
                    analysisId: index
                }
            });
        });

        this.analysisData = pointCloudData;
        console.log(`✅ Point cloud analysis created: ${pointCloudData.length} analysis points`);
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