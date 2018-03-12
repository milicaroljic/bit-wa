const {
    createMovie,
    createProgram,
    createFestival,
    createGenre
} = require('./dataModule.js');

var action = createGenre("action");
var drama = createGenre("drama");
var comedy = createGenre("comedy");


var program1 = createProgram("28 Oct 2017");
var program2 = createProgram("29 Oct 2017");

var movie1 = createMovie("Spider-Man: Homecoming", 133, action);
var movie2 = createMovie("War for the Planet of the Apes", 140, drama);
var movie3 = createMovie("The Dark Tower", 95, comedy);
var movie4 = createMovie("Deadpool", 108, comedy);

var festival = createFestival("Weekend");

program1.addMovie(movie1);
program1.addMovie(movie2);
program1.addMovie(movie3);
program2.addMovie(movie4);

festival.addProgram(program1);
festival.addProgram(program2);

console.log(festival.getData());

