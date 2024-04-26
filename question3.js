//Question 3: Use rest countries API URL to print countries name, regions, sub-region
// and populations 

// create a xhr object for XMLHttpRequest
var xhr = new XMLHttpRequest();

//user open() method to get the data from the API URL: https://restcountries.com/v3.1/all
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

// use onload event and fucntion to manipulate the data obtained from the API URL
xhr.onload = function() {
    var out = JSON.parse(xhr.responseText);
    for(var i = 0; i<out.length; i++)
    {
        var country = out[i].name.common;
        var official = out[i].name.official;
        var region = out[i].region;
        var sub = out[i].subregion;
        var population = out[i].population;
        
        console.log("Country: " + country + ", Official Name: " + official + ", Region: " + region + ", Sub-Region: " + sub + ", Population: " + population);
    }

}

// Send request or establishing bridge with the server
xhr.send();