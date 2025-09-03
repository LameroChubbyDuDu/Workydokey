let currPoliceStation = undefined;
let escapeMessage = undefined;
let policePopUp = undefined;
let PoliceHelp = 0;
let policeHelpPopUp = undefined;

var pos = new Array(6); // [prevPosX1, prevPosY1, prevPosX2, prevPosY2, currPosX, currPosY]

const bellSound = WA.sound.loadSound("https:\/\/lamerochubbydudu.github.io\/gather_test\/bell.mp3");

import { getFormResponses } from './spreadSheetData.js';
// import './spreadSheetData.js'

WA.room.onEnterZone('police', () => {
  console.log("In popup zone");
  if(currPoliceStation == undefined){
    currPoliceStation =  WA.ui.openPopup("formPopUp",
      "你在警察局囉!",[{
        label: "進入",
        className: "warning",
        callback: (popup) => {
            WA.nav.goToRoom("elementary.json");
            currPoliceStation = undefined;
            popup.close();
        }
      },{
        label: "快逃啊",
        className: "warning",
        callback: (popup) => {
            WA.player.teleport(360, 450);
            popup.close();
            currPoliceStation = undefined;
      
        }}
      ]
    );}
      
})


// Waiting for the API to be ready
WA.onInit().then(async() => {
  // await getFormResponses();

  console.log('Position: ', await WA.player.getPosition());
  WA.player.onPlayerMove((event) => {
      pos[4] = Math.floor((event.x)/32);
      pos[5] = Math.floor((event.y)/32);
      WA.room.setTiles([
          { x: pos[0], y: pos[1], tile: null, layer: "entity" },
          { x: pos[2], y: pos[3], tile: null, layer: "entity" }
        ]);
      if(event.direction == "up"){ TileSetting(0, 0, 1, 2); }
      else if(event.direction == "down"){ TileSetting(0, 0, -2, -1); }
      else if(event.direction == "right"){ TileSetting(-1, -1, -1, 0); }
      else{ TileSetting(1, 1, -1, 0); }

      if((pos[4] == 27 || pos[4] == 28)&& (pos[5] >= 30 && pos[5] <= 34)){
      //   if(PoliceHelp == 1){
      //     policeHelpPopUp =  WA.ui.openPopup("policePopUp",
      // "你迷路啦!找警察幫忙吧","直走右轉就可以看到左鎮國小囉!",[{
      //   label: "進入",
      //   className: "warning",
      //   callback: (popup) => {
      //       policeHelpPopUp = undefined;
      //       popup.close();
      //   }
      // }]);  
      //   }
        console.log("找到警察了");
        if(policePopUp){
            policePopUp.close();
            policePopUp = undefined;
          }
      }

      console.log("Player moved to: ", pos[4], pos[5]);
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
  });
}).catch(e => console.error(e));

WA.room.onEnterZone('popup', () => {
    policePopUp =  WA.ui.openPopup("policePopUp",
      "你迷路啦!找警察幫忙吧",[]);  
    PoliceHelp = 1;
})


function TileSetting(addX1, addX2, addY1, addY2){
  WA.room.setTiles([
          { x: pos[4]+addX1, y: pos[5]+addY1, tile: 2006, layer: "entity" },
          { x: pos[4]+addX2, y: pos[5]+addY2, tile: 2007, layer: "entity" }
        ]);
        pos[0] = pos[4]+addX1;
        pos[1] = pos[5]+addY1;
        pos[2] = pos[4]+addX2;
        pos[3] = pos[5]+addY2;
}