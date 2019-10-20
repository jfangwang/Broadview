

//Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawpast);
google.charts.setOnLoadCallback(drawfuture);
google.charts.setOnLoadCallback(drawpresent);





function drawfuture() {
  var data = google.visualization.arrayToDataTable([



    ['Weeks','Amount'],
    ['1',1200],
    ['2',2820],
    ['3',4567],
    ['4',6493],
    ['5',7961],
    ['6',9757],
    ['7',11276],
    ['8',12897],
    ['9',14870],
    ['10',16486],
]);
var options = {
  title: 'Broadview',
  curveType: 'function',
  legend: { position: 'right' }
};

var chart = new google.visualization.LineChart(document.getElementById('forsight_chart'));

chart.draw(data, options);

}
function drawpast() {
  var moneyScale=0;

  var data = google.visualization.arrayToDataTable([
    //Mock Data

    ['Weeks','Amount'],
    ['1',1200],
    ['2',8200],
    ['3',7400],
    ['4',2424],
    ['5',9424],
    ['6',8624],
    ['7',262],
    ['8',7262],
    ['9',6462],
    ['10',2000],

  ]);
  var options = {
    title: 'Broadview',
    curveType: 'function',
    legend: { position: 'right' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('hindsight_chart'));

  chart.draw(data, options);
}




function drawpresent() {
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

  var chart = new google.visualization.LineChart(document.getElementById('present_chart'));

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



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function hide(){
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablinks");
    tabcontent[0].style.display = "none";
    tabcontent[2].style.display = "none";
}



// Tab Links
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//End of Tab Links
