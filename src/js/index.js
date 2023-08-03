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

  ////////// current state \\\\\\\\\\
  let _current = {
    name: '',
  };

  const current = {
    get() {
      return _current;
    },
    set(v) {
      _current = v;
    },
  };

  return {
    api, // api_key isn't needed to make things less complicated
    unit,
    current,
  };
})();

// Call to fetch data
const Request = (() => {
  const weather = (city) => {
    // ignore if user search the same input
    if (Info.current.get().name === city) return;
    fetch(`http://api.weatherapi.com/v1/current.json?key=fad6a35f4297467f9ca111534232707&q=${city}`, { mode: 'cors' })
      .then((response) => {
        // check if bad request
        if (response.status !== 200) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .then((data) => {
        // extract data
        const { name, country, localtime_epoch } = data.location;
        const { text, icon, code } = data.current.condition;
        const { temp_c, temp_f, wind_kph, wind_mph, wind_degree, humidity, feelslike_c, feelslike_f, uv } = data.current;

        // exchange local epoch time
        const now = new Date(localtime_epoch * 1000).toLocaleString().split(', ');
        const [date, time] = [...now];

        const obj = {
          uv,
          text,
          icon,
          code,
          name,
          date,
          time,
          temp_c,
          temp_f,
          country,
          wind_kph,
          wind_mph,
          humidity,
          wind_degree,
          feelslike_c,
          feelslike_f,
        };

        Info.current.set(obj);
        // console.table(obj);
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
  const themeBtn = document.querySelector('.unit .change_theme');
  const unitBtn = document.querySelector('.unit .change_unit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Request.weather(input.value);
    input.value = '';
  });

  const toggleOnOff = (element) => {
    // const span = element.querySelector('span');
    const text = element.textContent;
    if (text === ' toggle_on ') {
      element.textContent = ' toggle_off ';
    } else {
      element.textContent = ' toggle_on ';
    }
  };

  // leave this feature for later
  themeBtn.addEventListener('click', (e) => {
    toggleOnOff(e.target);
  });

  unitBtn.addEventListener('click', (e) => {
    toggleOnOff(e.target);
    Info.unit.toggle();
  });

  window.addEventListener('DOMContentLoaded', (e) => {
    Request.weather('Ho Chi Minh');
  });
})();
