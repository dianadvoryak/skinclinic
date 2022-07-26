$(function() {

  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
    fade: true
  });
  $('.footer__carousel').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: true,
  });


  $('.q__title').on('click', function(){
    $(this).toggleClass('q__title-active');
    $(this).next().toggleClass('q__text-active');
  });



  // var options = {
  //   offset: 200
  // }
  //
  // var header = new Headhesive('.top-menu', options);

  
  $('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');

	});


});
