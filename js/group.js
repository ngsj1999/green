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
            $(".quick").hide();
        }else{
            $(".quick").show();
        }
    });

    //------------------------마우스-----------------------//
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10; // document의 x좌표값
        let mouseY = e.pageY + 10; // document의 y좌표값
    
        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    });