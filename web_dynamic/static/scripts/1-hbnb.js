$(function () {
    let amen = {};
    if ($("input[type=checkbox]").prop(":checked")) {
	amen[$(this).data('id')] = $(this).data('name');
    } else {
	delete amen[$(this).data('id')];
    }
    let vals = Object.values(amen);
    if (vals.length > 0) {
      $('.amenities > h4').text(vals.join(', '));
    }
 });
