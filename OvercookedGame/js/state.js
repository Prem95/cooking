// Centralized game state
const gameState = {
    keysPressed: {},
    player: null,
    playerPosition: { x: 0, y: 0 },
    playerHolding: null,
    errorMessage: null,
    errorMessageTimeout: null,
    items: [],  // To track all items in the scene
    processingInProgress: false, // Flag to track if chopping/cooking is in progress
    progressBar: null // Reference to the current progress bar
};

// Indicate when game is loaded
export function setGameLoaded() {
    window.gameLoaded = true;
}

export default gameState; 