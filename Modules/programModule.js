function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.getNumOfMovies = function () {
        return this.listOfMovies.length;
    }
    this.getData = function () {
        var programLength = 0;
        var movieList = "";

        for (var i = 0; i < this.listOfMovies.length; i++) {
            programLength += this.listOfMovies[i].length;
            movieList += "\n\t\t" + this.listOfMovies[i].getData();

        }

        return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + "., program duration " + programLength + "min" + movieList;
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }
}

module.exports = {
    Program
}