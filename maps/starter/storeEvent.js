import { storeInteraction } from './function/storeEventClass.js';

const interaction = new storeInteraction();

// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log("API is ready");
    interaction.zoneEffect("tv");
    interaction.zoneEffect("info");
    // interaction.playerMovementEffect();

}).catch(e => console.error(e));