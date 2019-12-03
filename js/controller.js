'use strict'

function init() {
  loadData();
  renderPortfolio();
}

function renderPortfolio() {
  var projects = getProjectsToRender();
  var elProjectsContainer = document.querySelector('.projects-container')
  var projectContainers = '';
  projectContainers = projects.map(function (project) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick = "renderProjectModal('${project.id}')" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.id} thumbnail.jpg" height ="10">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`
  })
  elProjectsContainer.innerHTML = projectContainers.join('')
}


function renderProjectModal(projectId) {
  var project = getProjectById(projectId);
  var elProjectModal = document.querySelector('.modal-body');
  var modalstr = '';
  modalstr = `<h2>${project.name}</h2>
              <p class="item-intro text-muted">${project.title}</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg">
              <ul class="list-inline">
              <li>${project.publishedAt}</li>
              <li>Client: Coding Academy</li>
              <li>Category: ${project.category}</li>
              <p class="item-intro text-muted"><a target = "_blank" href = "${project.url}">Check it out </a></p>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
              <i class="fa fa-times"></i>
              Close Project</button>`
  elProjectModal.innerHTML = modalstr;
}

function onContact() {
  var subject = document.querySelector('.subject').value;
  var message = document.querySelector('.message').value;
  var elSubmitBtn = document.querySelector('.submit-btn')

  elSubmitBtn.setAttribute("href", `https://mail.google.com/mail/?view=cm&fs=1&to=alina.boshkov@gmail.com&su=${subject}&body=${message}`);

  document.querySelector('.subject').value = '';
  document.querySelector('.message').value = '';
}
