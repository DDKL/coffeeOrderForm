(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) { //addSubmitHandler(tr.createOrder.bind(tr));
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data) //passes in the order in a set {}
      .then(function() {
        this.reset();
        this.elements[0].focus(); //p.223
      }.bind(this));
    });
  }

  FormHandler.prototype.addInputHandler = function(fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function(event) { //attaching a listener for the input event using jquery 'on' method
      var emailAddress = event.target.value; //extracting value of email field from the event.target object
      console.log(fn(emailAddress));
      var message = ' ';
      if(fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!'
        event.target.setCustomValidity(message);
      }
    });
  }


  App.FormHandler = FormHandler;
  window.App = App;
}(window));
