$('#bookking-form').on('submit', function(e){
  $('#booking-submission').modal('show');
  e.preventDefault();
});

$('#enquiry-form').on('submit', function(e){
  $('#enquiry-submission').modal('show');
  e.preventDefault();
});