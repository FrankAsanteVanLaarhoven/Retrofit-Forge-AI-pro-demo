// Voice Switcher Utility for RetrofitForge-AI
// Use this to easily change voices without editing config files

class VoiceSwitcher {
    constructor() {
        this.availableVoices = {
            'ADAM': { name: 'Professional British Male', accent: 'British', gender: 'Male' },
            'JOSH': { name: 'American Professional Male', accent: 'American', gender: 'Male' },
            'RACHEL': { name: 'British Female Professional', accent: 'British', gender: 'Female' },
            'DANIEL': { name: 'British Male Alternative', accent: 'British', gender: 'Male' },
            'EMILY': { name: 'American Female Professional', accent: 'American', gender: 'Female' },
            'CHRIS': { name: 'American Male Friendly', accent: 'American', gender: 'Male' },
            'SARAH': { name: 'British Female Warm', accent: 'British', gender: 'Female' },
            'MIKE': { name: 'American Male Authoritative', accent: 'American', gender: 'Male' }
        };
        
        this.currentVoice = 'ADAM';
        this.elevenLabsVoices = [];
        this.isLoadingVoices = false;
        this.createVoiceSwitcher();
        this.loadElevenLabsVoices();
    }

    async loadElevenLabsVoices() {
        if (!ElevenLabsConfig || !ElevenLabsConfig.apiKey) {
            console.log('🎙️ No ElevenLabs API key found, using default voices');
            return;
        }

        this.isLoadingVoices = true;
        this.updateLoadingState();

        try {
            const response = await fetch('https://api.elevenlabs.io/v1/voices', {
                headers: {
                    'xi-api-key': ElevenLabsConfig.apiKey
                }
            });

            if (response.ok) {
                const data = await response.json();
                this.elevenLabsVoices = data.voices || [];
                console.log(`🎙️ Loaded ${this.elevenLabsVoices.length} voices from ElevenLabs`);
                this.updateVoiceDisplay();
                this.updateElevenLabsVoices();
            } else {
                console.warn('Failed to load ElevenLabs voices:', response.status);
            }
        } catch (error) {
            console.warn('Error loading ElevenLabs voices:', error);
        } finally {
            this.isLoadingVoices = false;
            this.updateLoadingState();
        }
    }

    updateLoadingState() {
        const loadingIndicator = document.querySelector('.voice-loading');
        if (loadingIndicator) {
            loadingIndicator.style.display = this.isLoadingVoices ? 'block' : 'none';
        }
    }

    createVoiceSwitcher() {
        // Create voice switcher panel
        const switcherPanel = document.createElement('div');
        switcherPanel.className = 'voice-switcher-panel';
        switcherPanel.innerHTML = `
            <div class="switcher-header">
                <h3>🎙️ Voice Switcher</h3>
                <span class="current-voice">Current: ${this.availableVoices[this.currentVoice].name}</span>
                <div class="voice-loading" style="display: none;">
                    <span class="loading-spinner">⏳</span> Loading voices...
                </div>
            </div>
            <div class="voice-tabs">
                <button class="tab-btn active" data-tab="default">Default Voices</button>
                <button class="tab-btn" data-tab="elevenlabs">ElevenLabs Voices</button>
            </div>
            <div class="voice-options" id="default-voices">
                ${Object.entries(this.availableVoices).map(([id, voice]) => `
                    <button class="voice-option ${id === this.currentVoice ? 'active' : ''}" 
                            data-voice="${id}" onclick="voiceSwitcher.switchVoice('${id}')">
                        <span class="voice-name">${voice.name}</span>
                        <span class="voice-accent">${voice.accent} ${voice.gender}</span>
                    </button>
                `).join('')}
            </div>
            <div class="voice-options" id="elevenlabs-voices" style="display: none;">
                <div class="elevenlabs-loading">
                    <span class="loading-spinner">⏳</span> Loading ElevenLabs voices...
                </div>
            </div>
            <div class="voice-controls">
                <button class="control-btn" onclick="voiceSwitcher.testVoice()">🎵 Test Voice</button>
                <button class="control-btn" onclick="voiceSwitcher.toggleSwitcher()">✕ Close</button>
            </div>
        `;

        document.body.appendChild(switcherPanel);

        // Add toggle button to main interface
        this.addToggleButton();
        
        // Setup tab switching
        this.setupTabSwitching();
    }

    setupTabSwitching() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const voiceOptions = document.querySelectorAll('.voice-options');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                
                // Update active tab
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show corresponding content
                voiceOptions.forEach(option => {
                    option.style.display = 'none';
                });
                
