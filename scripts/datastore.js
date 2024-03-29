(function(window) {
  'use strict';
  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {
    console.log('running the DataStore function');
    this.data = {};
  }

  function promiseResolvedWith(value) {
    var promise = new Promise(function(resolve, reject) {
      resolve(value);
    });
    return promise;
  }


  return promise;

  DataStore.prototype.add = function(key, val) {
    //this.data[key] = val;

    return promiseResolvedWith(null);
  }

  DataStore.prototype.get = function(key) {
  //  return this.data[key];
    return promiseResolvedWith(this.data[key]);
  }

  DataStore.prototype.getAll = function() {
    //return this.data;
    return promiseResolvedWith(this.data);
  }

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  }

  App.DataStore = DataStore;
  window.App = App; //export App to global namespace so other modules can refer to it.
}(window));
