#!/usr/bin/env python3
'''
RetrofitForge-AI Digital Twin Engine - Flask Application
Complete backend API for investor demonstration platform
'''

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json
import os
import logging
from datetime import datetime
import uuid
import random
import signal
import threading

# Initialize Flask application
app = Flask(__name__)
CORS(app)

# Configuration
app.config['SECRET_KEY'] = 'retrofitforge-ai-digital-twin-2025'

# Global variable to track shutdown state
shutdown_event = threading.Event()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Demo building configuration
DEMO_BUILDING = {
    'id': 'bishopsgate-22',
    'name': '22 Bishopsgate',
    'location': 'London EC2M 4YD',
    'coordinates': {'lon': -0.0813, 'lat': 51.5155, 'height': 278},
    'floors': 62,
    'area': 121000
}

@app.route('/')
def index():
    '''Main application route'''
    return render_template('digital_twin_engine.html')

@app.route('/api/health')
def health_check():
    '''Health check endpoint'''
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0',
        'services': {
            'database': 'connected',
            'cesium_integration': 'active',
            'stgnn_engine': 'running'
        }
    })

@app.route('/api/building/<building_id>/info')
def get_building_info(building_id):
    '''Get building information'''
    if building_id != DEMO_BUILDING['id']:
        return jsonify({'error': 'Building not found'}), 404

    building_info = {
        'id': building_id,
        'name': DEMO_BUILDING['name'],
        'location': DEMO_BUILDING['location'],
        'coordinates': DEMO_BUILDING['coordinates'],
        'specifications': {
            'height': 278,
            'floors': DEMO_BUILDING['floors'],
            'floor_area': DEMO_BUILDING['area'],
            'type': 'Commercial Office Tower',
            'year_built': 2020,
            'occupancy': 12000
        },
        'certifications': [
            'BREEAM Outstanding',
            'WELL Platinum',
            'WiredScore Platinum'
        ],
        'last_updated': datetime.now().isoformat()
    }

    return jsonify(building_info)

@app.route('/api/building/<building_id>/analysis')
def get_building_analysis(building_id):
    '''Get real-time building analysis'''
    if building_id != DEMO_BUILDING['id']:
        return jsonify({'error': 'Building not found'}), 404

    # Simulate real-time variations
    base_accuracy = 96.8
    current_accuracy = base_accuracy + random.uniform(-0.3, 0.3)

    analysis_data = {
        'building_id': building_id,
        'timestamp': datetime.now().isoformat(),
        'overview': {
            'total_components': 1847,
            'analysis_accuracy': round(current_accuracy, 1),
            'processing_time': round(2.2 + random.uniform(-0.2, 0.2), 1),
            'confidence_level': 95.0,
            'active_models': 2537
        },
        'components': {
            'walls': {'count': 847, 'efficiency': 94.2, 'condition': 'Excellent'},
            'roof': {'count': 234, 'efficiency': 91.7, 'condition': 'Very Good'},
            'windows': {'count': 456, 'efficiency': 88.9, 'condition': 'Good'},
            'hvac': {'count': 189, 'efficiency': 85.4, 'condition': 'Good'},
            'floors': {'count': 121, 'efficiency': 92.1, 'condition': 'Excellent'}
        },
        'stgnn_metrics': {
            'patent_status': 'Patent Pending',
            'technology_readiness': 9,
            'validation_projects': 127,
            'market_advantage': 'Leading'
        }
    }

    return jsonify(analysis_data)

