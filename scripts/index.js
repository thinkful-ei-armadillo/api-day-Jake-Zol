'use strict';

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  

});

// this.items.push(item);
// store.addItem(item);

// api.getItems()
//   .then(response => response.json())
//   .then(data => console.log(data));


// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });


// console.log(api.BASE_URL);
