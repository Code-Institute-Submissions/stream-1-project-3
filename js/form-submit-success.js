$(function() {
    $('#booking-form').on('submit', function(e){
    $('#booking-submission').modal('show');
    $(this).trigger("reset");
    e.preventDefault();
  });
  
  $('#enquiry-form').on('submit', function(e){
    $('#enquiry-submission').modal('show');
    $(this).trigger("reset");
    e.preventDefault();
  });
});