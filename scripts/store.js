'use strict';
/* global Item api */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  
  const addItem = function(item) {
    try {
      this.items.push(item);
    } catch(e) {
      console.log(e.message);
    }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData){
    const item = this.items.find(item => item.id === id);
    Object.assign(item, newData);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };


  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
