//Find all the buttons

var button1 = document.querySelector("#button-one");
var button2 = document.querySelector("#button-two");
var button3 = document.querySelector("#button-three");
var button4 = document.querySelector("#button-four");
var button5 = document.querySelector("#button-five");

//Find all sections
var allSections = document.querySelectorAll(".tab");

//Attach click event listeners to the buttons
button1.onclick = changeTab;  //when one clicks on the button, run changeTab
button2.onclick = changeTab;  //when one clicks on the button, run changeTab
button3.onclick = changeTab;  //when one clicks on the button, run changeTab
button4.onclick = changeTab;  //when one clicks on the button, run changeTab
button5.onclick = changeTab;  //when one clicks on the button, run changeTab


//Function that changes the visible tab
function changeTab() {
	// alert( this.id);    //for debugging

	//Hide all tabs
	for(var i = 0; i < allSections.length; i++) {
		allSections[i].style.display = "none";
	}

	//Switched based on the id of the button clicked
	switch( this.id )  {
		case "button-one":

			allSections[0].style.display = "block";

		break;

		case "button-two":

			allSections[1].style.display = "block";

		break;

		case "button-three":
			allSections[2].style.display = "block";

		break;

		case "button-four":
			allSections[3].style.display = "block";

		break;

		case "button-five":
			allSections[4].style.display = "block";

		break;

	}


}