                const targetOption = document.getElementById(`${tab}-voices`);
                if (targetOption) {
                    targetOption.style.display = 'block';
                }
            });
        });
    }

    addToggleButton() {
        console.log('🎙️ Adding voice toggle button...');
        
        // Connect to the existing voice button in HTML
        const voiceBtn = document.getElementById('voiceSwitcherBtn');
        console.log('🎙️ Looking for voice button with ID "voiceSwitcherBtn":', voiceBtn);
        
        if (voiceBtn) {
            voiceBtn.onclick = () => this.toggleSwitcher();
            console.log('🎙️ Voice button connected to voice switcher');
        } else {
            console.log('🎙️ Voice button not found, creating fallback button...');
            // Fallback: create a button if not found
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'action-btn voice-btn';
            toggleBtn.id = 'voiceSwitcherBtn';
            toggleBtn.innerHTML = '🎙️ Voice';
            toggleBtn.onclick = () => this.toggleSwitcher();
            
            // Add to action controls area
            const controlsArea = document.querySelector('.action-controls');
            console.log('🎙️ Looking for action controls area:', controlsArea);
            
            if (controlsArea) {
                controlsArea.appendChild(toggleBtn);
                console.log('🎙️ Voice button added to action controls');
            } else {
                console.log('🎙️ Action controls not found, adding to top-right corner');
                // Fallback: add to top-right corner
                toggleBtn.style.position = 'fixed';
                toggleBtn.style.top = '20px';
                toggleBtn.style.right = '20px';
                toggleBtn.style.zIndex = '1000';
                document.body.appendChild(toggleBtn);
            }
        }
    }

    switchVoice(voiceId) {
        // Check if it's a default voice
        if (this.availableVoices[voiceId]) {
            this.currentVoice = voiceId;
            
            // Update ElevenLabs config
            if (typeof ElevenLabsConfig !== 'undefined') {
                ElevenLabsConfig.voiceId = voiceId;
            }
            
            // Update UI
            this.updateVoiceDisplay();
            
            // Test the new voice
            this.testVoice();
            
            console.log(`🎙️ Voice switched to: ${this.availableVoices[voiceId].name}`);
            return;
        }

        // Check if it's an ElevenLabs voice
        const elevenLabsVoice = this.elevenLabsVoices.find(v => v.voice_id === voiceId);
        if (elevenLabsVoice) {
            this.currentVoice = voiceId;
            
            // Update ElevenLabs config
            if (typeof ElevenLabsConfig !== 'undefined') {
                ElevenLabsConfig.voiceId = voiceId;
            }
            
            // Update UI
            this.updateVoiceDisplay();
            this.updateElevenLabsVoices();
            
            // Test the new voice
            this.testVoice();
            
            console.log(`🎙️ Voice switched to: ${elevenLabsVoice.name} (ElevenLabs)`);
        }
    }

    updateVoiceDisplay() {
        const currentVoiceSpan = document.querySelector('.current-voice');
        if (currentVoiceSpan) {
            const voiceInfo = this.getVoiceInfo(this.currentVoice);
            currentVoiceSpan.textContent = `Current: ${voiceInfo ? voiceInfo.name : this.currentVoice}`;
        }

        // Update active state of buttons
        document.querySelectorAll('.voice-option').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.voice === this.currentVoice) {
                btn.classList.add('active');
            }
        });
    }

    updateElevenLabsVoices() {
        const elevenLabsContainer = document.getElementById('elevenlabs-voices');
        if (!elevenLabsContainer) return;

        if (this.elevenLabsVoices.length === 0) {
            elevenLabsContainer.innerHTML = `
                <div class="no-voices">
                    <p>No ElevenLabs voices found</p>
                    <p class="small">Check your API key or try refreshing</p>
                </div>
            `;
            return;
        }

        const voicesHTML = this.elevenLabsVoices.map(voice => `
            <button class="voice-option ${voice.voice_id === this.currentVoice ? 'active' : ''}" 
                    data-voice="${voice.voice_id}" onclick="voiceSwitcher.switchVoice('${voice.voice_id}')">
                <span class="voice-name">${voice.name}</span>
                <span class="voice-accent">${voice.labels?.accent || 'Unknown'} ${voice.labels?.gender || 'Unknown'}</span>
                <span class="voice-id">ID: ${voice.voice_id}</span>
            </button>
        `).join('');

        elevenLabsContainer.innerHTML = voicesHTML;
    }

    testVoice() {
        const testText = "Welcome to RetrofitForge-AI Digital Twin Engine. This is a test of the new voice configuration.";
        
        if (window.investorPresentation && window.investorPresentation.narration) {
            window.investorPresentation.narration.speak(testText);
        } else {
            // Fallback to browser TTS
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(testText);
                speechSynthesis.speak(utterance);
            }
        }
    }

    toggleSwitcher() {
        const panel = document.querySelector('.voice-switcher-panel');
        if (panel) {
            panel.classList.toggle('show');
        }
    }

    getCurrentVoice() {
        return this.currentVoice;
    }

    getVoiceInfo(voiceId) {
        // Check default voices first
        if (this.availableVoices[voiceId]) {
            return this.availableVoices[voiceId];
        }
        
        // Check ElevenLabs voices
        const elevenLabsVoice = this.elevenLabsVoices.find(v => v.voice_id === voiceId);
        if (elevenLabsVoice) {
            return {
                name: elevenLabsVoice.name,
                accent: elevenLabsVoice.labels?.accent || 'Unknown',
                gender: elevenLabsVoice.labels?.gender || 'Unknown'
            };
        }
        
        return null;
    }

    updateLanguageVoices(voices) {
        // Update available voices based on selected language
        console.log('🎙️ Updating voices for language:', voices);
        // This would integrate with ElevenLabs to get language-specific voices
    }

    speak(text) {
        // Use ElevenLabs if available, otherwise fallback to browser TTS
        if (ElevenLabsConfig && ElevenLabsConfig.apiKey && ElevenLabsConfig.enabled) {
            this.speakWithElevenLabs(text);
        } else {
            this.speakWithBrowserTTS(text);
        }
    }

    async speakWithElevenLabs(text) {
        try {
            const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ElevenLabsConfig.voiceId}`, {
                method: 'POST',
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'application/json',
                    'xi-api-key': ElevenLabsConfig.apiKey
                },
                body: JSON.stringify({
                    text: text,
                    model_id: ElevenLabsConfig.model,
                    voice_settings: {
                        stability: ElevenLabsConfig.stability,
                        similarity_boost: ElevenLabsConfig.similarity_boost
                    }
                })
            });
            
            if (response.ok) {
                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                await audio.play();
            } else {
                console.warn('ElevenLabs TTS failed, falling back to browser TTS');
                this.speakWithBrowserTTS(text);
            }
        } catch (error) {
            console.warn('ElevenLabs TTS error:', error);
            this.speakWithBrowserTTS(text);
        }
    }

    speakWithBrowserTTS(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = ElevenLabsConfig.voiceSettings.rate;
            utterance.pitch = ElevenLabsConfig.voiceSettings.pitch;
            utterance.volume = ElevenLabsConfig.voiceSettings.volume;
            speechSynthesis.speak(utterance);
        }
    }
}

// Initialize voice switcher when page loads
let voiceSwitcher;
document.addEventListener('DOMContentLoaded', () => {
    voiceSwitcher = new VoiceSwitcher();
    console.log('🎙️ Voice Switcher initialized');
});

// Add CSS for voice switcher
const voiceSwitcherCSS = `
.voice-switcher-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 25px;
    width: 500px;
    max-height: 80vh;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    color: white;
    overflow-y: auto;
}

