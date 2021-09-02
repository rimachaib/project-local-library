/*By using the .length array method, 
I can return the number of elements (book objects) 
in the books array.*/
function getTotalBooksCount(books) {
 return books.length;
}

/*By using the .length array method, 
I can return the number of elements (account objects) 
in the accounts array.*/
function getTotalAccountsCount(accounts) {
 return accounts.length;
}

/* Return a number that represents the number of books that are currently checked out of the library. This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.*/
//Create a function named getBooksBorrowedCount that takes in a books array
//Declare a variable named booksCheckedOut that filters through the books array
//Create an anonymous function within the books.filter method that filters through the borrows array
//Check for record.returned === false
//If the conditional statement is true and the length of the resulting array from the filter method is greater than zero
//Return the length of the resulting array
function getBooksBorrowedCount(books) {
 let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}

//The parameter of this function is an array of books
//Return an array containing five objects or fewer that represents the most commmon occuring genres ordered from most common to least
//Each object in the returned array should have two keys name: genre and count: # of times the genre occurs in the array
//First we need to loop over the books array and count the number of times each genre shows up storing these results in an array
//If there is a genre in the map then add 1
//If there isn't a genre in the map then set the key and value to one
//Map the Object entries and return them with name and count
//Sort the array so the most common comes first
function getMostCommonGenres(books) {
 let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
 getTotalBooksCount,
 getTotalAccountsCount,
 getBooksBorrowedCount,
 getMostCommonGenres,
 getMostPopularBooks,
 getMostPopularAuthors
};
