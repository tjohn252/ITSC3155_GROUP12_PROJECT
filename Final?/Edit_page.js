// Wait until the DOM is loaded
window.addEventListener("DOMContentLoaded", function(myTimeTable){

  // Get all the td elements in an array
  var theCells = document.getElementsByTagName("td");
  
  // Loop through each td
  for(var i = 0; i < theCells.length; ++i){
    
     // Set up a click event handler for the td
     theCells[i].addEventListener("click", function(){
       
       // Check to see if the td has the class attribute applied already
       if(this.getAttribute("class") === "highlight"){
         // If so, remove it
         this.removeAttribute("class");
         this.innerText = "Unavailable";
       } else {
         // If not, add it
         this.setAttribute("class", "highlight");  
         this.innerText = "Available";   
       }
     });
  }
});

function myFunction() {
  var txt;
  var r = confirm("Are you sure you want to save?");
  if (r == true) {
    txt = window.location.href='Calendar_page.html';
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
function myFunction2() {
  var txt;
  var r = confirm("Are you sure you want to leave without saving?");
  if (r == true) {
    txt = window.location.href='Calendar_page.html';
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}