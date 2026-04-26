const input_num = document.getElementById("input-header")
const convert_btn = document.getElementById("convert-btn")
const meter_calc = document.getElementById("meter-description")
const liter_calc = document.getElementById("liter-description")
const kilo_calc = document.getElementById("kilo-description")


convert_btn.addEventListener("click", function() {
    let input_value = input_num.value

    meter_calc.textContent = `${input_value} meters = ${(input_value * 3.28084).toFixed(3)} feet | ${input_value} feet = ${(input_value / 3.28084).toFixed(3)} meters`
    liter_calc.textContent = `${input_value} liters = ${(input_value * 0.264172).toFixed(3)} gallons | ${input_value} gallons = ${(input_value / 0.264172).toFixed(3)} liters`
    kilo_calc.textContent = `${input_value} kilos = ${(input_value * 2.20462).toFixed(3)} pounds | ${input_value} pounds = ${(input_value / 2.20462).toFixed(3)} kilos`
})