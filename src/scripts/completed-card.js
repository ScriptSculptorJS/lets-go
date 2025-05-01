import { completedActivities } from '../data/completed.js';

// Generates html for the completed activities
export function renderCompletedActivities() {
  if (completedActivities.length === 0) {
    document.querySelector('.js-activities-completed-card').innerHTML = `
      <div class="empty-activities-message">
        <h3>
          Looks like you haven't completed an activity yet!
        </h3>
        <p>
          Start by completing an activity from your Activities list or get your first activity suggestion above!
        </p>
      </div>
    `
  } else if (completedActivities !== 0) {
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
}