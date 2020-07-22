// Method 1
// import Book from '/book.js'
//
// const book = new Book('Adventures of Sherlock Holmes', 'Arthur Conan C Doyle')
// console.log(book)

// Method 2
import mybook, { displaybookname, displaybookauthor } from '/book.js'

const book = new mybook('Adventures of Sherlock Holmes', 'Arthur Conan C Doyle')
console.log(book)
displaybookname(book)
displaybookauthor(book)
