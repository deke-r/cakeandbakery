$(document).ready(function() {
    // $(".navbar-brand").addClass("animate__animated animate__fadeInLeft");
    // $(".content").addClass("animate__animated animate__fadeInLeft");
    // $(".content").addClass("animate__animated animate__fadeInLeft");
    // $("#product-cards").addClass("animate__animated animate__fadeIn");
    // $(".product-cards2").addClass("animate__animated animate__fadeInUp");
    // $("#footer").addClass("animate__animated animate__fadeIn");
    // $("#gallary").addClass("animate__animated animate__slideInDown");
    // $(".container").addClass("animate__animated animate__fadeInLeft");





    $(window).scroll(function() {
            var positiontop = $(document).scrollTop();
            console.log(positiontop);
        })
        // if ((positiontop > 1500) && (positiontop < 2000)) {
        //     $("#card-one").addClass("animate__animated animate__flipInX");
        //     // $(".content").addClass("animate__animated animate__fadeInLeft");

    // }


    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 1300 && ($(window).scrollTop() < 1900)) {
            $("#card-one").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-two").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-three").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-four").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card-one").removeClass("animate__animated animate__flipInY");
            $("#card-two").removeClass("animate__animated animate__flipInY");
            $("#card-three").removeClass("animate__animated animate__flipInY");
            $("#card-four").removeClass("animate__animated animate__flipInY");

        }
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 1700 && ($(window).scrollTop() < 2200)) {
            $("#card-five").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-six").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-seven").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-eight").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card-five").removeClass("animate__animated animate__flipInY");
            $("#card-six").removeClass("animate__animated animate__flipInY");
            $("#card-seven").removeClass("animate__animated animate__flipInY");
            $("#card-eight").removeClass("animate__animated animate__flipInY");

        }

    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 2400 && ($(window).scrollTop() < 2700)) {
            $("#card-nine").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-ten").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-eleven").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");
            $("#card-twelve").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card-nine").removeClass("animate__animated animate__flipInY");
            $("#card-ten").removeClass("animate__animated animate__flipInY");
            $("#card-eleven").removeClass("animate__animated animate__flipInY");
            $("#card-twelve").removeClass("animate__animated animate__flipInY");

        }
    });




    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10 && ($(window).scrollTop() < 300)) {
            $("#content1").addClass("animate__animated animate__bounceInLeft").css("animation-delay", "250ms");


        } else {
            $("#content1").removeClass("animate__animated animate__bounceInLeft").css("animation-delay", "250ms");


        }
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 800 && ($(window).scrollTop() < 950)) {
            $("#content2").addClass("animate__animated animate__bounceInLeft").css("animation-delay", "500ms");


        } else {
            $("#content2").removeClass("animate__animated animate__bounceInLeft");


        }
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 2550 && ($(window).scrollTop() < 2900)) {
            $(".footer1").addClass("animate__animated animate__fadeInLeft").css("animation-delay", "250ms");


        } else {
            $(".footer1").removeClass("animate__animated animate__fadeInLeft");


        }
    });


    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 0 && ($(window).scrollTop() < 200)) {
            $(".navbar-brand").addClass("animate__animated animate__fadeInLeft").css("animation-delay", "250ms");


        } else {
            $(".navbar-brand").removeClass("animate__animated animate__fadeInLeft");


        }
    });




    // Gallery section-----------------------------------
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 150 && ($(window).scrollTop() < 350)) {
            $(".footer2").addClass("animate__animated animate__fadeInLeft").css("animation-delay", "250ms");


        } else {
            $(".footer2").removeClass("animate__animated animate__fadeInLeft");


        }
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20 && ($(window).scrollTop() < 150)) {
            $("#card01").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card01").removeClass("animate__animated animate__flipInY");


        }
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20 && ($(window).scrollTop() < 150)) {
            $("#card02").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card02").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20 && ($(window).scrollTop() < 150)) {
            $("#card03").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card03").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50 && ($(window).scrollTop() < 180)) {
            $("#card04").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card04").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50 && ($(window).scrollTop() < 180)) {
            $("#card05").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card05").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50 && ($(window).scrollTop() < 180)) {
            $("#card06").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card06").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 80 && ($(window).scrollTop() < 210)) {
            $("#card07").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card07").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 80 && ($(window).scrollTop() < 210)) {
            $("#card08").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card08").removeClass("animate__animated animate__flipInY");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 80 && ($(window).scrollTop() < 210)) {
            $("#card09").addClass("animate__animated animate__flipInY").css("animation-delay", "250ms");


        } else {
            $("#card09").removeClass("animate__animated animate__flipInY");


        }
    });
    // Gallery section-----------------------------------


    // cart section------------------------------
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20 && ($(window).scrollTop() < 150)) {
            $(".table").addClass("animate__animated animate__bounceInLeft");


        } else {
            $(".table").removeClass("animate__animated animate__bounceInLeft");


        }
    });
    // cart section------------------------------


    // about us------------------------------------------
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20 && ($(window).scrollTop() < 190)) {
            $(".footer2").addClass("animate__animated animate__fadeInLeft");


        } else {
            $(".footer2").removeClass("animate__animated animate__fadeInLeft");


        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 0 && ($(window).scrollTop() < 190)) {
            $("#about").addClass("animate__animated animate__backInRight");


        } else {
            $("#about").removeClass("animate__animated animate__backInRight");


        }
    });
    // about us------------------------------------------


    // contact us-------------------------------
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 0 && ($(window).scrollTop() < 150)) {
            $(".footer3").addClass("animate__animated animate__fadeInLeft");


        } else {
            $(".footer3").removeClass("animate__animated animate__fadeInLeft");


        }
    });



});