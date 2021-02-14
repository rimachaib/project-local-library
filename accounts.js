//The following functions can be completed in whichever order I choose.

function findAccountById(accounts, id) {
let foundId = accounts.find(account => account.id === id);
return foundId;
}
//Create a function named findAccountById which takes in two parameters 1) an array of accounts and 2) an ID of a single account and should return the account object that has the matching ID.
//Create a variable named foundId that will store the results of the find() method used on the accounts array.
//Provide an anonymous callback function as the parameter of the find method that will search the accounts array to check if any of the accounts ids match the input argument id. 
//Access the key "id" within the object of the accounts array and compare each account id to the id parameter for strict equality.
//Return foundId which will have stored the account object that was true for the conditional statement.

function sortAccountsByLastName(accounts) {
accounts.sort((accountA,accountB) => (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1));
return accounts;
}
//Create a function named sortAccountsByLastName which takes in an array of account objects.
//In order to sort throught the accounts array use the sort() method to sort the objects alphabetically.
//Provide an anonymous callback function as the parameter of the sort() method that will compare the last name of account element, accountA to the last name of account element accountB.
//If the number returned is negative, the first item (accountA) will be moved before the second item (accountB). The opposite is true if the number is positive. The iteration then continues through the entire array.
//In order to sort a string use .toLowerCase() so that the strings are compared to each other in the same case format.
//Return a sorted array of objects alphabetically by last name.


function getTotalNumberOfBorrows(account, books) {
let totalBorrows = 0;
for (let i = 0; i < books.length; i++){
  for(let j = 0; j < books[i].borrows.length; j++){
    if (account.id === books[i].borrows[j].id){
      totalBorrows += 1;
    }
  }
}
return totalBorrows;
}

//This function takes in an account object and an array of all books objects
//This function will need to return a number that represents the number of times the account ID appears in any books borrow array.
//I need to loop through the books array and then loop through the borrow array in order to check if the borrows id matches the account id; if this is true, I need to add 1 to the counter variable totalBorrows.
//The two loops will continue until the end of books array.
//When the loop is complete return the value stored in the totalBorrows variable.

function getBooksPossessedByAccount(account, books, authors) {
   let result = [];
   let borrowMatch = [];
   books.forEach((item) => {
     const borrowed = item.borrows;
     const book = {
       id: item.id,
       title: item.title,
       genre: item.genre,
       authorId: item.authorId,
       author: {},
       borrows: {}
     };
     const {id, title, genre, authorId, author, borrows} = book;
 
     borrowed.forEach((borrow) => {
       if (borrow.id === account.id && borrow.returned === false) {
         result.push(book); 
         borrowMatch.push(borrow);
         book.borrows = borrowMatch;
         book.author = authors.filter(auth => auth.id === book.authorId)[0];
       }
     });
   });
   return result;
 }
//Declare a variable that will store the value of the final result in an empty array.   
//Declare a variable that will store the value of the matching borrow object.
//Loop through the books array using the forEach method and loop through the borrows array using forEach
//Declare a variable for just the borrows object const borrowed = item.borrows.
//Destructure the book object.
//As we loop through the borrowed array check if borrow.id is equal to accountId and borrow.returned == false.
//If conditional is true push the book object into the result array and the borrows object to borrowsMatch array.
//Filter through the authors array to return one author object whose id matches.
 


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
