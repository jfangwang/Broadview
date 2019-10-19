//alert("HI");
if (typeof(Storage) !== "undefined") {
    var firstname = "Wes";/*document.getElementById("firstname");*/
    var lastname = "Fortier";//document.getElementById("lastname");
    var source = "Back of America";//document.getElementById("source");
    var type = "Amazon Mktplace";//document.getElementById("type");
    var amount = 200//document.getElementById("amount");
    var interest = .05//document.getElementById("interest");
    
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("source", source);
    localStorage.setItem("amount", amount);
    localStorage.setItem("interest", interest);
    localStorage.setItem("userid", Math.floor((Math.random() * 100000) + 999999));
    
} else {
    table.innerHTML = "Sorry, your browser does not support Web Storage...";
}
