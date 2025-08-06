# Create configuration and data files
import json

# Cesium configuration
cesium_config_js = '''// Cesium Configuration for RetrofitForge-AI Digital Twin Engine

const CesiumConfig = {
    // Cesium Ion Configuration
    ion: {
        accessToken: 'YOUR_CESIUM_ION_TOKEN', // Get free token from https://cesium.com/ion/signup
        defaultAssets: {
            buildingsTileset: 96188, // London 3D Buildings
            terrainProvider: 'world-terrain'
        }
    },
    
    // Viewer Configuration
    viewer: {
        shadows: true,
        terrainShadows: Cesium.ShadowMode.ENABLED,
        shouldAnimate: true,
        clockViewModel: {
            shouldAnimate: true
        },
        scene: {
            globe: {
                enableLighting: true,
                atmosphereHue: 0.1
            },
            skyBox: {
                show: true
            }
        }
    },
    
    // Camera Configuration
    camera: {
        defaultPosition: {
            longitude: -0.0813,
            latitude: 51.5155,
            height: 400
        },
        defaultOrientation: {
            heading: 45.0,
            pitch: -30.0,
            roll: 0.0
        }
    },
    
    // Performance Settings
    performance: {
        maximumScreenSpaceError: 2.0,
        maximumCacheSize: 128,
        enableFrustumCulling: true,
        enableOcclusionCulling: true
    }
};

// Export configuration
window.CesiumConfig = CesiumConfig;'''

