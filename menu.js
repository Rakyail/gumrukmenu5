$(document).ready(function(){
  $('.btn-link').on('click', function(e){
      e.preventDefault(); // Sayfanın en üstüne gitmeyi engelle
      var target = $($(this).attr('data-target'));
      target.collapse('toggle'); // Collapse'ı aç/kapat
      target.on('shown.bs.collapse', function () {
          var offset = target.offset().top - 160; // Hedefin pozisyonunu al ve 50 piksel aşağı kaydır
          $('html, body').animate({
              scrollTop: offset
          }, 1000);
      });
  });
});
