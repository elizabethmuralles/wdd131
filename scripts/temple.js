// ===============================
// Footer dates
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;


// ===============================
// Hamburger menu
// ===============================
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});


// ===============================
// Temple Data (ARRAY)
// ===============================
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl: "images/rome-temple.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52900,
    imageUrl: "images/tokyo-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "images/paris-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/hawai-temple.jpg"
  },
  {
    name: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21500,
    imageUrl: "images/china-temple.jpg"
  },
  {
    name: "London England Temple",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "images/london-temple.jpg"
  },
  {
    name: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "images/sao-paulo-temple.jpg"
  },
  {
    name: "South Korea Temple",
    location: "Seoul, South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl: "images/south-korea-temple.jpg"
  }
];



// ===============================
// Display Function
// ===============================
const container = document.querySelector("#temple-cards");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.name}</h3>
      <p>${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.append(img, caption);
    container.appendChild(card);
  });
}


// ===============================
// Initial Load
// ===============================
displayTemples(temples);


// ===============================
// Menu Filters
// ===============================
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.area < 10000));
});
