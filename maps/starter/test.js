let currPoliceStation = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('police', () => {
    currPoliceStation =  WA.ui.openPopup("PoliceStation","Magic Boom!",[]);
    WA.player.teleport(20, 20, 10);
})

WA.room.onLeaveZone('police', closePopUp)

function closePopUp(){
    if (currPoliceStation !== undefined) {
        currPoliceStation.close();
        currPoliceStation = undefined;
    }
}

// WA.player.moveTo(250, 250, 10);
//https:\/\/lamerochubbydudu.github.io\/gather_test\/bell.mp3

 const bellSound = WA.sound.loadSound("https:\/\/lamerochubbydudu.github.io\/gather_test\/bell.mp3");
// Waiting for the API to be ready
WA.onInit().then(() => {
  let actionMessage =  undefined;

  // When someone enters the bellZone area
  WA.room.area.onEnter("bellZone").subscribe(() => {
    bellSound.play({})
  });

  // When someone leaves the bellZone area
  WA.room.area.onLeave("bellZone").subscribe(() => {
    bellSound.stop({});
  });

}).catch(e => console.error(e));

export {};