// RetrofitForge - Industry-Leading 3D Building Intelligence Platform
// Patent-Pending Technology Stack with SAM-GNN Pipeline

// Mapbox removed - no longer needed

class RetrofitForge3DPlatform {
    constructor() {
        this.selectedSegment = 'all';

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

        // Don't initialize immediately - wait for DOM to be ready
    }

    init() {
        console.log('Initializing RetrofitForge platform...');
        this.setupEventListeners();
        setTimeout(() => {
            console.log('Starting platform initialization...');
            try {
                this.initThreeJS();
                console.log('ThreeJS initialized');
                this.createPointCloud();
                console.log('Point cloud created');
                this.animate();
                console.log('Animation started');
                console.log('Application initialized');
            } catch (error) {
                console.error('Error during initialization:', error);
            }
        }, 1000);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Skip toggle button setup for now to avoid errors
        console.log('Skipping toggle button setup to avoid DOM errors');
        
        // Global event listeners (these should always work)
        try {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'm' || e.key === 'M') {
                    this.toggleMapbox3DContext();
                }
            });
            console.log('Global keydown event listener added');
        } catch (error) {
            console.error('Failed to add keydown event listener:', error);
        }

        try {
            window.addEventListener('resize', () => this.onWindowResize());
            console.log('Window resize event listener added');
        } catch (error) {
            console.error('Failed to add resize event listener:', error);
        }

        console.log('Event listeners setup complete');
    }

    toggleDigitalTwin() {
        const toggleBtn = document.getElementById('digitalTwinToggle');
        if (!toggleBtn) {
            console.warn('Toggle button not found, cannot toggle mode');
            return;
        }
        
        const toggleIcon = toggleBtn.querySelector('.toggle-icon');
        const toggleText = toggleBtn.querySelector('.toggle-text');
        
        if (toggleBtn.classList.contains('active')) {
            // Switch to 3D Perception mode
            toggleBtn.classList.remove('active');
            toggleIcon.textContent = '🏗️';
            toggleText.textContent = 'Digital Twin';
            this.switchTo3DPerceptionMode();
        } else {
            // Switch to Digital Twin mode
            toggleBtn.classList.add('active');
            toggleIcon.textContent = '🔬';
            toggleText.textContent = '3D Perception';
            this.switchToDigitalTwinMode();
        }
    }

    switchTo3DPerceptionMode() {
        console.log('Switching to 3D Perception mode');
        // Reset to default 3D perception view
        this.resetCamera();
        this.updatePointCloudVisualization('default');
        
        // Update scene background
        if (this.scene) {
            this.scene.background = new THREE.Color(0x090e1a);
        }
    }

    switchToDigitalTwinMode() {
        console.log('Switching to Digital Twin mode');
        // Switch to digital twin view with different visualization
        this.animateCamera(0, 150, 200, 2);
        this.updatePointCloudVisualization('digital-twin');
        
        // Update scene background for digital twin mode
        if (this.scene) {
            this.scene.background = new THREE.Color(0x1a1a2e);
        }
    }

    setupDraggableCharts() {
        try {
            const chartsOverlay = document.getElementById('chartsOverlay');
            if (!chartsOverlay) {
                console.log('Charts overlay not found, skipping draggable setup');
                return;
            }

        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        // No movement constraints - completely free dragging
        // Removed all movement limits for unrestricted dragging

        const dragStart = (e) => {
            // Only allow dragging if clicking directly on the charts overlay or its children
            if (e.target === chartsOverlay || chartsOverlay.contains(e.target)) {
                e.preventDefault();
                e.stopPropagation();
                
                if (e.type === "touchstart") {
                    initialX = e.touches[0].clientX - xOffset;
                    initialY = e.touches[0].clientY - yOffset;
                } else {
                    initialX = e.clientX - xOffset;
                    initialY = e.clientY - yOffset;
                }
                
                isDragging = true;
            }
        };

        const dragEnd = (e) => {
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
                initialX = currentX;
                initialY = currentY;
                isDragging = false;
            }
        };

        const drag = (e) => {
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();

                let newX, newY;

                if (e.type === "touchmove") {
                    newX = e.touches[0].clientX - initialX;
                    newY = e.touches[0].clientY - initialY;
                } else {
                    newX = e.clientX - initialX;
                    newY = e.clientY - initialY;
                }

                // No constraints - completely free movement
                currentX = newX;
                currentY = newY;
                xOffset = currentX;
                yOffset = currentY;
                setTranslate(currentX, currentY, chartsOverlay);
                
                // Remove boundary feedback since there are no limits
                chartsOverlay.classList.remove('at-boundary');
            }
        };

        const setTranslate = (xPos, yPos, el) => {
            el.style.transform = `translate(${xPos}px, ${yPos}px)`;
        };

        // Mouse events
        chartsOverlay.addEventListener("mousedown", dragStart);
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", dragEnd);

        // Touch events
        chartsOverlay.addEventListener("touchstart", dragStart);
        document.addEventListener("touchmove", drag);
        document.addEventListener("touchend", dragEnd);
        } catch (error) {
            console.error('Error setting up draggable charts:', error);
        }
    }

    initThreeJS() {
        const container = document.getElementById('pointCloudScene');
        
        if (!container) {
            console.error('pointCloudScene container not found in DOM');
            return;
        }
        
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



    // Initialize default visualization state
    initializeVisualization() {
        // Show default charts and overlays
        document.getElementById('segmentationChart').classList.add('active');
        document.getElementById('performanceOverlay').classList.add('active');
        document.getElementById('legendOverlay').classList.add('active');
        
        // Set default camera position
        this.animateCamera(0, 150, 400, 2000);
        this.updatePointCloudVisualization('segmentation');
        
        // Initialize all live data systems
        this.updatePerformanceMetrics();
        this.updatePerformanceCard();
        this.updateLiveSegmentationData();
        
        // Start real-time metrics stream
        this.startRealTimeMetricsStream();
    }
    
    // Start real-time metrics data stream
    startRealTimeMetricsStream() {
        // Update performance metrics banner every 2-4 seconds
        setInterval(() => {
            this.updatePerformanceMetrics();
        }, 2000 + Math.random() * 2000);
        
        // Update building overview panel every 2-3 seconds
        setInterval(() => {
            this.updateLiveBuildingData();
            this.updatePerformanceCard();
        }, 2000 + Math.random() * 1000);
        
        // Update segmentation data every 3-4 seconds
        setInterval(() => {
            this.updateLiveSegmentationData();
        }, 3000 + Math.random() * 1000);
        
        // Add live indicator to banner
        this.addLiveIndicator();
        
        // Start data source rotation
        this.startDataSourceRotation();
    }
    
    // Rotate through different data sources to show live feeds
    startDataSourceRotation() {
        const dataSources = [
            'Market Feed',
            'IoT Sensors',
            'Carbon Exchange',
            'Energy Grid',
            'STGNN Model',
            'Satellite Data',
            'Weather API',
            'Blockchain Oracle'
        ];
        
        let currentIndex = 0;
        
        setInterval(() => {
            const dataSourceElement = document.getElementById('currentDataSource');
            if (dataSourceElement) {
                dataSourceElement.textContent = dataSources[currentIndex];
                dataSourceElement.style.color = this.getDataSourceColor(dataSources[currentIndex]);
            }
            currentIndex = (currentIndex + 1) % dataSources.length;
        }, 5000); // Change data source every 5 seconds
    }
    
    // Get color for different data sources
    getDataSourceColor(source) {
        const colors = {
            'Market Feed': '#10b981',
            'IoT Sensors': '#3b82f6',
            'Carbon Exchange': '#f59e0b',
            'Energy Grid': '#ef4444',
            'STGNN Model': '#8b5cf6',
            'Satellite Data': '#06b6d4',
            'Weather API': '#84cc16',
            'Blockchain Oracle': '#f97316'
        };
        return colors[source] || '#10b981';
    }
    
    // Add live indicator to show real-time data
    addLiveIndicator() {
        const banner = document.getElementById('performanceMetricsBanner');
        if (!banner) return;
        
        // Add live indicator dot
        const liveDot = document.createElement('div');
        liveDot.className = 'live-indicator-dot';
        liveDot.innerHTML = '● LIVE';
        liveDot.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background: linear-gradient(45deg, #10b981, #34d399);
            color: white;
            font-size: 0.7rem;
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 12px;
            animation: livePulse 2s ease-in-out infinite;
            z-index: 10;
        `;
        
        banner.appendChild(liveDot);
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes livePulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.7; transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Real-time performance metrics data
    realTimeMetrics = {
        payback: { current: 2.7, target: 2.5, volatility: 0.3 },
        climateYield: { current: 46, target: 50, volatility: 8 },
        npv: { current: 3.4, target: 4.0, volatility: 0.8 }
    };

    // Update performance metrics banner with real-time data
    updatePerformanceMetrics() {
        // Simulate real-time market fluctuations and sensor data
        this.updateRealTimeMetrics();
        
        // Get current values
        const payback = this.realTimeMetrics.payback.current.toFixed(1);
        const climateYield = Math.round(this.realTimeMetrics.climateYield.current);
        const npv = this.realTimeMetrics.npv.current.toFixed(1);
        
        // Update the banner values with live animation
        this.animateMetricUpdate('paybackValue', `${payback} yrs`);
        this.animateMetricUpdate('climateYieldValue', `£${climateYield} / tCO₂e`);
        this.animateMetricUpdate('npvValue', `+£${npv} M`);
        
        // Ensure banner is properly positioned
        this.positionPerformanceBanner();
    }
    
    // Simulate real-time market and sensor data updates
    updateRealTimeMetrics() {
        // Simulate market hours (more volatility during trading hours)
        const now = new Date();
        const hour = now.getHours();
        const isMarketHours = hour >= 9 && hour <= 17;
        const volatilityMultiplier = isMarketHours ? 1.5 : 0.7;
        
        // Payback period fluctuates based on energy prices and efficiency
        const energyPriceChange = (Math.random() - 0.5) * 0.15 * volatilityMultiplier;
        const efficiencyGain = Math.random() * 0.05; // Gradual efficiency improvements
        this.realTimeMetrics.payback.current += energyPriceChange - efficiencyGain;
        this.realTimeMetrics.payback.current = Math.max(2.0, Math.min(4.0, this.realTimeMetrics.payback.current));
        
        // Climate yield varies with carbon credit market prices and environmental factors
        const carbonMarketChange = (Math.random() - 0.5) * 3 * volatilityMultiplier;
        const seasonalFactor = Math.sin(now.getTime() / (1000 * 60 * 60 * 24 * 365)) * 2; // Seasonal variation
        this.realTimeMetrics.climateYield.current += carbonMarketChange + seasonalFactor * 0.1;
        this.realTimeMetrics.climateYield.current = Math.max(35, Math.min(65, this.realTimeMetrics.climateYield.current));
        
        // NPV changes with investment performance, market conditions, and interest rates
        const marketPerformance = (Math.random() - 0.5) * 0.3 * volatilityMultiplier;
        const interestRateEffect = Math.random() * 0.05; // Gradual growth
        this.realTimeMetrics.npv.current += marketPerformance + interestRateEffect;
        this.realTimeMetrics.npv.current = Math.max(2.0, Math.min(6.0, this.realTimeMetrics.npv.current));
        
        // Add some correlation between metrics (realistic market behavior)
        if (Math.random() > 0.7) {
            // Occasionally, all metrics move in the same direction
            const trend = Math.random() > 0.5 ? 1 : -1;
            this.realTimeMetrics.payback.current += trend * 0.05;
            this.realTimeMetrics.climateYield.current += trend * 1;
            this.realTimeMetrics.npv.current += trend * 0.1;
        }
    }
    
    // Animate metric updates with visual feedback
    animateMetricUpdate(elementId, newValue) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const oldValue = element.textContent;
        if (oldValue === newValue) return;
        
        // Add update animation class
        element.classList.add('metric-updating');
        
        // Update the value
        element.textContent = newValue;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            element.classList.remove('metric-updating');
        }, 1000);
    }
    
    // Ensure banner doesn't block other content
    positionPerformanceBanner() {
        const banner = document.getElementById('performanceMetricsBanner');
        if (!banner) return;
        
        // Check if there are any overlapping elements
        const sidebar = document.querySelector('.sidebar');
        const chartsOverlay = document.getElementById('chartsOverlay');
        
        // Adjust position based on available space
        let topPosition = 20;
        
        // If charts overlay is active and positioned high, move banner down
        if (chartsOverlay && chartsOverlay.classList.contains('active')) {
            const chartsRect = chartsOverlay.getBoundingClientRect();
            if (chartsRect.top < 100) {
                topPosition = 80;
            }
        }
        
        banner.style.top = `${topPosition}px`;
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
                case 'default':
                case 'segmentation':
                    // Original colors for 3D Perception mode
                    material.opacity = 0.8;
                    break;
                case 'digital-twin':
                    // Enhanced visualization for Digital Twin mode
                    material.opacity = 0.9;
                    // Add subtle glow effect
                    if (material.emissive) {
                        material.emissive.setHex(0x111111);
                    }
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

    // Live building overview data
    liveBuildingData = {
        energyConsumption: { current: 2850, base: 2850, volatility: 50 },
        thermalPerformance: { current: 18.5, base: 18.5, volatility: 0.8 },
        maintenanceCost: { current: 12500, base: 12500, volatility: 200 },
        riskLevel: { current: 'Medium', levels: ['Low', 'Medium', 'High'] },
        carbonCredits: { current: 2.4, base: 2.4, volatility: 0.1 }
    };

    // Live segmentation data
    liveSegmentationData = {
        walls: { points: 85000, base: 85000, volatility: 1000 },
        roof: { points: 45000, base: 45000, volatility: 500 },
        windows: { points: 25000, base: 25000, volatility: 300 },
        hvac: { points: 35000, base: 35000, volatility: 400 },
        floor: { points: 60000, base: 60000, volatility: 600 }
    };

    updatePerformanceCard() {
        const segment = this.selectedSegment;
        
        if (segment === 'all') {
            document.getElementById('selectedComponent').textContent = 'Building Overview';
            
            // Update with live animated values
            this.animateMetricUpdate('energyConsumption', `${Math.round(this.liveBuildingData.energyConsumption.current).toLocaleString()} kWh`);
            this.animateMetricUpdate('thermalPerf', `${this.liveBuildingData.thermalPerformance.current.toFixed(1)}°C avg`);
            this.animateMetricUpdate('maintCost', `£${Math.round(this.liveBuildingData.maintenanceCost.current).toLocaleString()}`);
            this.animateMetricUpdate('riskLevel', this.liveBuildingData.riskLevel.current);
            this.animateMetricUpdate('carbonValue', `${this.liveBuildingData.carbonCredits.current.toFixed(1)} tCO₂e`);
        } else {
            const segmentData = this.buildingData.buildingPointCloud.segments.find(s => s.id === segment);
            const thermalData = this.buildingData.buildingPointCloud.thermalData.find(t => t.segment === segment);
            
            if (segmentData && thermalData) {
                const segmentTitle = segment.charAt(0).toUpperCase() + segment.slice(1);
                document.getElementById('selectedComponent').textContent = segmentTitle;
                
                // Calculate segment-specific live values
                const segmentEnergy = this.calculateSegmentEnergy(segment);
                const segmentThermal = this.calculateSegmentThermal(segment);
                const segmentCost = this.calculateSegmentCost(segment);
                const segmentRisk = this.calculateSegmentRisk(segment);
                const segmentCarbon = this.calculateSegmentCarbon(segment);
                
                this.animateMetricUpdate('energyConsumption', `${Math.round(segmentEnergy).toLocaleString()} kWh`);
                this.animateMetricUpdate('thermalPerf', `${segmentThermal.toFixed(1)}°C avg`);
                this.animateMetricUpdate('maintCost', `£${Math.round(segmentCost).toLocaleString()}`);
                this.animateMetricUpdate('riskLevel', segmentRisk);
                this.animateMetricUpdate('carbonValue', `${segmentCarbon.toFixed(1)} tCO₂e`);
            }
        }
        
        // Also update the performance metrics banner
        this.updatePerformanceMetrics();
    }
    
    // Update live building data with realistic fluctuations
    updateLiveBuildingData() {
        // Energy consumption fluctuates based on time of day and usage patterns
        const now = new Date();
        const hour = now.getHours();
        const isPeakHours = (hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 19);
        const timeFactor = isPeakHours ? 1.2 : 0.8;
        
        this.liveBuildingData.energyConsumption.current += (Math.random() - 0.5) * 10 * timeFactor;
        this.liveBuildingData.energyConsumption.current = Math.max(
            this.liveBuildingData.energyConsumption.base * 0.8,
            Math.min(this.liveBuildingData.energyConsumption.base * 1.3, this.liveBuildingData.energyConsumption.current)
        );
        
        // Thermal performance varies with weather and system efficiency
        const seasonalFactor = Math.sin(now.getTime() / (1000 * 60 * 60 * 24 * 365)) * 2;
        this.liveBuildingData.thermalPerformance.current += (Math.random() - 0.5) * 0.2 + seasonalFactor * 0.01;
        this.liveBuildingData.thermalPerformance.current = Math.max(15, Math.min(25, this.liveBuildingData.thermalPerformance.current));
        
        // Maintenance costs gradually increase with wear and tear
        this.liveBuildingData.maintenanceCost.current += Math.random() * 5;
        this.liveBuildingData.maintenanceCost.current = Math.max(
            this.liveBuildingData.maintenanceCost.base * 0.9,
            Math.min(this.liveBuildingData.maintenanceCost.base * 1.2, this.liveBuildingData.maintenanceCost.current)
        );
        
        // Risk level changes based on system performance
        if (Math.random() > 0.95) {
            const currentIndex = this.liveBuildingData.riskLevel.levels.indexOf(this.liveBuildingData.riskLevel.current);
            const newIndex = Math.max(0, Math.min(2, currentIndex + (Math.random() > 0.5 ? 1 : -1)));
            this.liveBuildingData.riskLevel.current = this.liveBuildingData.riskLevel.levels[newIndex];
        }
        
        // Carbon credits accumulate over time
        this.liveBuildingData.carbonCredits.current += Math.random() * 0.02;
        this.liveBuildingData.carbonCredits.current = Math.max(
            this.liveBuildingData.carbonCredits.base * 0.8,
            Math.min(this.liveBuildingData.carbonCredits.base * 1.5, this.liveBuildingData.carbonCredits.current)
        );
        
        // Add visual feedback for data updates
        this.showDataUpdateIndicator();
    }
    
    // Show visual indicator when data updates
    showDataUpdateIndicator() {
        const performanceCard = document.getElementById('performanceCard');
        if (performanceCard) {
            performanceCard.classList.add('data-updating');
            setTimeout(() => {
                performanceCard.classList.remove('data-updating');
            }, 300);
        }
    }
    
    // Calculate segment-specific live values
    calculateSegmentEnergy(segment) {
        const baseEnergy = this.buildingData.performanceMetrics.energyConsumption.bySegment[segment] || 0;
        const efficiency = this.buildingData.buildingPointCloud.segments.find(s => s.id === segment)?.efficiency || 75;
        const efficiencyFactor = (100 - efficiency) / 100;
        return baseEnergy * (1 + efficiencyFactor * 0.3) + Math.random() * 50;
    }
    
    calculateSegmentThermal(segment) {
        const thermalData = this.buildingData.buildingPointCloud.thermalData.find(t => t.segment === segment);
        const baseTemp = thermalData?.avgTemp || 18.5;
        return baseTemp + (Math.random() - 0.5) * 2;
    }
    
    calculateSegmentCost(segment) {
        const baseCost = this.buildingData.performanceMetrics.maintenanceCosts.bySegment[segment] || 0;
        const defects = this.buildingData.buildingPointCloud.segments.find(s => s.id === segment)?.defects || 0;
        return baseCost * (1 + defects * 0.1) + Math.random() * 100;
    }
    
    calculateSegmentRisk(segment) {
                const riskData = this.buildingData.climateRiskBySegment.find(r => r.segment === segment);
        const riskScore = riskData?.overallRisk || 30;
        return riskScore > 50 ? 'High' : riskScore > 30 ? 'Medium' : 'Low';
    }
    
    calculateSegmentCarbon(segment) {
        const baseCarbon = this.buildingData.carbonCredits.bySegment[segment] || 0;
        return baseCarbon + Math.random() * 0.1;
    }
    
    // Update live segmentation data with realistic fluctuations
    updateLiveSegmentationData() {
        // Simulate real-time point cloud processing and sensor data
        Object.keys(this.liveSegmentationData).forEach(segment => {
            const data = this.liveSegmentationData[segment];
            
            // Points fluctuate based on sensor accuracy and processing
            const sensorNoise = (Math.random() - 0.5) * data.volatility;
            const processingVariation = Math.sin(Date.now() / 10000) * data.volatility * 0.1;
            
            data.points += sensorNoise + processingVariation;
            data.points = Math.max(data.base * 0.9, Math.min(data.base * 1.1, data.points));
        });
        
        // Update the legend display
        this.updateSegmentationLegend();
    }
    
    // Update the segmentation legend with live point counts
    updateSegmentationLegend() {
        const legendItems = document.querySelectorAll('.legend-item span');
        
        legendItems.forEach((item, index) => {
            const segments = ['walls', 'roof', 'windows', 'hvac', 'floor'];
            const segment = segments[index];
            
            if (segment && this.liveSegmentationData[segment]) {
                const points = Math.round(this.liveSegmentationData[segment].points);
                const currentText = item.textContent;
                const newText = currentText.replace(/\(\d+k points\)/, `(${Math.round(points/1000)}k points)`);
                
                if (currentText !== newText) {
                    // Add animation class for visual feedback
                    item.classList.add('legend-updating');
                    item.textContent = newText;
                    
                    // Remove animation class after animation completes
                    setTimeout(() => {
                        item.classList.remove('legend-updating');
                    }, 1000);
                }
            }
        });
        
        // Update point cloud density based on live segmentation data
        this.updatePointCloudDensity();
    }
    
    // Update point cloud density based on live segmentation data
    updatePointCloudDensity() {
        this.pointClouds.forEach(cloud => {
            const segment = cloud.userData.segment;
            if (this.liveSegmentationData[segment]) {
                const livePoints = this.liveSegmentationData[segment].points;
                const basePoints = this.liveSegmentationData[segment].base;
                const densityFactor = livePoints / basePoints;
                
                // Adjust point cloud opacity based on density changes
                cloud.material.opacity = Math.max(0.3, Math.min(1.0, 0.8 * densityFactor));
                
                // Add subtle scaling effect
                const scale = 0.95 + (densityFactor - 1) * 0.1;
                cloud.scale.setScalar(Math.max(0.9, Math.min(1.1, scale)));
            }
        });
    }
    
    // Show interactive segment transition
    showSegmentTransition(segment) {
        const performanceCard = document.getElementById('performanceCard');
        if (performanceCard) {
            performanceCard.classList.add('segment-transitioning');
            setTimeout(() => {
                performanceCard.classList.remove('segment-transitioning');
            }, 500);
        }
        
        // Highlight corresponding point cloud
        this.pointClouds.forEach(cloud => {
            if (cloud.userData.segment === segment) {
                cloud.material.opacity = 1.0;
                cloud.scale.setScalar(1.1);
                setTimeout(() => {
                    cloud.scale.setScalar(1.0);
                }, 300);
            }
        });
    }
    
    // Setup interactive performance stats
    setupInteractivePerformanceStats() {
        const perfStats = document.querySelectorAll('.perf-stat');
        perfStats.forEach(stat => {
            stat.addEventListener('mouseenter', () => {
                stat.classList.add('stat-hovered');
                this.showDetailedStats(stat);
            });
            
            stat.addEventListener('mouseleave', () => {
                stat.classList.remove('stat-hovered');
                this.hideDetailedStats();
            });
        });
    }
    
    // Setup interactive legend items
    setupInteractiveLegendItems() {
        const legendItems = document.querySelectorAll('.legend-item');
        legendItems.forEach((item, index) => {
            const segments = ['walls', 'roof', 'windows', 'hvac', 'floor'];
            const segment = segments[index];
            
            item.addEventListener('mouseenter', () => {
                item.classList.add('legend-hovered');
                this.highlightSegment(segment);
            });
            
            item.addEventListener('mouseleave', () => {
                item.classList.remove('legend-hovered');
                this.unhighlightSegment(segment);
            });
            
            item.addEventListener('click', () => {
                this.selectSegmentFromLegend(segment);
            });
        });
    }
    
    // Show detailed stats on hover
    showDetailedStats(statElement) {
        const label = statElement.querySelector('.perf-label').textContent;
        const value = statElement.querySelector('.perf-value').textContent;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'stat-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <h4>${label}</h4>
                <p>Current: ${value}</p>
                <p>Trend: ${this.getTrendIndicator(label)}</p>
                <p>Last Update: ${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        
        document.body.appendChild(tooltip);
        
        // Position tooltip near the stat
        const rect = statElement.getBoundingClientRect();
        tooltip.style.left = rect.right + 10 + 'px';
        tooltip.style.top = rect.top + 'px';
        
        // Store reference for removal
        statElement.tooltip = tooltip;
    }
    
    // Hide detailed stats
    hideDetailedStats() {
        const tooltips = document.querySelectorAll('.stat-tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    }
    
    // Get trend indicator for stats
    getTrendIndicator(label) {
        const trends = {
            'Energy Consumption': '↗️ Increasing',
            'Thermal Performance': '↘️ Decreasing',
            'Maintenance Cost': '↗️ Rising',
            'Risk Level': '→ Stable',
            'Carbon Credits': '↗️ Growing'
        };
        return trends[label] || '→ Stable';
    }
    
    // Highlight segment in 3D view
    highlightSegment(segment) {
        this.pointClouds.forEach(cloud => {
            if (cloud.userData.segment === segment) {
                cloud.material.opacity = 1.0;
                cloud.scale.setScalar(1.05);
            } else {
                cloud.material.opacity = 0.3;
            }
        });
    }
    
    // Unhighlight segment
    unhighlightSegment(segment) {
        this.pointClouds.forEach(cloud => {
            cloud.material.opacity = 0.8;
            cloud.scale.setScalar(1.0);
        });
    }
    
    // Select segment from legend click
    selectSegmentFromLegend(segment) {
        // Update filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.segment === segment) {
                btn.classList.add('active');
            }
        });
        
        this.selectedSegment = segment;
        this.updatePointCloudVisibility();
        this.updatePerformanceCard();
        this.updateCarbonNFT();
        this.showSegmentTransition(segment);
    }
    
    // Update live segmentation data
    updateLiveSegmentationData() {
        // Update point counts for each segment with realistic fluctuations
        Object.keys(this.liveSegmentationData).forEach(segment => {
            const data = this.liveSegmentationData[segment];
            const fluctuation = (Math.random() - 0.5) * data.volatility * 0.1;
            data.points += fluctuation;
            
            // Keep within reasonable bounds
            data.points = Math.max(
                data.base * 0.9,
                Math.min(data.base * 1.1, data.points)
            );
        });
    }
    
    // Update the segmentation legend with live data
    updateSegmentationLegend() {
        this.updateLiveSegmentationData();
        
        // Update each legend item with live point counts
        const legendItems = document.querySelectorAll('.legend-item span');
        legendItems.forEach(item => {
            const text = item.textContent;
            if (text.includes('High-Loss Walls')) {
                const points = Math.round(this.liveSegmentationData.walls.points);
                this.animateMetricUpdate(item, `High-Loss Walls (${points.toLocaleString()} points)`);
            } else if (text.includes('Solar-Ready Roof')) {
                const points = Math.round(this.liveSegmentationData.roof.points);
                this.animateMetricUpdate(item, `Solar-Ready Roof (${points.toLocaleString()} points)`);
            } else if (text.includes('Thermal Windows')) {
                const points = Math.round(this.liveSegmentationData.windows.points);
                this.animateMetricUpdate(item, `Thermal Windows (${points.toLocaleString()} points)`);
            } else if (text.includes('Smart HVAC')) {
                const points = Math.round(this.liveSegmentationData.hvac.points);
                this.animateMetricUpdate(item, `Smart HVAC (${points.toLocaleString()} points)`);
            } else if (text.includes('Insulated Floor')) {
                const points = Math.round(this.liveSegmentationData.floor.points);
                this.animateMetricUpdate(item, `Insulated Floor (${points.toLocaleString()} points)`);
            }
        });
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
        
        // Safely update DOM elements if they exist
        const renderStatsElement = document.getElementById('renderStats');
        if (renderStatsElement) {
            renderStatsElement.textContent = `FPS: 60 | Objects: ${totalObjects.toLocaleString()}`;
        }
        
        const selectedPointsElement = document.getElementById('selectedPoints');
        if (selectedPointsElement) {
            selectedPointsElement.textContent = 'Selected: 0 points';
        }
        
        const carbonCreditsElement = document.getElementById('carbonCredits');
        if (carbonCreditsElement) {
            carbonCreditsElement.textContent = `Carbon Credits: ${this.buildingData.carbonCredits.totalVerified} tCO₂e`;
        }
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
        // HUD banner removed - using centralized performance metrics banner instead
        console.log('HUD update:', obj);
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
            section: 'RetrofitForge Analysis',
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

    // Enhanced Investor-grade demo flow
    startInvestorDemo() {
        // Create immersive demo overlay
        this.createDemoOverlay();
        
        const demoSteps = [
            { 
                title: "Advanced STGNNs", 
                subtitle: "Property Performance Forecasting",
                description: "Revolutionary Spatio-Temporal Graph Neural Networks achieving 96.9% accuracy in building performance prediction",
                metrics: ["96.9% Accuracy", "2.3s Processing", "Patent-Pending"],
                duration: 6000,
                color: "#10b981"
            },
            { 
                title: "Investment Optimization", 
                subtitle: "Uncertainty Quantification",
                description: "AI-driven investment strategies with Bayesian uncertainty quantification for risk-optimized returns",
                metrics: ["+34.2% ROI", "42% Risk Reduction", "95% Confidence"],
                duration: 6000,
                color: "#3b82f6"
            },
            { 
                title: "Multi-Modal Data Lake", 
                subtitle: "Real-Time Integration",
                description: "Enterprise-grade data lake processing 15+ data sources with real-time analytics and insights",
                metrics: ["15 Data Sources", "3.2M Records", "Real-Time"],
                duration: 6000,
                color: "#8b5cf6"
            },
            { 
                title: "Carbon Intelligence", 
                subtitle: "ESG Compliance",
                description: "Comprehensive carbon tracking and ESG compliance with blockchain-verified carbon credits",
                metrics: ["93.6% ESG Score", "1.2M CO₂ Tracked", "NFT Credits"],
                duration: 6000,
                color: "#f59e0b"
            },
            { 
                title: "Digital Twin Engine", 
                subtitle: "99.3% Accuracy",
                description: "High-fidelity digital twin technology with real-time simulation and predictive maintenance",
                metrics: ["2,537 Twins", "99.3% Accuracy", "Real-Time"],
                duration: 6000,
                color: "#ef4444"
            },
            { 
                title: "Carbon-Aware Infrastructure", 
                subtitle: "Optimization Engine",
                description: "Intelligent infrastructure optimization with carbon-aware decision making and efficiency gains",
                metrics: ["89% Efficiency", "99.9% Uptime", "Global Scale"],
                duration: 6000,
                color: "#06b6d4"
            }
        ];

        let currentStep = 0;
        
        // Create investor timeline animation
        this.createEnhancedInvestorTimeline();
        
        // Start demo with enhanced presentation
        const runDemoStep = () => {
            if (currentStep < demoSteps.length) {
                const step = demoSteps[currentStep];
                
                // Show enhanced step presentation
                this.showEnhancedDemoStep(step);
                
                // Update timeline progress
                this.updateTimelineProgress(currentStep, demoSteps.length);
                
                currentStep++;
                setTimeout(runDemoStep, step.duration);
            } else {
                // Demo complete - show enhanced summary
                this.showEnhancedDemoSummary();
            }
        };

        runDemoStep();
    }

    // Create immersive demo overlay
    createDemoOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'demoOverlay';
        overlay.innerHTML = `
            <div class="demo-backdrop"></div>
            <div class="demo-content">
                <div class="demo-header">
                    <h1>RetrofitForge™</h1>
                    <p>Patent-Pending 3D Building Intelligence Platform</p>
                </div>
                <div class="demo-step-container" id="demoStepContainer"></div>
                <div class="demo-timeline" id="demoTimeline"></div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Add CSS for demo overlay
        const style = document.createElement('style');
        style.textContent = `
            #demoOverlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: demoOverlayFadeIn 0.8s ease-out;
            }
            
            .demo-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(10, 20, 28, 0.95), rgba(26, 26, 46, 0.95));
                backdrop-filter: blur(20px);
            }
            
            .demo-content {
                position: relative;
                z-index: 2;
                text-align: center;
                color: white;
                max-width: 800px;
                padding: 40px;
            }
            
            .demo-header h1 {
                font-size: 3rem;
                font-weight: 700;
                margin: 0 0 10px 0;
                background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: demoTitleGlow 3s ease-in-out infinite;
            }
            
            .demo-header p {
                font-size: 1.2rem;
                color: rgba(255, 255, 255, 0.8);
                margin: 0 0 40px 0;
            }
            
            .demo-step-container {
                margin: 40px 0;
                min-height: 300px;
            }
            
            @keyframes demoOverlayFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes demoTitleGlow {
                0%, 100% { filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5)); }
                50% { filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.7)); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show enhanced demo step
    showEnhancedDemoStep(step) {
        const container = document.getElementById('demoStepContainer');
        if (!container) return;
        
        container.innerHTML = `
            <div class="demo-step" style="animation: demoStepSlideIn 0.8s ease-out;">
                <div class="step-header">
                    <h2 style="color: ${step.color}; margin: 0 0 10px 0; font-size: 2.5rem; font-weight: 700;">
                        ${step.title}
                    </h2>
                    <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 20px 0; font-size: 1.4rem; font-weight: 500;">
                        ${step.subtitle}
                    </h3>
                </div>
                <div class="step-description">
                    <p style="font-size: 1.1rem; line-height: 1.6; color: rgba(255, 255, 255, 0.8); margin: 0 0 30px 0;">
                        ${step.description}
                    </p>
                </div>
                <div class="step-metrics">
                    ${step.metrics.map(metric => `
                        <div class="metric-badge" style="
                            display: inline-block;
                            background: ${step.color}20;
                            color: ${step.color};
                            padding: 8px 16px;
                            border-radius: 20px;
                            margin: 5px;
                            border: 1px solid ${step.color}40;
                            font-weight: 600;
                            animation: metricPulse 2s ease-in-out infinite;
                        ">
                            ${metric}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add step-specific CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes demoStepSlideIn {
                from { 
                    opacity: 0; 
                    transform: translateY(30px) scale(0.95); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0) scale(1); 
                }
            }
            
            @keyframes metricPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        document.head.appendChild(style);
        
        // Remove style after animation
        setTimeout(() => {
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 1000);
    }

    // Show enhanced demo summary
    showEnhancedDemoSummary() {
        const container = document.getElementById('demoStepContainer');
        if (!container) return;
        
        container.innerHTML = `
            <div class="demo-summary" style="animation: summarySlideIn 1s ease-out;">
                <div class="summary-header">
                    <h2 style="
                        color: #10b981; 
                        margin: 0 0 20px 0; 
                        font-size: 3rem; 
                        font-weight: 700;
                        background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    ">
                        🎯 Demo Complete
                    </h2>
                    <p style="
                        margin: 0 0 30px 0; 
                        font-size: 1.3rem; 
                        color: rgba(255, 255, 255, 0.9);
                        font-weight: 500;
                    ">
                        RetrofitForge™ has demonstrated all advanced STGNN features
                    </p>
                </div>
                
                <div class="summary-features">
                    <div class="feature-grid">
                        <div class="feature-item" style="
                            background: rgba(16, 185, 129, 0.1);
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            padding: 20px;
                            border-radius: 12px;
                            text-align: center;
                            animation: featureFadeIn 0.6s ease-out 0.1s both;
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🧠</div>
                            <h4 style="color: #10b981; margin: 0 0 8px 0;">Advanced STGNNs</h4>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 0.9rem;">96.9% Accuracy</p>
                        </div>
                        
                        <div class="feature-item" style="
                            background: rgba(59, 130, 246, 0.1);
                            border: 1px solid rgba(59, 130, 246, 0.3);
                            padding: 20px;
                            border-radius: 12px;
                            text-align: center;
                            animation: featureFadeIn 0.6s ease-out 0.2s both;
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">📈</div>
                            <h4 style="color: #3b82f6; margin: 0 0 8px 0;">Investment Optimization</h4>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 0.9rem;">+34.2% ROI</p>
                        </div>
                        
                        <div class="feature-item" style="
                            background: rgba(139, 92, 246, 0.1);
                            border: 1px solid rgba(139, 92, 246, 0.3);
                            padding: 20px;
                            border-radius: 12px;
                            text-align: center;
                            animation: featureFadeIn 0.6s ease-out 0.3s both;
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🌊</div>
                            <h4 style="color: #8b5cf6; margin: 0 0 8px 0;">Data Lake</h4>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 0.9rem;">15 Sources</p>
                        </div>
                        
                        <div class="feature-item" style="
                            background: rgba(245, 158, 11, 0.1);
                            border: 1px solid rgba(245, 158, 11, 0.3);
                            padding: 20px;
                            border-radius: 12px;
                            text-align: center;
                            animation: featureFadeIn 0.6s ease-out 0.4s both;
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🌱</div>
                            <h4 style="color: #f59e0b; margin: 0 0 8px 0;">Carbon Intelligence</h4>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 0.9rem;">93.6% ESG</p>
                        </div>
                        
                        <div class="feature-item" style="
                            background: rgba(239, 68, 68, 0.1);
                            border: 1px solid rgba(239, 68, 68, 0.3);
                            padding: 20px;
                            border-radius: 12px;
                            text-align: center;
                            animation: featureFadeIn 0.6s ease-out 0.5s both;
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">👥</div>
                            <h4 style="color: #ef4444; margin: 0 0 8px 0;">Digital Twins</h4>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 0.9rem;">2,537 Models</p>
                        </div>
                        
                        <div class="feature-item" style="
                            background: rgba(6, 182, 212, 0.1);
                            border: 1px solid rgba(6, 182, 212, 0.3);
                            padding: 20px;
                            border-radius: 12px;
                            text-align: center;
                            animation: featureFadeIn 0.6s ease-out 0.6s both;
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">⚡</div>
                            <h4 style="color: #06b6d4; margin: 0 0 8px 0;">Infrastructure</h4>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 0.9rem;">89% Efficiency</p>
                        </div>
                    </div>
                </div>
                
                <div class="summary-stats" style="
                    margin-top: 40px;
                    padding: 30px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    animation: statsSlideIn 0.8s ease-out 0.8s both;
                ">
                    <h3 style="
                        color: #10b981; 
                        margin: 0 0 20px 0; 
                        font-size: 1.5rem;
                        text-align: center;
                    ">
                        Key Performance Metrics
                    </h3>
            <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 20px;
                text-align: center;
                    ">
                        <div>
                            <div style="font-size: 2.5rem; color: #10b981; font-weight: 700;">+34.2%</div>
                            <div style="color: rgba(255, 255, 255, 0.8);">ROI Improvement</div>
                        </div>
                        <div>
                            <div style="font-size: 2.5rem; color: #3b82f6; font-weight: 700;">96.9%</div>
                            <div style="color: rgba(255, 255, 255, 0.8);">Accuracy</div>
                        </div>
                        <div>
                            <div style="font-size: 2.5rem; color: #f59e0b; font-weight: 700;">93.6%</div>
                            <div style="color: rgba(255, 255, 255, 0.8);">ESG Score</div>
                        </div>
                        <div>
                            <div style="font-size: 2.5rem; color: #ef4444; font-weight: 700;">2,537</div>
                            <div style="color: rgba(255, 255, 255, 0.8);">Digital Twins</div>
                        </div>
                    </div>
                </div>
                
                <div class="summary-cta" style="
                    margin-top: 30px;
                    text-align: center;
                    animation: ctaSlideIn 0.8s ease-out 1s both;
                ">
                    <button onclick="document.getElementById('demoOverlay').remove()" style="
                        background: linear-gradient(135deg, #10b981, #3b82f6);
                        color: white;
                        border: none;
                        padding: 16px 32px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
                    ">
                        🚀 Explore Platform
                    </button>
                </div>
            </div>
        `;
        
        // Add summary animations
        const style = document.createElement('style');
        style.textContent = `
            .feature-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            @keyframes summarySlideIn {
                from { 
                    opacity: 0; 
                    transform: translateY(50px) scale(0.95); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0) scale(1); 
                }
            }
            
            @keyframes featureFadeIn {
                from { 
                    opacity: 0; 
                    transform: translateY(20px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
            
            @keyframes statsSlideIn {
                from { 
                    opacity: 0; 
                    transform: translateY(30px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
            
            @keyframes ctaSlideIn {
                from { 
                    opacity: 0; 
                    transform: translateY(20px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
        `;
        document.head.appendChild(style);
    }

    onWindowResize() {
        const container = document.getElementById('pointCloudScene');
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        
        // Reposition performance banner on window resize
        this.positionPerformanceBanner();
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    scrollUp() {
        try {
            console.log('Scroll up functionality removed - sections no longer exist');
        } catch (error) {
            console.error('Error in scrollUp:', error);
        }
    }

    scrollDown() {
        try {
            console.log('Scroll down functionality removed - sections no longer exist');
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
            
            // Disable scroll buttons since sections no longer exist
                scrollUpBtn.disabled = true;
                scrollUpBtn.style.opacity = '0.4';
                scrollUpBtn.style.cursor = 'not-allowed';
            
                scrollDownBtn.disabled = true;
                scrollDownBtn.style.opacity = '0.4';
                scrollDownBtn.style.cursor = 'not-allowed';
        } catch (error) {
            console.error('Error updating scroll button states:', error);
        }
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
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

    // Enhanced Investor Timeline Animation
    createEnhancedInvestorTimeline() {
        const timelineContainer = document.getElementById('demoTimeline');
        if (!timelineContainer) return;
        
        timelineContainer.innerHTML = `
            <div class="timeline-container">
                <div class="timeline-track">
                    <div class="timeline-progress" id="timelineProgress"></div>
                </div>
                <div class="timeline-steps">
                    <div class="timeline-step" data-step="0">
                        <div class="step-dot"></div>
                        <span class="step-label">STGNN</span>
                    </div>
                    <div class="timeline-step" data-step="1">
                        <div class="step-dot"></div>
                        <span class="step-label">ROI</span>
                    </div>
                    <div class="timeline-step" data-step="2">
                        <div class="step-dot"></div>
                        <span class="step-label">Data</span>
                    </div>
                    <div class="timeline-step" data-step="3">
                        <div class="step-dot"></div>
                        <span class="step-label">ESG</span>
                    </div>
                    <div class="timeline-step" data-step="4">
                        <div class="step-dot"></div>
                        <span class="step-label">Twin</span>
                    </div>
                    <div class="timeline-step" data-step="5">
                        <div class="step-dot"></div>
                        <span class="step-label">Infra</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add timeline CSS
        const style = document.createElement('style');
        style.textContent = `
            .timeline-container {
                margin-top: 40px;
                padding: 20px;
            }
            
            .timeline-track {
                position: relative;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                margin-bottom: 20px;
            }
            
            .timeline-progress {
            position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
                border-radius: 2px;
                width: 0%;
                transition: width 0.5s ease;
            }
            
            .timeline-steps {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .timeline-step {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }
            
            .step-dot {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                border: 2px solid rgba(255, 255, 255, 0.5);
                transition: all 0.3s ease;
            }
            
            .timeline-step.active .step-dot {
                background: #10b981;
                border-color: #10b981;
                box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
                transform: scale(1.2);
            }
            
            .timeline-step.completed .step-dot {
                background: #3b82f6;
                border-color: #3b82f6;
                box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
            }
            
            .step-label {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.7);
                font-weight: 600;
                transition: color 0.3s ease;
            }
            
            .timeline-step.active .step-label {
                color: #10b981;
                font-weight: 700;
            }
            
            .timeline-step.completed .step-label {
                color: #3b82f6;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Update timeline progress
    updateTimelineProgress(currentStep, totalSteps) {
        const progress = document.getElementById('timelineProgress');
        const steps = document.querySelectorAll('.timeline-step');
        
        if (progress) {
            const percentage = ((currentStep + 1) / totalSteps) * 100;
            progress.style.width = `${percentage}%`;
        }
        
        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index === currentStep) {
                step.classList.add('active');
            } else if (index < currentStep) {
                step.classList.add('completed');
            }
        });
    }

    // Mapbox-related methods removed - no longer needed
}

// Initialize the platform when the page loads
function initializePlatform() {
    console.log('DOM Content Loaded - Starting RetrofitForge Platform');
    
    // Double-check that the required element exists
    const toggleButton = document.getElementById('digitalTwinToggle');
    if (!toggleButton) {
        console.error('Required element digitalTwinToggle not found in DOM');
        console.log('Available elements:', document.querySelectorAll('*[id]'));
        return;
    }
    
    const platform = new RetrofitForge3DPlatform();
    platform.init(); // Initialize the platform after DOM is ready
    
    // Handle page unload
    window.addEventListener('beforeunload', () => {
        platform.destroy();
    });
}

// Try multiple ways to ensure DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlatform);
} else {
    // DOM is already loaded, but wait a bit to ensure everything is parsed
    setTimeout(initializePlatform, 10);
}