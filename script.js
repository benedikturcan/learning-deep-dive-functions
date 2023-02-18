'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassenger = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// const flight = 'LH234';
// const benedikt = {
//   name: 'Benedikt Urcan',
//   passport: 13123434,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH034';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 13123434) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, benedikt);
// // console.log(flight);
// // console.log(benedikt);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(benedikt);
// checkIn(flight, benedikt);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // this is a higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hey there');
// };

// document.body
//   .addEventListener('click', high5)

//   [('Benedikt', 'Alina', 'Sebastian')].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Benedikt');
// greeterHey('Steven');

// greet('Hello')('Benedikt');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Benedikt');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(234, 'Benedikt');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// call methode
const book = lufthansa.book;

book.call(eurowings, 23, 'Benedikt Urcan');
console.log(eurowings);

book.call(lufthansa, 56, 'Hagebert Lellek');
console.log(lufthansa);

const swissair = {
  airline: 'Swiss Airline',
  iataCode: 'SA',
  bookings: [],
};

book.call(swissair, 95, 'Angela Merkel');

// Apply methode
const flightData = [583, 'Benedikt Urcan'];
book.apply(swiss, flightData);
console.log(swiss);
