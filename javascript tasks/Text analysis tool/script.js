// textanalysis function show all count when function will call
function textanalysis(){
       let mystr=document.getElementById("input").value;
       let tbl=document.getElementsByClassName("table-list tbody");
       let chrcount=document.getElementById("character-count")
       let wrdcount=document.getElementById("word-count")
       let str=document.getElementById("string")

    //    variable declare for char and word count
       let char;
       let wordCount;
                // char count logic
                console.log(mystr)
                char=mystr.trim().length;
                console.log(char)
                // word count logic
                const word = mystr.trim().split(/\s+/); 
                wordCount = word.length;
                console.log(wordCount);
      
                // show character and word count in table
                chrcount.textContent=char;
                wrdcount.textContent=wordCount;
                // str.textContent=mystr


      
        // show frequency count for each word in table
        function getWordFrequency(mystr)
            {
                
                const words = mystr.toLowerCase().match(/\b\w+\b/g);
                const wordFrequency = {};

                if (words) { 
                    words.forEach(word => {
                    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
                    });
                }
                return wordFrequency;
               }

            const frequency = getWordFrequency(mystr);
            console.log(frequency);

            // frequency count add in table
           const tableBody = document.querySelector(".table-list1 tbody");

                    tableBody.innerHTML = "";

                    Object.keys(frequency).forEach((word) => {
                    const tr = tableBody.insertRow();

                    const td = tr.insertCell(); 
                       
                        td.textContent = word;

                     const frequencycount = tr.insertCell(); 
                     frequencycount.textContent = frequency[word]; 
                        });
                                    
}

// call a textanalysis function in on click event
function addbtn(){
    textanalysis()
       let mystr=document.getElementById("input").value="";

}