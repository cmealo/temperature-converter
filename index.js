function describeTemperature(temp) {
  if (temp < 0) {
    return "very cold";
  } else if (temp < 20) {
    return "cold";
  } else if (temp < 30) {
    return "warm";
  } else if (temp < 40) {
    return "hot";
  } else if (temp >= 40) {
    return "very hot";
  } else {
    return "error";
  }
}
