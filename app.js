// RetrofitForge - Industry-Leading 3D Building Intelligence Platform
// Patent-Pending Technology Stack with SAM-GNN Pipeline

// Mapbox removed - no longer needed

class RetrofitForge3DPlatform {
    constructor() {
        this.currentSection = 0;
        this.isPlaying = true;
        this.selectedSegment = 'all';
        this.sections = [
            {
                name: 'Advanced STGNNs for Property Performance Forecasting',
                description: 'Spatio-Temporal Graph Neural Networks with 96.9% accuracy for real-time property performance prediction and investment optimization.',
                duration: 15000
            },
            {
                name: 'Investment Optimization with Uncertainty Quantification',
                description: 'Bayesian optimization delivering 34.2% ROI improvement with 42% risk reduction and 95% confidence intervals.',
                duration: 15000
            },
            {
                name: 'Multi-Modal Data Lake Integration',
                description: 'Integrated satellite, thermal, and property data from 15 sources with 3M+ records updated in real-time.',
                duration: 15000
            },
            {
                name: 'Carbon Intelligence & ESG Compliance',
                description: 'Environmental impact tracking with 1.2M+ CO2 metrics tracked and 93.6% ESG compliance score.',
                duration: 15000
            },
            {
                name: 'Digital Twin Engine',
                description: 'Real-time property modeling with 2,537 active models achieving 99.3% simulation accuracy.',
                duration: 15000
            },
            {
                name: 'Carbon-Aware Infrastructure',
                description: 'Cloud-native platform optimized for minimal environmental impact with 99.9% uptime and 89% carbon efficiency.',
                duration: 15000
            },
            {
                name: 'Hybrid SAM-GNN Pipeline',
                description: 'Patent-pending fusion of Segment-Anything Model with Spatio-Temporal Graph Neural Networks for real-time point cloud re-segmentation.',
                duration: 15000
            }
        ];

        // Enhanced application data with STGNN and advanced AI features
        this.buildingData = {
            "stgnnMetrics": {
                "accuracy": 96.9,
                "processingSpeed": 2.3,
                "modelVersion": "v3.2",
                "optimizationType": "Bayesian Optimization"
            },
            "investmentOptimization": {
                "roiImprovement": 34.2,
                "riskReduction": 42,
                "confidence": 95,
                "dataLake": "Multi-Modal Data Lake"
            },
            "dataIntegration": {
                "dataSources": 15,
                "records": 3.2,
                "updateFrequency": "Real-time",
                "carbonIntelligence": true
            },
            "esgCompliance": {
                "co2Tracked": 1.2,
                "esgScore": 93.6,
                "compliance": "Full ESG Compliance",
                "environmentalImpact": "Minimal"
            },
            "digitalTwin": {
                "modelsActive": 2537,
                "simAccuracy": 99.3,
                "renderTime": 44.6,
                "realTime": true
            },
            "infrastructure": {
                "uptime": 99.9,
                "carbonEfficiency": 89,
                "regions": "Global Multi-Region",
                "cloudNative": true
            },
            "buildingPointCloud": {
                "totalPoints": 250000,
                "segments": [
                    {"id": "walls", "points": 85000, "efficiency": 78, "color": "#3B82F6", "defects": 3, "heatLoss": 2.3, "carbonPotential": 1.2},
                    {"id": "roof", "points": 45000, "efficiency": 85, "color": "#10B981", "defects": 1, "heatLoss": 1.8, "carbonPotential": 0.8},
                    {"id": "windows", "points": 25000, "efficiency": 62, "color": "#F59E0B", "defects": 8, "heatLoss": 4.2, "carbonPotential": 2.1},
                    {"id": "hvac", "points": 35000, "efficiency": 71, "color": "#8B5CF6", "defects": 5, "heatLoss": 3.1, "carbonPotential": 1.5},
                    {"id": "floor", "points": 60000, "efficiency": 88, "color": "#10B981", "defects": 2, "heatLoss": 1.5, "carbonPotential": 0.7}
                ],
                "thermalData": [
                    {"segment": "walls", "avgTemp": 18.5, "heatLoss": 2.3, "insulation": "good", "uncertainty": 0.12},
                    {"segment": "roof", "avgTemp": 16.2, "heatLoss": 1.8, "insulation": "excellent", "uncertainty": 0.08},
                    {"segment": "windows", "avgTemp": 14.1, "heatLoss": 4.2, "insulation": "poor", "uncertainty": 0.25},
                    {"segment": "hvac", "avgTemp": 22.8, "heatLoss": 3.1, "insulation": "fair", "uncertainty": 0.18},
                    {"segment": "floor", "avgTemp": 19.3, "heatLoss": 1.5, "insulation": "excellent", "uncertainty": 0.06}
                ]
            },
            "segmentationParams": {
                "ransac": {"distance_threshold": 0.02, "max_iterations": 1000, "min_points": 100, "thermal_weight": 0.7},
                "dbscan": {"eps": 0.05, "min_samples": 10, "algorithm": "auto", "uncertainty_threshold": 0.15},
                "filtering": {"min_volume": 0.1, "max_volume": 100, "min_points": 50, "bayesian_filter": true}
            },
            "detectedComponents": [
                {"type": "structural_wall", "count": 12, "avgEfficiency": 78, "maintenanceRisk": "low", "uncertainty": 0.08},
                {"type": "external_wall", "count": 8, "avgEfficiency": 65, "maintenanceRisk": "medium", "uncertainty": 0.15},
                {"type": "window_frame", "count": 24, "avgEfficiency": 62, "maintenanceRisk": "high", "uncertainty": 0.22},
                {"type": "door_frame", "count": 6, "avgEfficiency": 70, "maintenanceRisk": "low", "uncertainty": 0.10},
                {"type": "hvac_duct", "count": 15, "avgEfficiency": 71, "maintenanceRisk": "medium", "uncertainty": 0.18},
                {"type": "heating_unit", "count": 4, "avgEfficiency": 68, "maintenanceRisk": "high", "uncertainty": 0.25},
                {"type": "lighting_fixture", "count": 45, "avgEfficiency": 82, "maintenanceRisk": "low", "uncertainty": 0.05}
            ],
            "performanceMetrics": {
                "energyConsumption": {"total": 2850, "bySegment": {"walls": 450, "roof": 380, "windows": 890, "hvac": 780, "floor": 350}},
                "carbonEmissions": {"total": 1.42, "bySegment": {"walls": 0.23, "roof": 0.19, "windows": 0.45, "hvac": 0.39, "floor": 0.16}},
                "maintenanceCosts": {"total": 12500, "bySegment": {"walls": 2000, "roof": 1500, "windows": 4500, "hvac": 3500, "floor": 1000}},
                "roiMetrics": {
                    "totalInvestment": 125000,
                    "annualSavings": 28500,
                    "paybackPeriod": 4.4,
                    "irr": 22.8,
                    "climateYield": 11875
                }
            },
            "climateRiskBySegment": [
                {"segment": "walls", "floodRisk": 15, "heatStress": 65, "stormDamage": 35, "overallRisk": 38, "uncertainty": 0.12},
                {"segment": "roof", "floodRisk": 5, "heatStress": 85, "stormDamage": 75, "overallRisk": 55, "uncertainty": 0.08},
                {"segment": "windows", "floodRisk": 25, "heatStress": 45, "stormDamage": 85, "overallRisk": 52, "uncertainty": 0.18},
                {"segment": "hvac", "floodRisk": 35, "heatStress": 55, "stormDamage": 25, "overallRisk": 38, "uncertainty": 0.15},
                {"segment": "floor", "floodRisk": 75, "heatStress": 15, "stormDamage": 10, "overallRisk": 33, "uncertainty": 0.10}
            ],
            "carbonCredits": {
                "totalVerified": 2.4,
                "bySegment": {"walls": 0.5, "roof": 0.4, "windows": 0.8, "hvac": 0.4, "floor": 0.3},
                "marketValue": 2880,
                "blockchain": "Ethereum",
                "nftIds": {"walls": "WALL_001", "roof": "ROOF_001", "windows": "WIN_001", "hvac": "HVAC_001", "floor": "FLR_001"}
            }
        };

        this.charts = {};
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.pointClouds = [];
        this.boundingBoxes = [];
        this.animationId = null;
        this.sectionTimer = null;
        this.mapboxMap = null;
        this.mapbox3DMap = null;
        this.deckglLayers = [];
        this.cameraControls = {
            mouseDown: false,
            mouseX: 0,
            mouseY: 0,
            targetX: 0,
            targetY: 0,
            radius: 400,
            phi: Math.PI / 4,
            theta: Math.PI / 4,
            // Enhanced controls for better interaction
            minRadius: 50,
            maxRadius: 1200,
            sensitivity: 0.02,
            zoomSpeed: 0.8,
            autoRotate: false,
            autoRotateSpeed: 0.5
        };

        this.init();
    }

    init() {
        console.log('Initializing RetrofitForge platform...');
        this.setupEventListeners();
        this.showLoadingOverlay();
        setTimeout(() => {
            console.log('Starting platform initialization...');
            try {
            this.initThreeJS();
                console.log('ThreeJS initialized');
                // Mapbox removed
            this.createPointCloud();
                console.log('Point cloud created');
            this.initCharts();
                console.log('Charts initialized');
                this.initializeOverlayPositions();
                console.log('Overlay positions initialized');
                this.updateROIMetrics();
                console.log('ROI metrics updated');
                this.updateClimateRisk();
                console.log('Climate risk updated');
            this.hideLoadingOverlay();
                console.log('Loading overlay hidden');
            this.startPresentation();
                console.log('Presentation started');
            this.animate();
                console.log('Animation started');
                this.startRealTimeDataStream();
                console.log('Real-time data stream started');
                // Mapbox segment sync removed
                
                        // Test HUD banner
        setTimeout(() => {
            this.updateHUD({
                payback: '2.7 yrs',
                climateYield: '£46 / tCO₂e',
                npv: '+£3.4 M'
            });
        }, 2000);
        
        // Mapbox testing removed
            } catch (error) {
                console.error('Error during initialization:', error);
            }
        }, 1000);
    }

