document.getElementById('studentform').addEventListener('submit', function (event){
        
event.preventDefault();
            
const NameInput = document.getElementById('NameInput');
const MarkInput = document.getElementById('MarkInput');
const SubmitBtn= document.getElementById('SubmitBtn');
const ResultsList = document.getElementById('Results');
const ErrorMsg= document.getElementById('ErrorMsg');



const name = NameInput.value.trim();
const mark = parseInt(MarkInput.value);

                
if (name === "" || isNaN(mark)) {
                    
ErrorMsg.textContent ="Please Enter the correct Student Information (Name & Mark)!.";
return;
}

                                    
if (mark < 0 || mark > 100) {
                                                 
 ErrorMsg.textContent = "Please a number/ mark between 0 and 100.";
 return;
}
                                                                     
ErrorMsg.textContent = " ";

let response = "";

if (mark >= 80 && mark<=100) {
    response = "Distinction";
}                                                                                
else if (mark >= 65 && mark<=79) {
    response = "Merit";
}                                                                                                        
                                                                                                                 
else if (mark >= 50 && mark<=64) {
    response = "Pass";
                                                                                                                                     
}                                                                                                                                            
else {
    response = "Fail";

}                                                                                                                                                                    
                                                                                                                                                                                  
                                                                                                                                                                                     
                                                                                                                                                                                             
const li = document.createElement('li');                                                                                                                                                                                                   
li.classList.add('task');
li.innerHTML = `<strong>Name:${name}, </strong><strong>Mark: ${mark }%, </strong><strong>Outcome:${response}</strong>`;

                                                                                                                                                                                                                                                
Resultslist.appendChild(li);
NameInput.value = '';
MarkInput.value = '';
NameInput.focus();
                                                                                                                                                                                                                                                     
});
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                             



                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                        

                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                    

                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                

                                                                                                                                                                                                                                                                                                        

                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        