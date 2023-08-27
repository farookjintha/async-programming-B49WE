// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getFilmDetails() {
    console.log("Movie Title: ", this.title);
    console.log("Studio: ", this.studio);
    console.log("Rating: ", this.rating);
  }

  getPG(movieList) {
    let filteredMovies = movieList.filter((movie) => {
      if (movie.rating === "PG") {
        return true;
      }
      return false;
    });

    return filteredMovies;
    // console.log("Movies with rating PG: ", filteredMovies);
  }
}

let newFilm1 = new Movie("Jailer", "Sun Pictures"); //object/instance
let newFilm2 = new Movie("Por Thozhil", "XYZ", "PG13"); //object/instance

// console.log("TITLE: ", newFilm.title);

newFilm1.getFilmDetails();
newFilm2.getFilmDetails();

let movies = [
  {
    title: "Jailer",
    studio: "Sun Picture",
    rating: "PG",
  },
  {
    title: "Por Thozhil",
    studio: "ABC",
    rating: "PG13",
  },
  {
    title: "LGM",
    studio: "Dhoni Pictures",
    rating: "PG15",
  },
  {
    title: "Good Night",
    studio: "ABC",
    rating: "PG",
  },
];

let movieWithPG = newFilm1.getPG(movies);
console.log("Movies with PG rating: ", movieWithPG);

let newFilm3 = new Movie("Casino Royale", "Eon Productions", "PG13");

newFilm3.getFilmDetails();
