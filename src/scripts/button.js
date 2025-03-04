import { loadActivityFetch, activities } from '../data/activities.js';
import { renderActivities } from './activities-card.js';
import { renderCompletedActivities } from './completed-card.js';

renderActivities();

document.querySelector('.js-activities-button').addEventListener('click', () => {
  const type = document.querySelector('.js-dropdown').value;

  loadActivityFetch(type);
});

const completedTabElement = document.querySelector('.js-completed-button');

const activitiesTabElement = document.querySelector('.js-activity-list-button');

const activitiesCardElement = document.querySelector('.js-activities-completed-card');

completedTabElement.addEventListener('click', () => {
  activitiesTabElement.classList.remove('active');

  completedTabElement.classList.add('active');

  renderCompletedActivities();
});

activitiesTabElement.addEventListener('click', () => {
  completedTabElement.classList.remove('active');

  completedCardElement.classList.add('hidden');

  activitiesTabElement.classList.add('active');

  activitiesCardElement.classList.remove('hidden');

  renderActivities();
});

/*document.querySelector('.js-date-popup').showModal();*/