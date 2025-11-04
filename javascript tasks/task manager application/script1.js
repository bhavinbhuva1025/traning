// document.querySelector('.formcontainer').addEventListener('submit', function(event) {
//   event.preventDefault();
//             let  task_def = document.getElementById('ad-task').value;
//             console.log(task_def)
//             let task_dis = document.getElementById('task-discription').value;
            
//             if(task_def.trim() === ""){
//               alert("Task Defination is Required")
//                return false;
//             } 
//             if(task_dis.trim()=== ""){
//               alert("Task Discription is Required")
//                return false;
//             }
             

//              const tableBody = document.querySelector('tbody');
//              setTimeout(() => {
//                let child = tableBody.children
//               //  console.log(child)

//               for(let i = 0; i < child.length; i++){
//                let td = child[i].getElementsByTagName("td")[2]
//                 td.classList.add("stat")
//               }
              
//              }, 500);
//               const newRow = tableBody.insertRow();
//               const defCell = newRow.insertCell(0).textContent = task_def;

//               const disCell = newRow.insertCell(1).textContent = task_dis;

//               const statusCell = newRow.insertCell(2).textContent = "pending";
              

//               const editCell = newRow.insertCell(3).innerHTML = '<button class="editBtn">Edit</button>' +
//                 '<button class="deleteBtn">Delete</button>'+
//                 '<button class="statusBtn">Complete</button>';
//                  newRow.querySelector(".editBtn").addEventListener("click", editRow);
//                   newRow.querySelector(".deleteBtn").addEventListener("click", function() {
//                       const row = this.parentNode.parentNode;       
//                       row.parentNode.removeChild(row);
//                   });
//                    newRow.querySelector(".statusBtn").addEventListener("click", function() {
//                       let sbtn=document.querySelector(".statusBtn")      
                      
                      
//                       if(sbtn){
//                          const row = this.parentElement.parentElement; 
//                       row.querySelector(".stat").innerText = "Complete"
//                       this.style.display="none"
//                       }
                     
//                   });
//                    // Clear form fields
//                       document.getElementById('ad-task').value = '';
//                       document.getElementById('task-discription').value = '';
                     

//                  function editRow(event){
//                    const row = event.target.parentNode.parentNode; 
//                    console.log(row);
//                     const defCell = row.cells[0];
//                     const disCell = row.cells[1];
//                     const statCell = row.cells[2];
//                     const actionsCell = row.cells[3];


//                      const defautltask = defCell.innerHTML;
//                      const defaultdiscription = disCell.innerHTML;
            
//                     defCell.innerHTML = `<input type="text" class="input" value="${defautltask}">`;
//                     disCell.innerHTML = `<input type="email" class="input" value="${defaultdiscription}">`;
//                     actionsCell.innerHTML = `<button class="saveBtn">Save</button>`;
                    
//                      row.querySelector(".saveBtn").addEventListener("click", function() {
//                         const newtask = defCell.querySelector("input").value;
//                         const newdis = disCell.querySelector("input").value;

//                           defCell.innerHTML = newtask;
//                           disCell.innerHTML = newdis;
//                           actionsCell.innerHTML = `<button class="editBtn">Edit</button>
//                            <button class="deleteBtn">Delete</button>
//                            <button class="statusBtn">Complete</button>`;
//                             row.querySelector(".editBtn").addEventListener("click", editRow);
//                             row.querySelector(".deleteBtn").addEventListener("click", function() {
//                                 const row = this.parentNode.parentNode;
//                                 row.parentNode.removeChild(row);
//                             });
//                             newRow.querySelector(".statusBtn").addEventListener("click", function() {
//                             let sbtn=document.querySelector(".statusBtn")
//                               if(sbtn){
//                                 const row = this.parentElement.parentElement; 
//                               row.querySelector(".stat").innerText = "Complete"
//                               this.style.display="none"
//                               }
//                                 setTimeout(() => {
//                                 let child = tableBody.children
//                                 //  console.log(child)

//                                 for(let i = 0; i < child.length; i++){
//                                 let td = child[i].getElementsByTagName("td")[2]
//                                   td.classList.add("stat")
//                                    }
                  
                          
                          
//                                 }, 500);

                            
//                           });
                        
//                      })
//                  }     
                    
// })

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
          // console.log(index)
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
    
    function showData(){

      const tableBody = document.querySelector('tbody');

  let tr = ""
  data.forEach((element) => {
    tr += `
    <tr key="${element.id}">
        <td>${element.id}</td>
        <td>${element.Dafination}</td>
        <td>${element.Discription}</td>
        <td class="pen">${element.status}</td>
        <td  key="${element.id}">
            <button class="editBtn" onclick="editData(${element.id})">Edit</button> 
            <button class="deleteBtn" onclick="deleteData(${element.id})">Delete</button>
          ${element.status === "pending" ? `<button class="statusBtn" onclick="status(${element.id})">Complete</button>` : ""}  
        </td>
    </tr>
`
  })
  
  tableBody.innerHTML = tr

}

function deleteData(id){
  const filterData = data.filter(ele => ele.id  !== id)
  data = filterData
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
  showData() 
}
function status(id) {
  const index = data.findIndex(ele => ele.id == id);
    data[index].status = "complete";
  showData() 
}

let i=10

console.log("🚀 ~ i:", i)
