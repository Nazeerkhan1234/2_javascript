// OBJECT -> in JS  an object ia a collection data in key value pair
let obj = {} // object declaration
let object = {name : 'Nazeer', gender : 'male'}
console.log(object)

let captainAmerica = {
    name : "khan bhai",
    friends : ["nasir", " fazal"],
    address : {
        country : "india",
        state : "up",
        city : {
            cityName : "luckhnow",
            pincode : 272205
        },
    },
}

let city = captainAmerica.address.city.cityName
console.log(city);
delete captainAmerica.address.state // delete key
console.log(captainAmerica);