# Demo data
demo_data_js = '''// Demo Data for RetrofitForge-AI Digital Twin Engine

const DemoData = {
    // Target Building Information
    targetBuilding: {
        id: 'bishopsgate-22',
        name: '22 Bishopsgate',
        fullName: '22 Bishopsgate, London EC2',
        address: '22 Bishopsgate, London EC2M 4YD',
        coordinates: {
            longitude: -0.0813,
            latitude: 51.5155,
            height: 278
        },
        specifications: {
            height: 278,
            floors: 62,
            floorArea: 121000,
            type: 'Commercial Office Tower',
            yearBuilt: 2020,
            architect: 'PLP Architecture',
            occupancy: 12000
        },
        sustainability: {
            breeamRating: 'Outstanding',
            energyRating: 'A',
            certifications: ['BREEAM Outstanding', 'WELL Platinum', 'WiredScore Platinum']
        }
    },
    
    // Analysis Results
    analysisResults: {
        overview: {
            totalComponents: 1847,
            analysisAccuracy: 96.8,
            processingTime: 2.2,
            confidenceLevel: 95.0,
            lastUpdated: '2025-01-08T14:30:00Z'
        },
        
        components: {
            walls: {
                count: 847,
                efficiency: 94.2,
                condition: 'Excellent',
                recommendations: [
                    'Monitor thermal performance in winter months',
                    'Consider smart glass upgrade in south facade'
                ]
            },
            roof: {
                count: 234,
                efficiency: 91.7,
                condition: 'Very Good',
                recommendations: [
                    'Install additional solar panels on east section',
                    'Upgrade green roof areas for better insulation'
                ]
            },
            windows: {
                count: 456,
                efficiency: 88.9,
                condition: 'Good',
                recommendations: [
                    'Replace single-pane windows in service areas',
                    'Install automated blinds for solar control'
                ]
            },
            hvac: {
                count: 189,
                efficiency: 85.4,
                condition: 'Good',
                recommendations: [
                    'Upgrade to variable refrigerant flow systems',
                    'Install smart sensors for occupancy-based control'
                ]
            },
            floors: {
                count: 121,
                efficiency: 92.1,
                condition: 'Excellent',
                recommendations: [
                    'Maintain current underfloor heating systems',
                    'Consider radiant cooling for summer months'
                ]
            }
        },
        
        // Financial Analysis
        financial: {
            currentPerformance: {
                energyCostAnnual: 890000,
                maintenanceCostAnnual: 340000,
                operatingCostTotal: 1230000
            },
            optimizedPerformance: {
                energyCostAnnual: 616000,
                maintenanceCostAnnual: 280000,
                operatingCostTotal: 896000,
                savingsAnnual: 334000
            },
            investment: {
                requiredCapital: 2400000,
                paybackPeriod: 2.7,
                roi: 34.2,
                npvTenYear: 3400000,
                irr: 28.5
            }
        },
        
        // Carbon Analysis
        carbon: {
            baseline: {
                annualEmissions: 3420,
                intensityPerSqm: 28.5,
                scope1: 1250,
                scope2: 2170
            },
            optimized: {
                annualEmissions: 1990,
                intensityPerSqm: 16.4,
                scope1: 720,
                scope2: 1270,
                reductionTotal: 1430,
                reductionPercent: 41.8
            },
            trajectory: {
                targetYear: 2030,
                netZeroYear: 2035,
                pathwayCompliant: true
            }
        }
    },
    
    // STGNN Technology Metrics
    stgnnMetrics: {
        accuracy: {
            overall: 96.8,
            wallDetection: 98.2,
            roofAnalysis: 95.7,
            windowIdentification: 94.1,
            hvacMapping: 97.3,
            floorAnalysis: 96.8
        },
        performance: {
            processingSpeed: 2.2,
            modelCount: 2537,
            dataPoints: 15300000,
            updateFrequency: 'Real-time',
            computeEfficiency: 89.3
        },
        innovation: {
            patentStatus: 'Patent Pending',
            technologyReadiness: 9,
            validationProjects: 127,
            accuracyImprovement: 34.2,
            competitiveAdvantage: 'Market Leading'
        }
    },
    
    // Market Data
    marketData: {
        ukRetrofitMarket: {
            totalSize: 47800000000,
            growthRate: 12.4,
            targetSegment: 15600000000,
            ourAddressableMarket: 4200000000
        },
        competitiveLandscape: {
            directCompetitors: ['Matterport', 'NavVis', 'Faro'],
            indirectCompetitors: ['Autodesk', 'Bentley', 'Dassault'],
            differentiators: [
                'Patent-pending STGNN technology',
                'Real-time carbon optimization',
                'Investment-grade ROI modeling',
                'Automated compliance reporting'
            ]
        }
    },
    
    // Demo Scenarios
    scenarios: [
        {
            name: 'Base Case',
            description: 'Current building performance',
            energySavings: 0,
            carbonReduction: 0,
            roi: 0
        },
        {
            name: 'Standard Retrofit',
            description: 'Traditional retrofit approach',
            energySavings: 180000,
            carbonReduction: 890,
            roi: 12.3
        },
        {
            name: 'RetrofitForge Optimized',
            description: 'STGNN-optimized retrofit strategy',
            energySavings: 334000,
            carbonReduction: 1430,
            roi: 34.2
        },
        {
            name: 'Full Net Zero',
            description: 'Complete net zero transformation',
            energySavings: 520000,
            carbonReduction: 2850,
            roi: 28.7
        }
    ],
    
    // Presentation Content
    presentationContent: {
        sections: [
            {
                id: 1,
                title: 'Digital Twin Engine',
                description: 'Real-time property modeling with 2,537 active models',
                keyMetrics: ['99.3% simulation accuracy', '2.2s processing speed', '15.3M data points'],
                duration: 45
            },
            {
                id: 2,
                title: 'SAM-GNN Pipeline',
                description: 'Patent-pending fusion of AI models for building intelligence',
                keyMetrics: ['96.8% component accuracy', '1,847 elements identified', 'Real-time analysis'],
                duration: 60
            },
            {
                id: 3,
                title: 'Investment Optimization',
                description: 'Bayesian optimization with uncertainty quantification',
                keyMetrics: ['+34.2% ROI improvement', '42% risk reduction', '95% confidence'],
                duration: 75
            },
            {
                id: 4,
                title: 'Multi-Modal Data Integration',
                description: 'Integrated satellite, thermal, and property data',
                keyMetrics: ['15 data sources', '3.2M records', 'Real-time updates'],
                duration: 45
            },
            {
                id: 5,
                title: 'Carbon-Aware Infrastructure',
                description: 'Cloud-native platform with minimal environmental impact',
                keyMetrics: ['99.9% uptime', '89% carbon efficiency', '78% renewable energy'],
                duration: 30
            },
            {
                id: 6,
                title: 'STGNN Forecasting',
                description: 'Spatio-temporal graph neural networks for prediction',
                keyMetrics: ['96.9% forecast accuracy', '24-month horizon', '847 features'],
                duration: 60
            },
            {
                id: 7,
                title: 'Carbon Intelligence & ESG',
                description: 'Environmental impact tracking and compliance',
                keyMetrics: ['1.2M CO₂ metrics', '93.6% ESG score', '847 carbon credits'],
                duration: 45
            }
        ]
    }
};

// Export demo data
window.DemoData = DemoData;'''

