import { renderActivities } from '../scripts/activities-card.js';

export let activities = JSON.parse(localStorage.getItem('activities')) || [];

export function saveToStorage() {
  localStorage.setItem('activities', JSON.stringify(activities));
}

export function removeFromActivities(activityName) {
  const newActivities = [];

  activities.forEach((activity) => {
    if (activity !== activityName) {
      newActivities.push(activity);
    }
  })

  activities = newActivities;

  saveToStorage();
};

export function loadActivityFetch(type) {
  const alertElement = document.querySelector('.js-alert-container');
  
  alertElement.classList.remove('alert');

  if (type === 'any-type') {
    fetch('//bored.api.lewagon.com/api/activity/')
    .then((res) => {
      return res.json();
    })
    .then((activityData) => {
      let matchingActivity = false;

      activities.forEach((activity) => {
        if (activity === activityData.activity) {
          matchingActivity = true;
        }
      });
      
      if (!matchingActivity) {
        activities.unshift(activityData.activity);
      
        saveToStorage();

        document.querySelector('.js-activity-list-button').classList.add('active');

        renderActivities();

      }  else if (matchingActivity) {
        document.querySelector('.js-alert-container').classList.add('alert');

        return;
      }
    })
    .catch((err) => {
      console.log(err);
    })

  } else {
    fetch(`//bored.api.lewagon.com/api/activity?type=${type}`)
    .then((res) => {
      return res.json();
    })
    .then((activityData) => {
      let matchingActivity = false;

      activities.forEach((activity) => {
        if (activity === activityData.activity) {
          matchingActivity = true;
        }
      });
      
      if (!matchingActivity) {
        activities.unshift(activityData.activity);
      
        saveToStorage();

        document.querySelector('.js-activity-list-button').classList.add('active');

        renderActivities();

      }  else if (matchingActivity) {
        document.querySelector('.js-alert-container').classList.add('alert');

        return;
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
};