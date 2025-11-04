let addbtn=document.getElementById("add-btn");
addbtn.addEventListener("click",addchapter);
let parantlist=document.getElementById('list');
function addchapter(e){
    let currentbtn=e.currentTarget;
    let currentinput=currentbtn.previousElementSibling;
    
    let currentchapterName = currentinput.value;
    
    let newli=document.createElement("li");
    newli.className="list-group-item  justify-content-beetween";
    newli.innerHTML=`<li class="list-group-item "> <h3>${currentchapterName}</h3></li>
                        <button  class="btn btn-warning mx-3"onclick="EditChapter(this)">Edit</button>
                        <button  class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;
    list.appendChild(newli);

    document.getElementById("chapter").value="";
}
function removeChapter(currElement){
    currElement.parentElement.remove();
    let parantlist=document.getElementById('parentlist');
   
}
function EditChapter(currElement){
              if(currElement.textContent=="Done"){
              currElement.textContent="Edit"
              let currchaptername=currElement.previousElementSibling.value
              let currheading=document.createElement("h3");
              currheading.textContent=currchaptername
              currElement.parentElement.replaceChild(currheading,currElement.previousElementSibling ) 
              }
    else{
            currElement.textContent="Done";
            let currchaptername=currElement.previousElementSibling.textContent
            let currinput=document.createElement("input");
            currinput.type="text";
            currinput.placeholder="Chapter Name";
            currinput.className="form-control"
            let x=  currinput.value=currchaptername;
            currElement.parentElement.replaceChild(currinput,currElement.previousElementSibling ) 
        }
}



let filter = document.getElementById("search-bar");
 let item = document.getElementById("list");
  let listitem = item.getElementsByTagName("li");

filter.addEventListener("input", myFunction)

function myFunction() {
  let search = filter.value.toUpperCase();

 
  for (let i =0 ; i < listitem.length; i++) {
    const item = listitem[i];
    const itemName = item.textContent.toUpperCase();
     if (itemName.includes(search)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      }
  }