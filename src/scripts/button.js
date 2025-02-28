import { loadActivityFetch, saveToStorage } from '../data/activities.js';
import { renderActivities } from './activities-card.js';

renderActivities();

document.querySelector('.js-activities-button').addEventListener('click', async () => {
  await loadActivityFetch();

  saveToStorage();
});