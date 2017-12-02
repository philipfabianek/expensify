//
// Object destructuring
//

// const person = {
//     "name": "Philip",
//     "age": 15,
//     "location": {
//         city: "Brno",
//         temp: 5
//     }
// }
//
// const { name: firstName = "Tony", age } = person;
// const { city, temp: temperature } = person.location;
//
// console.log(`${firstName} is ${age} years old.`);
//
// if (city, temperature) {
//     console.log(`He lives in ${city}. The temperature there is currently ${temperature}°C.`);
// }

// const book = {
//     title: "Spaceman of Bohemia",
//     author: "Jaroslav Kalfař",
//     publisher: {
//         name: "Yo Gotti"
//     }
// }
//
// const { title, author } = book;
// const { name: publisherName = "Default publisher name" } = book.publisher;
//
// console.log(publisherName)

//
// Array destructuring
//

// const address = ["Sedlákova 19", "Brno", "Moravia", "60200"];
// const [, city = "NYC", region = "New York"] = address;
// console.log(`You are in ${city} in ${region}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}.`);
