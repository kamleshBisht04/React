const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// start distructuring
const book = getBook(4);
book;

const {
  title,
  publicationDate,
  author,
  genres,
  hasMovieAdaptation,
  pages,
  translations,
  reviews,
} = book;

console.log(
  title,
  publicationDate,
  author,
  genres,
  hasMovieAdaptation,
  pages,
  translations,
  reviews
);

console.log(title, author, publicationDate);

console.log(genres);

//  for array distruing
// Rest operator

const [primaryGenres, secondaryGeneres, ...otherGeneres] = genres;
console.log(primaryGenres, secondaryGeneres, otherGeneres);

//  sperad operator...
const newGenres = ["epic fantacy", ...genres];
console.log(newGenres);

const updatedBook = {
  ...book,
  // Adding a new propety
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property...
  pages: 1210,
};
updatedBook;

//  Arrow Function

// normal function change to arrow function

// function getYear(str){
//   return str.split("-").at(0)
// }

// console.log(getYear(publicationDate));

const getYear = (str) => str.split("-").at(0);

console.log(getYear(publicationDate));

//  Template literals
const summary = `${title},a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)} The book has ${hasMovieAdaptation ? "" : "not "}been adopted as a movie .`;
summary;

// Ternaries insted of if and else statements

const pagesRange = pages > 1000 ? "over a thoushand" : " less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// short circuiting and logically operator  && || ??

//  Falsy value  // 6 values
//  null,undefine,"",false,0,NaN

// If the first operand evaluates to a falsy value: The && operator immediately returns that falsy value and does not evaluate the second operand.

// If the first operand evaluates to a truthy value: The && operator proceeds to evaluate the second operand and returns the value of the second operand.

console.log(true && "some string");
console.log("kamlesh" && "some string");
console.log(true && "");
console.log(false && null);
console.log(undefined && "some string");

console.log(hasMovieAdaptation && "This book has a movie .");

// short circuting with || operator
// This is the "short-circuit" part. If the left-hand operand is "falsy" (evaluates to false), then the right-hand operand is evaluated and its value is returned.

console.log(true || "some string");
console.log("kamlesh" || "some string");
console.log(true || "");
console.log(false || null);
console.log(undefined || "some string");

console.log(hasMovieAdaptation || "This book has a movie .");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

spanishTranslation;

console.log(book.reviews.librarything?.reviewsCount || 0);
const countWrong = book.reviews?.librarything?.reviewsCount || "no data";
countWrong;

// solve problem of correct data showing in book no 2
// Nullish coalescing operator
// JavaScript provides a concise way to handle cases where a variable might be null or undefined.
//  It returns the right-hand side operand if the left-hand side is null or undefined; otherwise, it returns the left-hand side value.

const countreview = book.reviews?.librarything?.reviewsCount ?? 0;
countreview;

//  OPTIONAL CHAINING ?. and ?? to set the default data ....

function getToTotalReviewCount(book) {
  const goodreadsReview = reviews?.goodreads?.reviewsCount;
  const librarythingReview = reviews?.librarything?.reviewsCount ?? 0;
  return goodreadsReview + librarythingReview;
}
console.log(getToTotalReviewCount(book));

// Array map method

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

//  returning the array of objects using () bracket
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getToTotalReviewCount(book),
}));

console.log(essentialData);

// Filter method fileter out in a given condition

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

//  Array Reduced method..

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

pagesAllBooks;

// The array sort method ......

const y = [3, 7, 1, 9, 6, 8, 2];

const sorted = y.sort((a, b) => a - b);
console.log(sorted);
// muted the orignal array ...
console.log(y);

const decSort = y.sort((a, b) => b - a);
console.log(decSort);
console.log(y);

//  to sorted and slice method is used to sort

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

//  working with immutable arrays

// 1 .add book object to array

const newBook = {
  id: 6,
  title: "Harray Potter and the chember of Secrets",
  author: "J.K.Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2. Delete books object  from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3. update book object in the array turnary operator

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1
    ? { id: 1, title: "India", author: "pandit jawhar lal nehru" }
    : book
);

console.log(booksAfterUpdate);

const update2 = booksAfterUpdate.map((book) =>
  book.id === 2 ? { ...book, pages: 1210 } : book
);

console.log(update2);

// Asynchronous Java Script: Promises

const res = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log(res);

// // Asynchronous Java Script: Async/Await

async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
const todos = getTodo();
console.log(todos);
todos.then((data) => console.log(data));

console.log("kamlesh");
