'use strict';

// console.log('Hello, World! From index.js');

const factory = (() => {
  return {};
})();

const display = (() => {
  return {};
})();

const data = (() => {
  return {};
})();

const app = (() => {
  return {};
})();

const listener = (() => {
  return {};
})();

const result = document.querySelector('#result');
const API_KEY = 'fad6a35f4297467f9ca111534232707';

let city = 'London';

// fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`, { mode: 'cors' })
//   .then((response) => {})
//   .then((data) => {})
//   .catch((err) => {
//     console.log(err);
//   });

fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`, { mode: 'cors' })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.current);
    console.log(data.location);
  })
  .catch((err) => {
    console.log(err);
  });
