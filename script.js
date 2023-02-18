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

const flight = 'LH234';
const benedikt = {
  name: 'Benedikt Urcan',
  passport: 13123434,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH034';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 13123434) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, benedikt);
// console.log(flight);
// console.log(benedikt);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(benedikt);
checkIn(flight, benedikt);
