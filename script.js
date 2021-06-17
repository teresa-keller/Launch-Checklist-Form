// Write your JavaScript code here!

window.addEventListener("load", function() {
   let launchForm = document.getElementById("launchForm");
   launchForm.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name = pilotName]");
      let copilotName = document.getElementById("input[name = copilotName]");
      let fuelLevel = document.getElementById("input[name = fuelLevel]");
      let cargoMass = document.getElementById("input[name = cargoMass]");
   
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields required!");
         event.preventDefault();
      }   
   });
});



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
