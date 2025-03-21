// Game size constants
export const STATION_SIZE = 1;
export const COUNTER_SIZE = 0.8;
export const PLAYER_SIZE = 0.6;
export const PLAYER_SPEED = 0.1;
export const INTERACTION_RADIUS = 0.8;
export const ITEM_SIZE = 0.4;
export const PLATE_SIZE = 0.5; // Size of plate for item combination

// Color definitions with enhanced vibrant colors
export const COLORS = {
    pantry: 0x228B22,        // forest green for pantry
    chopping: 0xFF5252,      // bright red for chopping
    cooking: 0xFF9800,       // orange for cooking
    plateDispenser: 0xC0C0C0, // silver for plate dispenser
    serving: 0x2196F3,       // blue for serving
    counter: 0x8B4513,       // wooden brown for counters (more natural than yellow)
    player: 0xFFFFFF,        // white
    onion: 0xFFEB3B,         // yellow
    tomato: 0xFF5252,        // red
    meat: 0x8B4513,          // saddle brown for meat
    plate: 0xFFFFFF          // white for plates
};

// Item types
export const ITEM_TYPES = {
    ONION: 'onion',
    TOMATO: 'tomato',
    MEAT: 'meat',
    PLATE: 'plate'           // Added plate type
};

// Item states
export const ITEM_STATES = {
    RAW: 'raw',
    CHOPPED: 'chopped',
    COOKED: 'cooked',
    PLATED: 'plated'         // Added plated state for items
}; 