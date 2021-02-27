$(document).ready(()=>{
    let togge_menu = $('header .header_navi .togge');
    togge_menu.on('click',function(){
        $(this).find('ul').stop().slideToggle();
       $(this).toggleClass('quay_active');
    })

    
    let search_click = ()=>{
        let search = $('header .header_info .search img');
        search.on('click',function(){
            $('header .header_info .search').toggleClass('search_active');
        })
    }
    search_click();

   let menu_click = ()=>{
        let menu = $('header .header_info .btn_menu');
        menu.on('click',function(){
            $('.menu').addClass('menu_active');
            $('.bg-dark').addClass('show');
            $('.home2page').addClass('day');
        });

        let close_menu = $('.menu .menu_top .btn_menu-d');
        close_menu.on('click',function(){
            $('.menu').removeClass('menu_active');
            $('.bg-dark').removeClass('show');
            $('.home2page').removeClass('day');
        })

        let close_menubg = $('.bg-dark');
        close_menubg.on('click',function(){
            $('.menu').removeClass('menu_active');
            $('.bg-dark').removeClass('show');
            $('.home2page').removeClass('day');
        })
   }
   menu_click();

   //slide
   let slide =()=>{
        var slide = new Splide( '.splide',{
            arrows:false,
            drag:true,
            type   : 'loop',
            pagination:false,
            autoplay:true,
            interval:2000,
        } ).mount();
        
        slide.on('moved',(index)=>{
            if(index==0){
                $('.home2page .line-prog').css('width',33+'%');
                $('.home2page .work_progres .text span').html(index+1);
            }
            if(index==1){
                $('.home2page .line-prog').css('width',66+'%');
                $('.home2page .work_progres .text span').html(index+1);
            }
            if(index==2){
                $('.home2page .line-prog').css('width',100+'%');
                $('.home2page .work_progres .text span').html(index+1);
            }
        })
   }
   slide();

   //let backtotop
   let backtotop = ()=>{
        let backToTop_click = $('footer .btn_backtotop');
        backToTop_click.on('click',function(){
            window.scrollBy({
            top: -document.body.offsetHeight,
            behavior: "smooth",
            })
        })
    }
   backtotop();
   // sign
   let sign = ()=>{
    $(document).on('scroll',function(){
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop >= 3933){
            $('.home2page .sign_d-box svg path').css('opacity','1');
            $('.home2page .sign_d-box svg path').css('animation','sign 1s cubic-bezier(0,0.23,1,.1)');
        }
    })
}
sign();


   //scroll trigger
   let sscroll = ()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.home2page .wrapper .sign_d-box',{
        scrollTrigger:{
            trigger:".home2page .wrapper .sign_d-box",
            toggleActions:"restart pause reverse pause"
        },
        
        y:50,
        opacity:1,
        //rotation:360,
        duration:1
    });
}
sscroll();

})
