$(document).ready(e=>{
    // backtotop
    let backtotop = ()=>{
        $('footer .bot-right').on('click',e => {
            window.scrollBy({
                top: -document.body.offsetHeight,
                behavior: "smooth",
            })
        })
    }
    backtotop();
    //search show
    let show_search = ()=>{
        let btn_search = $('header .search .btn-search');
        btn_search.on('click',()=>{
            $('header .search input').toggleClass('input_show');
            $('header .phone').toggleClass('phone_push');
        })
    }
    show_search();

    //menu show
    let menu=()=>{
        let btn_menu = $('header .header .btn_menu-d');
        btn_menu.on('click',()=>{
            $('.menu').addClass('menu_active');
            $('.bg-dark').addClass('show');
            $('.homepage').addClass('homepage_active');
            $('.menu .btn_menu-d').addClass('active-d');
            $('.bg-black').addClass('active_bg');
        })

        let btn_menu_closed = $('.menu .btn_menu-d');
        btn_menu_closed.on('click',()=>{
            $('.menu').removeClass('menu_active');
            $('.bg-dark').removeClass('show');
            $('.homepage').removeClass('homepage_active');
            $('.bg-black').removeClass('active_bg');
        })

        let bg_click = $('.bg-dark');
        bg_click.on('click',()=>{
            $('.menu').removeClass('menu_active');
            $('.bg-dark').removeClass('show');
            $('.homepage').removeClass('homepage_active');
            $('.bg-black').removeClass('active_bg');
        })
    }
    menu();

    //scroll animation

    //hover img 
    Array.from(document.querySelectorAll('.wrapper .project .card_item-img')).forEach((e)=>{
        const imgs = Array.from(e.querySelectorAll('.wrapper .project .card_item-img img'));//.wrapper .project .card_item-img
        new hoverEffect({
            parent: e,
            intensity: 0.3,
            image1: imgs[0].getAttribute('src'),
            image2: imgs[1].getAttribute('src'),
            displacementImage: './img/hv-effect/10.jpg',
            easing:Expo.easeOut,
            imagesRatio:350/444
        });
    })

    //slide Customer
    var slide = new Splide( '.splide', {
        type   : 'loop',
        padding: {
            right: '25%',
            left : '25%',
        },
        arrows: false,
        //speed:.7,
        pagination:false
    } ).mount();
   
    //scroll animation
    let scroll_Ani =()=>{
        $(document).on('scroll',e=>{
            let index_scroll = document.documentElement.scrollTop;
            //console.log(index_scroll)
            if(index_scroll >= 600){
                $('.home .project .one').addClass('one_ani');
            }
            if(index_scroll >= 1220){
                $('.home .project .two').addClass('one_ani');
            }
            if(index_scroll >= 1656){
                $('.home .project .three').addClass('one_ani');
            }
            if(index_scroll >= 2400){
                $('.home .about .about_caption-des').addClass('des_ani2');
            }
        })
    }
    scroll_Ani();


    /*
    slide.on('moved',function(i,e){
        //e.addClass('item_active');
        
        if(i == 0){
            gsap.from('.wrapper .customer .slider .main',{
                duration:.6
            })
            gsap.to('.wrapper .customer .slider .main',{
                duration:.6
            })
        }
        else{
            //$('.wrapper .customer .slider .main').removeClass('item_active');
            gsap.from('.wrapper .customer .slider .main',{
                duration:1
            })
            gsap.to('.wrapper .customer .slider .main',{
                duration:1
            })
        }
        if(i == 1){
            //$('.wrapper .customer .slider .main').addClass('item_active');
            gsap.from('.wrapper .customer .slider .main',{
                duration:.6
            })
            gsap.to('.wrapper .customer .slider .main',{
                duration:.6
            })
        }
        else{
            //$('.wrapper .customer .slider .main').removeClass('item_active');
            gsap.from('.wrapper .customer .slider .main',{                skewX:-15,
                duration:1
            })
            gsap.to('.wrapper .customer .slider .main',{
                duration:1
            })
        }
        if(i == 2){
            //$('.wrapper .customer .slider .main').addClass('item_active');
            gsap.from('.wrapper .customer .slider .main',{
                duration:.6
            })
            gsap.to('.wrapper .customer .slider .main',{
                duration:.6
            })
        }
        else{
            //$('.wrapper .customer .slider .main').removeClass('item_active');
            gsap.from('.wrapper .customer .slider .main',{
                duration:1
            })
            gsap.to('.wrapper .customer .slider .main',{
                duration:1
            })
        }
        
    })
    //gsap scrollTrigger 
    gsap.registerPlugin(ScrollTrigger);    
    gsap.from('.home .wrapper .about .about_caption h2',{
        scrollTrigger:{
            trigger:".homepage .wrapper  .about .about_caption-des",
            toggleActions:"restart pause pause pause"
        },  
        x: -300,    
        opacity:1,
        duration:.8,
        delay:.6
    });
    gsap.to('.home .wrapper  .about .about_caption h2',{
        scrollTrigger:{
            trigger:".homepage .wrapper  .about .about_caption-des",
            toggleActions:"restart pause pause pause"
        },   
        x:0,   
        opacity:1,
        duration:.8,
        delay:.6
    });
    gsap.from('.home .wrapper  .about .about_caption p',{
        scrollTrigger:{
            trigger:".homepage .wrapper .about_caption",
            toggleActions:"restart pause pause pause"
        },      
        x:-300,
        opacity:0,
        duration:1,
        delay:.6
    });
    gsap.to('.home .wrapper  .about .about_caption p',{
        scrollTrigger:{
            trigger:".homepage .wrapper .about_caption",
            toggleActions:"restart pause pause pause"
        },
        x:0,
        opacity:1,
        duration:1,
        delay:.6
    });
    gsap.from('.home .wrapper  .about .about_caption .btn',{
        scrollTrigger:{
            trigger:".homepage .wrapper .about_caption",
            toggleActions:"restart pause pause pause"
        },      
        x:-300,
        opacity:0,
        duration:1,
        delay:.8
    });
    gsap.to('.home .wrapper  .about .about_caption .btn',{
        scrollTrigger:{
            trigger:".homepage .wrapper .about_caption",
            toggleActions:"restart pause pause pause"
        },
        x:0,
        opacity:1,
        duration:1,
        delay:.8
    });

*/
}) 
$(window).on('load',e=>{
    $('.loader-page .des').css('animation','run 3s 1 cubic-bezier(0,.29,.5,1.06)');
    setTimeout(function(){
        $('.loader-page').css('top','-100%');
        $('.loader-page').css('transition','top .6s linear');

    },3500)

    setTimeout(function(){
        $('.home .banner_caption-des').addClass('des_ani');
    },3700)
})
