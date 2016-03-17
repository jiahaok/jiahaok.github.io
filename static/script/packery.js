var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  percentPosition: true
});

// layout Packery after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.packery();
});

var $grid_width = $('.grid-item').width();
$('.grid-item').css({'height': $grid_width+'px'});