    initializeOverlayPositions() {
        // Initialize all overlays with their fixed positions
        const overlays = [
            'chartsOverlay',
            'legendOverlay', 
            'performanceOverlay',
            'carbonNFTOverlay'
        ];
        
        overlays.forEach(overlayId => {
            const overlay = document.getElementById(overlayId);
            if (overlay) {
                // Set initial fixed positioning
                overlay.style.setProperty('position', 'fixed', 'important');
                overlay.style.setProperty('animation', 'none', 'important');
                overlay.style.setProperty('cursor', 'default', 'important');
                overlay.style.setProperty('user-select', 'none', 'important');
                overlay.style.setProperty('transform', 'none', 'important');
                overlay.style.setProperty('opacity', '0', 'important');
                
                // Set specific positions for each overlay
                if (overlayId === 'performanceOverlay') {
                    overlay.style.setProperty('top', '140px', 'important');
                    overlay.style.setProperty('left', '390px', 'important'); // 350px sidebar + 40px margin
                } else if (overlayId === 'legendOverlay') {
                    overlay.style.setProperty('top', '140px', 'important');
                    overlay.style.setProperty('right', '30px', 'important');
                } else if (overlayId === 'chartsOverlay') {
                    overlay.style.setProperty('bottom', '30px', 'important');
                    overlay.style.setProperty('left', '50%', 'important');
                    overlay.style.setProperty('transform', 'translateX(-50%)', 'important');
                } else if (overlayId === 'carbonNFTOverlay') {
                    overlay.style.setProperty('bottom', '30px', 'important');
                    overlay.style.setProperty('right', '30px', 'important');
                }
            }
        });
        
        // Initialize chart containers
        document.querySelectorAll('.chart-container').forEach(chart => {
            chart.style.setProperty('position', 'relative', 'important');
            chart.style.setProperty('animation', 'none', 'important');
            chart.style.setProperty('cursor', 'default', 'important');
            chart.style.setProperty('user-select', 'none', 'important');
            chart.style.setProperty('transform', 'none', 'important');
            chart.style.setProperty('opacity', '0', 'important');
        });
    }

