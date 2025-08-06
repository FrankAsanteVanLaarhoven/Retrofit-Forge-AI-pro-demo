// ElevenLabs Configuration for Premium AI Narration
// Get your free API key at: https://elevenlabs.io/

const ElevenLabsConfig = {
    // Add your ElevenLabs API key here for premium voice features
    // Get a free API key at: https://elevenlabs.io/
    apiKey: 'sk_a5ac890c43823746d54383e7416d2f1fc42003b5cd71feb0', // ElevenLabs API key configured
    
    // Voice settings
    voiceId: 'ADAM', // Professional British voice (DEFAULT)
    model: 'eleven_multilingual_v2',
    stability: 0.8,
    similarity_boost: 0.9,
    
    // 🎙️ AVAILABLE VOICE OPTIONS - Change voiceId to any of these:
    // voiceId: 'ADAM',     // Professional British male (current)
    // voiceId: 'JOSH',     // American professional male
    // voiceId: 'RACHEL',   // British female professional
    // voiceId: 'DANIEL',   // British male (alternative)
    // voiceId: 'EMILY',    // American female professional
    // voiceId: 'CHRIS',    // American male (friendly)
    // voiceId: 'SARAH',    // British female (warm)
    // voiceId: 'MIKE',     // American male (authoritative)
    
    // Enable/disable features
    enabled: true,
    fallbackToBrowserTTS: true,
    
    // Voice customization
    voiceSettings: {
        rate: 0.9,    // Speech rate (0.5 to 2.0) - Slower = 0.5, Faster = 2.0
        pitch: 1.0,   // Pitch (0.5 to 2.0) - Lower = 0.5, Higher = 2.0
        volume: 0.8   // Volume (0.0 to 1.0) - Quieter = 0.0, Louder = 1.0
    }
    
    // 🎛️ VOICE QUALITY SETTINGS:
    // stability: 0.8,        // Voice stability (0.0 to 1.0) - Higher = more consistent
    // similarity_boost: 0.9, // Voice similarity (0.0 to 1.0) - Higher = more like original
};

// Instructions for setup:
// 1. Go to https://elevenlabs.io/
// 2. Sign up for a free account
// 3. Get your API key from the dashboard
// 4. Replace 'null' above with your API key
// 5. Save this file and refresh the application

// Example usage:
// ElevenLabsConfig.apiKey = 'your-api-key-here';

console.log('🎙️ ElevenLabs Configuration loaded');
console.log('📝 To enable premium AI voice, add your API key to elevenlabs-config.js');
console.log('🔗 Get your free API key at: https://elevenlabs.io/');

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElevenLabsConfig;
} 