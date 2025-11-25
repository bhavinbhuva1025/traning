function folderid(){
    return Date.now();
}
let folders = JSON.parse(localStorage.getItem("folder"))||[];

function addfolder(){
     let inputbox=document.getElementById('folder-texbox').value;
     if(inputbox.trim() === ""){
        alert("please enter folder name");
        return;
     }
        let newfolder={
            id : folderid(),
            name : inputbox,
            parentid : null,

        }
            folders.push(newfolder);

    localStorage.setItem("folder", JSON.stringify(folders));

        document.getElementById('folder-texbox').value="";
    showfolder();
}

function addsubfolder(parentid){
        let subname= prompt("enter subfolder name.");
        if(!subname){ 
        alert("please enter folder name");
            return;
        }
        folders.push({id : folderid(), name : subname, parentid :parentid });
        savefolder();
        showfolder();
}

function savefolder() {
    localStorage.setItem("folder", JSON.stringify(folders));
        
}

function editfolder(parentId) {
    let folder = folders.find(f => f.id === parentId);
    let newName = prompt("Enter new name:", folder.name);
    if (!newName) {
        alert("please enter new foldername");
        return;
        }
    folder.name = newName.trim();
    savefolder();
    showfolder();
}

function folderview(parentId){
        let html="";
    let view = folders.filter(f => f.parentid === parentId);
    if (view.length === 0) return "";
            html +="<ul>"
          view.forEach(folder=>{
             html +=`<li> 📁 ${folder.name}<button id="subadd" onclick="addsubfolder(${folder.id})">add</button>
              <button id="edit" onclick="editfolder(${folder.id})">edit</button></li>`;
             html += folderview(folder.id)
             }); 

            html +="</ul>"

            return html;
    
}
function showfolder(){
        let div =document.querySelector("#current");
        div.innerHTML=folderview(null);
}
document.onload=showfolder();

    