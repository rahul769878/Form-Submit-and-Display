let data = [];
let newIndex = -1;

function addItem() {
    let obj = {
        firstName: document.getElementById("exampleInputName1").value,
        lastName: document.getElementById("exampleInputName2").value,
        contactNumber: document.getElementById("exampleInputNumber").value,
        emailId: document.getElementById("exampleInputEmail").value
    }

    if (newIndex >= 0) {
        data[newIndex] = obj;
    }
    else{
        data.push(obj);
    }
   
    display()
    
    document.getElementById("exampleInputName1").value = " ";
    document.getElementById("exampleInputName2").value = " ";
    document.getElementById("exampleInputNumber").value = " ";
    document.getElementById("exampleInputEmail").value = " ";
}


function display(d) {
    let displayData = data.map(function(value, index){
        return `<table class="table"> 
        <thead>
          <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Email Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${value.firstName}</th>
            <td>${value.lastName}</td>
            <td>${value.contactNumber}</td>
            <td>${value.emailId}</td>
            <button type="button" class="btn btn-success btn_edit" onclick="editItem(${index})">Edit</button>
            <button type="button" class="btn btn-danger btn_edit2" onclick="deleteItem(${index})">Delete</button>
            </tr>
            </tbody>
      </table>`
    })
    document.getElementById("display").innerHTML = displayData.join(" ");
}

function deleteItem(index) {
    let deleteData = data.splice(index,1);
    display(deleteData);
}

function editItem(index) {
    let obj = data[index];

    document.getElementById("exampleInputName1").value = obj.firstName;
    document.getElementById("exampleInputName2").value = obj.lastName;
    document.getElementById("exampleInputNumber").value = obj.contactNumber;
    document.getElementById("exampleInputEmail").value = obj.emailId;

    newIndex = index;
}