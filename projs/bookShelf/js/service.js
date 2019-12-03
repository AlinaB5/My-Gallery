'use strict'
var gBooks, gNextId = 135362, gCurrBook, gSort = 'none', gSortType = 'title', gIsDec = gIsDec;

function createBook(title, price, imgName, rate = 0) {
    return {
        title,
        price,
        imgName,
        id: gNextId++,
        rate
    }
}

function createBooks() {
    gBooks = [];
    gBooks.push(createBook('Lolita', 10, 'lolita'))
    gBooks.push(createBook('Blue whale', 40, 'blue whale'))
    gBooks.push(createBook('Donald Trump', 5, 'donald trump'))
    gBooks.push(createBook('JavaScript is easy', 60, 'javascript'))
    saveData();
}

function saveData() {
    saveToStorage('gBooks', gBooks);
    saveToStorage('gNextId', gNextId);
}

function loadData() {
    gBooks = loadFromStorage('gBooks', [])
    gNextId = loadFromStorage('gNextId', 135362)
    if (gBooks.length === 0) createBooks();
}

function getBooksToRender() {
    gBooks.sort(sortBooks())
    return gBooks
}

function getBookById(bookId) {
    return gBooks.find(function (book) {
        return book.id === bookId
    });
}

function getBookIndexById(bookId) {
    return gBooks.findIndex(function (book) {
        return book.id === bookId
    })
}

function deleteBook(bookId) {
    var bookIndex = getBookIndexById(bookId);
    gBooks.splice(bookIndex, 1);
    saveData();
}

function addNewBook(newTitle, newPrice, newImgName) {
    gBooks.push(createBook(newTitle, newPrice, newImgName))
    saveData();
}

function updateBookPrice(book, updatedPrice) {
    book.price = updatedPrice;
    saveData();
}

function setCurrBook(bookId) {
    gCurrBook = getBookById(bookId)
}

function getCurrBook() {
    return gCurrBook;
}

function setSortType(sortBy) {
    if (gSortType === sortBy) gIsDec = !gIsDec;
    else gIsDec = false;
    gSortType = sortBy;
}

function sortBooks() {
    return function (a, b) {
        var result = (a[gSortType] < b[gSortType]) ? -1 : (a[gSortType] > b[gSortType]) ? 1 : 0;
        return result * (gIsDec ? -1 : 1);
    }
}

function decreaseRate() {
    if (gCurrBook.rate > 0) gCurrBook.rate--;
    saveData();
}


function increaseRate() {
    if (gCurrBook.rate < 10) gCurrBook.rate++;
    saveData();
}