const input = document.getElementById("input");
const ul = document.getElementById("ul");

function addtask() {
    if (input.value === '') {
        alert('You must add something :(');
       
    } else {
        let li = document.createElement("li");
        li.classList.add(getNextClassName()); // Assign class based on current items (alternating color)
        li.innerHTML = `
            ${input.value}
          
            <div>
                <button class="delete" onclick="deleteTask(this)">DELETE</button>
                <button class="edit" onclick="editTask(this)">EDIT</button>
            </div>
        `;
        ul.appendChild(li);
        input.value = ""; // Clear the input field after adding the task
        savedata();
    }
}

    // function to save data
    function savedata(){
        localStorage.setItem("data", ul.innerHTML);
        
    }

    // function show the task
    function showtask(){
        ul.innerHTML = localStorage.getItem("data")
    }




// Function to alternate classes (red/white)
function getNextClassName() {
    const lastLi = ul.querySelector('li:last-child');
    return lastLi && lastLi.classList.contains('red') ? 'white' : 'red';
}
// Function to delete Task
function deleteTask(button) {
    const li = button.parentNode.parentNode;
    ul.removeChild(li);
    
    savedata();
}
// Function to editTask
function editTask(button) {
    const li = button.parentNode.parentNode;
    const newValue = prompt("feel free to Edit your task ", li.firstChild.textContent);
    if (newValue) {
        li.firstChild.textContent = newValue;
    }
}







showtask();
