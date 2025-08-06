#!/usr/bin/env python3
'''
RetrofitForge-AI Digital Twin Engine - Demo Restart Script
'''

import requests
import subprocess
import sys
import time
import os

def stop_demo():
    """Stop the demo by calling the shutdown endpoint"""
    try:
        response = requests.post('http://localhost:8001/api/demo/stop', timeout=5)
        if response.status_code == 200:
            print("🛑 Demo stop request sent successfully")
            return True
        else:
            print(f"❌ Failed to stop demo: HTTP {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print("ℹ️  Demo server appears to already be stopped")
        return True
    except Exception as e:
        print(f"❌ Error stopping demo: {e}")
        return False

def start_demo():
    """Start the demo by running the Flask app"""
    try:
        print("🚀 Starting RetrofitForge-AI Digital Twin Engine...")
        
        # Set environment variables
        env = os.environ.copy()
        env['PORT'] = '8001'
        
        # Start the Flask app in background
        process = subprocess.Popen(
            ['python3', 'app.py'],
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        
        # Wait a moment for the server to start
        time.sleep(3)
        
        # Check if the server is running
        try:
            response = requests.get('http://localhost:8001/api/health', timeout=5)
            if response.status_code == 200:
                print("✅ Demo started successfully!")
                print(f"🌐 Server running at: http://localhost:8001")
                return True
            else:
                print(f"❌ Server started but health check failed: HTTP {response.status_code}")
                return False
        except requests.exceptions.ConnectionError:
            print("❌ Server may not have started properly")
            return False
            
    except Exception as e:
        print(f"❌ Error starting demo: {e}")
        return False

def check_status():
    """Check the current demo status"""
    try:
        response = requests.get('http://localhost:8001/api/demo/status', timeout=5)
        if response.status_code == 200:
            status = response.json()
            print(f"📊 Demo Status: {status['status']}")
            return status
        else:
            print(f"❌ Failed to get status: HTTP {response.status_code}")
            return None
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to demo server")
        return None
    except Exception as e:
        print(f"❌ Error checking status: {e}")
        return None

if __name__ == '__main__':
    print("🔄 RetrofitForge-AI Digital Twin Engine - Demo Restart")
    print("=" * 55)
    
    # Step 1: Stop the demo
    print("🛑 Step 1: Stopping current demo...")
    if not stop_demo():
        print("❌ Failed to stop demo. Please check if it's running.")
        sys.exit(1)
    
    # Wait for shutdown to complete
    print("⏳ Waiting for shutdown to complete...")
    time.sleep(3)
    
    # Step 2: Start the demo
    print("\n🚀 Step 2: Starting demo...")
    if not start_demo():
        print("❌ Failed to start demo.")
        sys.exit(1)
    
    # Step 3: Verify status
    print("\n📊 Step 3: Verifying demo status...")
    status = check_status()
    if status and status.get('status') == 'running':
        print("✅ Demo restart completed successfully!")
        print("🎬 Ready for investor demo!")
    else:
        print("❌ Demo restart may have failed. Please check manually.")
        sys.exit(1) 