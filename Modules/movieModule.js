function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}

module.exports = {
    Movie
}