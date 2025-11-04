
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
          item.style.display = '  ';
        } else {
          item.style.display = 'none';
        }
      }
  }


