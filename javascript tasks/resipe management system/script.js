// validate input in page
function recipemanagement()
{
            let  recipename = document.getElementById('recipe').value;
            let ingrediant = document.getElementById('ingrediant').value;
           let  catagory = document.getElementById('catagory').value;
            if(recipename.trim() == "")
                {
                alert("Recipe Name is Required")
                return false;
                }
            if(ingrediant.trim() == "")
                {
                alert("Recipe Ingerdiant is Required")
                return false;
                }
            if(catagory.trim() == "")
                {
                alert("Recipe Catagory is Required")
                return false;
                }
           return true;                              

}

// show data

async function showdata()
{
    let recipe;
    if(localStorage.getItem("recipe") == null)
        {
        recipe = [];
        }
    else
        {
        recipe = await JSON.parse(localStorage.getItem("recipe"))
        }
    let html = "";
    recipe.forEach(function(element,index)
    {
            html +="<tr>"
             html +="<td>" + element.recipename + "</td>";
             html +="<td>" + element.ingrediant + "</td>";
             html +="<td>" + element.catagory + "</td>";
             html += '<td><button onclick="deletedata('+  
             index +
             ')"class="btn1">Remove</button><button onclick="updatedata('+
               index+
               ')"class="btn2">Update</button></td>'
             html +="</tr>"
    }); 
        document.querySelector(".table tbody").innerHTML = html;

}
// load all data when page loaded
document.onload=showdata();

// add data in local storage

async function addrecipe(e)
{
    e.preventDefault()
    if(recipemanagement() == true)
     {
        let recipename=document.getElementById("recipe").value;
        let ingrediant=document.getElementById("ingrediant").value;
        let catagory=document.getElementById("catagory").value;

        let recipe;
         if(localStorage.getItem("recipe") == null)  
            {
                recipe = [];
            }
         else
            {
                recipe = await JSON.parse(localStorage.getItem("recipe"))
            }

    let obj =                                         
    {
        recipename: recipename,
        ingrediant: ingrediant,
        catagory: catagory ,
    }
    recipe.push(obj);


    console.log(recipe)

    localStorage.setItem("recipe" , JSON.stringify(recipe));
    showdata()
        // addad data when input filed is empty
         document.getElementById("recipe").value="";
        document.getElementById("ingrediant").value="";
        document.getElementById("catagory").value="";

        // show alert box when data addad
        //   alert("add data successfully");

    }

}

// delete data in local storage
async function deletedata(index)
{
    let recipe;
      if(localStorage.getItem("recipe") == null)
        {
         recipe = [];
        }
    else
        {
        recipe = await JSON.parse(localStorage.getItem("recipe"))
        }
    recipe.splice(index,1);
      localStorage.setItem("recipe" , JSON.stringify(recipe));
    showdata()
}

// update data in local storage
function updatedata(index)
{
    //   add button will hide and update button will show for updating data in local storage
    document.getElementById("ad-btn").style.display = "none";
    document.getElementById("up-btn").style.display = "block";

    let recipe;
       if(localStorage.getItem("recipe") == null)
        {
         recipe = [];
        }
    else
        {
        recipe = JSON.parse(localStorage.getItem("recipe"))
        }

     document.getElementById("recipe").value = recipe[index].recipename;
        document.getElementById("ingrediant").value = recipe[index].ingrediant;
        document.getElementById("catagory").value = recipe[index].catagory;

        document.querySelector("#up-btn").onclick = function()
        {

            if(recipemanagement() == true)
            {
                recipe[index].recipename = document.getElementById("recipe").value;
                recipe[index].ingrediant = document.getElementById("ingrediant").value;
                recipe[index].catagory = document.getElementById("catagory").value;

                localStorage.setItem("recipe" , JSON.stringify(recipe));

                showdata();

                 document.getElementById("recipe").value="";
                 document.getElementById("ingrediant").value="";
                 document.getElementById("catagory").value="";

    //   add button will show and update button will hide for adding data in local storage

                   document.getElementById("ad-btn").style.display = "block";
                   document.getElementById("up-btn").style.display = "none";

            }
        }
    
}
//  searching data in table 
let filter = document.getElementById("search");
 let item = document.querySelector(".table")
  let tr = item.getElementsByTagName("tr");

filter.addEventListener("input", myFunction)

function myFunction()
 {
  let search = filter.value.toUpperCase();

 
  for (let i =0 ; i < tr.length; i++) 
    {
    let td = tr[i].getElementsByTagName("td")[0];
    // let td1 = tr[i].getElementsByTagName("th")[0];

    // let itemName = item.textContent.toUpperCase();
     if (td) {                           
                let txtval=td.textContent || td.innerText
                 if (txtval.toUpperCase().indexOf(search.trim()) > -1) 
                    {
                        tr[i].style.display = '';
                    } 
                else 
                    {
                    tr[i].style.display = 'none';
                    }
             }
    }
 }