@app.route('/api/building/<building_id>/carbon-metrics')
def get_carbon_metrics(building_id):
    '''Get carbon analysis and reduction metrics'''
    if building_id != DEMO_BUILDING['id']:
        return jsonify({'error': 'Building not found'}), 404

    carbon_data = {
        'building_id': building_id,
        'timestamp': datetime.now().isoformat(),
        'baseline_emissions': {
            'total': 3420,
            'scope_1': 1250,
            'scope_2': 2170,
            'intensity_per_sqm': 28.5
        },
        'optimized_emissions': {
            'total': 1990,
            'scope_1': 720,
            'scope_2': 1270,
            'intensity_per_sqm': 16.4
        },
        'reduction_summary': {
            'absolute_reduction': 1430,
            'percentage_reduction': 41.8,
            'annual_savings': 334000,
            'carbon_credits_generated': 847
        },
        'net_zero_pathway': {
            'target_year': 2030,
            'current_progress': 42,
            'on_track': True
        },
        'esg_metrics': {
            'overall_score': 93.6,
            'environmental': 94.2,
            'social': 91.8,
            'governance': 95.1
        }
    }

    return jsonify(carbon_data)

@app.route('/api/building/<building_id>/investment-analysis')
def get_investment_analysis(building_id):
    '''Get investment optimization and ROI analysis'''
    if building_id != DEMO_BUILDING['id']:
        return jsonify({'error': 'Building not found'}), 404

    investment_data = {
        'building_id': building_id,
        'analysis_date': datetime.now().isoformat(),
        'investment_scenarios': {
            'base_case': {
                'description': 'Current building performance',
                'annual_opex': 1230000,
                'energy_cost': 890000,
                'emissions': 3420,
                'roi': 0
            },
            'traditional_retrofit': {
                'description': 'Standard retrofit approach',
                'capex_required': 3200000,
                'annual_savings': 180000,
                'payback_period': 4.2,
                'roi': 12.3
            },
            'stgnn_optimized': {
                'description': 'RetrofitForge STGNN optimization',
                'capex_required': 2400000,
                'annual_savings': 334000,
                'payback_period': 2.7,
                'roi': 34.2,
                'competitive_advantage': 21.9
            }
        },
        'financial_projections': {
            'npv_10_year': 3400000,
            'irr': 28.5,
            'total_savings_10yr': 4000000,
            'carbon_credit_value': 71995
        },
        'risk_analysis': {
            'probability_positive_roi': 94.7,
            'sensitivity_factors': {
                'energy_price_volatility': 15,
                'technology_performance': 8,
                'regulatory_changes': 12
            }
        }
    }

    return jsonify(investment_data)

@app.route('/api/pointcloud/<building_id>')
def get_pointcloud_data(building_id):
    '''Get point cloud analysis data'''
    if building_id != DEMO_BUILDING['id']:
        return jsonify({'error': 'Building not found'}), 404

    # Mock point cloud data
    pointcloud_data = {
        'metadata': {
            'building_id': building_id,
            'analysis_date': datetime.now().isoformat(),
            'total_points': 125000,
            'accuracy': 96.8,
            'processing_time': 2.2
        },
        'components': {
            'walls': {'point_count': 67500, 'confidence': 98.2},
            'roof': {'point_count': 28750, 'confidence': 95.7},
            'windows': {'point_count': 18750, 'confidence': 94.1},
            'hvac': {'point_count': 7500, 'confidence': 97.3},
            'floors': {'point_count': 2500, 'confidence': 96.8}
        }
    }

    return jsonify(pointcloud_data)

@app.route('/api/metrics/live')
def get_live_metrics():
    '''Get real-time metrics for dashboard'''
    live_data = {
        'timestamp': datetime.now().isoformat(),
        'active_models': 2537 + random.randint(-5, 15),
        'accuracy': round(96.8 + random.uniform(-0.3, 0.3), 1),
        'processing_speed': round(2.2 + random.uniform(-0.2, 0.2), 1),
        'components_analyzed': 1847,
        'energy_savings': 334000 + random.randint(-5000, 10000),
        'carbon_reduction': 1430 + random.randint(-20, 50),
        'roi_improvement': round(34.2 + random.uniform(-0.5, 1.2), 1),
        'system_status': 'optimal',
        'analysis_progress': min(100, 92 + random.randint(0, 8))
    }

    return jsonify(live_data)

