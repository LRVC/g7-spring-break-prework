$('.content').hover(function() {
      $(this).stop().animate({ fontSize : '40px' });
},
function() {
      $(this).stop().animate({ fontSize : '12px' });
});
