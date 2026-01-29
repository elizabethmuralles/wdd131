const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#modified");
const windChillSpan = document.querySelector("#windchill");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

const temp = 8;       // °C
const windSpeed = 10; // km/h

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

if (temp <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temp, windSpeed).toFixed(1);
  windChillSpan.textContent = `${chill} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
