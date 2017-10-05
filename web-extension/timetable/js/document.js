let BrowserNameSpace;
if(typeof browser !== 'undefined' )
    BrowserNameSpace = browser ;
else if(typeof chrome !== 'undefined' )
    BrowserNameSpace = chrome;


let timetable;

function fixPersianString(text) {
    if (text == null)
        return null;

    text = text.replace(/\u0643/g, '\u06A9'); // ک
    text = text.replace(/\u0649/g, '\u06CC'); // ی
    text = text.replace(/\u064A/g, '\u06CC'); // ی

    return text;
}

function fixPlace(text) {
    if (text == null)
        return null;
    text = text.replace(/_/g, ' ');
    text = text.replace(/\u06A9\u0644\u0627\u0633/g, ' ');
    text = text.replace(/( ){2,}/g, ' ');
    return text;
}


function createNewTt(scopeFrom,scopeTo,events) {
    const daysOfWeek = [
        'شنبه',
        'یکشنبه',
        'دوشنبه',
        'سه شنبه',
        'چهارشنبه',
        'پنجشنبه',
        'جمعه',
    ];

    timetable = new Timetable();
    timetable.setScope(scopeFrom, scopeTo);
    timetable.addLocations(daysOfWeek);

    for(let ev of events){
        for (let sec of ev["sections"]){
            let hourMinStart = sec.start.split(":");
            let hourMinEnd = sec.end.split(":");
            timetable.addEvent(fixPersianString(ev.name)+"<br>"+fixPlace(fixPersianString(sec.place)), fixPersianString(sec.day) , new Date(2015,7,17,hourMinStart[0],hourMinStart[1]), new Date(2015,7,17,hourMinEnd[0],hourMinEnd[1]));
        }
    }
    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable'); // any css selector
    //This timetable is outdated, I'm just gonna fix this and use React if next versions...
    $(".timetable .time-entry small").each((_,i)=>{$(i).html($(i).text())});//It'll unescape BR tags
}


function updateTT() {
    BrowserNameSpace.storage.local.get("sections",(data)=>{
        "use strict";
        createNewTt(8,21,data["sections"]);
    });
}

$(document).ready(function () {
    let events = [
        {
            name:"ریاضی",
            sections:[
                {
                    day:"یکشنبه",
                    start:"12:05",
                    end:"13:05",
                    place:"test"
                },
                {
                    day:"سه شنبه",
                    start:"12:05",
                    end:"13:05",
                    place:"test۲"
                }
            ]

        }
    ];
    createNewTt(8,21,events);
    updateTT();
});