$(function() {
    $("#btn").on('click', function() {
        $("#card1").slideUp(2000).delay(1000).slideDown(3000).css({ color: "Darkblue" });
        $("#card2").fadeOut(2000).delay(1000).toggle(3000);
    });
    $("#btn1").on('mouseover', function() {
        $('#box1').fadeToggle(500)
    });
    $("#btn2").on('mouseover', function() {
        $('#box2').fadeToggle(500)
    });
    $("#btn3").on('mouseover', function() {
        $('#box3').fadeToggle(500)
    });
    $("#btn4").on('mouseover', function() {
        $('#box4').fadeToggle(500)
    });


});


// fadeIn(),fadeout(),fadeToggle(),hide()