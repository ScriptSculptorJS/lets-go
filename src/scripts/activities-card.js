import { activities, removeFromActivities } from '../data/activities.js';

export function renderActivities() {
  let html = '';

  activities.map((activity) => {
    html += `
      <div class="activity-container">
        <input type="checkbox" class="checkbox js-checkbox" data-completed-name="${activity}">
        <p>${activity}</p>
        <button class="delete-button js-delete-button" data-activity-name="${activity}"><b>X</b></button>
      </div>
    `
  });

  document.querySelector('.js-activities-completed-card').innerHTML = html;

  document.querySelector('.js-activity-list-button').classList.add('active');

  const checkbox = document.querySelector('.js-checkbox')

  checkbox.addEventListener('change', (event) => {

    if (checkbox.checked) {
      let dateHTML = `
      
        <div class="close-container js-close-container">
          <button class="close-button js-close-button"><b>X</b></button>
        </div>
        <div class="close-info">
          <h4>
            When did you complete this activity?  
          </h4>
          <input type="date">
        </div> 
       
      `;

      const datePopupElement = document.querySelector('.js-date-popup')

      datePopupElement.innerHTML = dateHTML;

      datePopupElement.showModal();

      document.querySelector('.js-close-button').addEventListener('click', () => {
        datePopupElement.close();
        checkbox.checked = false;
      })
    }
  });

  document.querySelectorAll('.js-delete-button').forEach((button) => {
    button.addEventListener('click', () => {
      const activityName = button.dataset.activityName;

      removeFromActivities(activityName);

      renderActivities();
    })
  })
}