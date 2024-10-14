// HTML Handles
const cardsBox = document.querySelector(".cards-box");
const form = document.querySelector(".form");
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const inputPages = document.querySelector("#input-pages");
const inputYes = document.querySelector("input[value='yes']");
const inputNo = document.querySelector("input[value='no']");

const library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function makeCardInfo(book) {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardRead = document.createElement("p");

  cardTitle.classList.add("card-title");
  cardAuthor.classList.add("card-author");
  cardPages.classList.add("card-pages");
  cardRead.classList.add("card-read");

  cardTitle.textContent = `Title: ${book.title}`;
  cardAuthor.textContent = `Author: ${book.author}`;
  cardPages.textContent = `Pages: ${book.pages}`;
  cardRead.textContent = `Read: ${book.read ? "Yes" : "No"}`;

  cardInfo.append(cardTitle, cardAuthor, cardPages, cardRead);

  return cardInfo;
}

function makeCardButtons() {
  const cardButtons = document.createElement("div");
  cardButtons.classList.add("card-buttons");

  const readButton = document.createElement("img");
  const deleteButton = document.createElement("img");
  readButton.classList.add("read-button");
  deleteButton.classList.add("delete-button");

  readButton.setAttribute("src", "assets/done.svg");
  deleteButton.setAttribute("src", "assets/delete.svg");
  readButton.setAttribute("alt", "done icon");
  deleteButton.setAttribute("alt", "trash icon");

  cardButtons.append(readButton, deleteButton);

  return cardButtons;
}

function addCard() {
  const bookIndex = library.length - 1;
  const book = library[bookIndex];
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", bookIndex);

  const cardInfo = makeCardInfo(book);
  const cardButtons = makeCardButtons();

  card.append(cardInfo, cardButtons);
  cardsBox.append(card);
}

function addBook() {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = Number(inputPages.value);
  const read = inputYes.checked;

  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

function clearInputs() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputNo.checked = true;
  inputTitle.focus();
}

function toggleRead(card) {
  const index = card.getAttribute("data-index");
  library[index].read = !library[index].read;

  card.querySelector(".card-read").textContent = `Read: 
  ${library[index].read ? "Yes" : "No"}`;
}

function deleteCard(card) {
  const index = Number(card.getAttribute("data-index"));

  // if there are any cards after this one, loop over them and decrement their index number
  // so the new index numbers will match the new index numbers in the library array
  for (let i = index + 1; i < cardsBox.childElementCount; i++) {
    const card = document.querySelector(`.card[data-index="${i}"]`);
    card.setAttribute("data-index", i - 1);
  }

  library.splice(index, 1);
  card.remove();
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addBook();
  clearInputs();
  addCard();
});

cardsBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("read-button")) {
    toggleRead(e.target.closest(".card"));
  }
  if (e.target.classList.contains("delete-button")) {
    deleteCard(e.target.closest(".card"));
  }
});

// Run at page load
clearInputs();
