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

	$.getJSON('http://localhost:5001/api/v1/status/', function(body){
		if (body.status === 'OK'){
			$( "div#api_status" ).addClass( "available" );
		}
	});

	$.ajax({
		url: 'http://localhost:5001/api/v1/places_search/',
		type: 'POST',
		contentType: 'application/json',
		data: '{}',
		success: function (data) {
			let i;
			for (i = 0; i < data.length; i++) {
				$('section.places').append(htmlCode(data[i]));
			}
		}
	});
	function htmlCode (place) {
		return (
			`<article>
			  <div class="title">
			  <h2>${place.name}</h2>
			  <div class="price_by_night" style="min-width: 70px">
		        $${place.price_by_night}
				</div>
			  </div>
			  <div class="information">
			    <div class="max_guest">
			  <i class="fa fa-users fa-3x" aria-hidden="true"></i>
			  <br />
			  ${place.max_guest} Guests
			    </div>
			    <div class="number_rooms">
			  <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
			  <br />
			  ${place.number_rooms} Bedrooms
			    </div>
			    <div class="number_bathrooms">
			  <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
			  <br />
			  ${place.number_bathrooms} Bathroom
			    </div>
			  </div>
			  <div class="user">
			  </div>
			  <div class="description">
			    ${place.description}
			</div>
			</article>`);
  		}
	});
    });
