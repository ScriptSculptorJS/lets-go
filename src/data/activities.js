import { renderActivities } from '../scripts/activities-card.js';

// Gets user's previous activities from local storage or creates empty array to start with
export let activities = JSON.parse(localStorage.getItem('activities')) || [];

// Stores data into local storage for user
export function saveToStorage() {
  localStorage.setItem('activities', JSON.stringify(activities));
}

// Removes selected activity from activities array
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

// Makes GET request from Bored.api and if it is already in the activities array, it will alert the user of the duplicate and to try again
export function loadActivityFetch(type) {
  const alertElement = document.querySelector('.js-alert-container');
  
  alertElement.classList.remove('alert');

  // Makes GET request for any type of activity
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

  // Makes GET request for a specific type of activity
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