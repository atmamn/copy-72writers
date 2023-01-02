/*Input box name
function myFunction() {
	document.getElementById("myDiv").style.borderColor = "blue";
	document.getElementById("myDivv").style.color = "blue";
	document.getElementById("myDiv").style.boxShadow = "none";
	
  }

  function myFunctionTwo() {
	  document.getElementById("myDiv").style.borderColor = "white";
	  document.getElementById("myDivv").style.color = "white";
	  document.getElementById("myDiv").style.boxShadow = "0px 1px black";
	  document.getElementById("myDiv").style.borderRadius = "3px";
  }*/

/*Input box email*/
  function myFunctionThree() {
	document.getElementById("myDivThree").style.borderColor = "blue";
	document.getElementById("myDivFour").style.color = "blue";
	document.getElementById("myDivThree").style.boxShadow = "none";
  }

  function myFunctionFour() {
	  document.getElementById("myDivThree").style.borderColor = "white";
	  document.getElementById("myDivFour").style.color = "white";
	  document.getElementById("myDivThree").style.boxShadow = "0px 1px black";
  }

  /*Input text area*/
  function myFunctionFive() {
	document.getElementById("myDivFive").style.borderColor = "blue";
	document.getElementById("myDivSix").style.color = "blue";
	document.getElementById("myDivFive").style.boxShadow = "none";
  }

  function myFunctionSix() {
	  document.getElementById("myDivFive").style.borderColor = "white";
	  document.getElementById("myDivSix").style.color = "white";
	  document.getElementById("myDivFive").style.boxShadow = "0px 1px black";
  }









  function myFunctionThreeName() {
	document.getElementById("myDivName").style.borderColor = "blue";
	document.getElementById("myDivNameFour").style.color = "blue";
	document.getElementById("myDivName").style.boxShadow = "none";
  }

  function myFunctionFourName() {
	  document.getElementById("myDivName").style.borderColor = "white";
	  document.getElementById("myDivNameFour").style.color = "white";
	  document.getElementById("myDivName").style.boxShadow = "0px 1px black";
  }











/*Scroll up*/
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*responsive nav bar*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
    } else {
	  x.className = "topnav";
	}
  } 
/*responsive nav bar*/
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "header") {
	  x.className += " responsive";
	} else {
	  x.className = "header";
	}
} 