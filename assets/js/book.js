//js power

//indicator
let marker = document.querySelector('.marker');



function indicator(e){
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach(link =>{
  link.addEventListener("click",(e)=>{
    indicator(e.target);
  })
})






 $(".carousel").owlCarousel({
           margin: 20,
           loop: true,
           autoplay: true,
           autoplayTimeout: 5000,
           autoplayHoverPause: true,
           responsive: {
             0:{
               items:3,
               nav: true
             },
             600:{
               items:3,
               nav: true
             },
             1000:{
               items:3,
               nav: true
             }
           }
   });