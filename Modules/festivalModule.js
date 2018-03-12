function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfMoviesAllProgram = 0;


    this.getData = function () {
        var festivalProgram = "";

        for (var i = 0; i < this.listOfPrograms.length; i++) {

            festivalProgram += "\n\t" + this.listOfPrograms[i].getData();
            this.numOfMoviesAllProgram += this.listOfPrograms[i].getNumOfMovies();
        }

        return this.name + " festival has " + this.numOfMoviesAllProgram + " movie titles" + festivalProgram;
    }

    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
}

module.exports = {
    Festival
}