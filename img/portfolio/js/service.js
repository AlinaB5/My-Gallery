'use strict'
var gProjects;

function createProject(id, name, title, url, publishedAt, category, labels = []) {
    return {
        id, name, title, url, publishedAt, category, labels
    }
}

function createProjects() {
    gProjects = [createProject('minesSweeper', 'Mines Sweeper', 'A single-player puzzle computer game.', './projs/minesSweeper/index.html', 'Nov 2019', 'Logic Games', ['game', 'mines', 'matrix']),
    createProject('login', 'Login Page', 'Log in, log out, secret content, table', './projs/BuildingMVC/html/login.html', 'Nov 2019', 'Admin panel', ['table', 'admin', 'log in', 'log out', 'responsive']),
    createProject('bookShelf', 'Book Store', 'Book store management, admin page', './projs/bookShelf/index.html', 'Dec 2019', 'Admin panel', ['table', 'books', 'admin', 'responsive'])
    ]
    saveData();
}

function saveData() {
    saveToStorage('gProjects', gProjects);
}

function loadData() {
    gProjects = loadFromStorage('gProjects', [])
    if (gProjects.length === 0) createProjects();
}

function getProjectsToRender() {
    return gProjects
}

function getProjectById(projectId) {
    return gProjects.find(function (project) {
        return project.id === projectId
    });
}