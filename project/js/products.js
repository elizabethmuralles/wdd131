// ===============================
// PRODUCT ARRAY (DATA SOURCE)
// ===============================
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "pw-1980", name: "Power Widget" },
  { id: "ac-2000", name: "Air Conditioner" },
  { id: "hd-1969", name: "HyperDrive" },
  { id: "sp-2024", name: "Solar Panel" }
];


// ===============================
// BUILD PRODUCT SELECT (form.html)
// ===============================
const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;        // required by rubric
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}


// ===============================
// REVIEW COUNTER (review.html)
// ===============================
const reviewCount = document.querySelector("#reviewCount");

if (reviewCount) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCount.textContent = count;
}
