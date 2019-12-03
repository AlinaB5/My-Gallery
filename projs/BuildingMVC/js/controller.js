'use strict'
function init(){
    loadUsers();
}

function onRenderSecret() {
    var $userName = $('.user-name').val()
    var $password = $('.password').val()
    var user = doLogin($userName, $password);
    if (user) {
        window.location.assign("../html/secret.html");
        renderGreeting();
    }
}

function onRenderGreetingAndAdminLink() {
    var loggedInUser = getLoggedInUser();
    var $elGreeting = $('.greeting');
    $elGreeting.text($elGreeting.text() + loggedInUser.userName);
    if (loggedInUser.isAdmin) {
        var $elAdminBtn = $('.admin-btn').show();
    }
}

function onLogout() {
    window.location.assign("../html/login.html");
    doLogout();
}

function onRenderAdmin() {
    window.location.assign("../html/admin.html");
}

function onRenderUsersTable() {
    loadUsers();
    if (getLoggedInUser().isAdmin) {
        var users = getUsersToRender();
        var $elTableBody = $('.users-table')
        var tableRows = '';
        tableRows = users.map(function (user) {
            var formattedDate = formatDate(user.lastLoginTime)
            return `<tr>\n\t
                    <td>${user.userName}</td>\n
                    <td>${formattedDate}</td>\n
                    <td>${user.isAdmin}</td>\n
                    </tr>\n`
        })
        $elTableBody.html(tableRows.join(''));
    }
    else (
        window.location.assign("../html/login.html")
    )
}

function onSortClick(sortBy) {
    setSortType(sortBy)
    onRenderUsersTable();
}





