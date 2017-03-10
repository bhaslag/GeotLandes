$(document).ready(function(){
  $('#imgBox2').click(function(){
    if ($('#imgBox2').hasClass('slide-down2')) {
      $('#imgBox2').addClass('slide-up2');
      $('#imgBox2').removeClass('slide-down2');
    }
    else {
      $('#imgBox2').removeClass('slide-up2');
      $('#imgBox2').addClass('slide-down2');
    }
  });

  $('#imgBox1').click(function(){
    if ($('#imgBox1').hasClass('slide-up1')) {
      $('#imgBox1').addClass('slide-down1');
      $('#imgBox1').removeClass('slide-up1');
    }
    else {
      $('#imgBox1').removeClass('slide-down1');
      $('#imgBox1').addClass('slide-up1');
    }
  });

});
