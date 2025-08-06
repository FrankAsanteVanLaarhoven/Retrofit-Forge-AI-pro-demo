# RetrofitForge-AI Digital Twin Engine - Demo Control

## 🎬 Demo Control Commands

The RetrofitForge-AI Digital Twin Engine now includes comprehensive demo control functionality to allow you to start, stop, and restart the demo as needed.

### 🚀 Starting the Demo

```bash
# Method 1: Using the start script
python3 start.py

# Method 2: Direct Flask app start
source venv/bin/activate
PORT=8001 python3 app.py
```

### 🛑 Stopping the Demo

#### Method 1: Using the Stop Script (Recommended)
```bash
python3 stop_demo.py
```

#### Method 2: Using the API Endpoint
```bash
curl -X POST http://localhost:8001/api/demo/stop
```

#### Method 3: Using Keyboard Interrupt
Press `Ctrl+C` in the terminal where the Flask app is running.

### 🔄 Restarting the Demo

```bash
python3 restart_demo.py
```

### 📊 Checking Demo Status

```bash
# Using the API
curl http://localhost:8001/api/demo/status

# Using the stop script (includes status check)
python3 stop_demo.py
```

## 🌐 API Endpoints

### Demo Control Endpoints

- **GET** `/api/demo/status` - Check current demo status
- **POST** `/api/demo/start` - Start a new demo session
- **POST** `/api/demo/stop` - Stop the demo and initiate graceful shutdown

### Health & Monitoring

- **GET** `/api/health` - Health check endpoint
- **GET** `/api/metrics/live` - Real-time metrics

## 🎯 Demo Features

The demo includes:
- 🌍 **Cesium 3D Visualization** - Interactive 3D building model
- 🔬 **Patent-Pending STGNN Technology** - Advanced AI analysis
- 📊 **Real-time Analytics** - Live building performance metrics
- 💰 **Investment Analysis** - ROI projections and financial modeling
- 🌱 **Carbon Metrics** - ESG compliance and sustainability data
- 🏗️ **Building Components** - 1,847 analyzed components

## 🔧 Technical Details

### Graceful Shutdown
The demo implements graceful shutdown functionality:
- Handles SIGINT and SIGTERM signals
- Completes current requests before shutting down
- Provides status feedback during shutdown process
- 5-second timeout for graceful completion

### Environment Setup
- Virtual environment: `venv/`
- Port: 8001 (configurable via PORT environment variable)
- Dependencies: Flask, Flask-CORS, requests

### Logging
All demo control actions are logged with timestamps and status information.

## 🚨 Troubleshooting

### Port Already in Use
If port 8001 is occupied:
```bash
# Check what's using the port
lsof -i :8001

# Kill the process or use a different port
PORT=8002 python3 app.py
```

### Virtual Environment Issues
```bash
# Recreate virtual environment
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Demo Won't Stop
If the demo doesn't respond to stop commands:
```bash
# Force kill the process
pkill -f "python3 app.py"
```

## 📞 Support

For technical support or questions about the demo control functionality, please refer to the main README.md file or contact the development team. 