const mysql = require("mysql");

let con = mysql.createConnection({
    host: "35.185.83.199",
    user: "wes",
    password: "hackumass",
    database: "peopledb",
    port: 3306
});

con.connect(function(err) {
  if (err) {
      console.trace(err);
      throw err;
  }
  console.log("Connected!");
});

var addPerson = (firstName,lastName,source,type,amount,interest,userID) => {
    var sqlInsert = "INSERT INTO peopledb (FirstName,LastName,Source,Type,Amount,Interest,UserID) VALUES ?";
    var values = [firstName,lastName,source,type,amount,interest,userID];
    con.query(insertSQL, [values] ,function(error) {
        if (error) throw error;
        console.log("New person created!");
    });
};

var getValue = (value) => {
    var sqlSelect = "SELECT " + value + "FROM peopledb";
    con.query(sqlSelect,function(error,result) {
        if(error) throw error;
        console.log(value + " = " + result);
    });
}
