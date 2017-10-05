let BrowserNameSpace;
if(typeof browser !== 'undefined' )
    BrowserNameSpace = browser ;
else if(typeof chrome !== 'undefined' )
    BrowserNameSpace = chrome;


function saveSections(sections,callback){
    "use strict";
    let store = {};
    store["sections"] = sections;
    BrowserNameSpace.storage.local.set(store,function () {
        callback();//saving finished, notifiy caller
    });
}

function getSections(callback) {
    return BrowserNameSpace.storage.local.get("sections",(data)=>{
        "use strict";
        callback(data);//Getting finished, pass data to caller
    });
}

function showTimeTable() {
    let windowConfig = {
        type: 'popup',
        state:'maximized'
    };

    BrowserNameSpace.windows.create(windowConfig,(window)=>{
        "use strict";
        let wid = window.id;
        let tabConfig ={
            windowId:wid,
            url:"timetable/index.html"
        }

        BrowserNameSpace.tabs.create(tabConfig, (tab)=>{
            //We are inside the time table tab, Lets push sections
            //So what? He'll handle it himself
        });

    });

}


// Nothing here...
// just a comment for firefox manifest
//    "applications": {
//        "gecko": {
//            "id": "jafar.akhondali@ir.diostudio",
//            "strict_min_version": "50.0"
//        }
//    }

