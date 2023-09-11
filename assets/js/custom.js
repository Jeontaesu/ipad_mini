$(function(){
    //util-btn (max-width:833px ~ ) 클릭 이벤트
    const utilBtn = document.querySelector(".util-btn");
    const utilList = document.querySelector(".util-list");
    const gnbColor = document.querySelector(".gnb .common-inner");
    const stickyColor = document.querySelector(".sticky-nav .common-inner") ;


    utilBtn.addEventListener("click" , () => {
        utilList.classList.toggle("active");
        utilBtn.classList.toggle("active");
        gnbColor.classList.toggle("active");
        stickyColor.classList.toggle("active");
    });


    ////sticky-nav scroll(sc-expo) background 변경 (반응형 설정)
    $(window).resize(function(){ 
        if (window.innerWidth > 1799) {  // 다바이스 크기가 1799이상일때 

        /* 스크립트내용*/ 
        var scExpo = jQuery('.sc-expo').offset();
        jQuery(window).scroll(function() {
            if (jQuery(document).scrollTop() > scExpo.top) {
                jQuery('.sticky-nav').addClass('opt');
            } else {
                jQuery('.sticky-nav').removeClass('opt');
            }
        });
        
        } else {
        
        /* 스크립트내용*/ 
        var scExpo = jQuery('.sc-design').offset();
        jQuery(window).scroll(function() {
            if (jQuery(document).scrollTop() > scExpo.top) {
                jQuery('.sticky-nav').addClass('opt');
            } else {
                jQuery('.sticky-nav').removeClass('opt');
            }
        });
        
        }
        
        }).resize(); 


    //scrollTrigger 반응형
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.saveStyles(".sc-hero");
    ScrollTrigger.saveStyles(".sc-expo");

    ScrollTrigger.matchMedia({
        "(min-width: 1800px)": function() {
            /* sc-hero */
            gsap.to('.sc-hero',{
                scrollTrigger:{
                    trigger:".sc-hero",
                    start:"0% 10%",
                    end:"100% 50%",
                    // markers:true,
                    scrub:0,
                },
                ease:'none',
                'clip-path': 'inset(52px round 30px)'
            })

            //sc-hero 비디오 컨트롤
            gsap.set('.sc-hero .hero-desc .title',{
                yPercent:20,
                scale:0.9
            })
            intro=gsap.timeline({})

            intro.to('.sc-hero .hero-title .hero-title-svg',{
                delay:1,
                opacity:0, 
                onComplete:function(){
                    $('.sc-hero video').get(0).play()
                }
            })
            .to('.sc-hero .hero-desc .title',{
                delay:2.5,
                opacity:1, 
                visibility:'visible',
                yPercent:0,
                scale:1
            })

            /* sc-expo */
            gsap.to('.sc-expo',{
                scrollTrigger:{
                    trigger:".sc-expo",
                    start:"0% 50%",
                    end:"10% 50%",
                    // markers:true,
                    scrub:1,
                },
                'clip-path': 'inset(0px round 0px)'
            })
            document.querySelectorAll('.sc-expo .expo-item').forEach(element => {
                gsap.from(element,{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 90%",
                        end:"100% 80%",
                        // markers:true,
                        scrub:0,
                    },
                    opacity:0,
                })
            })
        },
    
        "(max-width: 1799px)": function() { 
            /* sc-hero */
            gsap.to('.sc-hero',{
                scrollTrigger:{
                    trigger:".sc-hero",
                    start:"0% 10%",
                    end:"100% 50%",
                    // markers:true,
                    scrub:1,
                },
                ease:'none',
                'clip-path': 'inset(0px round 0px)'
            })
            intro=gsap.timeline({})
            
            intro.to('.sc-hero .hero-title .hero-title-svg',{
                // delay:0,
                opacity:1, 
            });
        }, 
    
        "(max-width: 734px)": function() {
            
        }, 
    
        "all": function() {
        }
    
});

    /*
    .sc-camera .camera-video 버튼
     * get(0).play -> 비디오 재생
    */
    $('.btn-box').each(function(i,element){
        $('.btn-replay').on('click',function(){
          $('.btn-replay').hide();
        //   $('video').get(0).play();
          $('#movie').get(0).play();
          $('.btn-play').hide();
          $('.btn-stop').show();
        });
        $('.btn-play').on('click',function(){
        //   $('video').get(0).play();
          $('#movie').get(0).play();
          $('.btn-replay').hide();
          $('.btn-play').hide();
          $('.btn-stop').show();
        });
        $('.btn-stop').on('click',function(){
        //   $('video').get(0).pause();
          $('#movie').get(0).pause();
          $('.btn-replay').hide();
          $('.btn-play').show();
          $('.btn-stop').hide();
        });
        setInterval(function(){
          if($('#movie').prop("ended")){
            //영상종료 후 진행할 함수 입력
            $('.btn-replay').show();
            $('.btn-play').hide();
            $('.btn-stop').hide();
          }
        });
    });


    // sc-abbs 이미지 컨트롤 버튼
    $('.collection-controls .button-play-pause').click(function() {
      if ($('.button-play-pause').hasClass('icon-play')) {
          $('.button-play-pause').removeClass('icon-play');
          $('.collection-list').css('animation-play-state','running');
      } else {
          $('.button-play-pause').addClass('icon-play');
          $('.collection-list').css('animation-play-state','paused');
      }
    });




    // foot-nav -  menu-area ($lay-tablet) ~
    $('.menu-box-item').click(function(){

        if ($(this).hasClass('on')) {
            $('.menu-box-item').removeClass('on')

        } else {
            $('.menu-box-item').removeClass('on')
            $(this).addClass('on');
        }

    });

   

    // $(window).scroll(function(){
    //     curr = $(this).scrollTop();
    //     target = $('.section-expo').offset().top;

    //     if(curr >= target-$(window).height()){
    //         $('.sticky-nav').addClass('opt');
    //     }else{
    //         $('.sticky-nav').removeClass('opt');
    //     }
        
    // })
});

