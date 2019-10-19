

//Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawBasic);

var test = localStorage.getItem('FirstName');

function call(){
  var firstname = document.getElementById('FirstName');/*document.getElementById("firstname");*/
  var lastname = document.getElementById('LastName');;//document.getElementById("lastname");
  var source = document.getElementById('Source');;//document.getElementById("source");
  var type = document.getElementById('Type');;//document.getElementById("type");
  var amount = document.getElementById("Amount");
  var interest = document.getElementById("Interest");
  // console.log(firstname);
  console.log(document.getElementById('test'));
}

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }



function drawChart() {
  var moneyScale=0;

  var data = google.visualization.arrayToDataTable([


    //Mock Data
    ['Year', 'Sales', 'Expenses'],
    ['2018',   200 ,      0],
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
