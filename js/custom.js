$(function(){
      $('.counter').counterUp({
        delay: 10,
        time: 3000
      });

  
      $('.sponser-main').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
          responsive: [
            {
              breakpoint: 576.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
          ]
        });
        var containerEl = document.querySelector('.Rokibul');

        var mixer = mixitup(containerEl);
        var containerEl = document.querySelector('.Rokibul-2');

        var mixer = mixitup(containerEl);                
})