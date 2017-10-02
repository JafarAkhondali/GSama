$(document).ready(function () {

    $('#tabs-swipe-demo').tabs();

    $("#submit_data").on('click',function () {
        let autoSend = $("#auto_send").prop("checked");
        let bypassFilter = $("#bypass_filter").prop("checked");
        let percent = $("#range_inp").val();
        fillOptions(percent,bypassFilter,autoSend);
    });

    $("#cancel").on('click',function () {
        window.close();
    })

});