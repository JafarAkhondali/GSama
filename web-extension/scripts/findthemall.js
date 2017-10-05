if (typeof $($("table td:nth-child(9)")[0]).parent().parent()[0] !== "undefined"){

// let BrowserNameSpace;
// if(typeof browser !== 'undefined' )
//     BrowserNameSpace = browser ;
// else if(typeof chrome !== 'undefined' )
//     BrowserNameSpace = chrome;


//Before telling what i'm doing here, i would like to say FUCK YOU SAMA
//FUCK YOUR CREATORS
//FUCK YOUR DESIGNERS
//FUCK ANY UNIVERSITY WHICH PAYED YOU FOR THIS SHIT
//Ok let's go on, it's 3:47am now and i've just started writing this shit
//There is no fucking id attribute or any fucking class to find which table are they using
//To show data of schedule, So i should to it dirty too ...


    let all_section_data = [];

//First, I'll find 9th td of any table, the only table which has it is the schedule
//So now let's go to grandparent to get main table
    let sch_table = $($("table td:nth-child(9)")[0]).parent().parent();

//Select all rows and set it to tr, I know the variable "tr" is redundant here
//But i love it so much <3 My codes = My rules . It's non of your fucking businesses.
    let tr = sch_table.children();


//Skip first and second rows, Cause they are shit
    for (let i=2;i<tr.length;i++){
        //Shows there is only one fucking row, so it's the time of class
        if (tr[i].children.length == 1 && tr[i].innerText != ""){
            let section_data = tr[i].firstChild.children[0].innerText.trim().split("\n");
            let className = tr[i-1].children[1].firstChild.innerText;
            let sections = [];
            let classData = {
                name: className,
            };

            for(let section of section_data){
                let section_info = section.split("،");

                const
                    class_date = section_info[0],
                    place = section_info[1],
                    teacher = section_info[2];

                const posOfDay = class_date.indexOf(':');
                const nameOfDay = class_date.substr(0,posOfDay);

                const fromTo = class_date.substring(posOfDay+2,class_date.length-2).split(" تا ");
                const classPlace = place.substring(place.indexOf("(")+1,place.length-2).trim();
                const teacherName = teacher.substring(teacher.indexOf("(")+1,teacher.length-2).trim().replace("_"," ");
                sections.push({
                    name: className,
                    day: nameOfDay.trim(),
                    start: fromTo[0].trim(),
                    end: fromTo[1].trim(),
                    place: classPlace,
                    teacher: teacherName
                });
            }
            classData["sections"] = sections;
            all_section_data.push(classData);
        }
    }//End for loop


    all_section_data
}