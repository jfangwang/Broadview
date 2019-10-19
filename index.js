console.log("It works");

//Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var moneyScale=0;
  var data = google.visualization.arrayToDataTable([
    //Mock Data
    ['Year', 'Sales', 'Expenses'],
    ['2018',  1000,      0],
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
