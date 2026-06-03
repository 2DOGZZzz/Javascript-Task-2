const NameInput = document.getElementById('NameInput').value.trim();
const MarkInput = parseInt( document.getElementById('MarkInput').value);
const SubmitBtn= document.getElementById('SubmitBtn');
const Results = document.getElementById('Results')


let Results = [];
function getAllResults() {
    
    Results.innerHTML = "";
    
    tasks.forEach((task) =>{
        const ResultCard = document.createElement('li');
    ResultCard.Classlist.add('task')
    
        ResultCard.innerHTML = '<p ${task.title}</p>';
     Results.appendChild(ResultCard)   
        
    })
    
    
}


getAllResults();

function dataValidation(){
    
if (NameInput === "" || MarkInput === "") {
    
            console.log('Please Enter Student Name!!.');

        }

        const mark = parseFloat(MarkInput);

        if (mark < 0 || mark > 100 || isNaN(mark)) {
            
            console.log('Please a number/ mark between 0 and 100.');
        }
        
let response = "";

        if (mark >= 80 && mark<=100) {
            response = "Distinction";
        } else if (mark >= 65 && mark<=79) {
            response = "Merit";
        } else if (mark >= 50 && mark<=64) {
            response = "Pass";
        } else {
            response = "Fail";
            
        }        

console.log('Student Evaluation Outcome', NameInput, MarkInput, response);

getAllResults();

}

SubmitBtn.addEventListener("click",dataValidation);