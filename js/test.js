$('#slideshow > *:first').addClass('active');
    
$('#slideshowContainer #next').click(function(e) {
  e.preventDefault();

  $('#slideshow > .active').fadeOut('slow');
    
  var index = $('#slideshow > *.active').index();
      
  if(index === $('#slideshow > *').size() -1) {
    index = -1;
  }
      
  $('#slideshow > .active').removeClass('active');
      
  var nextSlide = $('#slideshow > *').get(index + 1);  
  $(nextSlide).addClass('active');
      
  $('#slideshow > .active').fadeIn('slow');
});
    
$('#slideshowContainer #prev').click(function(e) {
  e.preventDefault();

  $('#slideshow .active').fadeOut('slow');
    
  var index = $('#slideshow img.active').index();
  
  if(index === 0) {
    index = $('#slideshow img').size();
  }
      
  $('#slideshow .active').removeClass('active');
      
  var prevSlide = $('#slideshow img').get(index - 1);  
  $(prevSlide).addClass('active');
      
  $('#slideshow .active').fadeIn('slow');
});
