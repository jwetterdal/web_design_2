$(document).ready(function () {

    $('#searchbar').focus();
  
    $('#donate-buttons').on('click', '.btn-blue', function (e) {
      e.preventDefault();
      $('.active').removeClass('active');
      $('#other-input').hide().siblings('#other').show();
      $(this).filter('.btn-blue').addClass("active");
      var value = $(this).data('impact');
      $(this).closest('div').find('p').text("" + value);
      $('#other-input').find('input').val('');
    });
  
    $('.btn-green').on('click', function () {
      var dollar;
      var input = $('#other-input').find('input').val();
      if (!input) {
        dollar = $('.active').data('dollars');
      } else if ($.trim(input) === '' || isNaN(input)) {
  
        console.log('Yes');
        dollar = "Please enter a number.";
      } else {
        dollar = input;
      }
      $('#price').text("" + dollar);
    });
  
    $('#other').on('click', function (e) {
      e.preventDefault();
      var buttons = $(this).parent('#donate-buttons');
      buttons.find('.active').removeClass('active');
      var other = $(this).hide().siblings('#other-input');
      other.show();
      other.find('input').focus();
    });
  });
  
  $(".btn-green").click(function () {
    $(".hide").slideDown(1000);
  });
  
  $(".btn-green").click(function () {
    $(".donate-buttons").slideUp();
  });
  
  $(".continue").click(function () {
    $(".hide2").slideDown();
  });
  
  $(".continue").click(function () {
    $(".hide").slideUp();
  });
  