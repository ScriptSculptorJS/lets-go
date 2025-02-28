import { loadActivityFetch } from '../data/activities.js';
import { renderActivities } from './activities-card.js';

renderActivities();

document.querySelector('.js-activities-button').addEventListener('click', () => {
  const type = document.querySelector('.js-dropdown').value;
  console.log(type);
  loadActivityFetch(type);
});

const completedTabElement = document.querySelector('.js-completed-button');

const activitiesTabElement = document.querySelector('.js-activity-list-button');

completedTabElement.addEventListener('click', () => {
  activitiesTabElement.classList.remove('active');

  completedTabElement.classList.add('active');

  
});

activitiesTabElement.addEventListener('click', () => {
  completedTabElement.classList.remove('active');

  activitiesTabElement.classList.add('active');

  renderActivities();
});