// Object

// console.log('destructuring');

// const person = {
//     age: 22,
//     location: {
//         city: 'Krakow',
//         temp: 15
//     }
// };

// const { name = 'Anonymus', age } = person;
// const { city: cityName, temp } = person.location;
// console.log(`${name} is ${age}`);
// console.log(`It's ${temp} in ${cityName }`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//         city: 'Krakow'
//     }
// };

// const { name: publisherName = 'Self published' } = book.publisher;

// console.log(publisherName);

// Arrays

const adress = [
    '1299 S Juniper Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

const [, city, state = 'New York'] = adress;

console.log(`You are in ${city} ${state}`);


const item = [
    'Coffe (hot)',
    '2.00',
    '2.50',
    '3.00'
];

const [coffe, , medium] = item;

console.log(`A medium ${coffe} costs ${medium}`);
