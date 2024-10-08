// HTML Handles
const cardsBox = document.querySelector(".cards-box");

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {}

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

  const readButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  readButton.classList.add("read-button");
  deleteButton.classList.add("delete-button");
  readButton.setAttribute("type", "button");
  deleteButton.setAttribute("type", "button");

  const readButtonImg = document.createElement("img");
  const deleteButtonImg = document.createElement("img");

  readButtonImg.setAttribute("src", "assets/done.svg");
  deleteButtonImg.setAttribute("src", "assets/delete.svg");
  readButtonImg.setAttribute("alt", "done icon");
  deleteButtonImg.setAttribute("alt", "trash icon");

  readButton.append(readButtonImg);
  deleteButton.append(deleteButtonImg);
  cardButtons.append(readButton, deleteButton);

  return cardButtons;
}

function addCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfo = makeCardInfo(book);
  const cardButtons = makeCardButtons();

  card.append(cardInfo, cardButtons);
  cardsBox.append(card);
}