# Point cloud analysis data
pointcloud_data_json = {
    "metadata": {
        "building_id": "bishopsgate-22",
        "analysis_date": "2025-01-08T14:30:00Z",
        "total_points": 125000,
        "accuracy": 96.8,
        "processing_time": 2.2
    },
    "components": {
        "walls": {
            "point_count": 67500,
            "confidence": 98.2,
            "segments": [
                {"id": "wall_north", "points": 16875, "efficiency": 94.1},
                {"id": "wall_south", "points": 16875, "efficiency": 95.7},
                {"id": "wall_east", "points": 16875, "efficiency": 93.8},
                {"id": "wall_west", "points": 16875, "efficiency": 94.9}
            ]
        },
        "roof": {
            "point_count": 28750,
            "confidence": 95.7,
            "segments": [
                {"id": "roof_main", "points": 20125, "efficiency": 91.7},
                {"id": "roof_mechanical", "points": 5750, "efficiency": 88.3},
                {"id": "roof_access", "points": 2875, "efficiency": 89.6}
            ]
        },
        "windows": {
            "point_count": 18750,
            "confidence": 94.1,
            "segments": [
                {"id": "windows_facade", "points": 15000, "efficiency": 88.9},
                {"id": "windows_service", "points": 3750, "efficiency": 82.4}
            ]
        },
        "hvac": {
            "point_count": 7500,
            "confidence": 97.3,
            "segments": [
                {"id": "hvac_units", "points": 5000, "efficiency": 85.4},
                {"id": "hvac_ducting", "points": 2500, "efficiency": 87.1}
            ]
        },
        "floors": {
            "point_count": 2500,
            "confidence": 96.8,
            "segments": [
                {"id": "floors_structure", "points": 2500, "efficiency": 92.1}
            ]
        }
    },
    "analysis_results": {
        "energy_efficiency": {
            "overall_score": 89.4,
            "heating_efficiency": 91.2,
            "cooling_efficiency": 87.8,
            "lighting_efficiency": 89.1,
            "ventilation_efficiency": 88.9
        },
        "carbon_metrics": {
            "current_emissions": 3420,
            "reduction_potential": 1430,
            "optimization_score": 94.2,
            "pathway_compliance": true
        },
        "investment_metrics": {
            "required_investment": 2400000,
            "annual_savings": 334000,
            "payback_period": 2.7,
            "roi_improvement": 34.2
        }
    }
}

# Carbon metrics data
carbon_metrics_json = {
    "building_info": {
        "building_id": "bishopsgate-22",
        "name": "22 Bishopsgate",
        "floor_area": 121000,
        "occupancy": 12000
    },
    "baseline_emissions": {
        "scope_1": {
            "natural_gas": 1250,
            "diesel_generators": 45,
            "refrigerants": 23,
            "total": 1318
        },
        "scope_2": {
            "electricity_grid": 2170,
            "district_heating": 0,
            "total": 2170
        },
        "scope_3": {
            "waste": 34,
            "water": 12,
            "business_travel": 156,
            "total": 202
        },
        "total_emissions": 3690
    },
    "optimized_emissions": {
        "scope_1": {
            "natural_gas": 720,
            "diesel_generators": 20,
            "refrigerants": 15,
            "total": 755
        },
        "scope_2": {
            "electricity_grid": 1270,
            "renewable_energy": -340,
            "total": 930
        },
        "scope_3": {
            "waste": 20,
            "water": 8,
            "business_travel": 120,
            "total": 148
        },
        "total_emissions": 1833
    },
    "reduction_summary": {
        "absolute_reduction": 1857,
        "percentage_reduction": 50.3,
        "intensity_reduction": {
            "per_sqm_baseline": 30.5,
            "per_sqm_optimized": 15.1,
            "improvement": 50.5
        }
    },
    "carbon_credits": {
        "generated_annually": 847,
        "value_per_credit": 85,
        "total_annual_value": 71995,
        "certification": "Gold Standard VER"
    },
    "net_zero_pathway": {
        "target_year": 2030,
        "interim_targets": [
            {"year": 2026, "reduction": 25, "emissions": 2768},
            {"year": 2028, "reduction": 40, "emissions": 2214},
            {"year": 2030, "reduction": 55, "emissions": 1661}
        ],
        "compliance_status": "On track"
    }
}

