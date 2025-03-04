import { activities, removeFromActivities } from '../data/activities.js';

export function renderActivities() {
  let html = '';

  activities.map((activity) => {
    html += `
      <div class="activity-container">
        <p>${activity}</p>
        <button class="delete-button js-delete-button" data-activity-name="${activity}"><b>X</b></button>
      </div>
    `
  });

  document.querySelector('.js-activities-completed-card').innerHTML = html;

  document.querySelector('.js-activity-list-button').classList.add('active');

  document.querySelectorAll('.js-delete-button').forEach((button) => {
    button.addEventListener('click', () => {
      const activityName = button.dataset.activityName;

      removeFromActivities(activityName);

      renderActivities();
    })
  })
}