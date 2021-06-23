$(function() {
    $("#btn").on('click', function() {
        $("#card1").slideUp(2000).delay(1000).slideDown(3000).css({ color: "Darkblue" });
        $("#card2").fadeOut(2000).delay(1000).toggle(3000);

    })
});


// fadeIn(),fadeout(),fadeToggle(),hide()