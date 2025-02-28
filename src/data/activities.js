export const activities = [];

export function saveToStorage() {
  localStorage.setItem('activities', JSON.stringify(activities));
}

export function loadActivityFetch() {
  fetch('http://bored.api.lewagon.com/api/activity/')
  .then((res) => {
    return res.json();
  })
  .then((activityData) => {
    activities.push(activityData.activity);
    saveToStorage();
    console.log(activities);
  })
  .catch((err) => {
    console.log(err);
  })
};