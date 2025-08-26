/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let helloWorldPopup = undefined;

WA.onInit().then(() => {
    console.log("WA Initialized");

    
    WA.room.onEnterZone('school', () => {
    //WA.player.teleport(20, 20, 10);
    WA.nav.goToRoom("map_test4.json");
})

    // Add action bar button 'Register'.
    WA.ui.actionBar.addButton({
        id: 'gradient-btn',
        label: 'Nav',
        bgColor: '#ff5ac5ff',
        isGradient: true,
        callback: (event) => {
            console.log('Button clicked', event);
            // When a user clicks on the action bar button 'Register', we remove it.
            WA.ui.actionBar.removeButton('gradient-btn');
        }
    });
});

