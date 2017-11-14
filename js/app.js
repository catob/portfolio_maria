$(document).ready(function(){

  var $contactForm = $('#contact-form');

  $contactForm.submit(function(e) {
    e.preventDefault();
    var $submit = $('input:submit', $contactForm);
    var defaultSubmitText = $submit.val();

    $.ajax({
      url: 'https://formspree.io/cato.benjaminsen@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data) {
        thankYouMessage();
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

  var thankYouMessage = function() {
    _setContainerHeight();
    $('#contact-form').hide();
    $('.message').removeClass('hidden');
  }

  var _setContainerHeight = function() {
    var height = $('.contact').height();
    $('.contact').css({'min-height': height + "px"});
  }

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