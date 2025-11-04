

let url="https://jsonplaceholder.typicode.com/users";
  
let usersArray = [];

async function users() 
{
    const tableBody = document.getElementById('user-data');
  
try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`http error: ${response.status}`);
    }
    
    usersArray = await response.json();
    
        tableBody.innerHTML = '';
    
        usersArray.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.phone}</td>
        `;
        tableBody.appendChild(tr);
        });
}
catch (error) 
    {
        console.error('Error fetching API data:', error);
    }
let filter = document.getElementById("search");
let item = document.querySelector(".table")
let tr = item.getElementsByTagName("tr");

filter.addEventListener("input",userfunction)

function userfunction()
    {
            let search=filter.value.toUpperCase()

            for(i=0;i<tr.length;i++)
                {
                    const td=tr[i].getElementsByTagName("td")[1]
                    if(td)
                        {
                            let txtval= td.textContent || td.innerText
                            if(txtval.toUpperCase().indexOf(search.trim())> -1){
                                tr[i].style.display = '';
                            } else {
                                tr[i].style.display = 'none';
                            }
                        }

                }

    }
}
users();

   
