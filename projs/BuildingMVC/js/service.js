'use strict'
var gUsers=[], gLoggedInUser, gSortType = 'name', gIsDec = gIsDec;

function createUsers(){
gUsers.push({ userName: 'Alina', password: '123', lastLoginTime: Date.now(), isAdmin: false });
gUsers.push({ userName: 'Mia', password: '123', lastLoginTime: Date.now(), isAdmin: true });
gUsers.push({ userName: 'Zoey', password: '123', lastLoginTime: Date.now(), isAdmin: false });
saveUsers()
}

function saveUsers() {
    saveToStorage('gUsers', gUsers);
}

function saveUser() {
    saveToStorage('gLoggedInUser', gLoggedInUser)
}

function loadUsers(){
    gUsers = loadFromStorage('gUsers',[])
    if (gUsers.length === 0) createUsers();
}

function getLoggedInUser() {
    var loggedInUser = loadFromStorage('gLoggedInUser', 'no logged in user');
    return loggedInUser
}

function getUsersToRender() {
    gUsers.sort(sortUsers())
    return gUsers
}

function setSortType(sortBy) {
    if (gSortType === sortBy) gIsDec = !gIsDec;
    else gIsDec = false;
    gSortType = sortBy;
}

function sortUsers() {
    return function (a, b) {
        var result = (a[gSortType] < b[gSortType]) ? -1 : (a[gSortType] > b[gSortType]) ? 1 : 0;
        return result * (gIsDec ? -1 : 1);
    }
}

function doLogin(userName, password) {
    return gUsers.find(function (user) {
        if (user.userName === userName && user.password === password) {
            user.lastLoginTime = new Date().getTime();
            gLoggedInUser = user
            saveUser();
            saveUsers();
            return user
        }
    })
}

function doLogOut() {
    removeStorageItem('loggedInUser');
}

