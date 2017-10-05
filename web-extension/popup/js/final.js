$(document).ready(function () {

    $('#tabs-swipe-demo').tabs(); //Inital tabs


    //Submit data for voting
    $("#submit_data").on('click',function () {
        let autoSend = $("#auto_send").prop("checked");
        let bypassFilter = $("#bypass_filter").prop("checked");
        let percent = $("#range_inp").val();
        fillOptions(percent,bypassFilter,autoSend);
    });


    //Really? Should i say what it does?
    $("#cancel").on('click',function () {
        window.close();
    });


    $("#generate_schulde").on('click',function () {
        BrowserNameSpace.tabs.executeScript(null,
            {
                allFrames:true,
                file:  "/popup/js/jquery-2.2.4.min.js"
            }, function(){
                BrowserNameSpace.tabs.executeScript(null,
                    {
                        allFrames:true,
                        file:"/scripts/findthemall.js"
                    }, function(res){
                        //res is an array, mostly null. Cause it executed script on all pages
                        //We'll only select items which are not null
                        res = res.filter((i)=>i!= null)[0];
                        let BG = BrowserNameSpace.extension.getBackgroundPage();
                        BG.saveSections(res,()=>{
                            "use strict";
                            BG.showTimeTable();
                        });

                    });
            });
    });


});
