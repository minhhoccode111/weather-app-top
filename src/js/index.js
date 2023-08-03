'use strict';

const Info = (() => {
  const _API_KEY = 'fad6a35f4297467f9ca111534232707';

  const getKey = () => _API_KEY;

  let _city = 'Hanoi';

  const city = {
    get() {
      return _city;
    },
    set(v) {
      _city = v;
    },
  };

  return {
    city,
    getKey,
  };
})();

(() => {
  const form = document.querySelector('#header_search > form');
  const input = document.querySelector('#search_city');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.value = '';
  });

  fetch(`http://api.weatherapi.com/v1/current.json?key=${Info.getKey()}&q=${Info.city.get()}`, { mode: 'cors' })
    .then((response) => {
      // check if bad request
      if (response.status === 400) {
        throw new Error('Bad Request');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.current);
      console.log(data.location);
    })
    .catch((err) => {
      console.log(err);
    });
})();
