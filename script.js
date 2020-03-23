// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {


let launchForm = document.getElementById("launchForm"); 
let pilotName = document.querySelector("input[name = pilotName]");
let fuelLevel = document.querySelector("input[name = fuelLevel]");
let cargoMass = document.querySelector("input[name = cargoMass]");
let copilotName = this.document.querySelector("input[name = copilotName]");


   this.event.preventDefault();
   this.console.log("yep");


launchForm.addEventListener("submit", function() {
   
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ==="") {
      alert("All fields required!");
   
   }

   });
});