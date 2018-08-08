var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = 30;

function onInit(){
    for (i = 0; i < letters.length; i++) {
        var th = document.createElement("th");
            th.innerHTML = "<th><input type=\"text\" disabled class=\"sticky_tabs main_tabs tabs\" value=\""
                         + letters[i]
                         + "\"></input></th>";        
        document.getElementById("thead").appendChild(th);
    }
    addRows();
}

function addRows() {
    deleteButton();
    var currentNumber = document.getElementById("table").rows.length + 1;
        for (i = currentNumber; i < currentNumber + numbers; i++) {
        var tr = document.createElement("tr");
            tr.innerHTML = "<tr><td><input type=\"text\" disabled class=\"main_tabs tabs\" value=\""
                         + i
                         + "\"></input></td></tr>";        
        document.getElementById("tbody").appendChild(tr);
        for (j = 0; j <= 25; j++) {
            var newCell = tr.insertCell(-1);
            var id = letters[j+1] + i;
            newCell.setAttribute('id', 't_' + id);
            newCell.setAttribute('onClick', 'input_class(this)');
            newCell.innerHTML = "<span class=\"eval_expression\" id=\""
                              + 's_' + id
                              + "\"></span><input type=\"text\" class=\"tabs tabs_hidden\" value=\"\" id=\""
                              + 'i_' + id 
                              + "\" onchange=\"calculate(this)\"></input>";
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

function calculate(value){
  var s_id = 's' + value.getAttribute('id').substr(1);
  var expression = value.value; 
    if(expression.charAt(0) == '=') {
      var expression = expression.substr(1); 
        if(typeof +expression == 'number') {
          document.getElementById(s_id).innerHTML = eval(expression);
      } else {
        alert('Is not a number!');
      }
    } else {
      alert('Expression must start by "="');
    }
}

function  input_class(t_id){
    var i_id = 'i' + t_id.getAttribute('id').substr(1);
    var otherCell = document.getElementsByClassName('tabs_visible')[0];
  if(otherCell === undefined) {
    document.getElementById(i_id).setAttribute('class', 'tabs tabs_visible');
  } else {
    otherCell.setAttribute('class', 'tabs tabs_hidden');
    document.getElementById(i_id).setAttribute('class', 'tabs tabs_visible');
  } 
  document.getElementById('formula_textarea').value = document.getElementById(i_id).value;
  document.getElementById('currentCell').innerHTML = 'Current cell: ' + i_id.substr(2);
}