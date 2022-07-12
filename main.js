async function getMyToDoList(){
  let tableBody = document.querySelector("tbody");

  const apiUrl="https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(apiUrl);
  var data = await response.json();
  
  //clear the table
  tableBody.innerHTML="";
  let arr= [];
  let count=0;
  //populate the rows
  data.forEach( el => {
    let row = tableBody.insertRow();

    let id = row.insertCell(0);
    id.innerHTML = el.id;

    let taskDescription = row.insertCell(1);
    taskDescription.innerHTML = el.title;
    
    let status = row.insertCell(2);
    let checkbox = status.appendChild(document.createElement('input'));
    checkbox.type = "checkbox";
    checkbox.checked = el.completed;
    if(checkbox.checked == true){
        checkbox.disabled=true;
    }

  });

var checkboxes = document.querySelectorAll("input[type=checkbox]");
checkboxes.forEach(function (checkbox) {
  return new Promise((resolve) => {
    checkbox.addEventListener('change', function () {
      enabled =
        Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
          .filter(i => i.checked && !i.disabled) // Use Array.filter to remove unchecked checkboxes.
          .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      if (enabled.length == 5) {
        resolve();
        alert('Congrats, 5 task have been successfully completed!!')
      }
    })
  });
});
  

}