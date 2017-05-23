//we have a variale called 'config' passed here from scriptExecuter

var BrowserNameSpace;
if(typeof browser !== 'undefined' )
    BrowserNameSpace = browser ;
else if(typeof chrome !== 'undefined' )
    BrowserNameSpace = chrome;

if( typeof config === "undefined"){
    console.log("Dafuq?!");
    throw new Error("no config, no life :|");
}




const PUB_OPTIONS = 5;//Number of public courses professor options
const PRI_OPTIONS = 8;//Number of private courses professor options


let noOptions = $("#frmMain table:nth-child(9) tr:nth-child(1) td").length;

let nthChild = Math.round((config.lovedPercent*noOptions)/100);

$("form#frmMain table tr td:nth-child("+nthChild +") input[type='radio']").map((elem,index)=>{
    "use strict";
    $(elem).prop('checked',true);
    eval($(elem).attr('onclick'));
});

if(config.bypass){

}

if(config.send){
    fnSaveStudentEvaluationAnswer();
    $("#frmMain").submit();
}










