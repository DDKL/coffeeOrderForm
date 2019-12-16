To view the application's logic, view the console through Chrome by pressing <i>Ctrl+Shift+J</i> while on the webpage.

<b>main.js</b> will automatically instantiate a Truck object, 'tr', for testing purposes.
<b>datastore.js</b> contains the logic of the application. 
<b>truck.js</b> will access datastore.js's methods and act as an interface.
<b>checklist.js</b> contains handlers to add or remove rows of coffee orders. (clicking on an existing coffee order will remove the order from the list)
<b>validation.js</b> is optional; it will allow the food truck manager to accept only a certain domain name/email address.
<b>formhandler.js</b> adds handlers that will check for form validation (ie an email address is entered) and will listen for when the user clicks the submit button.


Try the available methods in the console:
tr.printOrders();
