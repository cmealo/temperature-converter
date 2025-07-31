// first attempt

/*
function convertToCelsius(ftemp) {
  return ((ftemp - 32) * 5) / 9;
}

function describeTemperature(ctemp) {
  let ctemp = convertToCelsius(ftemp);
  if (ctemp < 0) {
    return "very cold";
  } else if (ctemp < 20) {
    return "cold";
  } else if (ctemp < 30) {
    return "warm";
  } else if (ctemp < 40) {
    return "hot";
  } else if (ctemp >= 40) {
    return "very hot";
  } else {
    return "error";
  }
}

let ftemp = prompt("provide temperature in Fahrenheit");

let description = describeTemperature(ctemp);

alert(description);

*/

///

function convertToCelsius(ftemp) {
  return (ftemp - 32) * (5 / 9);
}

function describeTemperature(ftemp) {
  let ctemp = convertToCelsius(ftemp);
  if (ctemp < 0) {
    return "Very cold";
  } else if (ctemp < 20) {
    return "Cold";
  } else if (ctemp < 30) {
    return "Warm";
  } else if (ctemp < 40) {
    return "Hot";
  } else {
    return "Very hot";
  }
}

let ftemp = prompt("Provide temperature in Fahrenheit:");

let description = describeTemperature(ftemp);

alert(description);
