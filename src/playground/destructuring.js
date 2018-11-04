/*
const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name, age } = person;

console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

if (book.publisher) {
    const { name: publisherName = 'Self-Published' } = book.publisher;

    console.log(publisherName);
}

*/

const address = ['1299 S. Juniper Street', 'Philadelphia', 'Pennsylvasnia', '19147'];

const [ , city, state = 'New York' ] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mprice] = item;

console.log(`A medium ${name} costs ${mprice}`);