
//******* SLICKSLIDER *******

$(document).ready(function(){
  $('.slicker').slick({
    centerMode: true,
    variableWidth: true,
    draggable: false

  });
});
			

//******* QUOTES *******



$(document).ready(function() {
    function doFade() {
        $("#one").fadeIn(3000,function() {
            $("#one").fadeOut(6000).delay(3000);
            setTimeout(fadeTwo,6000);
        });
    }

    function fadeTwo() {
        $("#two").fadeIn(6000,function() {
            $("#two").fadeOut(6000).delay(3000);
            setTimeout(fadeThree,6000);
        });
    }

    function fadeThree() {
        $("#three").fadeIn(4000,function() {
            $("#three").fadeOut(6000).delay(3000);
            setTimeout(doFade,6000);
        });
    }
    doFade();
});


//******* MENU ACTIVE *******

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});