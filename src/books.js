//Create a function named findAuthorById that takes in two parameters 1)An array of authors and 2)An id of a single author
//Use the find() method to loop through authors array and search for the author where author.id === id;
//Return the author object where author.id === id is true.
function findAuthorById(authors, id) {
 let found = authors.find((author) => author.id === id);
 return found;
}

//Create a function named findBookById that takes in two parameters 1)An array of books and 2)An id of a single author
//Use the find() method to loop through books array and search for the book where book.id === id;
//Return the book object where book.id === id is true.
function findBookById(books, id) {
 let foundBooks = books.find((book) => book.id === id);
 return foundBooks;
}

//This function takes a single parameter, an array of books.
//Return an array with two arrays inside of it. The spread operator be used at the end to combine arrays by using the spread operator.
//The first array should contain books that have been returned books.borrow.returned === true.
//The second array should contain books that have been loaned out and are not yet returned books.borrows.returned === false
function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 /*The .filter() method will look through the books array and compile a new array that meets our condition.
  Within the filter method we will use a helper function with the every method that will check if our condition
  is true within the borrow array.  If it is true */
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 /*The .filter() method will look through the books array and compile a new array that meets our condition.
  Within the filter method we will use a helper function with the .some() method that will check if our condition
  is true within the borrow array.  If it is true */
 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}

//Create a function named getBorrowersForBook that takes in two parameters 1) A book object and 2)the accounts array.
//Use the map() method to loop through the borrows array of the book object.
//Use the find() method within the map method to loop through the accounts array.
//Pass in an anonymous function as the callback function that takes in each account and finds the account where account.id === borrow.id
//Return the spread operator that contains the output values of the map method as borrow and the account variable.
//Use the slice method on the output array to return only the portion of the array up to index value 10 of the returned array.
function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
 findAuthorById,
 findBookById,
 partitionBooksByBorrowedStatus,
 getBorrowersForBook
};
