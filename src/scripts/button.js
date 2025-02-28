import { loadActivityFetch } from '../data/activities.js';
import { renderActivities } from './activities-card.js';

renderActivities();

document.querySelector('.js-activities-button').addEventListener('click', async () => {
  const type = document.querySelector('.js-dropdown').value;
  console.log(type);
  await loadActivityFetch(type);
});