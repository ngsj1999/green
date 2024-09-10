$(document).ready(function(){

    $(".hamberger").click(function(){
        $(".gnb_sidemenu").stop().animate({"right":"0%"});
    });
    $(".close").click(function(){
        $(".gnb_sidemenu").stop().animate({"right":"-100%"});
    });

    $(".list_aco").click(function(){
        $(this).stop().toggleClass("slide").siblings().slideToggle();
    });

    // --------------------햄버거 메뉴------------------------//
    
    $(".quick_btn").click(function(){
        $(".quick_menu").stop().fadeToggle();
    });

    $(".quick_btn_tab").click(function(){
        $(".quick_menu_tab").stop().fadeToggle();
    });
    // ---------------------퀵메뉴-----------------------//
    $(window).scroll(function(){
        let down = $("#footer").offset().top;
        console.log(down);
        let quick = $(document).scrollTop();

        if(quick > down-1000){
            $(".quick").stop().fadeOut();
        }else{
            $(".quick").stop().fadeIn();
        }
    });
    });