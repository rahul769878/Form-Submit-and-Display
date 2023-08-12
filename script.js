let data = [];
let newIndex = -1;

function addItem() {
    let firstName = document.getElementById("exampleInputName1").value;
    let lastName = document.getElementById("exampleInputName2").value;
    let contactNumber = document.getElementById("exampleInputNumber").value;
    let emailId = document.getElementById("exampleInputEmail").value;
    if (newIndex<0) {
        data.push({firstName, lastName, contactNumber, emailId});
    }
    else{
        data[newIndex] = firstName
        data[newIndex] = lastName
        data[newIndex] = contactNumber
        data[newIndex] = emailId
    }
    console.log(data);
    display()
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
    document.getElementById("exampleInputName1").value = data[index];
    document.getElementById("exampleInputName2").value = data[index];
    document.getElementById("exampleInputNumber").value = data[index];
    document.getElementById("exampleInputEmail").value = data[index];

    newIndex = index;
}