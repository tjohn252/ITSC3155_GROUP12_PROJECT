window.onload=function()
{
    var el=document.getElementById('button');
    el.onclick=function(){
        var my_text=prompt('Enter text here');
       var tableRef = document.getElementById('myMembers').getElementsByTagName('tbody')[0];

  // Insert a row in the table at row index 0
  var newRow   = tableRef.insertRow(tableRef.rows.length);

  // Insert a cell in the row at index 0
  var newCell  = newRow.insertCell(0);

  // Append a text node to the cell
  var newText  = document.createTextNode(my_text)
  newCell.appendChild(newText);
    }
}

