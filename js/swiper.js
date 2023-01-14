// var swiper = new Swiper(".card_slider", {
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 40,
//       },
//       900: {
//           slidesPerView: 2,
//       },
//       1200: {
//         slidesPerView: 2,
//         spaceBetween: 50,
//       },
//     },
//   });


var swiper = new Swiper(".card_slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      848: {
        slidesPerView: 2,
      }
    },
});