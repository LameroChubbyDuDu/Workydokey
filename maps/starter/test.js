import { Interaction } from './function/interaction.js';
import { readExcelFile } from './spreadSheetData.js';

const interaction = new Interaction();

// Waiting for the API to be ready
WA.onInit().then(async () => {

  interaction.zoneEffect("police");
  interaction.zoneEffect("bellZone");
  interaction.zoneEffect("popup");

  interaction.playerMovementEffect();

}).catch(e => console.error(e));