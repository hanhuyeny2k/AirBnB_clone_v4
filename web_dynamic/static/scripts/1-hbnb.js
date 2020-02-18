$(document).ready(function(){
        let obj = {};
        $('input[type="checkbox"]').click(function(){
            
	    if($(this).is(":checked")){
	        obj[$(this).attr('data-name')] = $(this).attr('data-id');            
            } else {
                delete obj[$(this).attr('data-name')];
            }
	
	    if ($.isEmptyObject(obj)) {
	  	$('.amenities h4').html('&nbsp');
	    } else {
	  	$('.amenities h4').html(Object.keys(obj).join(', '));
	    }
        });
    });
