$(function(){
  //Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active')
    }
    else {
      $('header, .btn-top').removeClass('active')
    }
  })

  //Slick Slider - Epilogue
  $('.slider').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true
  })

  //Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('section, .gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
})