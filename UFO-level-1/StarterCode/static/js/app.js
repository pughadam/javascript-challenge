// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// append row in "td"
data.forEach(tableData => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Define variables for the filter button
var submit = d3.select("#filter-btn");

// Add in filter functionality with if statement for null
var table = d3.select("tbody")
submit.on("click", function () {
  table.html("")
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var tbody = d3.select("tbody");

  if (inputValue === '') {
    data.forEach(tableData => {
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  else {
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);
  
    console.log(filteredData);
  
    filteredData.forEach(function (filteredReport) {
      console.log(filteredReport);
      var row = tbody.append("tr");
  
      // Use d3 to update each cell's values with data.
      Object.entries(filteredReport).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

  console.log(inputValue);
  console.log(tableData);
});