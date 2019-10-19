console.log("It works");

//Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
var test = localStorage.getItem('FirstName');
console.log(test);
function drawChart() {
  var moneyScale=0;

  var data = google.visualization.arrayToDataTable([


    //Mock Data
    ['Year', 'Sales', 'Expenses'],
    ['2018',   parseInt(test,10) ,      0],
    ['2019',  100,      0],
    ['2020',  200,       0],
    ['2021',  1400,      0]
  ]);
  var options = {
    title: 'Broadview',
    curveType: 'function',
    legend: { position: 'right' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
//End of Google Charts


//alert("HI");
if (typeof(Storage) !== "undefined") {
    var firstname = document.getElementById('FirstName');/*document.getElementById("firstname");*/
    var lastname = document.getElementById('LastName');;//document.getElementById("lastname");
    var source = document.getElementById('Source');;//document.getElementById("source");
    var type = document.getElementById('Type');;//document.getElementById("type");
    var amount = document.getElementById("Amount");
    var interest = document.getElementById("Interest");

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("source", source);
    localStorage.setItem("amount", amount);
    localStorage.setItem("interest", interest);
    localStorage.setItem("userid", Math.floor((Math.random() * 100000) + 999999));



} else {
    table.innerHTML = "Sorry, your browser does not support Web Storage...";
}








// Tab Links
function openCity(evt, tabs) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabs).style.display = "block";
  evt.currentTarget.className += " active";
}
//End of Tab Links
