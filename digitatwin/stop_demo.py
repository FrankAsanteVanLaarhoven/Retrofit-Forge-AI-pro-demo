#!/usr/bin/env python3
'''
RetrofitForge-AI Digital Twin Engine - Demo Stop Script
'''

import requests
import sys
import time

def stop_demo():
    """Stop the demo by calling the shutdown endpoint"""
    try:
        # Try to call the stop endpoint
        response = requests.post('http://localhost:8001/api/demo/stop', timeout=5)
        if response.status_code == 200:
            print("🛑 Demo stop request sent successfully")
            print("📋 Response:", response.json())
            return True
        else:
            print(f"❌ Failed to stop demo: HTTP {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to demo server. It may already be stopped.")
        return False
    except requests.exceptions.Timeout:
        print("⏰ Request timed out. Server may be busy.")
        return False
    except Exception as e:
        print(f"❌ Error stopping demo: {e}")
        return False

def check_status():
    """Check the current demo status"""
    try:
        response = requests.get('http://localhost:8001/api/demo/status', timeout=5)
        if response.status_code == 200:
            status = response.json()
            print(f"📊 Demo Status: {status['status']}")
            print(f"🕒 Timestamp: {status['timestamp']}")
            return status
        else:
            print(f"❌ Failed to get status: HTTP {response.status_code}")
            return None
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to demo server. It may be stopped.")
        return None
    except Exception as e:
        print(f"❌ Error checking status: {e}")
        return None

if __name__ == '__main__':
    print("🛑 RetrofitForge-AI Digital Twin Engine - Demo Stop")
    print("=" * 50)
    
    # Check current status
    print("📊 Checking current demo status...")
    status = check_status()
    
    if status and status.get('status') == 'running':
        print("\n🛑 Stopping demo...")
        if stop_demo():
            print("\n⏳ Waiting for graceful shutdown...")
            time.sleep(3)
            
            # Check final status
            print("📊 Checking final status...")
            final_status = check_status()
            if final_status:
                print("✅ Demo stopped successfully")
            else:
                print("✅ Demo server appears to be stopped")
        else:
            print("❌ Failed to stop demo gracefully")
            sys.exit(1)
    else:
        print("ℹ️  Demo appears to already be stopped or not running") 