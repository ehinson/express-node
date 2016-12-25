$(function() {
  $.getJSON('api', updateFeedback);

  $('.nodex-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      name: $('#nodex-form-name').val(),
      email: $('#nodex-form-email').val(),
      comment: $('#nodex-form-comment').val()
    }, updateFeedback);
  });

  $('.feedback-messages').on('click', function (e) {
    if(e.target.className == 'delete'){
      console.log("delete");
      $.ajax({
        url: 'api/' + e.target.id,
        type: 'DELETE',
        success: updateFeedback
      })
    }
  })


  function updateFeedback(data) {
    var output = '';
    $.each(data, function(key, item) {
        output += '<h4>' + item.name + '</h4>';
        output += '<p>' + item.email + '</p>';
        output += '<p>' + item.message + '</p>';
        output += '<p> <button class="delete" id="delete-comment-'+ key+ '">delete</button></p>';
    });

    $('.feedback-messages').html(output);

  }
})
