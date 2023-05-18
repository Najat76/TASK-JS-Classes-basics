/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 * + printName(), that print the persons full name first name and last name) - Done
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  //Properties

  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName; // "Alkannderi";
    this.gender = gender; //"Female";
    this.birthYear = birthYear; //1976;
  }

  //Methods
  printName() {
    console.log("Full Name is ", this.firstName, this.lastName);
  }
  calculateAge() {
    return 2023 - this.birthYear;
  }

  /*calculateListLength() {
    return Person.length;
  }*/
}
//console.log(calculateListLength(Person));
const person1 = new Person("Najat", "Alkanderi", "Female", 1976);
const person2 = new Person("Mohammed", "Almasaad", "", 1964);
const person3 = new Person("Dareen", "Alsultan", "Female", 1993);

person1.printName();
console.log(person1.calculateAge());

person2.printName();
console.log(person2.calculateAge());

person3.printName();
console.log(person3.calculateAge());

console.log(
  person1.calculateAge(person1.birthYear) +
    person2.calculateAge(person2.birthYear) +
    person3.calculateAge(person3.birthYear)
);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method,
 *  and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }
  rating = [];
  // methods
  // method 3.1

  rate(rating) {
    if (rating > 0 && rating < 10) {
      this.rating.push(rating);
    }
  }

  averageRating(rating1) {
    //averageRating(_rating1) : suggested fixes from the compiler
    let sum = 0;

    sum = this.rating.forEach((rating1) => sum + rating1);
    average = sum / this.rating.length;
  }
}

const movie1 = new Movie("moana", 60, cartoon);
const movie2 = new Movie("Lucky", 60, Drama);
const movie3 = new Movie("Cruch", 60, Horror);
const movie4 = new Movie("Titanic", 60, romance);

// Bonus Question Trial : using Reduce
averageRating(rating) {
//const initialValue = 0;
return (this.rating.forEach((rating1) => this.rating.reduce(rating1, this.rating, 0))) / this.rating.length;
};
//console.log(rate(100));
//
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

class Actor extends Person {
  movies = [];
  constructor( firstName, lastName, gender, birthYear) {
    super(firstName, lastName, gender, birthYear); 
  }

  addMovie (movie) {
    const movie1 = new Movie("Pacifier", 160, comedy);
  };

  show() {
    return this.present() + ', it is a ' + this.model;
  }
}


