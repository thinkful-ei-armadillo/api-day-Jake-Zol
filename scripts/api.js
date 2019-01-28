'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jake-zol';
  const getItems = function() {
    const url = `${BASE_URL}/items`;
    return fetch(url)
      .then(response => response);
    //return Promise.resolve('A successful response!');
  };

  const createItem = function(name){
    let newItem = JSON.stringify({
      name
    });
    const url = `${BASE_URL}/items`;
    return fetch(url,
      { method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: newItem
      })
      .then(response => response);  
  };

  

  return {
    getItems,
    createItem

  };
}());



