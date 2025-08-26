

let helloWorldPopup;


   

    WA.onInit().then(async() => {
    console.log("WA Initialized");
    WA.controls.restoreMapEditor();
    
    WA.room.onEnterZone('school', () => {
        //WA.player.teleport(20, 20, 10);
        WA.nav.goToRoom("map_test4.json");
    })

    //----------------------PLAYER MOVEMENT----------------------//
    console.log('Position: ', await WA.player.getPosition());
    WA.player.onPlayerMove((event) => {if(event.direction == 'left') console.log("left")});
    //----------------------------------------------------------//
    //--------------------------BUTTON--------------------------//
    WA.ui.actionBar.addButton({
        id: 'gradient-btn',
        label: 'Hello',
        bgColor: '#ff5ac5ff',
        isGradient: true,
        callback: (event) => {
            console.log('Button clicked', event);
            // WA.ui.actionBar.removeButton('gradient-btn');
        }
    });
    //----------------------------------------------------------//

    const menu = WA.ui.registerMenuCommand('menu test',
    {
        key: 'menu-test',
        callback: () => {
            WA.chat.sendChatMessage('test');
        }
    })
    menu.open();

    // const menu2 = await WA.ui.getMenuCommand("credit");
    // menu2.open();

    await WA.players.configureTracking();
    // const players = WA.players.list();
    const player_name = WA.players.get(1);
    if(player_name !== undefined) {console.log('Player name is ${player_name.name}')}
    // console.log('Players are:', players);

});