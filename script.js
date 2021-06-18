// Write your JavaScript code here!

window.addEventListener("load", function() {
   let launchForm = document.getElementById("launchForm");
   let pilotName = document.querySelector("input[name = pilotName]");
   let copilotName = document.querySelector("input[name = copilotName]");
   let fuelLevel = document.querySelector("input[name = fuelLevel]");
   let cargoMass = document.querySelector("input[name = cargoMass]");
   let faultyItems = this.document.getElementById("faultyItems");
   let pilotStatus = this.document.getElementById("pilotStatus");
   let copilotStatus = this.document.getElementById("copilotStatus");
   let fuelStatus = this.document.getElementById("fuelStatus");
   let cargoStatus = this.document.getElementById("cargoStatus");
   let launchStatus = this.document.getElementById("launchStatus");
   let missionTarget = this.document.getElementById("missionTarget");

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let index = Math.floor(Math.random() * json.length);

         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
      });
   });
   launchForm.addEventListener("submit", function(event) {
      event.preventDefault();

      if (isNaN(pilotName.value) === false) {
         alert("Pilot name must be a name.");
      }   
      if (isNaN(copilotName.value) === false) {
         alert("Co-pilot name must be a name.");
      }
      if (isNaN(fuelLevel.value)) {
         alert("Fuel level must be a number.");
      }
      if (isNaN(cargoMass.value)) {
         alert("Cargo mass must be a number.");
      }
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields required!");
      }
      
      pilotStatus.innerHTML = `${pilotName.value}`;
      copilotStatus.innerHTML = `${copilotName.value}`;

      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
      } else if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
      }
   });
});



