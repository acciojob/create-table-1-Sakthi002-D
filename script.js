function insert_Row() {
    //Write your code here
let table = document.getElementById("sampleTable");

  // new row create
let newRow = table.insertRow(0);

  // 2 cells create
let cell1 = newRow.insertCell(0);
let cell2 = newRow.insertCell(1);

  // values add
cell1.innerHTML = "New Cell1";
cell2.innerHTML = "New Cell2";
}
  
}