@app.route('/api/demo/start', methods=['POST'])
def start_demo_session():
    '''Start a new investor demo session'''
    session_id = str(uuid.uuid4())

    return jsonify({
        'session_id': session_id,
        'status': 'started',
        'timestamp': datetime.now().isoformat(),
        'demo_duration': '8-12 minutes',
        'sections': 7
    })

@app.route('/api/demo/stop', methods=['POST'])
def stop_demo_session():
    '''Stop the current demo session and initiate graceful shutdown'''
    logger.info("🛑 Demo stop requested - initiating graceful shutdown")
    
    # Set shutdown event
    shutdown_event.set()
    
    return jsonify({
        'status': 'stopping',
        'message': 'Demo session stopped. Server will shutdown gracefully.',
        'timestamp': datetime.now().isoformat(),
        'shutdown_timeout': '5 seconds'
    })

@app.route('/api/demo/status')
def get_demo_status():
    '''Get current demo status'''
    return jsonify({
        'status': 'running' if not shutdown_event.is_set() else 'stopping',
        'timestamp': datetime.now().isoformat(),
        'uptime': 'active',
        'shutdown_requested': shutdown_event.is_set()
    })

@app.route('/api/export/analysis/<building_id>')
def export_analysis_report(building_id):
    '''Export comprehensive analysis report'''
    if building_id != DEMO_BUILDING['id']:
        return jsonify({'error': 'Building not found'}), 404

    report = {
        'report_metadata': {
            'building_id': building_id,
            'building_name': DEMO_BUILDING['name'],
            'generated_date': datetime.now().isoformat(),
            'report_type': 'Comprehensive Digital Twin Analysis',
            'version': '1.0.0'
        },
        'executive_summary': {
            'total_investment_required': 2400000,
            'annual_energy_savings': 334000,
            'carbon_reduction_annual': 1430,
            'roi_improvement': 34.2,
            'payback_period': 2.7,
            'confidence_level': 95.0
        },
        'recommendations': [
            'Prioritize HVAC system optimization for maximum energy savings',
            'Implement smart window glazing for improved thermal performance',
            'Consider rooftop solar installation for carbon offset',
            'Upgrade building envelope insulation in identified areas'
        ]
    }

    return jsonify(report)

@app.errorhandler(404)
def not_found(error):
    '''Handle 404 errors'''
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    '''Handle 500 errors'''
    return jsonify({'error': 'Internal server error'}), 500

def signal_handler(signum, frame):
    '''Handle shutdown signals gracefully'''
    logger.info(f"🛑 Received signal {signum} - initiating graceful shutdown")
    shutdown_event.set()

if __name__ == '__main__':
    logger.info("🚀 Starting RetrofitForge-AI Digital Twin Engine")

    # Register signal handlers for graceful shutdown
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    # Create necessary directories
    os.makedirs('templates', exist_ok=True)
    os.makedirs('static', exist_ok=True)

    # Run development server with shutdown monitoring
    def run_with_shutdown():
        try:
            app.run(
                host='0.0.0.0',
                port=int(os.environ.get('PORT', 5000)),
                debug=True,
                use_reloader=False  # Disable reloader to handle shutdown properly
            )
        except KeyboardInterrupt:
            logger.info("🛑 Keyboard interrupt received - shutting down gracefully")
        finally:
            logger.info("✅ RetrofitForge-AI Digital Twin Engine shutdown complete")

    # Start server in a separate thread to monitor shutdown
    server_thread = threading.Thread(target=run_with_shutdown)
    server_thread.daemon = True
    server_thread.start()

    # Monitor shutdown event
    try:
        while not shutdown_event.is_set():
            shutdown_event.wait(1)  # Check every second
    except KeyboardInterrupt:
        logger.info("🛑 Shutdown requested via keyboard interrupt")
    finally:
        logger.info("🔄 Initiating graceful shutdown...")
        # Give the server a moment to finish current requests
        import time
        time.sleep(2)
        logger.info("✅ Shutdown complete")
