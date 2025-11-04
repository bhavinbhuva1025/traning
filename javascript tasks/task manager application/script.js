let data = []
let editIndex = false;
function add(e){
  e.preventDefault()
  
      if(editIndex){
        let  task_def = document.getElementById('ad-task').value;
      let task_dis = document.getElementById('task-discription').value;
  if(task_def.trim() === ""){
                alert("Task Defination is Required")
                return false;
              } 
              if(task_dis.trim()=== ""){
                alert("Task Discription is Required")      
                return false;
              }
        let index= data.findIndex(ele => ele.id == editIndex[0].id)
          console.log(index)
          data[index].Dafination=task_def
          data[index].Discription=task_dis
          editIndex=false
          document.getElementById('ad-task').value ="";
          document.getElementById('task-discription').value ="";
            let addbtn=document.getElementById("btn");
            addbtn.innerText="Add Task"
          showData()
      }
      else{ 
        let  task_def = document.getElementById('ad-task').value;
      let task_dis = document.getElementById('task-discription').value;
      if(task_def.trim() === ""){
                alert("Task Defination is Required")
                return false;
              } 
              if(task_dis.trim()=== ""){
                alert("Task Discription is Required")
                return false;
              }

      let obj = {
        id : Date.now(),
        Dafination : task_def,
        Discription  : task_dis,
        status : "pending"
      }
      data.push(obj)
      console.log("🚀 ~ add ~ obj:", data)
      showData()
        document.getElementById('ad-task').value = "";
       document.getElementById('task-discription').value = "";

      }
    }
    
function showData() {
  const tableBody = document.querySelector('tbody');
  let tr = "";
  data.forEach((element) => {
    tr += `
      <tr key="${element.id}">
        <td>${element.id}</td>
        <td>${element.Dafination}</td>
        <td>${element.Discription}</td>
        <td class="${element.status === "complete" ? "stat" : "pen"}">${element.status}</td>
        <td key="${element.id}">
          <button class="editBtn" onclick="editData(${element.id})">Edit</button>
          <button class="deleteBtn" onclick="deleteData(${element.id})">Delete</button>
          ${element.status === "pending" ? `<button class="statusBtn" onclick="status(${element.id})">Complete</button>` : ""}
        </td>
      </tr>
    `;
  });
  tableBody.innerHTML = tr;
}


function deleteData(id){
  const filterData = data.filter(ele => ele.id  !== id)
  
  data = filterData
  console.log("🚀 ~ deleteData ~ filterData:", data)
  

  showData()
}
function editData(id) {
    const filterData = data.filter(ele => ele.id  == id);
  editIndex=filterData
    let  task_def = document.getElementById('ad-task');
      let task_dis = document.getElementById('task-discription');
  task_def.value=filterData[0].Dafination
  task_dis.value=filterData[0].Discription
  let addbtn=document.getElementById("btn");
  addbtn.innerText="Update data"

  console.log("🚀 ~ deleteData ~ filterData:", filterData)

  showData() 
}
function status(id) {
  let index = data.findIndex(ele => ele.id == id);
    data[index].status = "complete";
    showData(); // this will now hide the Complete button automatically
}
