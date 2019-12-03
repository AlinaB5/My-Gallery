'use strict'
function init() {
    loadData();
    renderBooksTable()
}

function renderBooksTable() {
    var books = getBooksToRender();
    var $elTableBody = $('.books-table')
    var tableRows = '';
    tableRows = books.map(function (book) {
        return `<tr>\n\t
                    <td class = "id">${book.id}</td>\n
                    <td class = "title">${book.title}</td>\n
                    <td class = "price">${book.price}</td>\n
                    <td class = "rate">${book.rate}</td>\n
                    <td class = "btn btn-outline-success" data-toggle="modal" data-target = "#detailsModal" onclick="onShowDetails(${book.id})">Details</td>\n
                    <td class = "btn btn-outline-primary" data-toggle="modal" data-target ="#UpdatePriceModal" onclick="onUpdateBook(${book.id})">Update</td>\n
                    <td class = "btn btn-outline-danger" onclick="onDeleteBook(${book.id})">Delete</td>\n
                </tr>\n`
    })
    $elTableBody.html(tableRows.join(''));
}

function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooksTable();
}

function onAddBook() {
    var newTitle = document.querySelector('.new-title').value;
    var newPrice = document.querySelector('.new-price').value;
    var newImgName = document.querySelector('.new-cover-name').value;
    if (newTitle && newPrice && newImgName) {
        addNewBook(newTitle, newPrice, newImgName);
        renderBooksTable();
    }
    
    document.querySelector('.new-title').value = '';
    document.querySelector('.new-price').value = '';
    document.querySelector('.new-cover-name').value = '';
}

function onUpdateBook(bookId) {
    var currBook = setCurrBook(bookId);
}

function onSavePriceChange() {
    var updatedPrice = document.querySelector('.updated-price').value;
    var book = getCurrBook();
    updateBookPrice(book, updatedPrice);
    renderBooksTable();
}

function onSortClick(sortBy) {
    setSortType(sortBy)
    renderBooksTable();
}

function onShowDetails(bookId) {
    setCurrBook(bookId);
    renderDetailsModal();
}

function renderDetailsModal() {
    var book = getCurrBook();
    document.querySelector('.modal-title').innerText = book.title
    document.querySelector('.modal-rate').innerText = book.rate
    document.querySelector('.modal-price').innerText = `Price: $ ${book.price}`;
    document.querySelector('.modal-cover').src = `./images/${book.imgName}.jfif`;
}

function onUpdateRateClick(elBtn) {
    if (elBtn.dataset.type === 'minus') decreaseRate();
    else (increaseRate())
    renderDetailsModal();
    renderBooksTable();
}
