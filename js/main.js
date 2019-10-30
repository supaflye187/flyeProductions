window.onload = function() {

    var src = "../img/flyeLogo.gif?p" + new Date().getTime();
    $("#logo").attr("src", src);

    //$('.content-holder').css('display', 'none');
    //$('.content-holder').fadeIn(300);
    //$('.content-holder').addClass('fade-in');
    // $('.cowts-navbar').addClass('slide-in');

 };

    function logoGif() {
        $("#logo").hover(
            function() {
                $(this).attr("src", "../img/flyeLogo.gif");
            },
            function() {
                $(this).attr("src", "../img/flyeLogo_static.png");
            }                         
        );                  
    }

    function init() {
        logoGif();
    }

    init();
