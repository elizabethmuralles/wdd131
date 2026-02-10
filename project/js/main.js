// ===============================
// DATA (Objects + Array)
// ===============================
const destinations = [
  { id: 1, name: "City Museum", type: "culture" },
  { id: 2, name: "Mountain Trail", type: "nature" },
  { id: 3, name: "Food Market", type: "food" },
  { id: 4, name: "River Walk", type: "nature" }
];

// ===============================
// DISPLAY DESTINATIONS
// ===============================
function displayDestinations(list) {
  const container = document.querySelector("#destinations");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(place => {
    container.innerHTML += `
      <div class="card">
        <h3>${place.name}</h3>
        <p>Category: ${place.type}</p>
        <button data-id="${place.id}">Save Favorite</button>
      </div>
    `;
  });
}

// ===============================
// FILTERING (array method)
// ===============================
function filterDestinations(type) {
  if (type === "all") {
    displayDestinations(destinations);
  } else {
    const filtered = destinations.filter(place => place.type === type);
    displayDestinations(filtered);
  }
}

// ===============================
// LOCAL STORAGE
// ===============================
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorite(id) {
  const favorites = getFavorites();

  // conditional branching
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Destination saved!");
  } else {
    alert("Already in favorites.");
  }
}

// ===============================
// EVENT LISTENERS
// ===============================

// Button clicks (event delegation)
document.addEventListener("click", event => {
  if (event.target.matches("button[data-id]")) {
    const id = Number(event.target.dataset.id);
    saveFavorite(id);
  }
});

// Filter change
const filter = document.querySelector("#filter");
if (filter) {
  filter.addEventListener("change", e => {
    filterDestinations(e.target.value);
  });
}

// ===============================
// CONTACT FORM
// ===============================
const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#formMessage");

    message.textContent = `Thank you for contacting us, ${name}!`;
    form.reset();
  });
}

// ===============================
// INITIAL LOAD
// ===============================
displayDestinations(destinations);
