//Wait until the DOM is loaded
   window.addEventListener("DOMContentLoaded", function(Calendar){

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
       } else {
         // If not, add it
         this.setAttribute("class", "highlight");    
       }
     });
  }
});
