const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function userQuetionare() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Последний просмотренный фильм?", ""),
            b = prompt("Как вы оцение фильм?", ""),
            aLength = a.length,
            bLength = b.length;

        if (aLength > 0 && aLength <= 50 && bLength > 0 && bLength <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log("ValidationError");
            userQuetionare();
        }

    }
}

userQuetionare();

console.log(personalMovieDB);

