//Question 1:
//We can compare two JSON objects with the help of JSON.stringify which is a static method converts 
// a JavaScript value to a JSON string, and sort() method which sorts the keys of the object in ascending order
//built upon converting elements into string.

let obj1 = {name: "Person1", age: "5"};
let obj2 = {age: "5", name: "Person1"};

var a = JSON.stringify(obj1, Object.keys(obj1).sort());
var b = JSON.stringify(obj2, Object.keys(obj2).sort());

if(a === b)
{
    console.log("The two JSON objects have the same properties");
}
else
{
    console.log("The two JSON objects have different properties");
}