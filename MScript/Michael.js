document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingform");
 
  form.onsubmit = function (e) {
    e.preventDefault();
 
    const name = document.getElementById("name").value; //get values of what was inputted in the form
    const email = document.getElementById("email").value;
    const event = document.getElementById("Event").value;
 
    alert(`Thanks, ${name}! You've booked the ${event}  event`); //booking confirmation message
  };
 
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingform1");
 
  form.onsubmit = function (e) {
    e.preventDefault();
 
    alert(`Thanks, we will be in touch`); //booking confirmation message
  };
 
});
 
// Name validation
    if (name.value.trim() === "") {
      nameField.classList.add("input-error");
      isValid = false;
    }
 
function runQuiz(){ //function to run the weekly quiz
  var questions = [ //array to store the prompts and the answers
  {
    prompt:"What do pigs like to eat (a) apples (b) mcdonalds (c) spicebag",
    answer:"a"
  },
   {
    prompt:"What do cows like to eat (a) apples (b) mcdonalds (c) spicebag",
    answer:"a"
  },
   {
    prompt:"What do dogs like to eat (a) apples (b) bananas (c) oranges",
    answer:"a"
  },
  {
    prompt:"What do goats like to eat (a) apples (b) mcdonalds (c) spicebag",
    answer:"a"
  },
  {
    prompt:"What do rabbits like to eat (a) apples (b) mcdonalds (c) spicebag",
    answer:"a"
  },
];
 
 
    var score = 0; //calculate the score
    for (var i = 0; i < questions.length; i++){ //loop through the questions
      var response = window.prompt(questions[i].prompt) //get the response and store it 
      if(response == questions[i].answer){ //check if its right
        alert("Correct");
        score++;
      }
      else{
        alert("Wrong");
      }
    }
    alert("you got " + score + " right"); // output the score
 
}
