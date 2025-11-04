const URL2="https://api.api-ninjas.com/v1/quotes";
  let para1 = document.getElementById("para1");
    let para2= document.getElementById("para2");
    let para3= document.getElementById("para3");

async function changequote() {
    try{
    const  url=`${URL2}`;
        let response = await fetch(url,{
        method:"GET",
        headers:{ 
            "X-Api-Key":"9Emc4qSXxK3DE0cR4zWg8g==Tm2hMz35sw5ybttD"
        }
        });
        let data = await response.json();
        
        para1.innerText=data[0].quote
        para2.innerText=data[0].author 
        para3.innerText=data[0].category
    }
    catch(error){
        console.log("catch block",error)
    }
        
    }
    changequote();

  






  
const limit = 10;
const fibonacciSeries = [0, 1];
let a = 0;
let b = 1;
let nextFib = a + b;
while (nextFib <= limit) {
  fibonacciSeries.push(nextFib);
  a = b;
  b = nextFib;
  nextFib = a + b;
}
console.log(fibonacciSeries.toString());
 
