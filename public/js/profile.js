$('.sidenav').click(function(){
    var children = $('#buttons').children();
    for(var i=0; i<children.length; i++) {
	$(children[i]).removeClass('mactive');
    }
    $(this).addClass('mactive');
    
    var children = $('#panes').children();
    for(var i=0; i<children.length; i++) {
	$(children[i]).hide();
    }
    
    if($(this).text() == "Profile") {
	$('#profile-pane').show();
    }
    else if($(this).text() == "Partners") {
	$('#partners-pane').show();
    }
    else if($(this).text() == "Resources") {
	$('#resources-pane').show();
    }
    else if($(this).text() == "Statistics") {
	$('#statistics-pane').show();
    }

});
