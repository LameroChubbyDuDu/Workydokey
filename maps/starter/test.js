
// var pos = new Array(6); // [prevPosX1, prevPosY1, prevPosX2, prevPosY2, currPosX, currPosY]



import { Interaction } from './function/interaction.js';
import { getFormResponses } from './spreadSheetData.js';

const interaction = new Interaction();

// Waiting for the API to be ready
WA.onInit().then(async () => {
  interaction.zoneEffect("police");
  interaction.zoneEffect("bellZone");
  interaction.zoneEffect("popup");

  interaction.playerMovementEffect();

}).catch(e => console.error(e));