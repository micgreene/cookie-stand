//declare arrays needed to populate tables and variable to keep track of total sales of all locations
var locationsArray = [];
var hoursArray = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var hourlyTotalsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dailyTotalAllLocations = 0;
var tableFooter = document.createElement('tfoot');


//user input form logic for new store locations
var newStoreContainer = document.getElementById('newStoreContainer');

function addNewStoreToTable(event) {
  //prevents submitted info from disappearing
  event.preventDefault();

  //creates a var containing the new store location the user entered in lowercase form to check for duplicates in the 'locationsarray' object
  var newLocationName = event.target.name.value;
  newLocationName = newLocationName.toLowerCase();
  var duplicateValue = false;
  //searche the array for duplicate names using the lowercase version of the store locations contained in the object literals
  for (var j = 0; j < locationsArray.length; j++) {
    if (newLocationName !== locationsArray[j]. nameLowercase) {
      //if no duplicate is found, then report it as false....
      duplicateValue = false;
    }
    else if (newLocationName === locationsArray[j].nameLowercase){
      //....if so, then change this variabe to true
      duplicateValue = true;
    }
  }
  //if no duplicate is found, finish rendering the new store to the table...
  if (duplicateValue === false) {
    var newLoc = new NewLocation(event.target.name.value, event.target.maxCustomers.value, event.target.minCustomers.value, event.target.avgCookSale.value);
    newLoc.simulatedSalesDay();
    newLoc.pushSalesToTable();
    tableFooter.innerHTML = '';
    createTableFooter();
  }
  //...if so, then alert the user that this has occured instead of rendering new table
  else {
    alert('Warning: Duplicate Information Entered! Please only click "Submit" just ONCE!');
  }
}
newStoreContainer.addEventListener('submit', addNewStoreToTable);



//first function creates the table header element
function createTableHeader() {
  var table = document.getElementById('locations-list');
  var tableHeader = document.createElement('thead');
  table.appendChild(tableHeader);
  var tableRow = document.createElement('tr');
  tableHeader.appendChild(tableRow);
  var thCell = document.createElement('th');
  thCell.textContent = '';
  tableRow.appendChild(thCell);
  //for loop runs through the hours array to populate hour headings for table
  for (var i = 0; i < hoursArray.length; i++) {

    thCell = document.createElement('th');
    thCell.textContent = hoursArray[i];
    tableRow.appendChild(thCell);
  }
  //creates a final daily total heading
  thCell = document.createElement('th');
  thCell.textContent = 'Daily Total';
  tableRow.appendChild(thCell);
}
//invoke the header function
createTableHeader();


//constructor for store location objects
function NewLocation(name, maxCustomers, minCustomers, avgCookSale) {
  this.name = name;
  //this all lowercase var is created to give each store object a name that can be compared against new stores attempting to be made by the user to prevent duplicates
  this.nameLowercase = this.name.toLowerCase();
  this.maxCustomers = maxCustomers;
  this.minCustomers = minCustomers;
  this.avgCookSale = avgCookSale;
  this.simSalesDayArray = [];
  this.dailyTotal = 0;
}
//first function estimates a random number of customers to visit for the hour depending on the max/min customers that visit that location
NewLocation.prototype.rndmCustomers = function (minCust, maxCust) {
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
};
//second function calculates the sales totals for each hour at this location, totals are saved for each hour to keep trck of hourly sales figures, as well as this location's daily total
NewLocation.prototype.simulatedSalesDay = function () {
  var salesForHour;
  //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
  for (var i = 0; i < hoursArray.length; i++) {
    //i is used to keep track of which hour of the day it is to assign the proper time
    //--------------------------------//
    //listr is created as an empty string
    var listr = '';
    //an estimate of the sales for the hour is calculated
    salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
    //the dailytotal of all stores is then updated,
    this.dailyTotal += salesForHour;
    //then listr receives the string value of the total
    listr = `${salesForHour}`;
    //the old total is stored so it can be added to the new total
    var oldSalesForHour;
    oldSalesForHour = hourlyTotalsArray[i];
    salesForHour = salesForHour + oldSalesForHour;
    //and finally the current hour (i) is updated then both the global sales total array and the object's sales day array are updated
    hourlyTotalsArray[i] = salesForHour;
    this.simSalesDayArray.push(listr);
  }
  dailyTotalAllLocations += this.dailyTotal;
  //pushes this object into the store location array for quick access
  locationsArray.push(this);
};
//creates and pushes the hourly and total says data to the necessary HTML elements
NewLocation.prototype.pushSalesToTable = function () {
  var table = document.getElementById('locations-list');
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  var thCell = document.createElement('th');
  thCell.textContent = this.name;
  tableRow.appendChild(thCell);
  //runs through the location's hourly sales for the day and pushes them tot he HTML table
  for (var k = 0; k < this.simSalesDayArray.length; k++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.simSalesDayArray[k];
    tableRow.appendChild(tdCell);
  }
  //finally appends the daily sales total to the table
  var totalsTdCell = document.createElement('td');
  totalsTdCell.textContent = this.dailyTotal;
  tableRow.appendChild(totalsTdCell);
};

//create all store locations as new objects and invokes their sales simulation functions, then pushes everything to the table
var seattle = new NewLocation('Seattle', 65, 23, 6.3);
seattle.simulatedSalesDay();
var tokyo = new NewLocation('Tokyo', 24, 3, 1.2);
tokyo.simulatedSalesDay();
var dubai = new NewLocation('Dubai', 38, 11, 3.7);
dubai.simulatedSalesDay();
var paris = new NewLocation('Paris', 38, 20, 2.3);
paris.simulatedSalesDay();
var lima = new NewLocation('Lima', 16, 2, 4.6);
lima.simulatedSalesDay();

//pushes all weekly sales info to the html table
seattle.pushSalesToTable();
tokyo.pushSalesToTable();
dubai.pushSalesToTable();
paris.pushSalesToTable();
lima.pushSalesToTable();

//creates the footer row of the table, creating all HTML elements then assigning all our array information to them
function createTableFooter() {
  var table = document.getElementById('locations-list');
  table.appendChild(tableFooter);
  var tableRow = document.createElement('tr');
  tableRow.id = 'totalsRow';
  tableFooter.appendChild(tableRow);
  tableRow.innerHTML - '';
  var thCell = document.createElement('th');
  thCell.textContent = 'Hourly Totals';
  tableRow.appendChild(thCell);
  //runs through the hourly totals for each location and appends them to the footer row
  for (var i = 0; i < hourlyTotalsArray.length; i++) {
    thCell = document.createElement('th');
    thCell.textContent = hourlyTotalsArray[i];
    tableRow.appendChild(thCell);
  }
  //finaly adds total sales for all locations to last table cell
  thCell = document.createElement('th');
  thCell.textContent = dailyTotalAllLocations;
  tableRow.appendChild(thCell);
}
//invoke function to create HTML table footer
createTableFooter();
