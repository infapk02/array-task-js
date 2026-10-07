/***
 * Task One
Declare an array
  -Declare an array with 5 elements containing fruits
  -console log the 3rd index element
  -change the value of the 2nd index element to jambura
  -console log the final array

*/

var fruits = ["mango", "orange", "apple", "banana", "grapes"];

console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

/***
 * Task Two
 * Add or remove elements
  -Declare an array of 3 tourist destinations
  -Add a new tourist destination to your tourist array
  -Add two more to your array
  -Remove the last tourist destination you have added
  -display the final array as output
 */
var destinations = ["Sajek", "Cox's Bazar", "Sundarban"];
destinations.push("Kuakata");
console.log(destinations);
destinations.push("Saint Martin", "Bandarban");
console.log(destinations);
destinations.pop();
console.log(destinations);
/***
 * Task Three
 * Checking Array Membership with ‘includes’

  -Create an array of books containing different book.
  -Use the includes method to check if the array contains a javascript book.
  -Print a message to the console indicating whether the element is present in the array or not.
 */

var books = ["Javascript", "Python", "Java", "C++", "C#"];
if (books.includes("Javascript")) {
  console.log("Javascript is in the list");
} else {
  console.log("Javascript is not in the list");
}

/***
 * Task Four
 * Checking if it's an Array
  -Create different variables, each containing either an array or a non-array value.

  -Now use isArray to check if each variable is an array.

  -Print a message to the console indicating whether each variable is an array or not.
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fruits = ["mango", "orange", "apple", "banana", "grapes"];
var num = 2000;
var name = "John Doe";

console.log(Array.isArray(numbers));
console.log(Array.isArray(fruits));
console.log(Array.isArray(num));
console.log(Array.isArray(name));

/***
 * Task Five
 * Combining Arrays

  -Create two arrays of your choice.
  -Use the concat method to combine the two arrays into a new array.
  -Print both the original arrays and the combined array using console.log().
 */

var destinations1 = ["Sajek", "Cox's Bazar", "Sundarban"];
var destinations2 = ["Kuakata", "Saint Martin", "Bandarban"];

console.log(destinations1);
console.log(destinations2);

var combinedDestinations = destinations1.concat(destinations2);
console.log(combinedDestinations);
