document.getElementById('fetchMoviesButton').addEventListener('click', () => {
    fetchMovies();
});

function fetchMovies() {
    const apiKey = 'your_api_key_here'; // Replace with your actual API key
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            // Pass the movies data to the display function
            displayMovies(data.results);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movieContainer');
    movieContainer.innerHTML = ''; // Clear any previous content

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <p>Rating: ${movie.vote_average}</p>
        `;
        movieContainer.appendChild(movieElement);
    });
}
