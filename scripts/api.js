'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jake-zol';
  const getItems = function() {
    return Promise.resolve('A successful response!');
  };
  return {
    getItems
  };
}());



