import { Interaction } from 'toreEventClass.js';

const interaction = new Interaction();

// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log("API is ready");
    interaction.zoneEffect("tv");

    // interaction.playerMovementEffect();

}).catch(e => console.error(e));