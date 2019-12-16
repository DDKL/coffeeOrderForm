To view the application's logic, view the console through Chrome by pressing <i>Ctrl+Shift+J</i> while on the webpage.

<table>
  <tr>
    <th>File</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><b>main.js</b></td>
    <td><i>automatically instantiate a Truck object, 'tr', for testing purposes.</i></td>
  </tr>
  <tr>
    <td><b>datastore.js</b></td>
    <td><i>contains the logic of the application</i></td>
  </tr>
  <tr>
    <td><b>truck.js</b></td>
    <td><i>access datastore.js's methods and act as an interface</i></td>
  </tr>
  <tr>
    <td><b>checklist.js</b></td>
    <td><i>contains handlers to add or remove rows of coffee orders. (clicking on an existing coffee order will remove the order from the list)</i></td>
  </tr>
  <tr>
    <td><b>validation.js</b></td>
    <td><i>optional; it will allow the food truck manager to accept only a certain domain name/email address</i></td>
  </tr>
  <tr>
    <td><b>formhandler.js</b></td>
    <td><i>adds handlers that will check for form validation (ie an email address is entered) and will listen for when the user clicks the submit button</i></td>
  </tr>
</table>



Try the available methods in the console:
tr.printOrders();
