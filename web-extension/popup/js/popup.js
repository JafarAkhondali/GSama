"use strict";
var BrowserNameSpace;
if(typeof browser !== 'undefined' )
    BrowserNameSpace = browser ;
else if(typeof chrome !== 'undefined' )
    BrowserNameSpace = chrome;




/**
 * Fills options of sama
 * @param {string} percent a percent which determins how values should be selected
 * @param {string} bypass_filter boolean if all options are marked low, or all high, ur vote will not be submitted, it'll bypass it
 * @send {string} send_to_sama boolean determins whenevert to send the code to sama system or not
 */
function fillOptions(percent,bypass_filter,send) {

    let config = {
        lovedPercent: percent,
        bypass: bypass_filter,
        send: send
    };
    
    BrowserNameSpace.tabs.executeScript(null,
        {
            allFrames:true,
            code: "var config = "+JSON.stringify(config)+";"
        }, function(){
            BrowserNameSpace.tabs.executeScript(null, {
                    allFrames:true,
                    file: "/scripts/fillthemall.js"},
                function(){
                    //Inserted ...
                });
        });
}
