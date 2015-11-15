// delay execution until load is complete
$(document).ready(function() {

$('#submit-btn').click(function(){

// this prevents submit button from refreshing the page
event.preventDefault();

// get value of #city-type input, correct for capitals
var city = $('#city-type').val();
$('city-type').val('');
city = city.toLowerCase().trim();

// if user inputs New York City, NYC, New York, change to CSS to class to 'nyc'
 if(city == 'new york city' || city == 'nyc' || city == 'new york') {
     $('body').attr('class','nyc');
 }

// if user inputs San Francisco, SF, Bay Area, change to CSS to class to 'sf'
 else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
     $('body').attr('class','sf');
 }

// if user inputs Austin, Austin Texas, ATX change to CSS to class to 'austin'
 else if (city == 'austin' || city == 'atx') {
     $('body').attr('class','austin');
}

// if user inputs Los Angeles, LA, LAX change to CSS to class to 'la'
 else if (city == 'los angeles' || city == 'la' || city == 'lax') {
     $('body').attr('class','la');
 }

// if user inputs Sydney, Syd change to CSS to class to 'sydney'
 else if (city == 'sydney' || city == 'syd') {
     $('body').attr('class','sydney');
}
});
});


