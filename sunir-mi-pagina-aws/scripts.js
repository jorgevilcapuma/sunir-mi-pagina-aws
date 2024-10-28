var counter = 0,
    $items = $('.js-slideshow figure'),
    numItems = $items.length;

// show current, hide others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
   
  $items.removeClass('show');
  $items.eq(itemToShow).addClass('show');    
};

// click for next or previous image
$('.next').on('click', function(){
    counter--;
    showCurrent(); 
});
$('.previous').on('click', function(){
    counter++;
    showCurrent(); 
});

// TouchScreen Options 
if('ontouchstart' in window){
  $('.js-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}