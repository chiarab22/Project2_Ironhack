const addMovieBtn = document.getElementById('add-movie-btn');
const hideMoviesBtn = document.getElementById('hide-movies-btn');
const showMoviesBtn = document.getElementById('show-movies-btn');
const actionMoviesList = document.getElementById('action-movies-list');

addMovieBtn.addEventListener('click', () => {
	const movieName = prompt('Enter a movie name');
	const newMovie = document.createElement('li');
	newMovie.textContent = movieName;
	actionMoviesList.appendChild(newMovie);
});

hideMoviesBtn.addEventListener('click', () => {
	actionMoviesList.style.display = 'none';
});

showMoviesBtn.addEventListener('click', () => {
	actionMoviesList.style.display = 'block';
});