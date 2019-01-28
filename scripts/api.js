'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jake-zol';
  
  const getItems = function() {
    const url = `${BASE_URL}/items`;
    return fetch(url);
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
      }); 
  };

  const updateItem = function(id, updateData){
    const url = `${BASE_URL}/items/${id}`;
    return fetch(url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    });
  };

  const deleteItem = function(id){
    const url = `${BASE_URL}/items/${id}`;
    return fetch(url, {
      method: 'DELETE'
    });
  };



  return {
    getItems,
    createItem,
    updateItem,
    deleteItem

  };
}());



