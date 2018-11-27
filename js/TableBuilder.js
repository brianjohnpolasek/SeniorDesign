function addRow() {
    var table = document.getElementById("logs");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    <!-- Get Date-->
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    cell1.innerHTML = utc;
    
    <!-- Get Time -->
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    cell2.innerHTML = hours + ":" + minutes;
    
    <!-- Get Model-->
    cell3.innerHTML = "Panaflo";
    
    <!-- Get User -->
    cell4.innerHTML = "Admin";
}
