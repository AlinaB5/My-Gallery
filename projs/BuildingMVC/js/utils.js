'use strict'

function formatDate(timeInMiliseconds) {
    var now = new Date(timeInMiliseconds);
    var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime
}