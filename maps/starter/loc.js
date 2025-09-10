import { Location } from './function/pos.js';


const loc = new Location();

// Waiting for the API to be ready
WA.onInit().then(async () => {
    loc.playerMovementEffect();
    loc.ShowLocation();
    loc.addBar();
}).catch(e => console.error(e));