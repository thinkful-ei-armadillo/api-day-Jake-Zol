'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jake-zol';
  const getItems = function() {
    // const url = `${BASE_URL}/items`;
    // return fetch(url)
    //             .then(response => response);
    // return Promise.resolve('A successful response!');
  };

  return {
    getItems
  };
}());



