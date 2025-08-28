let currPoliceStation = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
// import { getFormResponses } from './Special_Zones.js';

async function getFormResponses() {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRetmpP0-lnyYg0TpLuxRQVc8pc5QGUS7dyIRnoeD-ybF_oONKUjspK6Jh9yMjAmUNdzdk7B2-MoONA/pub?gid=0&single=true&output=csv";
  const response = await fetch(csvUrl);
  console.log("Fetch status:", response.status);

  const text = await response.text();
  
  const rows = text.split("\n").map(r => r.split(","));
  console.log("form reply：", rows);

  // WA.ui.displayActionMessage({
  //   message: `最新回覆：${rows[rows.length-1].join(" | ")}`
  // });

  WA.chat.sendChatMessage(`最新回覆：${rows[rows.length-1].join(" | ")}`, "System");
}

WA.room.onEnterZone('popup', () => {
    currPoliceStation =  WA.ui.openPopup("formPopUp",
      "Here!",[{
        className: "primary"
      }]);
      console.log("In popup zone");
})

WA.room.onLeaveZone('popup', closePopUp)


WA.room.onEnterZone('police', () => {
    // currPoliceStation =  WA.ui.openPopup("PoliceStation","Magic Boom!",[]);
    //WA.player.teleport(20, 20, 10);

    // WA.nav.goToRoom("elementary.json");
    // getFormResponses();
  //   try {
  //    getFormResponses();  // await ensures fetch errors show
  // } catch (err) {
  //   console.error("Error fetching sheet:", err);
  // }
})

WA.room.onLeaveZone('police', closePopUp)

function closePopUp(){
    if (currPoliceStation !== undefined) {
        currPoliceStation.close();
        currPoliceStation = undefined;
    }
}

var prevPosX1 = 1;
var prevPosY1 = 1;
var prevPosX2 = 1;
var prevPosY2 = 1;
var currPosX = 1;
var currPosY = 1;

const bellSound = WA.sound.loadSound("https:\/\/lamerochubbydudu.github.io\/gather_test\/bell.mp3");


// Waiting for the API to be ready
WA.onInit().then(async() => {
  // getFormResponses();

  console.log('Position: ', await WA.player.getPosition());
  WA.player.onPlayerMove((event) => {
      currPosX = Math.floor((event.x)/32);
      currPosY = Math.floor((event.y)/32);
      WA.room.setTiles([
          { x: prevPosX1, y: prevPosY1, tile: null, layer: "entity" },
          { x: prevPosX2, y: prevPosY2, tile: null, layer: "entity" }
        ]);
      if(event.direction == "up"){
        TileSetting(0, 0, 1, 2);
      }else if(event.direction == "down"){
        TileSetting(0, 0, -2, -1);
      }else if(event.direction == "right"){
        TileSetting(-1, -1, -1, 0);
        }else{
        TileSetting(1, 1, -1, 0);
        }

      console.log("Player moved to: ", currPosX, currPosY);
      //console.log("Prev position are: : ", prevPosX, prevPosY);
 
  });

  // When someone enters the bellZone area
  WA.room.area.onEnter("bellZone").subscribe(() => {
    bellSound.play({});
    console.log("Bell sound played");
    // getFormResponses();
     WA.ui.modal.openModal({
        title: "WorkAdventure website",
        src: 'iframe/menu.html',
        position: "center",
        allowFullScreen: false
    });
    // WA.ui.openCoWebSite("iframe/menu.html");
  });

  // When someone leaves the bellZone area
  WA.room.area.onLeave("bellZone").subscribe(() => {
    bellSound.stop({});
    // getFormResponses();
  });
    //console.log("Player is moving");
    

}).catch(e => console.error(e));

function TileSetting(addX1, addX2, addY1, addY2){
  WA.room.setTiles([
          { x: currPosX+addX1, y: currPosY+addY1, tile: 2006, layer: "entity" },
          { x: currPosX+addX2, y: currPosY+addY2, tile: 2007, layer: "entity" }
        ]);
        prevPosX1 = currPosX+addX1;
        prevPosY1 = currPosY+addY1;
        prevPosX2 = currPosX+addX2;
        prevPosY2 = currPosY+addY2;
}

// export {};