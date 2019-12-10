(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  //var tr = new Truck('duke\'s coffee truck', new DataStore());
  var tr = new Truck('duke\'s coffee truck', new DataStore());
  window.tr = tr; //export to global namespace for use by other functions in oher files
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(tr.deliverOrder.bind(tr));
  var formHandler = new FormHandler(FORM_SELECTOR);

  //old
  //formHandler.addSubmitHandler(tr.createOrder.bind(tr));

  //new-old
  //formHandler.addSubmitHandler(function(data) { //gets the data argument as a list/set of name-value tuple sets
  //  tr.createOrder.call(tr, data);
  //  checkList.addRow.call(checkList, data);
  //});

  //new with Promise/Deferred
  formHandler.addSubmitHandler(function(data) { //gets the data argument as a list/set of name-value tuple sets
    return tr.createOrder.call(tr, data)
      .then(function() {
        checkList.addRow.call(checkList, data);
      },
      function() {
        alert('Server unreachable. Try again later.');
      });
  });
  console.log(formHandler);

  document.addEventListener("DOMContentLoaded", function(event) {
    var level = document.getElementById('strengthLevel').value;
    document.getElementById('sliderValue').textContent = level;
  });

//this makes the email checking function work live through console output. without it, you cannot see what's after.
  formHandler.addInputHandler(Validation.isCompanyEmail);

  tr.printOrders(checkList.addRow.bind(checkList));

}(window));
