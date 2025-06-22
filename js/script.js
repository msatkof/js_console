const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt("Последний просмотренный фильм?", ""),
//     b = filmRating = prompt("Как вы оцение фильм?", ""),
//     c = prompt("Последний просмотренный фильм?", ""),
//     d = filmRating = prompt("Как вы оцение фильм?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

let lastWatchedMFilm = prompt("Последний просмотренный фильм?", "")
let filmRating = prompt("Как вы оцение фильм?", "")
personalMovieDB.movies[lastWatchedMFilm] = filmRating;

lastWatchedMFilm = prompt("Последний просмотренный фильм?", "")
filmRating = prompt("Как вы оцение фильм?", "")
personalMovieDB.movies[lastWatchedMFilm] = filmRating;

console.log(personalMovieDB);