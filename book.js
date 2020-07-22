// Method 1
//
// class Book {
//   constructor(bookname, author) {
//     this.bookname = name
//     this.author = author
//   }
// }
//
// function displaybookname(book) {
//   console.log(`Book name is ${book.bookname}`)
// }
//
// function displaybookauthor(book) {
//   console.log(`Author name is  ${book.author}`)
// }
//
// export default book
// export { displaybookname , displaybookauthor }

// Method 2

export default class Book {
  constructor(bookname, author) {
    this.bookname = bookname
    this.author = author
  }
}

export function displaybookname(book) {
  console.log(`Book name is ${book.bookname}`)
}

export function displaybookauthor(book) {
  console.log(`Author name is  ${book.author}`)
}
