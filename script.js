'use strict';

// API - https://icanhazdadjoke.com/api - the largest selection of dad jokes on the internet

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const urlFetch = 'https://icanhazdadjoke.com';

// // async - await
const generateJoke = async function () {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch(urlFetch, config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
};

// // .then()
// const generateJoke = function () {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch(urlFetch, config)
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke;
//     });
// };

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
