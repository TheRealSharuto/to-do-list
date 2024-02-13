addTaskButton = document.getElementById("add-task");

const inputElement = document.querySelector('.js-name-input');
const descriptionElement = document.getElementById('js-description');
const toDoList = [];
const inProgressList = [];

addTaskButton.addEventListener("click", addTask);



function addTask() {
   const name = inputElement.value;
   const description = descriptionElement.value;

   const newTask = [name, description];
   toDoList.push(newTask);
   console.log(toDoList);

   const taskCard = document.createElement("div");
   taskCard.className = "task-card";

   addTaskCard(taskCard, newTask);
   addButtons(taskCard);
   addToDom(taskCard);

   // resetting text boxes
   inputElement.value = '';
   descriptionElement.value = '';
}

function addTaskCard(taskCard, newTask) {

   const subDiv = document.createElement("h5");
   //console.log("element created");
   subDiv.classList.add("card-title");
   //console.log("card title added");
   subDiv.textContent = newTask[0];
   taskCard.appendChild(subDiv);
   //console.log("title h5 added");
   const subDiv2 = document.createElement("p");
   console.log("element created");
   subDiv2.classList.add("card-description");
   console.log("card description piece added");
   subDiv2.textContent = newTask[1];
   taskCard.appendChild(subDiv2);
   console.log("description added");
}


function addButtons(taskCard) {
   const inProgressButton = document.createElement("button");
   inProgressButton.classList.add("in-progress-button");
   inProgressButton.innerHTML = 'In progress<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>';

   const completeButton = document.createElement("button");
   completeButton.classList.add("complete-button");
   completeButton.innerHTML = 'Complete<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>';

   taskCard.appendChild(inProgressButton);
   taskCard.appendChild(completeButton);

   inProgressButton.addEventListener("click",() => moveToProgress(inProgressButton.parentElement));

   completeButton.addEventListener("click",() => moveToComplete(completeButton.parentElement));

}

function addToDom(taskCard) {
   document.getElementById("not-started").appendChild(taskCard);
}

function moveToProgress(currentTaskCard) {
   console.log("Move to progress");

   const inProgressDiv = document.getElementById("js-in-progress-div");
   console.log(currentTaskCard.innerHTML);
   console.log(inProgressDiv.innerHTML);
   
   replaceButtons(currentTaskCard);
   inProgressDiv.appendChild(currentTaskCard);
   
}

function moveToComplete(currentTaskCard) {
   console.log("Move to complete");

   const completeDiv = document.getElementById("js-complete-div");
   console.log(currentTaskCard.innerHTML);
   console.log(completeDiv.innerHTML);
   
   replaceAllButtons(currentTaskCard);
   completeDiv.appendChild(currentTaskCard);
}

function replaceButtons(currentTaskCard) {
   const notStartedButton = document.createElement("button");
   notStartedButton.classList.add("not-started-button");
   notStartedButton.innerHTML = 'Not Started <svg version="1.1" id="ios7_x5F_arrows_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" fill="#fff" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0 {display: none}.st1 {display: inline}</style><g id="_x32_8_1_"><path d="M78.1 0v6.2c22.4 0 40.5 18.2 40.5 40.6s-18.1 40.6-40.5 40.6H17.9l27.9-28-4.5-4.5L5.5 90.8l36 36.2 4.5-4.5-28.8-28.9h60.9c25.8 0 46.7-21 46.7-46.8S103.9 0 78.1 0z" id="icon_13_" /></g></svg>';

   const currentProgressButton = currentTaskCard.querySelector('.in-progress-button');

   currentTaskCard.insertBefore(notStartedButton, currentProgressButton);

   currentProgressButton.style.display = 'none';
}

function replaceAllButtons(currentTaskCard) { 
   const notStartedButton = currentTaskCard.querySelector('.not-started-button');

   const currentProgressButton = currentTaskCard.querySelector('.in-progress-button');

   currentProgressButton.style.display = 'block';
   currentProgressButton.innerHTML = 'In Progress <svg version="1.1" id="ios7_x5F_arrows_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" fill="#fff" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0 {display: none}.st1 {display: inline}</style><g id="_x32_8_1_"><path d="M78.1 0v6.2c22.4 0 40.5 18.2 40.5 40.6s-18.1 40.6-40.5 40.6H17.9l27.9-28-4.5-4.5L5.5 90.8l36 36.2 4.5-4.5-28.8-28.9h60.9c25.8 0 46.7-21 46.7-46.8S103.9 0 78.1 0z" id="icon_13_" /></g></svg>'

   const currentCompleteButton = currentTaskCard.querySelector('.complete-button');

   currentTaskCard.insertBefore(notStartedButton, currentCompleteButton);

   currentCompleteButton.style.display = 'none';


}