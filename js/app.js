$(document).ready(function(){
  $('#contact-modal').on('shown.bs.modal', function () {
    $('#contact-modal').focus();
  });

  var $contactForm = $('#contact-form');

  $contactForm.submit(function(e) {
    e.preventDefault();
    var $submit = $('input:submit', $contactForm);
    var defaultSubmitText = $submit.val();

    $.ajax({
      url: '//formspree.io/marialkotti@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data) {
        thankYouMessage();
      },
      error: function(err) {
      }
    });
  });

  thankYouMessage = function() {
    var message = 'Thank you for your message. I will get back to you shortly.';
    $('#contact-form').remove();
    $('.modal-title').text(message);
    $('.modal-body').css({'padding': '0'});
    setTimeout(function() {
      $('#contact-modal').modal('hide');
    }, 3000);
  };
});