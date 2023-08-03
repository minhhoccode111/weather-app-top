'use strict';

// factory function
const Data = (initValue) => {
  let _value = initValue;

  const get = () => _value;
  const set = (v) => (_value = v);

  return {
    get,
    set,
  };
};

// App's state
const Info = (() => {
  //////////// api key \\\\\\\\\\
  const api = Data('fad6a35f4297467f9ca111534232707');

  //////////// Fahrenheit or Celsius \\\\\\\\\\
  let _unit = 'c';

  const unit = {
    get() {
      return _unit;
    },
    toggle() {
      _unit = _unit === 'c' ? 'f' : 'c';
    },
  };

  ////////// current city \\\\\\\\\\
  const city = Data('Ho Chi Minh');

  ////////// current humidity \\\\\\\\\\
  const humidity = Data('');

  ////////// current date \\\\\\\\\\
  const date = Data('');

  ////////// current time \\\\\\\\\\
  const time = Data('');

  ////////// current description \\\\\\\\\\
  const description = Data('');

  ////////// current temp \\\\\\\\\\
  const temp = Data('');

  ////////// current feelsLike \\\\\\\\\\
  const feelsLike = Data('');

  ////////// current icon \\\\\\\\\\
  const icon = Data('');

  ////////// current windSpeed \\\\\\\\\\
  const windSpeed = Data('');

  ////////// current chanceRain \\\\\\\\\\
  const chanceRain = Data('');

  return {
    // key, // api_key isn't needed to make things less complicated
    city,
    icon,
    unit,
    date,
    time,
    temp,
    humidity,
    windSpeed,
    chanceRain,
    description,
  };
})();

// Call to fetch data
const Request = (() => {
  const weather = (city) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=fad6a35f4297467f9ca111534232707&q=${city}`, { mode: 'cors' })
      .then((response) => {
        // check if bad request
        if (response.status !== 200) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .then((data) => {
        console.table(data.location);
        console.table(data.current);

        // extract data
        const { name, country, localtime } = data.location;
        const {} = data.current;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    weather,
  };
})();

const Display = (() => {
  //
  return {
    //
  };
})();

// Event Listeners
(() => {
  const form = document.querySelector('#header_search > form');
  const input = document.querySelector('#search_city');
  const themeBtn = document.querySelector('.unit change_theme');
  const unitBtn = document.querySelector('.unit change_unit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Request.weather(input.value);
    input.value = '';
  });

  window.addEventListener('DOMContentLoaded', (e) => {
    Request.weather('Ho Chi Minh');
  });
})();
