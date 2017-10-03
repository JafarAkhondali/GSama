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
        //Before telling what i'm doing here, i would like to say FUCK YOU SAMA
        //FUCK YOUR CREATORS
        //FUCK YOUR DESIGNERS
        //FUCK ANY UNIVERSITY WHICH PAYED YOU FOR THIS SHIT
        //Ok let's go on, it's 3:47am now and i've just started writing this shit
        //There is no fucking id attribute or any fucking class to find which table are they using
        //To show data of schedule, So i should to it dirty too ...


        let section_data = [];

        //First, I'll find 9th td of any table, the only table which has it is the schedule
        //So now let's go to grandparent to get main table
        let sch_table = $("table td:nth-child(9)").parent().parent();

        //Select all rows and set it to tr, I know the variable "tr" is redundant here
        //But i love it so much <3 My codes = My rules . It's non of your fucking businesses.
        let tr = sch_table.children();

        //Skip first and second rows, Cause they are shit
        for (let i=2;i<tr.length;i++){
            //Shows there is only one fucking row, so it's the time of class
            if (tr[i].firstChild.children.length == 1){
                let section_data = tr[i].firstChild.children[0].innerText.trim().split("\n");
                let className = tr[i-1].children[1].firstChild.innerText;

                let classData = {
                    name:className
                };

                let sections = [];
                for(section in section_data){
                    let section_info = section.split("،");
                    let
                        class_date = section_info[0],
                        place = section_info[1],
                        teacher = section_info[2];
                    sections.append({
                        
                    });
                }
                section_data.append();



            }


        }



    });


});
