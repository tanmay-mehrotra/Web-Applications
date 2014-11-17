$(document).ready(function(){
  	$('#resturants').change(function () {
       $('#hotel_image').attr('alt',hotel_description($(this).val())[1]);
       $('#hotel_image').attr('src',hotel_description($(this).val())[0]);
  });
});

function hotel_description(name_of_resturant){
	switch(name_of_resturant) {
	    case 'Punjabi Mirchi':
	        return ['images/resturants/punjabi_rasoi.jpg',
	                'A great place for punjabi food'];
	        break;
	    case 'Pizza Hut':
	        return ['images/resturants/pizza_hut.jpg',
	                'Pizza a day keeps doctor away'];
	        break;
	    case 'Hyderabadi House':
	        return ['','Life is all about having biryani'];
	        break;
	    case 'Taco Bell':
	    	return ['','crispy tacos with beans ...way to go'];
	        break;
	    case 'default':
	        return ['',''];
	}
}