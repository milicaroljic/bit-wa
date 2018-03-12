function createMovie(movieTitle, movieLength, genre) {
    return new Movie(movieTitle, genre, movieLength);
}

function createProgram(date) {
    return new Program(date);
}

function createFestival(name) {
    return new Festival(name);
}

function createGenre(name) {
    return new Genre(name);
}

module.exports = {
    createMovie,
    createProgram,
    createFestival,
    createGenre,
};

const {
    Genre
} = require("./genreModule.js");
const {
    Movie
} = require("./movieModule.js");
const {
    Program
} = require("./programModule.js");
const {
    Festival
} = require("./festivalModule.js");