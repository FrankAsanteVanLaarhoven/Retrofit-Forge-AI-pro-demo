// Cesium Configuration for RetrofitForge AI Digital Twin
// Version: 1.0.0

const CESIUM_CONFIG = {
    // Cesium Ion Token
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNDU2ZTNmMy0zMzczLTQwMTUtYTU0Ni1iZGE4OTVkYmFiNjciLCJpZCI6MzI5MTQ5LCJpYXQiOjE3NTQ0NDA2NDR9.TM0xevdP4PDCSVDtxPMi-lGrCcA5XyVwIT_OChcvp3Y',
    
    // Building Configuration
    building: {
        name: '22 Bishopsgate, London EC2',
        longitude: -0.0813,
        latitude: 51.5155,
        height: 278, // meters
        floors: 62,
        floorArea: 121000, // m²
        type: 'Commercial Office Tower'
    },
    
    // Camera Settings
    camera: {
        initialPosition: {
            longitude: -0.0813,
            latitude: 51.5155,
            height: 500
        },
        defaultDistance: 800,
        minDistance: 100,
        maxDistance: 2000,
        enableCollisionDetection: true,
        enableZoom: true,
        enableRotate: true,
        enablePan: true
    },
    
    // Scene Settings
    scene: {
        backgroundColor: '#0a141c',
        showSkyAtmosphere: true,
        showGroundAtmosphere: true,
        enableLighting: true,
        enableFog: true,
        fogDensity: 0.0001,
        enablePostProcessing: true,
        enableBloom: true,
        bloomIntensity: 0.5
    },
    
    // Terrain Settings
    terrain: {
        provider: 'CesiumWorldTerrain',
        enableLighting: true,
        showGroundAtmosphere: true
    },
    
    // Imagery Settings
    imagery: {
        provider: 'CesiumWorldImagery',
        enableLighting: true,
        showGroundAtmosphere: true
    },
    
    // Building Tileset Configuration
    buildingTileset: {
        url: 'https://tiles.cesium.com/1/',
        maximumScreenSpaceError: 16,
        maximumMemoryUsage: 512,
        cullWithChildrenBounds: false,
        dynamicScreenSpaceError: true,
        dynamicScreenSpaceErrorDensity: 0.00278,
        dynamicScreenSpaceErrorFactor: 4.0,
        dynamicScreenSpaceErrorHeightFalloff: 0.25,
        preloadWhenHidden: true,
        preferLeaves: true,
        progressiveResolutionHeightFraction: 0.5
    },
    
    // Point Cloud Configuration
    pointCloud: {
        maximumScreenSpaceError: 8,
        maximumMemoryUsage: 256,
        cullWithChildrenBounds: false,
        dynamicScreenSpaceError: true,
        dynamicScreenSpaceErrorDensity: 0.00278,
        dynamicScreenSpaceErrorFactor: 4.0,
        dynamicScreenSpaceErrorHeightFalloff: 0.25,
        preloadWhenHidden: true,
        preferLeaves: true,
        progressiveResolutionHeightFraction: 0.5
    },
    
    // Analysis Visualization
    analysis: {
        colors: {
            highLossWalls: '#3b82f6',
            solarReadyRoof: '#10b981',
            thermalWindows: '#f59e0b',
            smartHVAC: '#8b5cf6',
            insulatedFloor: '#06b6d4'
        },
        opacity: 0.8,
        pointSize: 2.0,
        enableClustering: true,
        clusterRadius: 50
    },
    
    // Animation Settings
    animation: {
        duration: 2000,
        easing: 'easeInOutCubic',
        enableSmoothTransitions: true,
        enableCameraAnimation: true,
        enableComponentHighlighting: true
    },
    
    // Performance Settings
    performance: {
        targetFrameRate: 60,
        enableFrustumCulling: true,
        enableOcclusionCulling: true,
        enableLevelOfDetail: true,
        maximumScreenSpaceError: 16,
        maximumMemoryUsage: 512
    },
    
    // UI Settings
    ui: {
        enableInfoBox: true,
        enableSelectionIndicator: true,
        enableNavigationHelpButton: false,
        enableHomeButton: true,
        enableSceneModePicker: false,
        enableBaseLayerPicker: false,
        enableGeocoder: false,
        enableAnimation: false,
        enableTimeline: false,
        enableFullscreenButton: true
    },
    
    // Data Sources
    dataSources: {
        pointCloudAnalysis: './pointcloud_analysis.json',
        carbonMetrics: './carbon_metrics.json',
        investmentData: './investment_data.json',
        buildingComponents: './building_components.json'
    }
};

// Initialize Cesium with configuration
function initializeCesium() {
    // Set access token
    Cesium.Ion.defaultAccessToken = CESIUM_CONFIG.accessToken;
    
    // Create viewer with configuration
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain({
            requestWaterMask: true,
            requestVertexNormals: true
        }),
        imageryProvider: new Cesium.CesiumWorldImagery(),
        baseLayerPicker: CESIUM_CONFIG.ui.enableBaseLayerPicker,
        geocoder: CESIUM_CONFIG.ui.enableGeocoder,
        homeButton: CESIUM_CONFIG.ui.enableHomeButton,
        sceneModePicker: CESIUM_CONFIG.ui.enableSceneModePicker,
        navigationHelpButton: CESIUM_CONFIG.ui.enableNavigationHelpButton,
        animation: CESIUM_CONFIG.ui.enableAnimation,
        timeline: CESIUM_CONFIG.ui.enableTimeline,
        fullscreenButton: CESIUM_CONFIG.ui.enableFullscreenButton,
        infoBox: CESIUM_CONFIG.ui.enableInfoBox,
        selectionIndicator: CESIUM_CONFIG.ui.enableSelectionIndicator,
        scene3DOnly: true,
        shouldAnimate: true
    });
    
    // Configure scene
    const scene = viewer.scene;
    scene.backgroundColor = Cesium.Color.fromCssColorString(CESIUM_CONFIG.scene.backgroundColor);
    scene.showSkyAtmosphere = CESIUM_CONFIG.scene.showSkyAtmosphere;
    scene.showGroundAtmosphere = CESIUM_CONFIG.scene.showGroundAtmosphere;
    scene.enableLighting = CESIUM_CONFIG.scene.enableLighting;
    scene.fog.enabled = CESIUM_CONFIG.scene.enableFog;
    scene.fog.density = CESIUM_CONFIG.scene.fogDensity;
    scene.postProcessStages.enableLighting = CESIUM_CONFIG.scene.enablePostProcessing;
    scene.bloom.enabled = CESIUM_CONFIG.scene.enableBloom;
    scene.bloom.intensity = CESIUM_CONFIG.scene.bloomIntensity;
    
    // Configure camera
    const camera = viewer.camera;
    camera.enableCollisionDetection = CESIUM_CONFIG.camera.enableCollisionDetection;
    camera.minimumZoomDistance = CESIUM_CONFIG.camera.minDistance;
    camera.maximumZoomDistance = CESIUM_CONFIG.camera.maxDistance;
    
    // Set initial camera position
    camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(
            CESIUM_CONFIG.camera.initialPosition.longitude,
            CESIUM_CONFIG.camera.initialPosition.latitude,
            CESIUM_CONFIG.camera.initialPosition.height
        ),
        orientation: {
            heading: Cesium.Math.toRadians(0),
            pitch: Cesium.Math.toRadians(-45),
            roll: 0.0
        }
    });
    
    return viewer;
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CESIUM_CONFIG, initializeCesium };
} 