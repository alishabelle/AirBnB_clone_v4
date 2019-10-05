$(function () {
  const amen = {};
  if ($('input[type=checkbox]').prop(':checked')) {
    amen[$(this).data('id')] = $(this).data('name');
  } else {
    delete amen[$(this).data('id')];
  }
  const vals = Object.values(amen);
  if (vals.length > 0) {
    $('.amenities > h4').text(vals.join(', '));
  }
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    }
  });
  $.ajax({
      type: "POST",
      url: "http://0.0.0.0:5001/api/v1/places_search",
      contentType: "application/json",
      data: "{}"
  }):
});
