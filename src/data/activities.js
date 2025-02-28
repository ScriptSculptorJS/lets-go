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
  if (type === 'any-type') {
    console.log(type);
    fetch('http://bored.api.lewagon.com/api/activity/')
    .then((res) => {
      return res.json();
    })
    .then((activityData) => {
      activities.push(activityData.activity);
      
      saveToStorage();

      renderActivities();
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    console.log(type);
    fetch(`http://bored.api.lewagon.com/api/activity?type=${type}`)
    .then((res) => {
      return res.json();
    })
    .then((activityData) => {
      activities.push(activityData.activity);
      
      saveToStorage();

      renderActivities();
    })
    .catch((err) => {
      console.log(err);
    })
  }
};