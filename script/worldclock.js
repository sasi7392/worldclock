var countriesName ;
var statesName;

/* Loads country names */
$.getJSON("script/data.json",function(result){
	countriesName+="<option value=select_country selected disabled>Select country</option>";
    $.each(result,function(i,country){
        countriesName+="<option value='"+country.code2+"'>"+country.name+"</option>";
	});
	$('#countries').html(countriesName);
	$('#states').html(statesName);
});

/* Loads states names on country change */
$("#countries").change(function(){
	var updatedStates;
	var countryCode = $(this).val();
	updatedStates+="<option value=select_state selected disabled>Select state</option>";
	$.getJSON("script/data.json",function(result){

		for (var i = 0; i < result.length; i++) {
			if (result[i].code2 == countryCode) {
				for(var j in result[i].states){
					updatedStates+="<option value='"+result[i].states[j].zone+"'>"+result[i].states[j].name+"</option>";
				}
			}
			$('#states').html(updatedStates);
		}
	})
});

/*timezone converstion*/
var offset;
$("#states").change(function(){
    offset = $(this).val();
    d = new Date();
    localTime = d.getTime();
    localOffset = d.getTimezoneOffset() * 60000;
    utc = localTime + localOffset;
    convertedTime = utc + (3600000 * offset);
    newDate = new Date(convertedTime);
    displayTime = newDate.toLocaleTimeString();
    console.log("newDate : "+newDate.toLocaleTimeString());
    $("#displayTime").html("<h4>"+displayTime+"</h4>");
});

