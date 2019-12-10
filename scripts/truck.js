(function(window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order) { //accepts a list {emailAddress, coffee (as key values)}
    console.log('Adding order for ' + order.emailAddress);
    return this.db.add(order.emailAddress, order.coffee);
  }

  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delivering order for ' + customerId);
    return this.db.remove(customerId);
  }

  Truck.prototype.printOrders = function (printFn) {
    return this.db.getAll()
    .then(function(orders) {
      //var customerIdArray = Object.keys(this.db.getAll()); //p. 183
      var customerIdArray = Object.keys(orders); //p. 284

      console.log('Truck #' + this.truckId + ' has pending orders:');
      customerIdArray.forEach(function (id) {
        //console.log(this.db.get(id));
        console.log(orders[id]); //285
        if(printFn) {
          printFn(orders[id]);
        }
      }.bind(this));//callback functions consider 'this' undefined
    }.bind(this));

  }

  /* also can use:
  customerIdArray.forEach(function (id) {
    console.log(this.db.get(id));
  }, this);
  */

  App.Truck = Truck;
  window.App = App;
}(window));
