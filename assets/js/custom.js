
  $(document).ready(function(){

    var scrollTrigger = 500; 

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollTrigger) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
        if ($(this).scrollTop() > 50){  
           $('.navbar').addClass("fixed");
        }
        else{
            $('.navbar').removeClass("fixed");
        }
    });

    $('#toTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    var sectionIds = $('a.nav-link');
  
    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
    
    $(window).resize(function() {
        checkWidth();
    });

    $('#navbarSupportedContent').on('shown.bs.collapse', function () {
      $('.fa-bars').hide();
      $('.fa-xmark').show();
  });

  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
      $('.fa-bars').show();
      $('.fa-xmark').hide();
  });

    $(function() {  
      $( "#accordion" ).accordion();  
    }); 
  
    $(function() {  
      $( "#accordion-2" ).accordion();  
    }); 

    var $marquee = $('.marquee-list');
    var $marqueeItems = $marquee.children('.content');
    var totalWidth = 0;
  
    $marqueeItems.each(function() {
        totalWidth += $(this).outerWidth(true);
    });

    $marquee.append($marquee.html());
  
    function animateMarquee() {
        $marquee.css({marginLeft: 0});
        $marquee.animate({ marginLeft: -totalWidth }, 20000, 'linear', function() {
            $marquee.css({marginLeft: 0});
            $marquee.find('.content').slice(0, $marqueeItems.length).appendTo($marquee);
            animateMarquee();
        });
    }
  
    animateMarquee();
      

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : true,
        dots: false,
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });

  function showContent(itemId, listItem) {
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => item.style.display = 'none');

    const listItems = document.querySelectorAll('#hospitalList li');
    listItems.forEach(item => item.classList.remove('active'));

    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.display = 'block';
    }

    listItem.classList.add('active');
}
