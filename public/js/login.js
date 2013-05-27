$('#hospital-name').typeahead({
    source: ["Hospital 1", "Hospital 2", "Hospital 3", "Hospital 4"]
});

$('#hospital-name').change(function() {
    $.get('/api/hospitals', function(data) {
	if(data.indexOf($('#hospital-name').val()) != -1) {
	    $('#ok').show();
	}
	else {
	    $('#ok').hide();
	}
    });
});

$('#login').click(function() {
    var _user = $('#hospital-name').val();
    var _pass = $('#password').val();
    

    $('<form action="/login" method="POST">' + 
    '<input type="text" name="username" value="' + _user + '">' +
    '<input type="password" name="password" value="' + _pass + '">' +
    '</form>').submit();

});
