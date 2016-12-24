$(function() {
  $.getJSON('api', updateFeedback);

  function updateFeedback(data) {
    var output = '';

    $.each(data, function(key, item) {
      $.each(item, function (key1, child) {
         output += child;
      })
    });

    $('.feedback-messages').html(output);

  }
})
