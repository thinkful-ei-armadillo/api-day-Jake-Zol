'use strict';

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

});

store.items.push(Item.create('apples'));

// api.getItems()
//   .then(response => response.json())
//   .then(data => console.log(data));

console.log(api.BASE_URL);
