// Footer dates
const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Static weather values (Japan)
const temperature = 8; // °C
const windSpeed = 10;  // km/h

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#windSpeed").textContent = windSpeed;

const windChillSpan = document.querySelector("#windChill");

// Wind chill calculation (metric) - one line return
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  );
}

// Conditions required for wind chill
if (temperature <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temperature, windSpeed).toFixed(1);
  windChillSpan.textContent = `${chill} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
