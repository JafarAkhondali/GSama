$(document).ready(function () {
    $(function(){
        $('input[type="range"]').rangeslider({
            polyfill:false,
            onInit:function(){
                $('.header .pull-right').text($('input[type="range"]').val()+'%');
            },
            onSlide:function(position, value){
                $('.header .pull-right').text(value+'%');
            },
            onSlideEnd:function(position, value){
                //So what?
            }
        });
    });

    $("#btn_fill").on('click',function () {
        fillOptions($("#range_inp").val(),false,false);
    });

    $("#btn_fill_submit").on('click',function () {
        fillOptions($("#range_inp").val(),false,true);
    });

    $("#btn_fill_bypass").on('click',function () {
        fillOptions($("#range_inp").val(),true,false);
    });

    $("#btn_fill_submit_bypass").on('click',function () {
        fillOptions($("#range_inp").val(),true,true);
    });


});