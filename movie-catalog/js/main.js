// ===== UTIL =====
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
}

// ===== CATALOG =====
const movieList = document.getElementById("movieList");
const genreFilter = document.getElementById("genreFilter");

if (movieList && genreFilter) {

    const genres = [...new Set(movies.map(m => m.genre))];
    genres.forEach(g => {
        const option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        genreFilter.appendChild(option);
    });

    function renderMovies() {
        const filter = genreFilter.value;
        movieList.innerHTML = "";

        movies
            .filter(m => filter === "all" || m.genre === filter)
            .forEach(movie => {

                const favs = getFavorites();
                const isFavorite = favs.includes(movie.id);

                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p><b>Genre:</b> ${movie.genre}</p>
                    <p><b>Year:</b> ${movie.year}</p>
                    <p>${movie.description}</p>
                    <button data-id="${movie.id}">Add to favorites</button>
                `;


                card.querySelector("button").addEventListener("click", () => {
                    const favs = getFavorites();
                    const index = favs.indexOf(movie.id);

                    if (index === -1) {
                        favs.push(movie.id);
                    } else {
                        favs.splice(index, 1);
                    }

                    saveFavorites(favs);
                    renderMovies();
                });

                movieList.appendChild(card);
            });
    }

    genreFilter.addEventListener("change", renderMovies);
    renderMovies();
}

// ===== FAVORITES =====
const favoritesList = document.getElementById("favoritesList");

if (favoritesList) {

    const favs = getFavorites();
    const favMovies = movies.filter(m => favs.includes(m.id));

    if (favMovies.length === 0) {
        favoritesList.innerHTML = "<p>You don't have any movie yet.</p>";
    } else {
        favMovies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            `;
            favoritesList.appendChild(card);
        });
    }
}

// ===== CONTACT =====
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formMessage").textContent =
            `¡Gracias ${name} por tu sugerencia!`;

        form.reset();
    });
}
