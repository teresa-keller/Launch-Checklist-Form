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


let launchForm = this.document.getElementById("launchForm"); 
let pilotName = this.document.querySelector("input[name = pilotName]");
let fuelLevel = this.document.querySelector("input[name = fuelLevel]");
let cargoMass = this.document.querySelector("input[name = cargoMass]");
let copilotName = this.document.querySelector("input[name = copilotName]");
let faultyItems = this.document.getElementById("faultyItems");
fuelLevel = fuelStatus;
   console.log(faultyItems);
   // console.log(faultyItems.fuelStatus);

   
   this.console.log("yep");
// this.console.log(copilotName.value);

launchForm.addEventListener("submit", function() {
   event.preventDefault();
   
   if (isNaN(fuelLevel.value)) {
      alert("Please enter a number.");
   }

   if(isNaN(cargoMass.value)) {
      alert("Please enter a number.");
   }
   
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ==="") {
      alert("All fields required!");   
   }
   // console.log(fuelStatus);
   if (fuelStatus.value < 10000) {
      // fuelStatus.append("Fuel level too low!");
   // }
   // getElementById("fuelStatus").addEventListener("submit", function() {
      fuelStatus.innerHTML = "Fuel level too low!";
      // });
      }   

   });
});