.voice-switcher-panel.show {
    opacity: 1;
    visibility: visible;
}

.switcher-header {
    text-align: center;
    margin-bottom: 20px;
}

.switcher-header h3 {
    margin: 0 0 10px 0;
    color: #00ff88;
    font-size: 18px;
}

.current-voice {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 10px;
}

.voice-loading {
    font-size: 12px;
    color: #00ff88;
    margin-top: 5px;
}

.loading-spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.voice-tabs {
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
}

.tab-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 8px 16px;
    color: white;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.tab-btn:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.3);
}

.tab-btn.active {
    background: linear-gradient(45deg, #00ff88, #0099ff);
    border-color: #00ff88;
}

.voice-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    max-height: 300px;
    overflow-y: auto;
}

.voice-option {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}

.voice-option:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.3);
}

.voice-option.active {
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 153, 255, 0.2));
    border-color: #00ff88;
}

.voice-name {
    display: block;
    font-weight: 600;
    margin-bottom: 4px;
}

.voice-accent {
    display: block;
    font-size: 12px;
    color: #ccc;
    margin-bottom: 2px;
}

.voice-id {
    display: block;
    font-size: 10px;
    color: #888;
    font-family: 'Courier New', monospace;
}

.elevenlabs-loading, .no-voices {
    text-align: center;
    padding: 20px;
    color: #ccc;
}

.no-voices .small {
    font-size: 11px;
    color: #888;
    margin-top: 5px;
}

.voice-controls {
    display: flex;
    gap: 10px;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 15px;
}

.control-btn {
    background: linear-gradient(45deg, #00ff88, #0099ff);
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.control-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
}

.voice-toggle-btn {
    background: linear-gradient(45deg, #00ff88, #0099ff);
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-left: 10px;
}

.voice-toggle-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
}

/* Scrollbar styling */
.voice-options::-webkit-scrollbar {
    width: 6px;
}

.voice-options::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

.voice-options::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 136, 0.3);
    border-radius: 3px;
}

.voice-options::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 255, 136, 0.5);
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = voiceSwitcherCSS;
document.head.appendChild(style); 