import { activities, removeFromActivities } from '../data/activities.js';
import { completedActivities, addToCompleted } from '../data/completed.js';

export function renderActivities() {
  if(activities.length === 0) {
    document.querySelector('.js-activities-completed-card').innerHTML = `
      <div class="empty-activities-message">
        <h3>WELCOME!</h3>
        <p>
          Start your list by getting an activity above!
        </p>
      </div>
      
    `
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
              <input type="date" class="js-date-input">
            </div> 
            <div class="date-submit-container">
              <button class="date-submit-button js-date-submit-button">Submit</button>
            </div>
  
          `;
  
          const datePopupElement = document.querySelector('.js-date-popup')
  
          datePopupElement.innerHTML = dateHTML;
  
          datePopupElement.showModal();
  
          document.querySelector('.js-close-button').addEventListener('click', () => {
            datePopupElement.close();
            checkbox.checked = false;
          })
  
          document.querySelector('.js-date-submit-button').addEventListener('click', () => {
            let date = document.querySelector('.js-date-input').value;
  
            const [year, month, day] = date.split('-');
  
            date = `${month}-${day}-${year}`;
            console.log(date);
  
            const activityName = checkbox.dataset.completedName;
  
            addToCompleted(activityName, date);

            removeFromActivities(activityName);
            renderActivities();

            console.log(completedActivities);
  
            datePopupElement.close();
            checkbox.checked = false;
          })
  
         
        }
        
        console.log(checkbox.dataset.completedName);
      })
    });

    document.querySelectorAll('.js-delete-button').forEach((button) => {
      button.addEventListener('click', () => {
        const activityName = button.dataset.activityName;

        removeFromActivities(activityName);

        renderActivities();
      })
    })
  }
}