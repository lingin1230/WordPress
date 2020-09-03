



$('.move1').click(function(){
  $('html,body').animate({scrollTop:$('.moveTo1').offset().top},1000);
});

$('.move2').click(function(){
  $('html,body').animate({scrollTop:$('.moveTo2').offset().top},1000);
});

$('.move3,.move4').click(function(){
  $('html,body').animate({scrollTop:$('.moveTo3').offset().top},1000);
});
