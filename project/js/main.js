// PRODUCT ARRAY
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "ac-2000", name: "Air Conditioner" },
  { id: "vr-9000", name: "VR Headset" }
];

// SELECT
const select = document.querySelector("#product");

if (select) {
  products.forEach(p => {
    const option = document.createElement("option");
    option.value = p.id;
    option.textContent = p.name;
    select.appendChild(option);
  });
}

// LAST MODIFIED
const modified = document.querySelector("#lastModified");

if (modified) {
  modified.textContent = document.lastModified;
}
