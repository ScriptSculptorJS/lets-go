import { completedActivities } from '../data/completed.js';

// Generates html for the completed activities
export function renderCompletedActivities() {
  let html = '';

  completedActivities.forEach((activity) => {
    html += `
      <div class="completed-container">
        <p class="completed-name">${activity.name}</p>
        <p class="completed-date js-completed-date" date-completed-name="${activity.name}"><b>${activity.date}</b></p>
      </div>
    `
  });

  document.querySelector('.js-activities-completed-card').innerHTML = html;
}