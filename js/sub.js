$(document).ready(function(){

    $(".spon_tab_menu>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();
        $(".spon_tab_contents>li").stop().fadeOut(300);
        $(".spon_tab_contents>li").eq(list).stop().fadeIn(300);

        $(".spon_tab_menu>li").removeClass("active");
        $(".spon_tab_menu>li").eq(list).addClass("active");
    });

    let i = 0;
    let count = $(".wrap_nanum>div").length;

    // $(".wrap_nanum>div").click(function(){
    //     if(i == count-1){
    //         i = 0;
    //     }else{
    //         i++;
    //     }
    //     show();
    // });
    $(".wrap_nanum").mouseenter(function(){
        clearInterval(autoSlide);
    });
    $(".wrap_nanum").mouseleave(function(){
            autoSlide = setInterval(function(){
            if(i == count-1){
                i = 0;
            }else{
                i++;
            }
            show();
        }, 3000);
    });


    // let autoSlide = setInterval(function(){
    //     if(i == count-1){
    //         i = 0;
    //     }else{
    //         i++;
    //     }
    //     show();
    // },3000);

    function show(){
        $(".wrap_nanum>div").stop().fadeOut();
        $(".wrap_nanum>div").eq(i).stop().fadeIn();
    }

    $(".spon_tab_menu_mb>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();
        $(".spon_tab_contents>li").stop().fadeOut(300);
        $(".spon_tab_contents>li").eq(list).stop().fadeIn(300);

        $(".spon_tab_menu_mb>li").removeClass("touch");
        $(".spon_tab_menu_mb>li").eq(list).addClass("touch");
    });


    $(".spon_mp4_gr").click(function(){
        if($(this).hasClass("doing")){
            $(".spon_mp4_gr").removeClass("doing").siblings().slideUp();
        }else{
            $(".spon_mp4_gr").removeClass("doing").siblings().slideUp();
            $(this).addClass("doing").siblings().slideDown();
        }
    });





});