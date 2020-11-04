
let mobileNav = document.querySelector(".mobile-nav");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let homeMenu = document.querySelector(".home-menu");

//smooth scroll
function smoothScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
    });

    scroll.on('scroll', (obj) => {
       // console.log(obj.scroll.y)
        if(obj.scroll.y > 200){
            homeMenu.classList.add("close");
        }
        else if(obj.scroll.y < 200){
            homeMenu.classList.remove("close");
        }
    });

}
//end smooth scroll

// mobile menu
function mobileMenu(){
    let line1 = document.querySelector(".line1");
    let line2 = document.querySelector(".line2");
    let line3 = document.querySelector(".line3");

    hamburgerMenu.addEventListener("click",function(e){
        // mobileNav.classList.toggle("open");
        line1.classList.toggle("rotate");
        line2.classList.toggle("hidden");
        line3.classList.toggle("rotate");
        homeMenu.classList.toggle("close")
    })
}
//end mobile menu

// function servicesNav() {
//     let widthScroll = window.innerWidth < 415 ? 250 : 750;
//     gsap.to(".services-nav", {
//         width:widthScroll,
//         scrollTrigger:{
//             trigger:".home-projects",
//             start: 'top center',
//             end: 'top bottom',
//             scrub: true,
//     }});
// }
// function scrollSmallMenu(){
//     gsap.to(".home-menu", {
//         height:70,
//         width:90,
//         scrollTrigger:{
//             duration:.5,
//             trigger:".home-projects",
//             start: 'top center',
//             end: 'top bottom',
//             scrub: true,
//     }});
//     console.log("log")
// }


//hamburger menu hover////////////////////////////////

$(".home-menu ul li").hover(function() { // Mouse over
    $(this).siblings().stop().fadeTo(300, 0.3);
    $(this).parent().siblings().stop().fadeTo(300, 0.3);
  }, function() { // Mouse out
    $(this).siblings().stop().fadeTo(300, 1);
    $(this).parent().siblings().stop().fadeTo(300, 1);
  });

$(".content__right-nav li").hover(function() { // Mouse over
    $(this).siblings().stop().fadeTo(300, 0.3);
    $(this).parent().siblings().stop().fadeTo(300, 0.3);
}, function() { // Mouse out
    $(this).siblings().stop().fadeTo(300, 1);
    $(this).parent().siblings().stop().fadeTo(300, 1);
});

//nav content animation///////////
var timeline = new TimelineMax();
function navContent() {
    timeline.add(TweenMax.fromTo(".mobile-nav", 0.8 ,{
        y: "-100%",
        ease: Power4.easeInOut
    },
    {
        y:"0%",
        ease: Power4.easeInOut
    }, "-=1")).add(TweenMax.staggerFromTo(".stagger", 0.5, {
        autoAlpha: 0,
        y: "-20px"
    }, {
        autoAlpha: 1,
        y: "0px"
    },0.1));
    timeline.reverse();

}
navContent();
hamburgerMenu.addEventListener("click", function (e){
    e.stopPropagation();
    if (!timeline.isActive()) {
        console.log("isactive")
        timeline.reversed() ? timeline.restart().timeScale(1) : timeline.reverse().timeScale(1.8);
        // menu.toggleClass('is-clicked');
    }
})
//active link//

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    } else {document.links[0].className = 'active';}
}



//splitting//

function splitting (){
    Splitting({
        target: "[data-splitting]",
        key: null,
        by: 'words'
    });
    $('.word').wrapInner('<span class="word-inner"></span>');
}

// cursor
// let cursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", function(e){
//     cursor.style.top = e.pageY + 'px'
//     cursor.style.left = e.pageX + 'px'
// })

// detect device
function isMobile() {
    var mdDetect = new MobileDetect(window.navigator.userAgent);
    if (mdDetect.phone() !== null) {
        console.log("mobile")
        return true;
    } else {
        console.log('not mb')
        return false;
    }
}
isMobile();
//end detect device


window.addEventListener("load", function(){
    // scrollSmallMenu();
    mobileMenu();
    // navContent();
    // servicesNav();
    smoothScroll();
    splitting();
    // loading //

    let loading = document.querySelector(".loading");
    setTimeout(() => {
        loading.classList.add("close__loading")
    }, 1000);
})
