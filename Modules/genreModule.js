function Genre(name) {
    this.name = name;


    this.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(name.length - 1);
        var result = firstLetter + lastLetter;
        return result.toUpperCase();
    };
}

module.exports = {
    Genre
}