let currPoliceStation = undefined;
let escapeMessage = undefined;
let policePopUp = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
// import { getFormResponses } from './Special_Zones.js';

function closePopUp(){
    if (currPoliceStation !== undefined) {
        currPoliceStation.close();
        currPoliceStation = undefined;
    }
}

WA.room.onEnterZone('police', () => {
  console.log("In popup zone");
  if(currPoliceStation == undefined){
    currPoliceStation =  WA.ui.openPopup("formPopUp",
      "你在警察局囉!",[{
        label: "進入",
        className: "warning",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            // popup.close();
            WA.nav.goToRoom("elementary.json");
            currPoliceStation = undefined;
        }
      },{
        label: "快逃啊",
        className: "warning",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.player.teleport(360, 450);
            popup.close();
            currPoliceStation = undefined;
      
        }}
      ]
    );}
      
})

WA.room.onEnterZone('popup', () => {
    // openConfig(["leftDoorExit"]);
    policePopUp =  WA.ui.openPopup("policePopUp",
      "你迷路啦!找警察幫忙吧",[]);  
})

// WA.room.onLeaveZone('police', closePopUp)


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

        if((currPosX == 27 || currPosX == 28)&& (currPosY >= 30 && currPosY <= 34)){
            console.log("找到警察了");
            if(policePopUp){
              policePopUp.close();
              policePopUp = undefined;
            }
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