    setupEventListeners() {
        // Control buttons
        document.getElementById('playPauseBtn').addEventListener('click', () => this.togglePlayPause());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousSection());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextSection());

        // Section indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSection(index));
        });

        // Enhanced segmentation parameter controls
        document.getElementById('ransacDistance').addEventListener('input', (e) => {
            document.getElementById('ransacValue').textContent = e.target.value;
            this.updateSegmentation();
        });

        document.getElementById('dbscanEps').addEventListener('input', (e) => {
            document.getElementById('dbscanValue').textContent = e.target.value;
            this.updateSegmentation();
        });

        document.getElementById('minPoints').addEventListener('input', (e) => {
            document.getElementById('minPointsValue').textContent = e.target.value;
            this.updateSegmentation();
        });

        // Bayesian uncertainty threshold
        document.getElementById('uncertaintyThreshold').addEventListener('input', (e) => {
            document.getElementById('uncertaintyValue').textContent = e.target.value;
            this.updateUncertaintyFilter();
        });

        // Enhanced filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.selectedSegment = e.target.dataset.segment;
                this.updatePointCloudVisibility();
                this.updatePerformanceCard();
                this.updateCarbonNFT();
            });
        });

        // Mapbox controls - DISABLED
        /*
        document.getElementById('droneViewBtn').addEventListener('click', () => {
            console.log('Drone view clicked');
            this.showDroneView();
        });
        document.getElementById('cityViewBtn').addEventListener('click', () => {
            console.log('City view clicked');
            this.showCityView();
        });
        document.getElementById('thermalViewBtn').addEventListener('click', () => {
            console.log('Thermal view clicked');
            this.showThermalView();
        });
        */

        // Enhanced export buttons
        document.getElementById('exportBtn').addEventListener('click', () => this.exportAnalysis());
        document.getElementById('carbonExportBtn').addEventListener('click', () => this.mintCarbonNFT());
        document.getElementById('presentationExportBtn').addEventListener('click', () => this.generateReport());
        document.getElementById('investorDemoBtn').addEventListener('click', () => this.startInvestorDemo());

        // Test Mapbox 3-D context layer
        document.addEventListener('keydown', (e) => {
            if (e.key === 'm' || e.key === 'M') {
                this.toggleMapbox3DContext();
            }
        });

        // Mapbox buttons removed - no longer needed

        // Scroll buttons
        try {
            const scrollUpBtn = document.getElementById('scrollUpBtn');
            const scrollDownBtn = document.getElementById('scrollDownBtn');
            
            if (scrollUpBtn) {
                scrollUpBtn.addEventListener('click', () => this.scrollUp());
            }
            if (scrollDownBtn) {
                scrollDownBtn.addEventListener('click', () => this.scrollDown());
            }
        } catch (error) {
            console.error('Error setting up scroll button event listeners:', error);
        }

        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Make charts draggable (with delay to ensure DOM is ready)
        setTimeout(() => {
            this.setupDraggableCharts();
        }, 2000);

        // Initialize scroll button states
        setTimeout(() => {
            this.updateScrollButtonStates();
        }, 2500);
    }

    // setupDraggableCharts() - DISABLED for fixed positioning
    // Charts are now positioned with fixed CSS positioning for consistent display
    setupDraggableCharts() {
        // Draggable functionality disabled - charts now use fixed positioning
        console.log('Draggable charts disabled - using fixed positioning for consistent display');
    }

    initThreeJS() {
        const container = document.getElementById('pointCloudScene');
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        this.scene.fog = new THREE.Fog(0x0a0a0a, 200, 1000);
        
        // Camera setup
        this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 2000);
        this.camera.position.set(0, 150, 400);
        this.camera.lookAt(0, 0, 0);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(this.renderer.domElement);

        // Enhanced lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(100, 200, 100);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 4096;
        directionalLight.shadow.mapSize.height = 4096;
        directionalLight.shadow.camera.near = 0.1;
        directionalLight.shadow.camera.far = 500;
        directionalLight.shadow.camera.left = -200;
        directionalLight.shadow.camera.right = 200;
        directionalLight.shadow.camera.top = 200;
        directionalLight.shadow.camera.bottom = -200;
        this.scene.add(directionalLight);

        // Additional accent lighting
        const accentLight = new THREE.PointLight(0x32a0cd, 0.8, 300);
        accentLight.position.set(-50, 100, 50);
        this.scene.add(accentLight);

        // Ground reference
        const gridHelper = new THREE.GridHelper(400, 40, 0x444444, 0x222222);
        gridHelper.position.y = -50;
        this.scene.add(gridHelper);

        // Mouse controls
        this.setupMouseControls(container);
    }

    setupMouseControls(container) {
        const handleMouseMove = (event) => {
            if (!this.cameraControls.mouseDown) return;

            const deltaX = event.clientX - this.cameraControls.mouseX;
            const deltaY = event.clientY - this.cameraControls.mouseY;

            // Enhanced sensitivity for full 360-degree rotation
            this.cameraControls.theta -= deltaX * this.cameraControls.sensitivity;
            this.cameraControls.phi = Math.max(0.01, Math.min(Math.PI - 0.01, this.cameraControls.phi + deltaY * this.cameraControls.sensitivity));

            this.cameraControls.mouseX = event.clientX;
            this.cameraControls.mouseY = event.clientY;

            this.updateCameraPosition();
        };

        container.addEventListener('mousedown', (event) => {
            this.cameraControls.mouseDown = true;
            this.cameraControls.mouseX = event.clientX;
            this.cameraControls.mouseY = event.clientY;
            container.style.cursor = 'grabbing';
        });

        container.addEventListener('mousemove', handleMouseMove);
        
        container.addEventListener('mouseup', () => {
            this.cameraControls.mouseDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseleave', () => {
            this.cameraControls.mouseDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('wheel', (event) => {
            event.preventDefault();
            const zoomFactor = event.deltaY > 0 ? 1.1 : 0.9;
            this.cameraControls.radius = Math.max(
                this.cameraControls.minRadius, 
                Math.min(this.cameraControls.maxRadius, 
                    this.cameraControls.radius * zoomFactor
                )
            );
            this.updateCameraPosition();
        });

        // Enhanced touch controls for mobile
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartDistance = 0;

        container.addEventListener('touchstart', (event) => {
            event.preventDefault();
            if (event.touches.length === 1) {
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
            } else if (event.touches.length === 2) {
                touchStartDistance = Math.hypot(
                    event.touches[0].clientX - event.touches[1].clientX,
                    event.touches[0].clientY - event.touches[1].clientY
                );
            }
        });

        container.addEventListener('touchmove', (event) => {
            event.preventDefault();
            if (event.touches.length === 1) {
            const deltaX = event.touches[0].clientX - touchStartX;
            const deltaY = event.touches[0].clientY - touchStartY;

                this.cameraControls.theta -= deltaX * this.cameraControls.sensitivity;
                this.cameraControls.phi = Math.max(0.01, Math.min(Math.PI - 0.01, this.cameraControls.phi + deltaY * this.cameraControls.sensitivity));

            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
            } else if (event.touches.length === 2) {
                const currentDistance = Math.hypot(
                    event.touches[0].clientX - event.touches[1].clientX,
                    event.touches[0].clientY - event.touches[1].clientY
                );
                const zoomFactor = touchStartDistance / currentDistance;
                this.cameraControls.radius = Math.max(
                    this.cameraControls.minRadius,
                    Math.min(this.cameraControls.maxRadius,
                        this.cameraControls.radius * zoomFactor
                    )
                );
                touchStartDistance = currentDistance;
            }

            this.updateCameraPosition();
        });

        // Keyboard controls for enhanced interaction
        document.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            const step = 0.1;
            const zoomStep = 50;

            switch (key) {
                case 'arrowleft':
                    this.cameraControls.theta -= step;
                    break;
                case 'arrowright':
                    this.cameraControls.theta += step;
                    break;
                case 'arrowup':
                    this.cameraControls.phi = Math.max(0.01, this.cameraControls.phi - step);
                    break;
                case 'arrowdown':
                    this.cameraControls.phi = Math.min(Math.PI - 0.01, this.cameraControls.phi + step);
                    break;
                case '+':
                case '=':
                    this.cameraControls.radius = Math.max(this.cameraControls.minRadius, this.cameraControls.radius - zoomStep);
                    break;
                case '-':
                    this.cameraControls.radius = Math.min(this.cameraControls.maxRadius, this.cameraControls.radius + zoomStep);
                    break;
                case 'r':
                    this.resetCamera();
                    break;
                case ' ':
                    this.cameraControls.autoRotate = !this.cameraControls.autoRotate;
                    break;
            }

            this.updateCameraPosition();
        });

        // Set initial cursor style
        container.style.cursor = 'grab';
    }



    updateCameraPosition() {
        const x = this.cameraControls.radius * Math.sin(this.cameraControls.phi) * Math.cos(this.cameraControls.theta);
        const y = this.cameraControls.radius * Math.cos(this.cameraControls.phi);
        const z = this.cameraControls.radius * Math.sin(this.cameraControls.phi) * Math.sin(this.cameraControls.theta);

        this.camera.position.set(x, y, z);
        this.camera.lookAt(0, 0, 0);

        // Update status bar with enhanced information
        const angleDegrees = (this.cameraControls.theta * 180 / Math.PI).toFixed(1);
        const elevationDegrees = (this.cameraControls.phi * 180 / Math.PI).toFixed(1);
        document.getElementById('cameraPos').textContent = `Camera: (${Math.round(x)}, ${Math.round(y)}, ${Math.round(z)}) | Angle: ${angleDegrees}° | Elevation: ${elevationDegrees}° | Zoom: ${Math.round(this.cameraControls.radius)}`;
    }

    resetCamera() {
        this.cameraControls.radius = 400;
        this.cameraControls.phi = Math.PI / 4;
        this.cameraControls.theta = Math.PI / 4;
        this.cameraControls.autoRotate = false;
        this.updateCameraPosition();
    }

    createPointCloud() {
        try {
            console.log('Creating point cloud...');
        const segments = this.buildingData.buildingPointCloud.segments;
        
        segments.forEach((segment, segmentIndex) => {
            const pointCount = Math.floor(segment.points / 1.5); // Optimized density - increased divisor from 0.1 to 1.5
            console.log(`Creating ${pointCount} points for segment ${segment.id}`);
            
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(pointCount * 3);
            const colors = new Float32Array(pointCount * 3);
            const sizes = new Float32Array(pointCount);

            // Create realistic building-shaped point cloud
            this.generateSegmentPoints(segment.id, pointCount, positions, colors, sizes, segment.color);

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

            const material = new THREE.PointsMaterial({
                size: 0.8, // Balanced point size for solid appearance
                vertexColors: true,
                transparent: true,
                opacity: 0.95, // High opacity for solid appearance
                sizeAttenuation: true
            });

            const pointCloud = new THREE.Points(geometry, material);
            pointCloud.userData = { 
                segment: segment.id, 
                efficiency: segment.efficiency,
                defects: segment.defects,
                visible: true
            };
            
            this.scene.add(pointCloud);
            this.pointClouds.push(pointCloud);

            // Create bounding boxes for components
            this.createBoundingBox(segment, segmentIndex);
        });

        this.updateRenderStats();
            console.log('Point cloud created successfully');
        } catch (error) {
            console.error('Error creating point cloud:', error);
            // Fallback to simpler point cloud if there's an error
            this.createSimplePointCloud();
        }
    }

    createSimplePointCloud() {
        console.log('Creating simple fallback point cloud...');
        try {
            const geometry = new THREE.BufferGeometry();
            const pointCount = 10000; // Simple fallback
            const positions = new Float32Array(pointCount * 3);
            const colors = new Float32Array(pointCount * 3);
            const sizes = new Float32Array(pointCount);

            for (let i = 0; i < pointCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 200;
                positions[i * 3 + 1] = Math.random() * 100 - 20;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

                colors[i * 3] = 0.6;
                colors[i * 3 + 1] = 0.8;
                colors[i * 3 + 2] = 1.0;

                sizes[i] = 2.0;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

            const material = new THREE.PointsMaterial({
                size: 2.0,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            const pointCloud = new THREE.Points(geometry, material);
            this.scene.add(pointCloud);
            this.pointClouds.push(pointCloud);
            
            console.log('Simple point cloud created successfully');
        } catch (error) {
            console.error('Error creating simple point cloud:', error);
        }
    }

    generateSegmentPoints(segmentId, pointCount, positions, colors, sizes, hexColor) {
        const color = new THREE.Color(hexColor);
        
        for (let i = 0; i < pointCount; i++) {
            let x, y, z;
            
            switch (segmentId) {
                case 'walls':
                    // Generate ultra-dense wall points with solid surface structure
                    if (Math.random() < 0.5) {
                        // Front/back walls with dense grid structure
                        x = (Math.random() - 0.5) * 200;
                        y = Math.random() * 100 - 20;
                        z = Math.random() < 0.5 ? -60 : 60;
                        
                        // Add much more density for solid surface
                        if (Math.random() < 0.7) {
                            x += (Math.random() - 0.5) * 5;
                            y += (Math.random() - 0.5) * 5;
                        }
                        
                        // Extra density for wall structure
                        if (Math.random() < 0.5) {
                            x += (Math.random() - 0.5) * 3;
                            y += (Math.random() - 0.5) * 3;
                        }
                    } else {
                        // Left/right walls with enhanced solid density
                        x = Math.random() < 0.5 ? -60 : 60;
                        y = Math.random() * 100 - 20;
                        z = (Math.random() - 0.5) * 200;
                        
                        // Add much more density for solid surface
                        if (Math.random() < 0.7) {
                            y += (Math.random() - 0.5) * 5;
                            z += (Math.random() - 0.5) * 5;
                        }
                        
                        // Extra density for wall structure
                        if (Math.random() < 0.5) {
                            y += (Math.random() - 0.5) * 3;
                            z += (Math.random() - 0.5) * 3;
                        }
                    }
                    break;
                    
                case 'roof':
                    // Ultra-dense roof with solid surface and enhanced pitch
                    x = (Math.random() - 0.5) * 120;
                    y = 80 + Math.random() * 20 + Math.abs(x) * 0.1; // Slight pitch
                    z = (Math.random() - 0.5) * 120;
                    
                    // Add much more density for solid roof surface
                    if (Math.random() < 0.8) {
                        x += (Math.random() - 0.5) * 4;
                        z += (Math.random() - 0.5) * 4;
                    }
                    
                    // Extra density for roof structure
                    if (Math.random() < 0.6) {
                        x += (Math.random() - 0.5) * 2;
                        z += (Math.random() - 0.5) * 2;
                    }
                    break;
                    
                case 'floor':
                    // Ultra-dense floor with solid foundation surface
                    x = (Math.random() - 0.5) * 120;
                    y = -20 + Math.random() * 15; // Thicker foundation
                    z = (Math.random() - 0.5) * 120;
                    
                    // Add much more density for solid floor surface
                    if (Math.random() < 0.8) {
                        x += (Math.random() - 0.5) * 4;
                        z += (Math.random() - 0.5) * 4;
                    }
                    
                    // Extra density for floor structure
                    if (Math.random() < 0.6) {
                        x += (Math.random() - 0.5) * 2;
                        z += (Math.random() - 0.5) * 2;
                    }
                    break;
                    
                case 'windows':
                    // Ultra-dense window points with solid frame structure
                    if (Math.random() < 0.5) {
                        // Front/back windows with solid density
                        x = (Math.random() - 0.5) * 180;
                        y = Math.random() * 80 - 10;
                        z = Math.random() < 0.5 ? -58 : 58;
                        
                        // Add much more density for solid window frames
                        if (Math.random() < 0.8) {
                            x += (Math.random() - 0.5) * 3;
                            y += (Math.random() - 0.5) * 3;
                        }
                        
                        // Extra density for window structure
                        if (Math.random() < 0.6) {
                            x += (Math.random() - 0.5) * 2;
                            y += (Math.random() - 0.5) * 2;
                        }
                    } else {
                        // Left/right windows with solid density
                        x = Math.random() < 0.5 ? -58 : 58;
                        y = Math.random() * 80 - 10;
                        z = (Math.random() - 0.5) * 180;
                        
                        // Add much more density for solid window frames
                        if (Math.random() < 0.8) {
                            y += (Math.random() - 0.5) * 3;
                            z += (Math.random() - 0.5) * 3;
                        }
                        
                        // Extra density for window structure
                        if (Math.random() < 0.6) {
                            y += (Math.random() - 0.5) * 2;
                            z += (Math.random() - 0.5) * 2;
                        }
                    }
                    break;
                    
                case 'hvac':
                    // Ultra-dense HVAC system with enhanced ductwork structure
                    if (Math.random() < 0.7) {
                        // Main HVAC units with enhanced density
                    x = (Math.random() - 0.5) * 100;
                    y = 20 + Math.random() * 40;
                    z = (Math.random() - 0.5) * 100;
                        
                        // Add more density for HVAC components
                        if (Math.random() < 0.6) {
                            x += (Math.random() - 0.5) * 5;
                            y += (Math.random() - 0.5) * 5;
                            z += (Math.random() - 0.5) * 5;
                        }
                    } else {
                        // Ductwork with enhanced density
                        x = (Math.random() - 0.5) * 80;
                        y = 30 + Math.random() * 30;
                        z = (Math.random() - 0.5) * 80;
                        
                        // Add more density for ductwork
                        if (Math.random() < 0.6) {
                            x += (Math.random() - 0.5) * 4;
                            y += (Math.random() - 0.5) * 4;
                            z += (Math.random() - 0.5) * 4;
                        }
                    }
                    break;
                    
                default:
                    x = (Math.random() - 0.5) * 100;
                    y = Math.random() * 100;
                    z = (Math.random() - 0.5) * 100;
            }

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Enhanced color variation for more realistic look
            const noise = 0.9 + Math.random() * 0.2;
            colors[i * 3] = color.r * noise;
            colors[i * 3 + 1] = color.g * noise;
            colors[i * 3 + 2] = color.b * noise;

            // Variable sizes for optimized solid appearance
            sizes[i] = 0.5 + Math.random() * 0.6;
        }
    }

    createBoundingBox(segment, index) {
        // Create wireframe bounding box
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: segment.color,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });

        const boundingBox = new THREE.Mesh(boxGeometry, boxMaterial);
        
        // Position and scale based on segment type
        switch (segment.id) {
            case 'walls':
                boundingBox.scale.set(200, 100, 120);
                boundingBox.position.y = 30;
                break;
            case 'roof':
                boundingBox.scale.set(120, 20, 120);
                boundingBox.position.y = 90;
                break;
            case 'floor':
                boundingBox.scale.set(120, 10, 120);
                boundingBox.position.y = -15;
                break;
            case 'windows':
                boundingBox.scale.set(180, 80, 116);
                boundingBox.position.y = 30;
                break;
            case 'hvac':
                boundingBox.scale.set(100, 40, 100);
                boundingBox.position.y = 40;
                break;
        }

        boundingBox.userData = { segment: segment.id, visible: false };
        this.scene.add(boundingBox);
        this.boundingBoxes.push(boundingBox);
    }

    initCharts() {
        // Enhanced Segmentation Performance Chart
        const segmentCtx = document.getElementById('segmentCanvas').getContext('2d');
        this.charts.segmentation = new Chart(segmentCtx, {
            type: 'bar',
            data: {
                labels: this.buildingData.buildingPointCloud.segments.map(s => s.id.charAt(0).toUpperCase() + s.id.slice(1)),
                datasets: [{
                    label: 'Points (thousands)',
                    data: this.buildingData.buildingPointCloud.segments.map(s => s.points / 1000),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                    borderWidth: 1
                }, {
                    label: 'Efficiency (%)',
                    data: this.buildingData.buildingPointCloud.segments.map(s => s.efficiency),
                    backgroundColor: 'rgba(31, 184, 205, 0.3)',
                    borderColor: '#1FB8CD',
                    borderWidth: 2,
                    type: 'line',
                    yAxisID: 'y1'
                }, {
                    label: 'Uncertainty (%)',
                    data: this.buildingData.buildingPointCloud.thermalData.map(t => t.uncertainty * 100),
                    backgroundColor: 'rgba(255, 107, 53, 0.3)',
                    borderColor: '#ff6b35',
                    borderWidth: 2,
                    type: 'line',
                    yAxisID: 'y2'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#f5f5f5' } }
                },
                scales: {
                    x: { ticks: { color: '#a7a9a9' } },
                    y: { 
                        ticks: { color: '#a7a9a9' },
                        title: { display: true, text: 'Points (thousands)', color: '#a7a9a9' }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: { color: '#a7a9a9' },
                        title: { display: true, text: 'Efficiency (%)', color: '#a7a9a9' },
                        grid: { drawOnChartArea: false }
                    },
                    y2: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: { color: '#ff6b35' },
                        title: { display: true, text: 'Uncertainty (%)', color: '#ff6b35' },
                        grid: { drawOnChartArea: false }
                    }
                }
            }
        });

        // Enhanced Thermal Analysis Chart
        const thermalCtx = document.getElementById('thermalCanvas').getContext('2d');
        this.charts.thermal = new Chart(thermalCtx, {
            type: 'radar',
            data: {
                labels: ['Temperature', 'Heat Loss', 'Insulation Quality', 'Energy Efficiency', 'Maintenance Risk', 'Uncertainty'],
                datasets: this.buildingData.buildingPointCloud.segments.map((segment, i) => ({
                    label: segment.id.charAt(0).toUpperCase() + segment.id.slice(1),
                    data: [
                        this.buildingData.buildingPointCloud.thermalData[i].avgTemp,
                        (5 - this.buildingData.buildingPointCloud.thermalData[i].heatLoss) * 20,
                        this.getInsulationScore(this.buildingData.buildingPointCloud.thermalData[i].insulation),
                        segment.efficiency,
                        100 - (segment.defects * 10),
                        (1 - this.buildingData.buildingPointCloud.thermalData[i].uncertainty) * 100
                    ],
                    backgroundColor: segment.color + '20',
                    borderColor: segment.color,
                    borderWidth: 2
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#f5f5f5' } }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#a7a9a9' },
                        grid: { color: 'rgba(167, 169, 169, 0.3)' },
                        angleLines: { color: 'rgba(167, 169, 169, 0.3)' },
                        pointLabels: { color: '#f5f5f5' }
                    }
                }
            }
        });

        // Enhanced Component Detection Chart
        const componentsCtx = document.getElementById('componentsCanvas').getContext('2d');
        this.charts.components = new Chart(componentsCtx, {
            type: 'doughnut',
            data: {
                labels: this.buildingData.detectedComponents.map(c => c.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())),
                datasets: [{
                    data: this.buildingData.detectedComponents.map(c => c.count),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
                    borderWidth: 2,
                    borderColor: '#1f2121'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: '#f5f5f5' }
                    }
                }
            }
        });

        // ROI Analysis Chart
        const roiCtx = document.getElementById('roiCanvas').getContext('2d');
        this.charts.roi = new Chart(roiCtx, {
            type: 'bar',
            data: {
                labels: ['Investment', 'Annual Savings', 'Carbon Credits', 'Climate Yield'],
                datasets: [{
                    label: 'Value (£)',
                    data: [
                        this.buildingData.performanceMetrics.roiMetrics.totalInvestment / 1000,
                        this.buildingData.performanceMetrics.roiMetrics.annualSavings / 1000,
                        this.buildingData.carbonCredits.marketValue / 1000,
                        this.buildingData.performanceMetrics.roiMetrics.climateYield / 1000
                    ],
                    backgroundColor: ['#8b5cf6', '#10b981', '#f59e0b', '#ef4444'],
                    borderColor: ['#8b5cf6', '#10b981', '#f59e0b', '#ef4444'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#f5f5f5' } }
                },
                scales: {
                    x: { ticks: { color: '#a7a9a9' } },
                    y: { 
                        ticks: { color: '#a7a9a9' },
                        title: { display: true, text: 'Value (£ thousands)', color: '#a7a9a9' }
                    }
                }
            }
        });

        // Climate Risk Chart
        const climateCtx = document.getElementById('climateCanvas').getContext('2d');
        this.charts.climate = new Chart(climateCtx, {
            type: 'radar',
            data: {
                labels: ['Flood Risk', 'Heat Stress', 'Storm Damage', 'Overall Risk', 'Uncertainty'],
                datasets: this.buildingData.climateRiskBySegment.map((risk, i) => ({
                    label: risk.segment.charAt(0).toUpperCase() + risk.segment.slice(1),
                    data: [
                        risk.floodRisk,
                        risk.heatStress,
                        risk.stormDamage,
                        risk.overallRisk,
                        risk.uncertainty * 100
                    ],
                    backgroundColor: this.buildingData.buildingPointCloud.segments[i].color + '20',
                    borderColor: this.buildingData.buildingPointCloud.segments[i].color,
                    borderWidth: 2
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#f5f5f5' } }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#a7a9a9' },
                        grid: { color: 'rgba(167, 169, 169, 0.3)' },
                        angleLines: { color: 'rgba(167, 169, 169, 0.3)' },
                        pointLabels: { color: '#f5f5f5' }
                    }
                }
            }
        });
    }

    getInsulationScore(insulation) {
        const scores = { 'excellent': 90, 'good': 70, 'fair': 50, 'poor': 30 };
        return scores[insulation] || 50;
    }

    startPresentation() {
        console.log('Starting new slideshow presentation...');
        this.currentSection = 0;
        this.isPlaying = true;
        this.updateSection();
        this.startSlideshowTimer();
    }

    startSlideshowTimer() {
        if (this.sectionTimer) {
            clearTimeout(this.sectionTimer);
        }
        
        if (this.isPlaying) {
            this.sectionTimer = setTimeout(() => {
                this.nextSection();
            }, 8000); // 8 seconds per slide
        }
    }

    nextSection() {
        this.currentSection = (this.currentSection + 1) % this.sections.length;
        this.updateSection();
        this.startSlideshowTimer();
    }

    previousSection() {
        this.currentSection = (this.currentSection - 1 + this.sections.length) % this.sections.length;
        this.updateSection();
        this.startSlideshowTimer();
    }

    goToSection(index) {
        this.currentSection = index;
        this.updateSection();
        this.startSlideshowTimer();
    }

    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        const playPauseIcon = document.getElementById('playPauseIcon');
        const playPauseText = document.getElementById('playPauseText');
        
        if (this.isPlaying) {
            playPauseIcon.textContent = '⏸️';
            playPauseText.textContent = 'Pause';
            this.startSlideshowTimer();
        } else {
            playPauseIcon.textContent = '▶️';
            playPauseText.textContent = 'Play';
            if (this.sectionTimer) {
                clearTimeout(this.sectionTimer);
            }
        }
    }

    updateSection() {
        const section = this.sections[this.currentSection];
        
        // Smooth transition effect
        this.fadeOutCurrentContent();
        
        setTimeout(() => {
            // Update UI elements
            this.updateSectionUI(section);
            
            // Show new content with fade-in effect
            this.fadeInNewContent();
            
            // Update progress
            this.updateProgress();
            
        }, 300); // Wait for fade-out
    }

    fadeOutCurrentContent() {
        const elements = [
            document.getElementById('currentSectionName'),
            document.getElementById('currentSectionDesc'),
            ...document.querySelectorAll('.chart-container'),
            document.getElementById('performanceOverlay'),
            document.getElementById('legendOverlay'),
            document.getElementById('carbonNFTOverlay')
        ];
        
        elements.forEach(el => {
            if (el) {
                // Only change opacity, not position
                el.style.opacity = '0';
                
                // Ensure overlays maintain fixed positioning
                if (el.classList.contains('chart-container') || 
                    el.id === 'performanceOverlay' || 
                    el.id === 'legendOverlay' || 
                    el.id === 'carbonNFTOverlay') {
                    
                    el.style.setProperty('position', 'fixed', 'important');
                    el.style.setProperty('animation', 'none', 'important');
                    el.style.setProperty('cursor', 'default', 'important');
                    el.style.setProperty('user-select', 'none', 'important');
                    el.style.removeProperty('transform');
                }
            }
        });
    }

    fadeInNewContent() {
        const elements = [
            document.getElementById('currentSectionName'),
            document.getElementById('currentSectionDesc')
        ];
        
        elements.forEach(el => {
            if (el) {
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    updateSectionUI(section) {
        // Update section information
        document.getElementById('currentSectionNum').textContent = this.currentSection + 1;
        document.getElementById('currentSectionName').textContent = section.name;
        document.getElementById('currentSectionDesc').textContent = section.description;

        // Update progress indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSection);
        });

        // Update slideshow progress indicator
        this.updateSlideshowProgress();

        // Show appropriate visualizations
        this.showSectionContent();
    }

    updateSlideshowProgress() {
        const progressContainer = document.getElementById('slideshowProgress');
        const indicators = progressContainer.querySelectorAll('.slide-indicator');
        
        // Show the progress indicator
        progressContainer.classList.add('visible');
        
        // Update active indicator
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSection);
        });
        
        // Hide progress indicator after 3 seconds
        setTimeout(() => {
            progressContainer.classList.remove('visible');
        }, 3000);
    }

    updateProgress() {
        const progress = ((this.currentSection + 1) / this.sections.length) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    showSectionContent() {
        // Lock all overlay positions to prevent movement during slideshow
        this.lockOverlayPositions();
        
        // Hide all charts and overlays with fade effect
        this.hideAllOverlays();
        
        // Wait a moment for fade-out, then show new content
        setTimeout(() => {
            this.showSectionSpecificContent();
        }, 200);
    }

    hideAllOverlays() {
        const overlays = [
            ...document.querySelectorAll('.chart-container'),
            document.getElementById('performanceOverlay'),
            document.getElementById('legendOverlay'),
            document.getElementById('carbonNFTOverlay')
        ];
        
        overlays.forEach(overlay => {
            if (overlay) {
                // Remove active class
                overlay.classList.remove('active');
                
                // Only change opacity, not position
                overlay.style.opacity = '0';
                
                // Ensure fixed positioning is maintained
                overlay.style.setProperty('position', 'fixed', 'important');
                overlay.style.setProperty('animation', 'none', 'important');
                overlay.style.setProperty('cursor', 'default', 'important');
                overlay.style.setProperty('user-select', 'none', 'important');
                
                // Remove any transform that might cause movement
                overlay.style.removeProperty('transform');
            }
        });
    }

    showSectionSpecificContent() {
        switch (this.currentSection) {
            case 0: // Advanced STGNNs
                this.showSTGNNSection();
                break;
            case 1: // Investment Optimization
                this.showInvestmentSection();
                break;
            case 2: // Multi-Modal Data Lake
                this.showDataLakeSection();
                break;
            case 3: // Carbon Intelligence
                this.showCarbonSection();
                break;
            case 4: // Digital Twin Engine
                this.showDigitalTwinSection();
                break;
            case 5: // Carbon-Aware Infrastructure
                this.showInfrastructureSection();
                break;
            case 6: // Hybrid SAM-GNN Pipeline
                this.showSAMGNNSection();
                break;
        }
    }

    showSTGNNSection() {
        this.animateCamera(0, 150, 400, 2000);
        this.fadeInOverlay('segmentationChart');
        this.updatePointCloudVisualization('segmentation');
        this.fadeInOverlay('performanceOverlay');
        this.fadeInOverlay('legendOverlay');
    }

    showInvestmentSection() {
        this.animateCamera(150, 100, 300, 2000);
        this.fadeInOverlay('thermalChart');
        this.updatePointCloudVisualization('thermal');
        this.fadeInOverlay('performanceOverlay');
        this.fadeInOverlay('legendOverlay');
    }

    showDataLakeSection() {
        this.animateCamera(-100, 120, 250, 2000);
        this.fadeInOverlay('componentsChart');
        this.updatePointCloudVisualization('components');
        this.showBoundingBoxes(true);
        this.fadeInOverlay('performanceOverlay');
        this.fadeInOverlay('legendOverlay');
    }

    showCarbonSection() {
        this.animateCamera(200, 80, 350, 2000);
        this.fadeInOverlay('climateChart');
        this.updatePointCloudVisualization('risk');
        this.fadeInOverlay('performanceOverlay');
        this.fadeInOverlay('legendOverlay');
    }

    showDigitalTwinSection() {
        this.animateCamera(0, 250, 500, 2000);
        this.updatePointCloudVisualization('carbon');
        this.fadeInOverlay('carbonNFTOverlay');
    }

    showInfrastructureSection() {
        this.animateCamera(0, 250, 500, 2000);
        this.fadeInOverlay('climateChart');
        this.updatePointCloudVisualization('climate');
        this.fadeInOverlay('performanceOverlay');
        this.fadeInOverlay('legendOverlay');
    }

    showSAMGNNSection() {
        this.animateCamera(0, 250, 500, 2000);
        this.fadeInOverlay('roiChart');
        this.updatePointCloudVisualization('roi');
        this.fadeInOverlay('performanceOverlay');
        this.fadeInOverlay('legendOverlay');
    }

    fadeInOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            // Remove any conflicting inline styles
            overlay.style.removeProperty('transform');
            overlay.style.removeProperty('top');
            overlay.style.removeProperty('bottom');
            overlay.style.removeProperty('left');
            overlay.style.removeProperty('right');
            overlay.style.removeProperty('position');
            
            // Force fixed positioning
            overlay.style.setProperty('position', 'fixed', 'important');
            overlay.style.setProperty('animation', 'none', 'important');
            overlay.style.setProperty('cursor', 'default', 'important');
            overlay.style.setProperty('user-select', 'none', 'important');
            
            // Only animate opacity, not position
            overlay.style.transition = 'opacity 0.8s ease';
            overlay.style.opacity = '1';
            
            // Add active class
            overlay.classList.add('active');
        }
    }

    lockOverlayPositions() {
        // Force all overlays to maintain their fixed positions
        const overlays = [
            'chartsOverlay',
            'legendOverlay', 
            'performanceOverlay',
            'carbonNFTOverlay'
        ];
        
        overlays.forEach(overlayId => {
            const overlay = document.getElementById(overlayId);
            if (overlay) {
                // Remove any inline styles that might override CSS
                overlay.style.removeProperty('transform');
                overlay.style.removeProperty('top');
                overlay.style.removeProperty('bottom');
                overlay.style.removeProperty('left');
                overlay.style.removeProperty('right');
                overlay.style.removeProperty('position');
                overlay.style.removeProperty('animation');
                overlay.style.removeProperty('cursor');
                
                // Ensure fixed positioning and prevent drag cursors
                overlay.style.setProperty('position', 'fixed', 'important');
                overlay.style.setProperty('animation', 'none', 'important');
                overlay.style.setProperty('cursor', 'default', 'important');
                overlay.style.setProperty('user-select', 'none', 'important');
                
                // Set specific positions for each overlay
                if (overlayId === 'performanceOverlay') {
                    overlay.style.setProperty('top', '140px', 'important');
                    overlay.style.setProperty('left', '390px', 'important'); // 350px sidebar + 40px margin
                } else if (overlayId === 'legendOverlay') {
                    overlay.style.setProperty('top', '140px', 'important');
                    overlay.style.setProperty('right', '30px', 'important');
                } else if (overlayId === 'chartsOverlay') {
                    overlay.style.setProperty('bottom', '30px', 'important');
                    overlay.style.setProperty('left', '50%', 'important');
                    overlay.style.setProperty('transform', 'translateX(-50%)', 'important');
                } else if (overlayId === 'carbonNFTOverlay') {
                    overlay.style.setProperty('bottom', '30px', 'important');
                    overlay.style.setProperty('right', '30px', 'important');
                }
            }
        });
    }

    showCarbonNFT() {
        document.getElementById('carbonNFTOverlay').classList.add('active');
    }

    animateCamera(x, y, z, duration) {
        const startPos = {
            x: this.camera.position.x,
            y: this.camera.position.y,
            z: this.camera.position.z
        };

        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = this.easeInOutCubic(progress);

            this.camera.position.x = startPos.x + (x - startPos.x) * eased;
            this.camera.position.y = startPos.y + (y - startPos.y) * eased;
            this.camera.position.z = startPos.z + (z - startPos.z) * eased;
            
            this.camera.lookAt(0, 0, 0);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    updatePointCloudVisualization(mode) {
        this.pointClouds.forEach(cloud => {
            const segment = cloud.userData.segment;
            const material = cloud.material;
            
            switch (mode) {
                case 'segmentation':
                    // Original colors
                    material.opacity = 0.8;
                    break;
                case 'components':
                    // Highlight by efficiency
                    material.opacity = cloud.userData.efficiency > 75 ? 1.0 : 0.4;
                    break;
                case 'thermal':
                    // Color by thermal performance
                    const thermalData = this.buildingData.buildingPointCloud.thermalData.find(t => t.segment === segment);
                    if (thermalData) {
                        const heatLoss = thermalData.heatLoss;
                        material.opacity = Math.max(0.3, 1.0 - (heatLoss / 5));
                    }
                    break;
                case 'maintenance':
                    // Color by defect count
                    material.opacity = Math.max(0.3, 1.0 - (cloud.userData.defects / 10));
                    break;
                case 'climate':
                    // Color by climate risk
                    const riskData = this.buildingData.climateRiskBySegment.find(r => r.segment === segment);
                    if (riskData) {
                        material.opacity = Math.max(0.3, 1.0 - (riskData.overallRisk / 100));
                    }
                    break;
                case 'risk':
                    // Color by risk uncertainty
                    const riskUncertainty = this.buildingData.climateRiskBySegment.find(r => r.segment === segment)?.uncertainty || 0;
                    material.opacity = Math.max(0.3, 1.0 - riskUncertainty);
                    break;
                case 'carbon':
                    // Color by carbon potential
                    const carbonPotential = this.buildingData.carbonCredits.bySegment[segment] || 0;
                    material.opacity = Math.max(0.3, 1.0 - (carbonPotential / 2));
                    break;
                case 'roi':
                    // Color by ROI uncertainty
                    const roiUncertainty = this.buildingData.performanceMetrics.roiMetrics.climateYield / 1000; // Simplified uncertainty
                    material.opacity = Math.max(0.3, 1.0 - roiUncertainty);
                    break;
            }
        });
    }

    showBoundingBoxes(show) {
        this.boundingBoxes.forEach(box => {
            box.visible = show;
        });
    }

    updatePointCloudVisibility() {
        this.pointClouds.forEach(cloud => {
            if (this.selectedSegment === 'all') {
                cloud.visible = true;
                cloud.material.opacity = 0.8;
            } else {
                cloud.visible = cloud.userData.segment === this.selectedSegment;
                cloud.material.opacity = cloud.visible ? 1.0 : 0.1;
            }
        });

        this.boundingBoxes.forEach(box => {
            if (this.selectedSegment === 'all') {
                box.visible = false;
            } else {
                box.visible = box.userData.segment === this.selectedSegment;
            }
        });
    }

    updatePerformanceCard() {
        const segment = this.selectedSegment;
        
        if (segment === 'all') {
            document.getElementById('selectedComponent').textContent = 'Building Overview';
            document.getElementById('energyConsumption').textContent = `${this.buildingData.performanceMetrics.energyConsumption.total.toLocaleString()} kWh`;
            document.getElementById('thermalPerf').textContent = '18.3°C avg';
            document.getElementById('maintCost').textContent = `£${this.buildingData.performanceMetrics.maintenanceCosts.total.toLocaleString()}`;
            document.getElementById('riskLevel').textContent = 'Medium';
        } else {
            const segmentData = this.buildingData.buildingPointCloud.segments.find(s => s.id === segment);
            const thermalData = this.buildingData.buildingPointCloud.thermalData.find(t => t.segment === segment);
            
            if (segmentData && thermalData) {
                document.getId('selectedComponent').textContent = segment.charAt(0).toUpperCase() + segment.slice(1);
                document.getElementById('energyConsumption').textContent = `${this.buildingData.performanceMetrics.energyConsumption.bySegment[segment] || 0} kWh`;
                document.getElementById('thermalPerf').textContent = `${thermalData.avgTemp}°C avg`;
                document.getElementById('maintCost').textContent = `£${this.buildingData.performanceMetrics.maintenanceCosts.bySegment[segment] || 0}`;
                
                const riskData = this.buildingData.climateRiskBySegment.find(r => r.segment === segment);
                const riskLevel = riskData ? (riskData.overallRisk > 50 ? 'High' : riskData.overallRisk > 30 ? 'Medium' : 'Low') : 'Unknown';
                document.getElementById('riskLevel').textContent = riskLevel;
            }
        }
    }

    updateSegmentation() {
        // Simulate real-time segmentation parameter updates
        const ransac = document.getElementById('ransacDistance').value;
        const dbscan = document.getElementById('dbscanEps').value;
        const minPoints = document.getElementById('minPoints').value;

        // Update processing time simulation
        const processingTime = (2.0 + Math.random() * 1.0).toFixed(1);
        document.getElementById('processingTime').textContent = `${processingTime}s`;

        // Update accuracy simulation
        const accuracy = (92 + Math.random() * 6).toFixed(1);
        document.getElementById('accuracy').textContent = `${accuracy}%`;

        // Animate point clouds slightly to show processing
        this.pointClouds.forEach(cloud => {
            cloud.rotation.y += 0.001;
        });
    }

    updateRenderStats() {
        const totalObjects = this.pointClouds.reduce((sum, cloud) => sum + cloud.geometry.attributes.position.count, 0);
        document.getElementById('renderStats').textContent = `FPS: 60 | Objects: ${totalObjects.toLocaleString()}`;
        document.getElementById('selectedPoints').textContent = 'Selected: 0 points';
        document.getElementById('carbonCredits').textContent = `Carbon Credits: ${this.buildingData.carbonCredits.totalVerified} tCO₂e`;
    }

    // Mapbox Integration - Singleton Pattern
    // Mapbox methods removed - no longer needed

    // Enhanced STGNN ROI Metrics
    updateROIMetrics() {
        const stgnn = this.buildingData.stgnnMetrics;
        const investment = this.buildingData.investmentOptimization;
        const data = this.buildingData.dataIntegration;
        
        document.getElementById('roiImprovementValue').textContent = `+${investment.roiImprovement}%`;
        document.getElementById('riskReduction').textContent = `${investment.riskReduction}%`;
        document.getElementById('confidenceLevel').textContent = `${investment.confidence}%`;
        document.getElementById('modelVersion').textContent = stgnn.modelVersion;
        document.getElementById('dataSources').textContent = data.dataSources;
    }

    // ESG & Infrastructure Intelligence
    updateClimateRisk() {
        const esg = this.buildingData.esgCompliance;
        const digitalTwin = this.buildingData.digitalTwin;
        const infrastructure = this.buildingData.infrastructure;
        
        document.getElementById('esgScore').textContent = `${esg.esgScore}%`;
        document.getElementById('co2Tracked').textContent = `${esg.co2Tracked}M`;
        document.getElementById('uptime').textContent = `${infrastructure.uptime}%`;
        document.getElementById('digitalTwins').textContent = digitalTwin.modelsActive.toLocaleString();
        document.getElementById('simAccuracy').textContent = `${digitalTwin.simAccuracy}%`;
    }

    // Bayesian Uncertainty Filter
    updateUncertaintyFilter() {
        const threshold = parseFloat(document.getElementById('uncertaintyThreshold').value);
        this.pointClouds.forEach(cloud => {
            const segment = cloud.userData.segment;
            const thermalData = this.buildingData.buildingPointCloud.thermalData.find(t => t.segment === segment);
            if (thermalData && thermalData.uncertainty > threshold) {
                cloud.material.opacity = 0.2;
            } else {
                cloud.material.opacity = 0.8;
            }
        });
    }

    // Carbon Credit NFT Display
    updateCarbonNFT() {
        if (this.selectedSegment === 'all') {
            document.getElementById('carbonNFTOverlay').classList.remove('active');
            return;
        }

        const carbonData = this.buildingData.carbonCredits;
        document.getElementById('nftSegmentId').textContent = carbonData.nftIds[this.selectedSegment] || 'N/A';
        document.getElementById('nftSavings').textContent = `${carbonData.bySegment[this.selectedSegment] || 0} tCO₂e`;
        document.getElementById('nftValue').textContent = `£${((carbonData.bySegment[this.selectedSegment] || 0) * 1200).toLocaleString()}`;
        document.getElementById('nftBlockchain').textContent = carbonData.blockchain;
        
        document.getElementById('carbonNFTOverlay').classList.add('active');
    }

    updateHUD(obj) {
        const banner = document.querySelector('.hudBanner') ||
            document.body.appendChild(Object.assign(
                document.createElement('div'), {className: 'hudBanner'}
            ));
        banner.innerHTML = `
            <span>Payback: ${obj.payback}</span>
            <span>Climate Yield: ${obj.climateYield}</span>
            <span>NPV: ${obj.npv}</span>
        `;
    }

    // Enhanced Export Functions
    mintCarbonNFT() {
        const segment = this.selectedSegment;
        const carbonAmount = this.buildingData.carbonCredits.bySegment[segment] || 0;
        const nftId = this.buildingData.carbonCredits.nftIds[segment];
        
        // Simulate NFT minting
        const nftData = {
            tokenId: nftId,
            segment: segment,
            carbonAmount: carbonAmount,
            timestamp: new Date().toISOString(),
            blockchain: 'Ethereum',
            verifiedBy: 'RetrofitForge SAM-GNN',
            marketValue: carbonAmount * 1200,
            patentFeatures: [
                'Hybrid SAM-GNN Pipeline',
                'Physics-Aware RANSAC™',
                'Probabilistic Bounding-Box Filter'
            ]
        };

        // Create download
        const blob = new Blob([JSON.stringify(nftData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `carbon-nft-${nftId}-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Show success animation
        this.showNFTSuccessAnimation(nftData);
    }

    showNFTSuccessAnimation(nftData) {
        // Create floating success message
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #10b981, #34d399);
                color: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
                animation: nftSuccess 3s ease-in-out;
            ">
                <h3 style="margin: 0 0 15px 0; font-size: 1.5rem;">🌱 Carbon NFT Minted!</h3>
                <p style="margin: 0 0 10px 0; font-size: 1.1rem;">Token ID: ${nftData.tokenId}</p>
                <p style="margin: 0 0 10px 0; font-size: 1.1rem;">Carbon Savings: ${nftData.carbonAmount} tCO₂e</p>
                <p style="margin: 0; font-size: 1.2rem; font-weight: bold;">Value: £${nftData.marketValue.toLocaleString()}</p>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes nftSuccess {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.removeChild(successDiv);
            document.head.removeChild(style);
        }, 3000);
    }

    generateReport() {
        const reportData = {
            timestamp: new Date().toISOString(),
            buildingAnalysis: {
                totalPoints: this.buildingData.buildingPointCloud.totalPoints,
                segments: this.buildingData.buildingPointCloud.segments,
                roiMetrics: this.buildingData.performanceMetrics.roiMetrics,
                climateRisks: this.buildingData.climateRiskBySegment,
                carbonCredits: this.buildingData.carbonCredits
            },
            patentFeatures: [
                'Hybrid SAM-GNN Pipeline',
                'Physics-Aware RANSAC™',
                'Probabilistic Bounding-Box Filter',
                'Multi-Modal Risk Raster™',
                'Carbon-Credit MRV Oracle'
            ],
            recommendations: [
                'Implement high-efficiency windows to reduce heat loss by 4.2 kW/m²',
                'Upgrade HVAC system to improve efficiency from 71% to 85%',
                'Install solar panels on roof for 0.8 tCO₂e annual carbon credits',
                'Apply cool roof coating to reduce heat stress risk by 25%'
            ]
        };

        // Create comprehensive report
        const reportText = `
RETROFITFORGE BUILDING INTELLIGENCE REPORT
===========================================

Patent-Pending Analysis Results:
- SAM-GNN Processing Time: ${document.getElementById('processingTime').textContent}
- Physics-Aware Accuracy: ${document.getElementById('accuracy').textContent}
- Carbon Credits Generated: ${document.getElementById('carbonCredits').textContent}

ROI Analysis:
- Total Investment: ${document.getElementById('totalInvestment').textContent}
- Annual Savings: ${document.getElementById('annualSavings').textContent}
- Payback Period: ${document.getElementById('paybackPeriod').textContent}
- IRR: ${document.getElementById('irr').textContent}
- Climate Yield: ${document.getElementById('climateYield').textContent}

Climate Risk Assessment:
- Flood Risk: ${document.getElementById('floodRisk').textContent}
- Heat Stress: ${document.getElementById('heatStress').textContent}
- Storm Damage: ${document.getElementById('stormDamage').textContent}

Patent-Pending Features:
${reportData.patentFeatures.map(feature => `• ${feature}`).join('\n')}

Recommendations:
${reportData.recommendations.map(rec => `• ${rec}`).join('\n')}

Generated by RetrofitForge™ - Patent-Pending 3D Building Intelligence Platform
        `;

        const blob = new Blob([reportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `retrofitforge-report-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showReportSuccessAnimation();
    }

    showReportSuccessAnimation() {
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #8b5cf6, #a855f7);
                color: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 20px 40px rgba(139, 92, 246, 0.4);
                animation: reportSuccess 3s ease-in-out;
            ">
                <h3 style="margin: 0 0 15px 0; font-size: 1.5rem;">📋 Report Generated!</h3>
                <p style="margin: 0; font-size: 1.1rem;">Comprehensive analysis report downloaded successfully</p>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes reportSuccess {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.removeChild(successDiv);
            document.head.removeChild(style);
        }, 3000);
    }

    exportAnalysis() {
        // Simulate export functionality
        const exportData = {
            timestamp: new Date().toISOString(),
            section: this.sections[this.currentSection].name,
            selectedSegment: this.selectedSegment,
            parameters: {
                ransac: document.getElementById('ransacDistance').value,
                dbscan: document.getElementById('dbscanEps').value,
                minPoints: document.getElementById('minPoints').value
            },
            performance: this.buildingData.performanceMetrics,
            components: this.buildingData.detectedComponents
        };

        // Create download
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `retrofitforge-analysis-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Show notification
        alert('Analysis exported successfully!');
    }

    showLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.add('active');
        
        // Animate progress bar
        let progress = 0;
        const progressBar = document.getElementById('loadingProgress');
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 100);
    }

    hideLoadingOverlay() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }

    // Enhanced animation system
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        // Auto-rotation for enhanced viewing
        if (this.cameraControls.autoRotate) {
            this.cameraControls.theta += this.cameraControls.autoRotateSpeed * 0.01;
            this.updateCameraPosition();
        }

        // Animate point clouds with enhanced effects
        this.pointClouds.forEach((cloud, index) => {
            cloud.rotation.y += 0.0005 * (index + 1);
            
            // Enhanced floating animation
            const time = Date.now() * 0.001;
            cloud.position.y = Math.sin(time + index) * 2;
            
            // Add subtle scaling based on efficiency
            const efficiency = cloud.userData.efficiency || 75;
            const scale = 1 + (efficiency - 75) * 0.001;
            cloud.scale.setScalar(scale);
        });

        // Enhanced bounding box animations
        this.boundingBoxes.forEach((box, index) => {
            if (box.visible) {
                box.rotation.y += 0.01;
                const time = Date.now() * 0.001;
                box.scale.setScalar(1 + Math.sin(time + index) * 0.02);
                
                // Add pulsing effect for high-risk components
                const segment = box.userData.segment;
                const riskData = this.buildingData.climateRiskBySegment.find(r => r.segment === segment);
                if (riskData && riskData.overallRisk > 50) {
                    box.material.opacity = 0.3 + Math.sin(time * 2) * 0.2;
                }
            }
        });

        // Update metrics occasionally
        if (Math.random() < 0.005) {
            this.updateLiveMetrics();
        }

        this.renderer.render(this.scene, this.camera);
    }

    // Real-time data streaming simulation
    startRealTimeDataStream() {
        setInterval(() => {
            this.updateLiveMetrics();
            this.updateCarbonCredits();
            this.updateProcessingTime();
        }, 3000);
    }

    updateLiveMetrics() {
        // Generate synchronized values for all metrics
        const accuracy = (Math.random() * 1 + 96.5).toFixed(1);
        const speed = (Math.random() * 0.5 + 2.0).toFixed(1);
        const improvement = (Math.random() * 2 + 33).toFixed(1);
        const efficiency = (Math.random() * 3 + 87).toFixed(0);
        const riskReduction = (Math.random() * 5 + 40).toFixed(0);
        const confidence = (Math.random() * 3 + 93).toFixed(0);
        const esgScore = (Math.random() * 2 + 92).toFixed(1);
        const co2 = (Math.random() * 0.3 + 1.1).toFixed(1);
        const uptimeValue = (Math.random() * 0.1 + 99.8).toFixed(1);
        const twins = Math.floor(Math.random() * 50 + 2510);
        const simAccuracy = (Math.random() * 0.5 + 99.0).toFixed(1);

        // Update STGNN accuracy (header)
        const stgnnAccuracy = document.getElementById('stgnnAccuracy');
        if (stgnnAccuracy) {
            stgnnAccuracy.textContent = `${accuracy}%`;
        }

        // Update processing speed (header)
        const processingSpeed = document.getElementById('processingSpeed');
        if (processingSpeed) {
            processingSpeed.textContent = `${speed}s`;
        }

        // Update ROI improvement (header)
        const roiImprovement = document.getElementById('roiImprovement');
        if (roiImprovement) {
            roiImprovement.textContent = `+${improvement}%`;
        }

        // Update carbon efficiency (header)
        const carbonEfficiency = document.getElementById('carbonEfficiency');
        if (carbonEfficiency) {
            carbonEfficiency.textContent = `${efficiency}%`;
        }

        // Update STGNN Investment Optimization panel metrics
        const roiMetricsPanel = document.querySelector('.roi-metrics');
        if (roiMetricsPanel) {
            roiMetricsPanel.classList.add('updating');
            setTimeout(() => roiMetricsPanel.classList.remove('updating'), 1000);
        }

        const roiImprovementValue = document.getElementById('roiImprovementValue');
        if (roiImprovementValue) {
            roiImprovementValue.textContent = `+${improvement}%`;
            roiImprovementValue.classList.add('updating');
            setTimeout(() => roiImprovementValue.classList.remove('updating'), 500);
        }

        const riskReductionElement = document.getElementById('riskReduction');
        if (riskReductionElement) {
            riskReductionElement.textContent = `${riskReduction}%`;
            riskReductionElement.classList.add('updating');
            setTimeout(() => riskReductionElement.classList.remove('updating'), 500);
        }

        const confidenceLevel = document.getElementById('confidenceLevel');
        if (confidenceLevel) {
            confidenceLevel.textContent = `${confidence}%`;
            confidenceLevel.classList.add('updating');
            setTimeout(() => confidenceLevel.classList.remove('updating'), 500);
        }

        // Update ESG & Infrastructure Intelligence panel metrics
        const climateRiskPanel = document.querySelector('.climate-risk');
        if (climateRiskPanel) {
            climateRiskPanel.classList.add('updating');
            setTimeout(() => climateRiskPanel.classList.remove('updating'), 1000);
        }

        const esgScoreElement = document.getElementById('esgScore');
        if (esgScoreElement) {
            esgScoreElement.textContent = `${esgScore}%`;
            esgScoreElement.classList.add('updating');
            setTimeout(() => esgScoreElement.classList.remove('updating'), 500);
        }

        const co2TrackedElement = document.getElementById('co2Tracked');
        if (co2TrackedElement) {
            co2TrackedElement.textContent = `${co2}M`;
            co2TrackedElement.classList.add('updating');
            setTimeout(() => co2TrackedElement.classList.remove('updating'), 500);
        }

        const uptimeElement = document.getElementById('uptime');
        if (uptimeElement) {
            uptimeElement.textContent = `${uptimeValue}%`;
            uptimeElement.classList.add('updating');
            setTimeout(() => uptimeElement.classList.remove('updating'), 500);
        }

        const digitalTwinsElement = document.getElementById('digitalTwins');
        if (digitalTwinsElement) {
            digitalTwinsElement.textContent = twins.toLocaleString();
            digitalTwinsElement.classList.add('updating');
            setTimeout(() => digitalTwinsElement.classList.remove('updating'), 500);
        }

        const simAccuracyElement = document.getElementById('simAccuracy');
        if (simAccuracyElement) {
            simAccuracyElement.textContent = `${simAccuracy}%`;
            simAccuracyElement.classList.add('updating');
            setTimeout(() => simAccuracyElement.classList.remove('updating'), 500);
        }
    }

    updateCarbonCredits() {
        // Simulate carbon credit accumulation
        const carbonElement = document.getElementById('carbonCredits');
        if (carbonElement) {
            const currentCredits = parseFloat(carbonElement.textContent);
            const newCredits = currentCredits + (Math.random() * 0.1);
            carbonElement.textContent = newCredits.toFixed(1) + ' tCO₂e';
        }
    }

    updateProcessingTime() {
        // Simulate processing time variations
        const processingElement = document.getElementById('processingTime');
        if (processingElement) {
            const baseTime = 1.8;
            const variation = (Math.random() - 0.5) * 0.4;
            const newTime = Math.max(1.2, Math.min(2.5, baseTime + variation));
            processingElement.textContent = newTime.toFixed(1) + 's';
        }
    }

    // Investor-grade demo flow
    startInvestorDemo() {
        const demoSteps = [
            { section: 0, duration: 5000, description: "Advanced STGNNs for Property Performance Forecasting" },
            { section: 1, duration: 5000, description: "Investment Optimization with Uncertainty Quantification" },
            { section: 2, duration: 5000, description: "Multi-Modal Data Lake Integration" },
            { section: 3, duration: 5000, description: "Carbon Intelligence & ESG Compliance" },
            { section: 4, duration: 5000, description: "Digital Twin Engine with 99.3% Accuracy" },
            { section: 5, duration: 5000, description: "Carbon-Aware Infrastructure Optimization" },
            { section: 6, duration: 5000, description: "Hybrid SAM-GNN Pipeline Integration" }
        ];

        let currentStep = 0;
        
        // Create investor timeline animation
        this.createInvestorTimeline();
        
        // Update HUD with investor metrics
        this.updateHUD({
            payback: '2.7 yrs',
            climateYield: '£46 / tCO₂e',
            npv: '+£3.4 M'
        });
        
        const runDemoStep = () => {
            if (currentStep < demoSteps.length) {
                const step = demoSteps[currentStep];
                this.goToSection(step.section);
                
                // Show step description
                this.showDemoStepDescription(step.description);
                
                currentStep++;
                setTimeout(runDemoStep, step.duration);
            } else {
                // Demo complete - show summary
                this.showDemoSummary();
            }
        };

        runDemoStep();
    }

    showDemoStepDescription(description) {
        const descDiv = document.createElement('div');
        descDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(26, 26, 46, 0.95);
                color: #32a0cd;
                padding: 15px 25px;
                border-radius: 10px;
                border: 2px solid #32a0cd;
                z-index: 10000;
                backdrop-filter: blur(10px);
                animation: demoStep 4s ease-in-out;
            ">
                <h4 style="margin: 0; font-size: 1.1rem;">${description}</h4>
            </div>
        `;
        
        document.body.appendChild(descDiv);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes demoStep {
                0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                20% { opacity: 1; transform: translateX(-50%) translateY(0); }
                80% { opacity: 1; transform: translateX(-50%) translateY(0); }
                100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.removeChild(descDiv);
            document.head.removeChild(style);
        }, 4000);
    }

    showDemoSummary() {
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                color: white;
                padding: 40px;
                border-radius: 20px;
                border: 2px solid #32a0cd;
                z-index: 10000;
                text-align: center;
                max-width: 600px;
                box-shadow: 0 20px 40px rgba(50, 160, 205, 0.3);
            ">
                <h2 style="margin: 0 0 20px 0; color: #32a0cd;">🎯 Demo Complete</h2>
                <p style="margin: 0 0 15px 0; font-size: 1.1rem;">RetrofitForge™ has demonstrated all advanced STGNN features:</p>
                <ul style="text-align: left; margin: 0 0 20px 0; padding-left: 20px;">
                    <li>Advanced STGNNs (96.9% Accuracy)</li>
                    <li>Investment Optimization (+34.2% ROI)</li>
                    <li>Multi-Modal Data Lake (15 Sources)</li>
                    <li>Carbon Intelligence (93.6% ESG Score)</li>
                    <li>Digital Twin Engine (2,537 Models)</li>
                    <li>Carbon-Aware Infrastructure (89% Efficiency)</li>
                </ul>
                <p style="margin: 0; font-size: 1.1rem; color: #10b981;">
                    <strong>ROI: +34.2% Improvement | Accuracy: 96.9% | ESG: 93.6% | Digital Twins: 2,537</strong>
                </p>
            </div>
        `;
        
        document.body.appendChild(summaryDiv);
        
        setTimeout(() => {
            document.body.removeChild(summaryDiv);
        }, 8000);
    }

    onWindowResize() {
        const container = document.getElementById('pointCloudScene');
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    scrollUp() {
        try {
            // Only scroll up if not at the first section
            if (this.currentSection > 0) {
                this.goToSection(this.currentSection - 1);
            }
            // Don't wrap around - stay at first section
        } catch (error) {
            console.error('Error in scrollUp:', error);
        }
    }

    scrollDown() {
        try {
            // Only scroll down if not at the last section
            if (this.currentSection < this.sections.length - 1) {
                this.goToSection(this.currentSection + 1);
            }
            // Don't wrap around - stay at last section
        } catch (error) {
            console.error('Error in scrollDown:', error);
        }
    }

    updateScrollButtonStates() {
        try {
            const scrollUpBtn = document.getElementById('scrollUpBtn');
            const scrollDownBtn = document.getElementById('scrollDownBtn');
            
            // Check if buttons exist before trying to modify them
            if (!scrollUpBtn || !scrollDownBtn) {
                console.log('Scroll buttons not found, skipping state update');
                return;
            }
            
            // Disable scroll up button if at first section
            if (this.currentSection === 0) {
                scrollUpBtn.disabled = true;
                scrollUpBtn.style.opacity = '0.4';
                scrollUpBtn.style.cursor = 'not-allowed';
            } else {
                scrollUpBtn.disabled = false;
                scrollUpBtn.style.opacity = '1';
                scrollUpBtn.style.cursor = 'pointer';
            }
            
            // Disable scroll down button if at last section
            if (this.currentSection === this.sections.length - 1) {
                scrollDownBtn.disabled = true;
                scrollDownBtn.style.opacity = '0.4';
                scrollDownBtn.style.cursor = 'not-allowed';
            } else {
                scrollDownBtn.disabled = false;
                scrollDownBtn.style.opacity = '1';
                scrollDownBtn.style.cursor = 'pointer';
            }
        } catch (error) {
            console.error('Error updating scroll button states:', error);
        }
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.sectionTimer) {
            clearTimeout(this.sectionTimer);
        }
        
        // Cleanup Three.js
        if (this.renderer) {
            this.renderer.dispose();
        }
        
        // Cleanup charts
        Object.values(this.charts).forEach(chart => {
            if (chart && chart.destroy) {
                chart.destroy();
            }
        });
    }

    // Investor Timeline Animation
    createInvestorTimeline() {
        const timelineHTML = `
            <svg width="400" height="60" viewBox="0 0 400 60">
                <defs>
                    <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <line x1="50" y1="30" x2="350" y2="30" stroke="url(#timelineGradient)" stroke-width="4" opacity="0.3"/>
                <circle id="scan" cx="80" cy="30" r="8" fill="#10B981" opacity="0"/>
                <text x="80" y="50" text-anchor="middle" fill="#fff" font-size="10">Scan</text>
                <circle id="twin" cx="160" cy="30" r="8" fill="#10B981" opacity="0"/>
                <text x="160" y="50" text-anchor="middle" fill="#fff" font-size="10">Twin</text>
                <circle id="retrofit" cx="240" cy="30" r="8" fill="#10B981" opacity="0"/>
                <text x="240" y="50" text-anchor="middle" fill="#fff" font-size="10">Retrofit</text>
                <circle id="credit" cx="320" cy="30" r="8" fill="#10B981" opacity="0"/>
                <text x="320" y="50" text-anchor="middle" fill="#fff" font-size="10">Credit</text>
            </svg>
        `;
        
        const timelineDiv = document.createElement('div');
        timelineDiv.innerHTML = timelineHTML;
        timelineDiv.style.cssText = `
            position: absolute;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            background: rgba(0,0,0,0.7);
            padding: 15px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(timelineDiv);
        
        // Animate opacity in sequence
        const steps = ['scan', 'twin', 'retrofit', 'credit'];
        steps.forEach((id, i) => {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.style.opacity = 1;
            }, i * 1500);
        });
        
        // Remove timeline after animation
        setTimeout(() => {
            if (timelineDiv.parentNode) {
                timelineDiv.parentNode.removeChild(timelineDiv);
            }
        }, 8000);
    }

    // Mapbox-related methods removed - no longer needed
}

// Initialize the platform when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting RetrofitForge Platform');
    const platform = new RetrofitForge3DPlatform();
    
    // Handle page unload
    window.addEventListener('beforeunload', () => {
        platform.destroy();
    });
});