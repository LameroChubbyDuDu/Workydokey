export class storeInteraction {
    constructor() {
        this.currPoliceStation = undefined;
        this.policePopUp = undefined;
        this.bellSound = WA.sound.loadSound("https:\/\/lamerochubbydudu.github.io\/gather_test\/tv.mp3");
        this.pos = new Array(6); // [prevPosX1, prevPosY1, prevPosX2, prevPosY2, currPosX, currPosY]
    }

    zoneEffect(zoneName) {
        console.log("Entered zone:", zoneName);
        WA.room.onEnterZone(zoneName, () => {
            switch (zoneName) {
                case "tv": {
                    console.log("Enter tv zone");
                    this.bellSound.play({});
                    break;
                }
                case "info": {
                    console.log("Enter info zone");
                    WA.ui.modal.openModal({
                        title: "WorkAdventure website",
                        src: 'iframe/jenStore.html',
                        position: "center",
                        allowFullScreen: false
                    });
                    break;
                }
                default: {
                    console.log("Unknown zone entered");
                    break;
                }
            }

        });

        WA.room.onLeaveZone(zoneName, () => {
            switch (zoneName) {
                case "tv": {
                    this.bellSound.stop({});
                    break;
                }
            }
        });
    }

    playerMovementEffect() {
        WA.player.onPlayerMove((event) => {
            this.pos[4] = Math.floor((event.x) / 32);
            this.pos[5] = Math.floor((event.y) / 32);
            WA.room.setTiles([
                { x: this.pos[0], y: this.pos[1], tile: null, layer: "entity" },
                { x: this.pos[2], y: this.pos[3], tile: null, layer: "entity" }
            ]);
            if (event.direction == "up") { this.TileSetting(0, 0, 1, 2); }
            else if (event.direction == "down") { this.TileSetting(0, 0, -2, -1); }
            else if (event.direction == "right") { this.TileSetting(-1, -1, -1, 0); }
            else { this.TileSetting(1, 1, -1, 0); }

            if ((this.pos[4] == 27 || this.pos[4] == 28) && (this.pos[5] >= 30 && this.pos[5] <= 34)) {
                console.log("找到警察了");
                if (this.policePopUp) {
                    this.policePopUp.close();
                    this.policePopUp = undefined;
                }
            }

            console.log("Player moved to: ", this.pos[4], this.pos[5]);

        });

    }

    TileSetting(addX1, addX2, addY1, addY2) {
        WA.room.setTiles([
            { x: this.pos[4] + addX1, y: this.pos[5] + addY1, tile: 2006, layer: "entity" },
            { x: this.pos[4] + addX2, y: this.pos[5] + addY2, tile: 2007, layer: "entity" }
        ]);
        this.pos[0] = this.pos[4] + addX1;
        this.pos[1] = this.pos[5] + addY1;
        this.pos[2] = this.pos[4] + addX2;
        this.pos[3] = this.pos[5] + addY2;
    }

}