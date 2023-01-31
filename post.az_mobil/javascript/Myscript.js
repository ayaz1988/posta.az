
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

  // search-panel_start
let open_panel=document.querySelector("#open_panel");


open_panel.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel");

    search_panel.classList.add("show");
    e.preventDefault()

});


let close=document.querySelector('#close_panel');
close.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel");
    search_panel.classList.remove("show");
    e.preventDefault()
})

let open_panel_2=document.querySelector("#open_panel_2");


open_panel_2.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel_2");

    search_panel.classList.add("show");
    e.preventDefault()

});

let close_2=document.querySelector('#close_panel_2');
close_2.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel_2");
    search_panel.classList.remove("show");
    e.preventDefault()
})

// End



   // mobile_menu_start

let Mobil=document.querySelector("#mobil_menu_icon");
Mobil.addEventListener("click",function (e){
    const open_m=document.querySelector("#mobil_menu_box");
   open_m.classList.add("open");

});

let Mobil_c=document.querySelector("#mobil_m_c_icon");
Mobil_c.addEventListener("click",function (e){
    const open_m=document.querySelector("#mobil_menu_box");
    open_m.classList.remove("open");

});

