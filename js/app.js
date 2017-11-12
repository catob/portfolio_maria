$(document).ready(function(){

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

  var thankYouMessage = function() {
    var message = 'Thank you for your message. I will get back to you shortly.';
    $('#contact-form').remove();
    // $('.modal-title').text(message);
    // $('.modal-body').css({'padding': '0'});
    // setTimeout(function() {
    //   $('#contact-modal').modal('hide');
    // }, 3000);

  };

  $('a[href*="#"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          };
        });
      }
    }
  });
});