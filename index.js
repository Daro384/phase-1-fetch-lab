// const extraChallenge = books => {
//   //5th Book
//   console.log(`5th book: ${books[4].name}`)
//   //1031st character
//   let found = false
//   for (let book of books){
//     if (found) break
//     for (let character of book.characters){
//       if (character.slice(45) === "1031") {
//         found = character
//         break
//       }
//     }
//   }
//   console.log(`the 1031st character: ${found}`)
//   //total pages
//   let pages = 0
//   for (let book of books){
//     pages += book.numberOfPages
//   }
//   console.log(`total pages: ${pages}`)
// }


function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});