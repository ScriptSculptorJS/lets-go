import { loadActivityFetch } from '../data/activities.js';
import { renderActivities } from './activities-card.js';
import { renderCompletedActivities } from './completed-card.js';
import { completedActivities } from '../data/completed.js';

renderActivities();

document.querySelector('.js-activities-button').addEventListener('click', () => {
  const type = document.querySelector('.js-dropdown').value;

  loadActivityFetch(type);
});

const completedTabElement = document.querySelector('.js-completed-button');

completedTabElement.innerHTML = `
  Completed (${completedActivities.length})
`;

const activitiesTabElement = document.querySelector('.js-activity-list-button');



completedTabElement.addEventListener('click', () => {
  activitiesTabElement.classList.remove('active');

  completedTabElement.classList.add('active');

  renderCompletedActivities();
});

activitiesTabElement.addEventListener('click', () => {
  completedTabElement.classList.remove('active');

  activitiesTabElement.classList.add('active');

  renderActivities();
});