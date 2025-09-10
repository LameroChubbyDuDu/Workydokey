export class Location {
    constructor() {
        this.lnglatPopUp = undefined;
        this.bellSound = WA.sound.loadSound("https:\/\/lamerochubbydudu.github.io\/gather_test\/bell.mp3");
        this.pos = new Array(6); // [prevPosX1, prevPosY1, prevPosX2, prevPosY2, currPosX, currPosY]
        this.lng = 0;
        this.lat = 0;
        this.zoom = 18;
    }

    playerMovementEffect() {
        WA.player.onPlayerMove((event) => {
            this.pos[4] = Math.floor((event.x) / 32);
            this.pos[5] = Math.floor((event.y) / 32);
            console.log("Player moved to: ", this.pos[4], this.pos[5]);

            this.ShowLocation();
        });

    }

    ShowLocation() {
        if (this.pos[4] == undefined || this.pos[5] == undefined) { this.lng = 120.406541; this.lat = 23.060016; }
        else {
            this.lng = this.pos[4] * 0.000266 + 120.406541;
            this.lat = this.pos[5] * -0.000246 + 23.060016;
        }

        console.log("Current Location: ", this.lat, this.lng);
        // document.getElementById("txt").innerText = `${lng}, ${lat}`;


    }
    addBar() {
        console.log("Add Action Bar");
        WA.ui.actionBar.addButton({
            id: "loc-btn",
            label: "Location",
            toolTip: "Click to see the Location",
            bgColor: '#077FB6',
            textColor: '#FFFFFF',
            isGradient: false,
            callback: (event) => {
                if (this.lnglatPopUp == undefined) {
                    this.lnglatPopUp = WA.ui.openPopup("lnglatPopUp",
                        `${this.lat}, ${this.lng}`, [{
                            className: "normal",
                            label: "Close",
                            callback: (popup) => { popup.close(); this.lnglatPopUp = undefined}
                        }, {
                            className: "normal",
                            label: "Google Map",
                            callback: (popup) => {
                                popup.close();
                                this.lnglatPopUp = undefined
                                const url = `https://www.google.com/maps?q=${this.lat},${this.lng}&z=${this.zoom}`;
                                WA.nav.openTab(url);
                            }
                        }]);
                }

            }
        })
    }
}