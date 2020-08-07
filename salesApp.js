var locationsArray =[];

var seattle = {
  name: 'Seattle Location',
  maxCustomers: 65,
  minCustomers: 23,
  avgCookSale: 6.3,
  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  },
  simulatedSalesDay: function () {
    var simSalesDayArray = [];
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++){
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      if(i === 8){
        time = 1;
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i < 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}am: ${salesForHour} cookies`);
        time++;
      }
      else if (i === 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i > 8){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
    }
    return simSalesDayArray;
  },
  simSalesDayArray: this.simulatedSalesDay(),
};
locationsArray.push(seattle);


var tokyo = {
  name: 'Tokyo Location',
  maxCustomers: 24,
  minCustomers: 3,
  avgCookSale: 1.2,
  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  },
  simulatedSalesDay: function () {
    var simSalesDayArray = [];
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++){
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      if(i === 8){
        time = 1;
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i < 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}am: ${salesForHour} cookies`);
        time++;
      }
      else if (i === 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i > 8){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
    }
    return simSalesDayArray;
  },
  simSalesDayArray: this.simulatedSalesDay(),
};
locationsArray.push(tokyo);

var dubai = {
  name: 'Dubai Location',
  maxCustomers: 38,
  minCustomers: 11,
  avgCookSale: 3.7,
  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  },
  simulatedSalesDay: function () {
    var simSalesDayArray = [];
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++){
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      if(i === 8){
        time = 1;
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i < 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}am: ${salesForHour} cookies`);
        time++;
      }
      else if (i === 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i > 8){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
    }
    return simSalesDayArray;
  },
  simSalesDayArray: this.simulatedSalesDay(),
};
locationsArray.push(dubai);

var paris = {
  name: 'Paris Location',
  maxCustomers: 38,
  minCustomers: 20,
  avgCookSale: 2.3,
  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  },
  simulatedSalesDay: function () {
    var simSalesDayArray = [];
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++){
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      if(i === 8){
        time = 1;
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i < 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}am: ${salesForHour} cookies`);
        time++;
      }
      else if (i === 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i > 8){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
    }
    return simSalesDayArray;
  },
  simSalesDayArray: this.simulatedSalesDay(),
};
locationsArray.push(paris);

var lima = {
  name: 'Seattle Location',
  maxCustomers: 16,
  minCustomers: 2,
  avgCookSale: 4.6,
  rndmCustomers: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  },
  simulatedSalesDay: function () {
    var simSalesDayArray = [];
    var time = 6;
    var salesForHour;

    //the for loop runs through each hour from 6am-8pm,  calculates the simulated sales for the day, then pushes the appropriate hour and results into the simSalesDayArray
    for (var i = 1; i < 15; i++){
      //i is used to keep track of which hour of the day it is to assign the proper time, plus am/pm designation
      if(i === 8){
        time = 1;
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i < 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}am: ${salesForHour} cookies`);
        time++;
      }
      else if (i === 7){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
      else if (i > 8){
        salesForHour = this.rndmCustomers * this.avgCookSale;
        simSalesDayArray.push(`${time}pm: ${salesForHour} cookies`);
        time++;
      }
    }
    return simSalesDayArray;
  },
  simSalesDayArray: this.simulatedSalesDay(),
};
locationsArray.push(lima);


var section = document.getElementById('locations-list');

for(var i = 0; i < locationsArray.length; i++){
  console.log('running');
  var divElement = document.createElement('div');
  section.appendChild(divElement);
  var h2Element = document.createElement('h2');
  h2Element.textContent = locationsArray[i].name;
  divElement.appendChild(h2Element);

  for(var j = 0; j < locationsArray[i].simSalesDayArray.length; j++){
    var pElement = document.createElement('p');
    pElement.textContent = locationsArray[i].simSalesDayArray[j];
    divElement.appendChild(pElement);
  }
}

