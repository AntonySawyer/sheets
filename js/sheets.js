var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = 100;

function onInit(){
    for (i = 0; i < letters.length; i++) {
        var th = document.createElement("th");
            th.innerHTML = "<th><input type=\"text\" disabled class=\"sticky_tabs main_tabs tabs\" value=\""
                         + letters[i]
                         + "\"></input></th>";        
        document.getElementById("thead").appendChild(th);
    }

    for (i = 1; i < numbers; i++) {
        var tr = document.createElement("tr");
            tr.innerHTML = "<tr><td><input type=\"text\" disabled class=\"main_tabs tabs\" value=\""
                         + i
                         + "\"></input></td></tr>";        
        document.getElementById("tbody").appendChild(tr);
        for (j = 0; j <= 25; j++) {
            var newCell = tr.insertCell(-1);
            newCell.innerHTML = "<td><input type=\"text\" class=\"tabs\" value=\""
                              + "\" id=\""
                              + letters[j+1] + i 
                              + "\"></input></td>";
        }
    }
    addButton();
}

function addRows() {
    deleteButton();
//    var btn = document.getElementById("addRows")[0];
//    btn.remove();
    var currentNumber = document.getElementById("table").rows.length + 1;
    var numbers = 100;
        for (i = currentNumber; i < currentNumber + 100; i++) {
        var tr = document.createElement("tr");
            tr.innerHTML = "<tr><td><input type=\"text\" disabled class=\"main_tabs tabs\" value=\""
                         + i
                         + "\"></input></td></tr>";        
        document.getElementById("tbody").appendChild(tr);
        for (j = 0; j <= 25; j++) {
            var newCell = tr.insertCell(-1);
            newCell.innerHTML = "<td><input type=\"text\" class=\"tabs\" value=\""
                              + "\" id=\""
                              + letters[j+1] + i 
                              + "\"></input></td>";
        }
    }
    addButton();
}

function addButton(){
    var button = document.createElement("tr");
    button.innerHTML = "<tr id=\"addRows\"><td colspan=\"27\"><input type=\"button\" class=\"add_rows\" value=\"+++ add new cells +++\" onClick=\"addRows()\"></input></td></tr>";
    document.getElementById("tbody").appendChild(button);
}

function deleteButton(){
    table.deleteRow(-1);
}