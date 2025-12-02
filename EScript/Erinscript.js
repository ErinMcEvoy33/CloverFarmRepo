//Ensures entire page is loaded
document.addEventListener("DOMContentLoaded", () => {
//Goes through every vote button type submit and name animal, stores them in an unchangable variable 
    const voteButtons = document.querySelectorAll("button[type='submit'][name='animal']");
//loops through each vote button, applies the ability to click(vote)
    voteButtons.forEach(button => {		
        button.addEventListener("click", function(event) {//runs the function when the vote is pressed
            event.preventDefault(); // stop form submit completely, prevents refresh
            // If already voted, this is stored in memory. Note- after you vote you must clear cookies and history to vote again
			//Checks history to see if already voted , if so alerts user
            if (localStorage.getItem("voted") === "true") {
                alert("You have already submitted a vote!");
                return;
            }

            // First vote, alerts user
            alert("Thanks for your vote!");
            localStorage.setItem("voted", "true");

            // Hide all vote buttons after voting
            voteButtons.forEach(btn => {btn.style.display = "none";});
        });
    });

});