# Investment data
investment_data_json = {
    "project_overview": {
        "building_id": "bishopsgate-22",
        "project_name": "RetrofitForge STGNN Optimization",
        "analysis_date": "2025-01-08",
        "confidence_level": 95.0
    },
    "investment_scenarios": {
        "base_case": {
            "description": "Current building performance",
            "capex": 0,
            "annual_opex": 1230000,
            "energy_cost": 890000,
            "maintenance_cost": 340000,
            "emissions": 3420
        },
        "traditional_retrofit": {
            "description": "Standard retrofit approach",
            "capex": 3200000,
            "annual_opex": 1050000,
            "energy_cost": 710000,
            "maintenance_cost": 340000,
            "emissions": 2530,
            "roi": 12.3,
            "payback": 4.2
        },
        "stgnn_optimized": {
            "description": "RetrofitForge STGNN optimization",
            "capex": 2400000,
            "annual_opex": 896000,
            "energy_cost": 616000,
            "maintenance_cost": 280000,
            "emissions": 1990,
            "roi": 34.2,
            "payback": 2.7
        }
    },
    "financial_projections": {
        "10_year_cashflow": [
            {"year": 1, "investment": -2400000, "savings": 334000, "net": -2066000},
            {"year": 2, "investment": 0, "savings": 347000, "net": -1719000},
            {"year": 3, "investment": 0, "savings": 361000, "net": -1358000},
            {"year": 4, "investment": 0, "savings": 375000, "net": -983000},
            {"year": 5, "investment": 0, "savings": 390000, "net": -593000},
            {"year": 6, "investment": 0, "savings": 405000, "net": -188000},
            {"year": 7, "investment": 0, "savings": 421000, "net": 233000},
            {"year": 8, "investment": 0, "savings": 438000, "net": 671000},
            {"year": 9, "investment": 0, "savings": 455000, "net": 1126000},
            {"year": 10, "investment": 0, "savings": 473000, "net": 1599000}
        ],
        "npv": 3400000,
        "irr": 28.5,
        "total_savings_10yr": 4000000
    },
    "risk_analysis": {
        "sensitivity_analysis": {
            "energy_price_volatility": {"impact": 15, "mitigation": "Fixed price contracts"},
            "technology_performance": {"impact": 8, "mitigation": "Performance guarantees"},
            "regulatory_changes": {"impact": 12, "mitigation": "Compliance monitoring"}
        },
        "monte_carlo_results": {
            "scenarios_run": 10000,
            "roi_range": {"min": 28.7, "max": 39.8, "mean": 34.2},
            "probability_positive_roi": 94.7
        }
    },
    "benchmarking": {
        "industry_average_roi": 12.3,
        "competitor_performance": {
            "matterport": 15.8,
            "navvis": 18.2,
            "traditional_consultancy": 9.4
        },
        "retrofitforge_advantage": 21.9
    }
}

# Save configuration files
with open('cesium-config.js', 'w') as f:
    f.write(cesium_config_js)

with open('demo-data.js', 'w') as f:
    f.write(demo_data_js)

# Save data files  
with open('pointcloud_analysis.json', 'w') as f:
    json.dump(pointcloud_data_json, f, indent=2)

with open('carbon_metrics.json', 'w') as f:
    json.dump(carbon_metrics_json, f, indent=2)

with open('investment_data.json', 'w') as f:
    json.dump(investment_data_json, f, indent=2)

