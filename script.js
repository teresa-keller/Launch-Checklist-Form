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
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         let planet = (json[index]);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planet.name}</li>
               <li>Diameter: ${planet.diameter}</li>
               <li>Star: ${planet.star}</li>
               <li>Distance from Earth: ${planet.distance}</li>
               <li>Number of Moons: ${planet.moons}</li>
            </ol>
            <img src="${planet.image}"></img>
            `
      });
   });
   

let launchForm = this.document.getElementById("launchForm"); 
let pilotName = this.document.querySelector("input[name = pilotName]");
let fuelLevel = this.document.querySelector("input[name = fuelLevel]");
let cargoMass = this.document.querySelector("input[name = cargoMass]");
let copilotName = this.document.querySelector("input[name = copilotName]");
let faultyItems = this.document.getElementById("faultyItems");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = this.document.getElementById("copilotStatus");
let fuelStatus = this.document.getElementById("fuelStatus");
let cargoStatus = this.document.getElementById("cargoStatus");
let launchStatus = this.document.getElementById("launchStatus");
   
   


launchForm.addEventListener("submit", function(event) {
   event.preventDefault();

   
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ==="") {
      alert("All fields required!"); 
      return;  
   }
   
   if(isNaN(pilotName.value) === false) {
      alert("Please enter a valid name.");
      return;
   }

   if(isNaN(copilotName.value) === false) {
      alert("Please enter a valid name.");
      return;
   }
   
   if(isNaN(fuelLevel.value)) {
      alert("Please enter a number.");
      return;
   }

   if(isNaN(cargoMass.value)) {
      alert("Please enter a number.");
      return;
   }
   
   if(fuelLevel.value < 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
      copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready.`;
      fuelStatus.innerHTML = "Fuel level too low for launch.";
      
   } 
   
   if(cargoMass.value > 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
      copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready.`;
      cargoStatus.innerHTML = "Cargo mass too high for launch.";
      
   } 
   
   if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
   launchStatus.innerHTML = "Shuttle is Ready for Launch";
   launchStatus.style.color = "green";
   }

   
   });
});

