// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
  
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");


button.on("click",function() {
    // console.log("button change fired")
    var inputDate = d3.select("#datetime").property("value");
    
    
    function filterDate(date) {
        return date.datetime === inputDate;
      };

    console.log(inputDate);
    var filteredData = tableData.filter(filterDate);
    // console.log(filteredData);

    tbody.html("")

    filteredData.forEach(function(ufoSighting) {
        // console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key, value]) {
            // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});