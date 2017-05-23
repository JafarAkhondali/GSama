"use strict";
var BrowserNameSpace;
if(typeof browser !== 'undefined' )
    BrowserNameSpace = browser ;
else if(typeof chrome !== 'undefined' )
    BrowserNameSpace = chrome;

/**
 * Fills options of sama
 * @param percent a percent which determins how values should be selected
 * @param bypass_filter boolean if all options are marked low, or all high, ur vote will not be submitted, it'll bypass it
 */
function fillOptions(percent,bypass_filter,send) {
    let config = {
        lovedPercent: percent,
        bypass: bypass_filter,
        send: send
    };
    chrome.tabs.executeScript(null, {code: "var config = "+config+";"}, function(){
        chrome.tabs.executeScript(null, {file: "/scripts/fillthemall.js"}, function(){

        });
    });


}

