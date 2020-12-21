# World Clock 
![GitHub language count](https://img.shields.io/github/languages/count/sasi7392/worldclock?style=for-the-badge)


### *Desktop View*
![Desktop_demo](/images/desktopview1.png)


### *Mobile view*

![Mobile_demo](/images/mobileview1.png)
# Description

The page consists of two dropdown menu each one for the Country and the State.The state dropdown menu displays all states of the selected country.
As of now the page only shows time for **_two_** countries i.e., <span style="color:red"> **Afghanistan and United states of America**</span>.


# Usage
```javascript
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
```

# Future Scope
To support more countries.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
	
