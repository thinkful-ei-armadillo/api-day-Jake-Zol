'use strict';

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));

      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'foo' });
      console.log('new name: ' + item.name);

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


console.log(api.BASE_URL);
