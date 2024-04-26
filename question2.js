// Question 2: Use rest countries API URL and display all the country flag
// on the console

// create a xhr object for XMLHttpRequest
var xhr = new XMLHttpRequest();

//user open() method to get the data from the API URL: https://restcountries.com/v3.1/all
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

// use onload event and fucntion to manipulate the data obtained from the API URL
xhr.onload = function() {
    if(xhr.status === 200)
    {
        var output = JSON.parse(xhr.responseText);
        for(var i = 0; i<output.length; i++)
        {
            console.log("Country Flags URL: ", output[i].flags);
            // console.log("Flag image in png format: ",output[i].flags.png);
            // console.log("Flag image in svg format", output[i].flags.svg);
            // console.log("Flag description: ", output[i].flags.alt);
        }
    }
    else
    {
        console.log("Error in connection", xhr.status);
    }
}

// Send request or establishing bridge with the server
xhr.send();


