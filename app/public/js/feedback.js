$(function() {
  $.getJSON('api', updateFeedback);

  var output = '';
  function updateFeedback(data) {

    $.each(data, function(key, item) {
        if (typeof(item) == 'object'){
          updateFeedback(item);
        }else {
          output += item + '<br>';
        }
    });

    $('.feedback-messages').html(output);

  }
})
