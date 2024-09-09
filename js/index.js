$(document).ready(function(){
    let i = 0
    let list = $(".bn_indi>li.indi_on").index();
    let count2 = $(".bn_indi>li").length;
    
    let count = $(".mission_bn>li").length;
    let point = $(".bn_indi>li").length;
    
    
    $(".spon_tab").click(function(){
        $(".spon_tab").toggleClass("tab_on");
        $(".tab_select").stop().slideToggle();
    });
    $(".tab_select>li").click(function(){
        let a = $(this).index();
        $(".spon_tab>li").hide();
        $(".spon_tab>li").eq(a).show();
    });
    $(".tab_select>li").click(function(){
        let b = $(this).index();
        $(".tab_select>li").removeClass("color");
        $(".tab_select>li").eq(b).addClass("color");
        $(".tab_select").stop().slideUp();
        $(".spon_tab").removeClass("tab_on");
    });
    $(".money_tab>li").click(function(){
        let b = $(this).index();
        $(".money_tab>li").removeClass("money_cover");
        $(".money_tab>li").eq(b).addClass("money_cover");
    });
    //--모바일버전

    $(".spon_tab_mob>li").click(function(){
        let c = $(this).index();
        $(".spon_tab_mob>li").removeClass("view");
        $(".spon_tab_mob>li").eq(c).addClass("view");
    });

    $(".spon_sum").click(function(){
        $(".money_tab>li").removeClass("money_cover");
    });
    //-----------------후원하기------------------//

    $(".mission_txt>li").hide();
    $(".mission_txt>li:first-child").show();

    setInterval(function(){
    $(".mission_txt>li:first-child").fadeOut().next().fadeIn().end(3000).appendTo(".mission_txt")
    }, 3000);

    setInterval(function(){
        if(i == count-1){
            i=0;
        }else{ i++;}
        show();
    }, 3000);

    function show(){
        $(".mission_bn").stop().animate({"margin-top":"-46vw"}, 1000, function(){
            $(".mission_bn>li").first().appendTo(".mission_bn");
            $(".mission_bn").css({"margin-top":"-23vw"});
        });
    }

    function animateCount($element) {
        $element.each(function () {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({ countNum: 0 }).animate(
            {countNum: countTo,},
            {duration: 1500, easing: 'linear', step: function () {
                $this.text(Math.floor(this.countNum));
                }, complete: function () {
                $this.text(this.countNum);
                },
            }
            );
        });
        }
    
      // 화면에 요소가 보이는지 확인하고 애니메이션을 시작하는 함수
        function checkIfInView() {
        var $count = $('.txt_move');
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var elementOffset = $count.offset().top;
        var distance = elementOffset - scrollTop;
    
        // 요소가 뷰포트 내에 있는지 확인
        if (distance <= windowHeight && distance >= 0) {
          animateCount($count); // 요소가 뷰포트에 보이면 애니메이션 시작
          $(window).off('scroll', checkIfInView); // 애니메이션이 시작되면 스크롤 이벤트를 해제
        }
        }
    
      $(window).on('scroll', checkIfInView); // 스크롤 이벤트 등록
      checkIfInView(); // 페이지 로드시 확인

      //--모바일버전

        setInterval(function(){
        if(i == count-1){
            i=0;
        }else{ i++;}
        mobShow();
    }, 3000);

    function mobShow(){
        $(".mission_bn_active").stop().animate({"margin-top":"-60vw"}, 1000, function(){
            $(".mission_bn_active>li").first().appendTo(".mission_bn_active");
            $(".mission_bn_active").css({"margin-top":"-30vw"});
        });
    }

    // ---------------------방향성---------------------------//

    let autoShow = setInterval(function(){
        $(".campain_bn>li:first-child").stop().fadeOut().next().fadeIn().end(1000).appendTo(".campain_bn")
        }, 4000);

        setInterval(function(){
            if(i == countTwo-1){
                i=0;
            }else{ i++; }
            point();
        });

    let autoSlide = setInterval(function(){
        if(i == count-1){
            i=0;
        }else{ i++;}
        slide();
    }, 4000);

    $(".stop").click(function(){
        clearInterval(autoShow);
        clearInterval(autoSlide);
    })

    $(".next").click(function(){
        $(".campain_bn>li:first-child").stop().fadeOut().next().fadeIn().end(1000).appendTo(".campain_bn");
        $(".slide_gr").stop().animate({"margin-left":"-66.6%"}, 300, function(){
            $(".slide_gr>li").first().appendTo(".slide_gr");
            $(".slide_gr").css({"margin-left":"-33.3%"});
        
        autoShow = setInterval(function(){
            $(".campain_bn>li:first-child").stop().fadeOut().next().fadeIn().end(1000).appendTo(".campain_bn")
            }, 3000);
    
            
        autoSlide = setInterval(function(){
            if(i == count-1){
                i=0;
            }else{ i++;}

            slide();
        }, 3000);
        });
    });

    let uu = 0;
    $(".bn_indi>li").click(function () {    
        uu = $(this).index();
        $(".bn_indi>li").removeClass("indi_on");
        $(".bn_indi>li").eq(uu).addClass("indi_on");
        $(".campain_bn>li").stop().fadeOut();
        $(".campain_bn>li").eq(uu).stop().fadeIn();
    });

    let autoIndi = setInterval(function(){
        if(list == count2-1){
            list=0;
        }else{ list++;}

        indi();
    }, 4000);

    function indi(){
        $(".bn_indi>li").removeClass("indi_on");
        $(".bn_indi>li").eq(list).addClass("indi_on");    
    }

    $(".bn_indi").mouseenter(function(){
        clearInterval(autoShow);
        clearInterval(autoSlide);
        clearInterval(autoIndi);
    });
    $(".bn_indi").mouseleave(function(){
        autoShow = setInterval(function(){
            $(".campain_bn>li:first-child").stop().fadeOut().next().fadeIn().end(1000).appendTo(".campain_bn")
            }, 3000);
        autoSlide = setInterval(function(){
            if(i == count-1){
                i=0;
            }else{ i++;}

            slide();
        }, 3000);
        autoIndi = setInterval(function(){
            if(list == count2-1){
                list=0;
            }else{ list++;}
    
            indi();
        }, 4000);
    });

    function slide(){
        $(".slide_gr").stop().animate({"margin-left":"-66.6%"}, 300, function(){
            $(".slide_gr>li").first().appendTo(".slide_gr");
            $(".slide_gr").css({"margin-left":"-33.3%"});
        });
    }

    //---------------------캠페인--------------------------------//
    

    let move = $(".model_slide>li").length;

    let autoModel = setInterval(function(){
        if(i == move-1){
            i = 0;
        }else{
            i++;
        }
        model();
    }, 2000);

    function model(){
        $(".model_slide").stop().animate({"margin-left":"-56%"}, 1000, function(){
            $(".model_slide>li").first().appendTo(".model_slide");
            $(".model_slide").css({"margin-left":"-27.5%"});
        });
    }
    function preModel(){
        $(".model_slide").stop().animate({"margin-left":"0%"}, 1000, function(){
            $(".model_slide>li").last().prependTo(".model_slide");
            $(".model_slide").css({"margin-left":"-27.5%"});
        });
    }


    $(".model_line>div").mouseenter(function(){
        clearInterval(autoModel);
    });
    $(".model_line>div").mouseleave(function(){
        autoModel = setInterval(function(){
            if(i == move-1){
                i = 0;
            }else{
                i++;
            }
            model();
        }, 2000);   
    });
    $(".right").click(function(){
        model();
    });
    $(".left").click(function(){
        preModel();
    });

    //-- 태블릿버전
        setInterval(function(){
        if(i == move-1){
            i = 0;
        }else{
            i++;
        }
        tabModel();
    }, 2000);

    function tabModel(){
        $(".tab_slide").stop().animate({"margin-left":"-39.3%"}, 1000, function(){
            $(".tab_slide>li").first().appendTo(".tab_slide");
            $(".tab_slide").css({"margin-left":"-19.25%"});
        });
    }

    // //-- 모바일버전
    setInterval(function(){
        if(i == move-1){
            i = 0;
        }else{
            i++;
        }
        mobModel();
    }, 2000);
    function mobModel(){
        $(".mob_slide").stop().animate({"margin-left":"-50%"}, 1000, function(){
            $(".mob_slide>li").first().appendTo(".mob_slide");
            $(".mob_slide").css({"margin-left":"0%"});
        });
    }
    // setInterval(function(){
    //     $(".mob_slide>li:first-child").fadeOut().next().fadeIn().end(100).appendTo(".mob_slide")
    //     }, 3000);


    //--------------------홍보대사---------------//
    setInterval(function(){
        if(i == move-1){
            i = 0;
        }else{
            i++;
        }
        sponDown();
        sponUp();
    }, 2500);

    function sponUp(){
        $(".slide_left").stop().animate({"margin-top":"-90%"}, 1000, function(){
            $(".slide_left>li").first().appendTo(".slide_left");
            $(".slide_left").css({"margin-top":"-45.5%"});
        });
    }
        function sponDown(){
            $(".slide_right").stop().animate({"margin-top":"-1%"}, 1000, function(){
                $(".slide_right>li").last().prependTo(".slide_right");
                $(".slide_right").css({"margin-top":"-45.5%"});
            });
    }

    //-- 태블릿버전
    setInterval(function(){
        if(i == move-1){
            i = 0;
        }else{
            i++;
        }
        tabUp();
        tabDown();
    }, 2500);

    function tabUp(){
        $(".tab_left").stop().animate({"margin-top":"-99%"}, 900, function(){
            $(".tab_left>li").first().appendTo(".tab_left");
            $(".tab_left").css({"margin-top":"-49%"});
        });
    }
        function tabDown(){
            $(".tab_right").stop().animate({"margin-top":"1%"}, 900, function(){
                $(".tab_right>li").last().prependTo(".tab_right");
                $(".tab_right").css({"margin-top":"-49%"});
            });
    }

    // --모바일버전
    setInterval(function(){
        $(".mob_left>li:first-child").hide().next().show().end(100).appendTo(".mob_left")
        }, 2500);


});