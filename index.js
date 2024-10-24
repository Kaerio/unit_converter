/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const valueInput = document.getElementById("value-input");
const convertBtn = document.getElementById("convert-btn");
let answersContainer = document.getElementById("answers-container");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");


convertBtn.addEventListener("click", function(){
    const value = valueInput.value;
    answersContainer.innerHTML = `
        <div>
            <h2>Length (Meter/Feet)</h2>
            <p id="length-el">${value} meters = ${(Number(value) * 3.281).toFixed(3)} feet | ${value} feet = ${(Number(value) / 3.281).toFixed(3)} meters</p>
        </div>
        <div>
            <h2>Volume (Liters/Gallons)</h2>
            <p id="volume-el">${value} liters = ${(Number(value) * 0.264).toFixed(3)} gallons | ${value} gallons = ${(Number(value) / 0.264).toFixed(3)} liters</p>
        </div>
        <div>
            <h2>Mass (Kilograms/Pounds)</h2>
            <p id="mass-el">${value} kilos = ${(Number(value) * 2.204).toFixed(3)} pounds | ${value} pounds = ${(Number(value) / 2.204).toFixed(3)} kilos</p>
        </div>
    `    
})