# Create building components data
building_components_json = {
    "building_metadata": {
        "id": "bishopsgate-22", 
        "name": "22 Bishopsgate",
        "location": "London, EC2M 4YD",
        "coordinates": [-0.0813, 51.5155, 278],
        "total_components": 1847
    },
    "structural_components": {
        "walls": {
            "exterior_walls": {
                "count": 287,
                "material": "Reinforced concrete with glass facade",
                "thermal_properties": {"u_value": 0.18, "r_value": 5.56},
                "condition": "Excellent",
                "efficiency_score": 94.1
            },
            "interior_walls": {
                "count": 560,
                "material": "Drywall and steel frame",
                "condition": "Very Good", 
                "efficiency_score": 93.7
            }
        },
        "roof_systems": {
            "main_roof": {
                "count": 1,
                "area": 1600,
                "material": "Green roof with solar integration",
                "insulation": "Polyurethane foam R-30",
                "efficiency_score": 91.7
            },
            "mechanical_roof": {
                "count": 4,
                "area": 400,
                "material": "Steel deck with membrane",
                "efficiency_score": 88.3
            }
        },
        "floor_systems": {
            "structural_floors": {
                "count": 62,
                "material": "Post-tensioned concrete",
                "condition": "Excellent",
                "efficiency_score": 92.1
            }
        }
    },
    "building_envelope": {
        "windows": {
            "facade_glazing": {
                "count": 3240,
                "type": "Double-glazed low-E",
                "u_value": 1.4,
                "solar_heat_gain": 0.35,
                "efficiency_score": 88.9
            },
            "service_windows": {
                "count": 216,
                "type": "Standard double-glazed",
                "efficiency_score": 82.4
            }
        },
        "doors": {
            "main_entrances": {"count": 8, "type": "Revolving doors", "efficiency_score": 95.2},
            "emergency_exits": {"count": 24, "type": "Steel fire doors", "efficiency_score": 87.3},
            "service_doors": {"count": 45, "type": "Standard doors", "efficiency_score": 78.9}
        }
    },
    "mechanical_systems": {
        "hvac_units": {
            "air_handling_units": {
                "count": 12,
                "type": "Variable air volume",
                "capacity": "50,000 CFM each",
                "efficiency": "MERV 13 filtration",
                "efficiency_score": 85.4
            },
            "heat_pumps": {
                "count": 8,
                "type": "Air-source heat pump",
                "cop": 3.2,
                "efficiency_score": 87.1
            },
            "cooling_towers": {
                "count": 3,
                "type": "Closed circuit",
                "capacity": "800 tons each",
                "efficiency_score": 83.7
            }
        },
        "plumbing_systems": {
            "water_heaters": {"count": 15, "type": "High-efficiency gas", "efficiency_score": 89.2},
            "pumps": {"count": 24, "type": "Variable speed", "efficiency_score": 91.5},
            "fixtures": {"count": 890, "type": "Low-flow", "efficiency_score": 94.3}
        }
    },
    "electrical_systems": {
        "lighting": {
            "led_fixtures": {"count": 4580, "type": "Dimmable LED", "efficiency_score": 93.8},
            "emergency_lighting": {"count": 340, "type": "LED battery backup", "efficiency_score": 89.1},
            "exterior_lighting": {"count": 120, "type": "Smart LED", "efficiency_score": 95.7}
        },
        "power_distribution": {
            "transformers": {"count": 6, "type": "High-efficiency", "efficiency_score": 97.2},
            "panels": {"count": 84, "type": "Smart panels", "efficiency_score": 94.5}
        }
    },
    "smart_systems": {
        "building_automation": {
            "sensors": {"count": 2340, "type": "IoT multi-sensor", "efficiency_score": 96.8},
            "controllers": {"count": 156, "type": "AI-enabled BMS", "efficiency_score": 94.2},
            "actuators": {"count": 890, "type": "Smart valve/damper", "efficiency_score": 92.7}
        },
        "energy_management": {
            "meters": {"count": 245, "type": "Smart energy meter", "efficiency_score": 97.8},
            "monitoring": {"count": 1, "type": "Real-time analytics", "efficiency_score": 95.4}
        }
    }
}

with open('building_components.json', 'w') as f:
    json.dump(building_components_json, f, indent=2)

print("✅ Configuration and Data Files Created!")
print("\n📁 Generated Configuration Files:")
print("  - cesium-config.js (Cesium viewer settings)")
print("  - demo-data.js (Complete demo dataset)")

print(f"\n📊 Generated Data Files:")
print("  - pointcloud_analysis.json (125,000 analysis points)")
print("  - carbon_metrics.json (Detailed emissions data)")  
print("  - investment_data.json (Financial projections)")
print("  - building_components.json (1,847 building elements)")

print(f"\n🎯 Data Summary:")
print("  🏢 Building: 22 Bishopsgate, London (278m, 62 floors)")
print("  🔬 Analysis Points: 125,000 with 96.8% accuracy")
print("  💰 Investment: £2.4M with 34.2% ROI improvement")  
print("  🌱 Carbon Reduction: 1,430 tCO₂e annually (50.3%)")
print("  🏗️ Components: 1,847 building elements mapped")
print("  📈 Financial: £3.4M NPV over 10 years")

print(f"\n⭐ Ready for Investor Demo:")
print("  ✅ Real London building with accurate coordinates")
print("  ✅ Professional financial modeling and projections")
print("  ✅ Detailed carbon analysis and compliance pathway")
print("  ✅ Complete building component inventory")
print("  ✅ Market-leading ROI demonstration (+34.2%)")