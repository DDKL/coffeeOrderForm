To view the application's logic, view the console through Chrome by pressing Ctrl+Shift+J while on the webpage.

main.js will automatically instantiate a Truck object, 'tr', for testing purposes.
datastore.js contains the logic of the application. 
truck.js will access datastore.js's methods and act as an interface.
checklist.js contains handlers to add or remove rows of coffee orders. (clicking on an existing coffee order will remove the order from the list)
validation.js is optional; it will allow the food truck manager to accept only a certain domain name/email address.
formhandler.js adds handlers that will check for form validation (ie an email address is entered) and will listen for when the user clicks the submit button.


Try the available methods in the console:
tr.printOrders();
