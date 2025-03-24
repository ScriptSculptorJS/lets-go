import { activities, removeFromActivities } from '../data/activities.js';
import { addToCompleted } from '../data/completed.js';


export function renderActivities() {
  // Checks if there are no activities
  if(activities.length === 0) {
    document.querySelector('.js-activities-completed-card').innerHTML = `
      <div class="empty-activities-message">
        <h3>WELCOME!</h3>
        <p>
          Start your list by getting an activity above!
        </p>
      </div>
      
    `
  // If there are activities, generates HTML for each one
  } else if (activities.length !== 0) {
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

    // When activity gets checked, generates pop-up to selected completed date
    document.querySelectorAll('.js-checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {

        if (checkbox.checked) {
          let dateHTML = `
          
            <div class="close-container js-close-container">
              <button class="close-button js-close-button"><b>X</b></button>
            </div>
            <div class="close-info">
              <h4>
                When did you complete this activity?  
              </h4>
              <input type="date" class="date-input js-date-input">
            </div> 
            <div class="date-submit-container">
              <button class="date-submit-button js-date-submit-button">Submit</button>
            </div>
  
          `;
  
          const datePopupElement = document.querySelector('.js-date-popup')
  
          datePopupElement.innerHTML = dateHTML;
  
          datePopupElement.showModal();
  
          // If user clicks X in top-left of pop-up, closes pop-up
          document.querySelector('.js-close-button').addEventListener('click', () => {
            datePopupElement.close();
            checkbox.checked = false;
          })
  
          // When user submits completed information, translates date, adds to completed, removes it from activities, and closes window
          document.querySelector('.js-date-submit-button').addEventListener('click', () => {
            let date = document.querySelector('.js-date-input').value;
  
            const [year, month, day] = date.split('-');
  
            date = `${month}-${day}-${year}`;
  
            const activityName = checkbox.dataset.completedName;
  
            addToCompleted(activityName, date);

            removeFromActivities(activityName);
            renderActivities();
  
            datePopupElement.close();
            checkbox.checked = false;
          })
  
         
        }
      })
    });

    // Removes activity from activities
    document.querySelectorAll('.js-delete-button').forEach((button) => {
      button.addEventListener('click', () => {
        const activityName = button.dataset.activityName;

        removeFromActivities(activityName);

        renderActivities();
      })
    })
  }
};