var locationsArray = [];
var hoursArray = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function NewLocation(name, maxCustomers, minCustomers, avgCookSale) {
  this.name = name;
  this.maxCustomers = maxCustomers;
  this.minCustomers = minCustomers;
  this.avgCookSale = avgCookSale;
  this.simSalesDayArray = [];
  this.dailyTotal = 0;
}

NewLocation.prototype.rndmCustomers = function (minCust, maxCust) {
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
};

NewLocation.prototype.simulatedSalesDay = function () {
  var time = 6;
  var salesForHour;

  //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
  for (var i = 1; i < 15; i++) {
    //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
    var listr = '';
    if (i === 8) {
      time = 1;
      salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
      listr = `${time}pm: ${salesForHour} cookies`;
      time++;
    }
    else if (i < 7) {
      salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
      listr = `${time}am: ${salesForHour} cookies`;
      time++;
    }
    else if (i === 7) {
      salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
      listr = `${time}pm: ${salesForHour} cookies`;
      time++;
    }
    else if (i > 8) {
      salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
      listr = `${time}pm: ${salesForHour} cookies`;
      time++;
    }
    this.dailyTotal += salesForHour;
    this.simSalesDayArray.push(listr);
    locationsArray.push(this);
  }
};

var seattle = new NewLocation('Seattle Location', 65, 23, 6.3);




var seattle = {
  name: 'Seattle Location',
  maxCustomers: 65,
  minCustomers: 23,
  avgCookSale: 6.3,
  simSalesDayArray: [],
  dailyTotal: 0,

  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  simulatedSalesDay: function () {
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++) {
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      var listr = '';
      if (i === 8) {
        time = 1;
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i < 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}am: ${salesForHour} cookies`;
        time++;
      }
      else if (i === 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i > 8) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      this.dailyTotal += salesForHour;
      this.simSalesDayArray.push(listr);
      locationsArray.push(this);
    }
  },
};
seattle.simulatedSalesDay();
locationsArray.push(seattle);


var tokyo = {
  name: 'Tokyo Location',
  maxCustomers: 24,
  minCustomers: 3,
  avgCookSale: 1.2,
  simSalesDayArray: [],
  dailyTotal: 0,

  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  simulatedSalesDay: function () {
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++) {
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      var listr = '';
      if (i === 8) {
        time = 1;
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i < 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}am: ${salesForHour} cookies`;
        time++;
      }
      else if (i === 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i > 8) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      this.dailyTotal += salesForHour;
      this.simSalesDayArray.push(listr);
    }
  },
};
tokyo.simulatedSalesDay();
locationsArray.push(tokyo);

var dubai = {
  name: 'Dubai Location',
  maxCustomers: 38,
  minCustomers: 11,
  avgCookSale: 3.7,
  simSalesDayArray: [],
  dailyTotal: 0,

  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  simulatedSalesDay: function () {
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++) {
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      var listr = '';
      if (i === 8) {
        time = 1;
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i < 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}am: ${salesForHour} cookies`;
        time++;
      }
      else if (i === 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i > 8) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      this.dailyTotal += salesForHour;
      this.simSalesDayArray.push(listr);
    }
  },
};
dubai.simulatedSalesDay();
locationsArray.push(dubai);

var paris = {
  name: 'Paris Location',
  maxCustomers: 38,
  minCustomers: 20,
  avgCookSale: 2.3,
  simSalesDayArray: [],
  dailyTotal: 0,

  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  simulatedSalesDay: function () {
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++) {
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      var listr = '';
      if (i === 8) {
        time = 1;
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i < 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}am: ${salesForHour} cookies`;
        time++;
      }
      else if (i === 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i > 8) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      this.dailyTotal += salesForHour;
      this.simSalesDayArray.push(listr);
    }
  },
};
paris.simulatedSalesDay();
locationsArray.push(paris);

var lima = {
  name: 'Lima Location',
  maxCustomers: 16,
  minCustomers: 2,
  avgCookSale: 4.6,
  simSalesDayArray: [],
  dailyTotal: 0,

  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  simulatedSalesDay: function () {
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++) {
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      var listr = '';
      if (i === 8) {
        time = 1;
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i < 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}am: ${salesForHour} cookies`;
        time++;
      }
      else if (i === 7) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      else if (i > 8) {
        salesForHour = Math.ceil(this.rndmCustomers(this.minCustomers, this.maxCustomers) * this.avgCookSale);
        listr = `${time}pm: ${salesForHour} cookies`;
        time++;
      }
      this.dailyTotal += salesForHour;
      this.simSalesDayArray.push(listr);
    }
  },
};
lima.simulatedSalesDay();
locationsArray.push(lima);



function createTableHeader() {
  var table = document.getElementById('locations-list');
  var tableHeader = document.createElement('thead');
  table.appendChild(tableHeader);
  var tableRow = document.createElement('tr');
  tableHeader.appendChild(tableRow);
  var thCell = document.createElement('th');
  thCell.textContent = '';
  tableRow.appendChild(thCell);

  for (var i = 0; i < hoursArray.length; i++) {

    thCell = document.createElement('th');
    thCell.textContent = hoursArray[i];
    tableRow.appendChild(thCell);
  }
}
createTableHeader();

for (var j = 0; j < this.locationsArray.length; j++) {
  var table = document.getElementById('locations-list');
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  var tdCell = document.createElement('td');
  tdCell.textContent = '';
  tableRow.appendChild(thCell);


  var liElement = document.createElement('li');
  liElement.textContent = locationsArray[i].simSalesDayArray[j];
  ulElement.appendChild(liElement);
}
