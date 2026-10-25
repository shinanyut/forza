$(document).ready(function(){
    $(window).load(function(){
        if($(window).width() > 900){
            $(".menuToggl").hide();
            $("#sidebar-wrapper").show();
        }
        else
        {
            $(".menuToggl").show();   
        }
    });
 });

$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width() > 900){
            $(".menuToggl").hide();
            $("#sidebar-wrapper").show();
        }
        else
        {
            $(".menuToggl").show();   
        }
    });
 });

$(document).ready(function(){
    // var drop = $(".dropdownMenu");
    // drop.hide();
    // $(".apranq").click(function(){
    //   drop.slideToggle();
    // });
    $("#menu-toggle").click(function(){
    	$("#sidebar-wrapper").slideToggle();
    });


    $(".menuToggl").click(function(){
        $(".sidbarNav").slideToggle();
    });  
});


function readerImageDisplay( files, class_box, w ) {
    var reader = new FileReader();
    w = (w) ? w : 100;
    reader.onload = function ( e ) {
        $('#' + class_box).html('<img style="width:' + w + '%;" class="thumbnail" src="' + e.target.result + '">');
    };
    reader.readAsDataURL(files[0]);
}