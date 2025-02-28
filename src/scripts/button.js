import { loadActivityFetch, saveToStorage } from '../data/activities.js';



document.querySelector('.js-suggestions-button').addEventListener('click', async () => {
  await loadActivityFetch();

  saveToStorage();
})