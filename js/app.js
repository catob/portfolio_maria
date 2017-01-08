$(document).ready(function(){
  $('#contact-modal').on('shown.bs.modal', function () {
    $('#contact-modal').focus()
  });

  var $contactForm = $('#contact-form');

  $contactForm.submit(function(e) {
    e.preventDefault();
    var $submit = $('input:submit', $contactForm);
    var defaultSubmitText = $submit.val();

    $.ajax({
      url: '//formspree.io/cato.benjaminsen@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data) {
        $('#contact-modal').modal('hide');
      },
      error: function(err) {
      }
    });
  });
});