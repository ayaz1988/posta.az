
$( document ).ready(function() {
    // $(".under_menu_box").hover(function () {
    //     $(this).find(".under_menu").toggleClass("active");
    // });



});
$('.main_slider .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2400,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.small_slider_container .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    margin:10,
    // dost:true,
    autoplay:true,
    autoplayTimeout:2400,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});


let open_panel=document.querySelector("#open_panel");


open_panel.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel");

    search_panel.style="display:block";
    e.preventDefault()

});

let close=document.querySelector('#close_panel');
close.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel");
    search_panel.style="display:none";
    e.preventDefault()
})