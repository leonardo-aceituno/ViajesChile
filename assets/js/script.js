$(document).ready(function () {



    // color al menu despues de la galeria
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $("#quienes-somos").offset().top - 50) {
            $("nav").addClass("color-fondo");
        } else {
            $("nav").removeClass("color-fondo");
        };
    });

    // ocultar tarjetas
    $("#tarjeta1").click(function () {
        $("#txt1").toggle("slow")
    })
    $("#tarjeta2").click(function () {
        $("#txt2").toggle("slow")
    })
    $("#tarjeta3").click(function () {
        $("#txt3").toggle("slow")
    })
    $("#tarjeta4").click(function () {
        $("#txt4").toggle("slow")
    })


    // smooth scrolling
    $('a[href*="#"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 200);
            }
        }
    });










})