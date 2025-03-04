export let completedActivities = JSON.parse(localStorage.getItem('completed')) || [];

export function saveCompletedToStorage() {
  localStorage.setItem('completed', JSON.stringify(completedActivities));
}

export function addToCompleted(name, date) {
  const newArray = completedActivities;

  if (completedActivities.length === 0) {
    newArray.push({
      name,
      date
    })
  } else {
    newArray.forEach((newObject, i) => {

      if (date <= newObject.date) {

        newArray.splice(i, 0, {
          name,
          date
        });

      } else if ( date > newObject.date && (newArray.length - 1) === i) {

        newArray.push({
          name,
          date
        });

      } /*else {

        console.log(`${date} is greater than ${newObject.date}`)
      }*/
    });

    
  }
  
  completedActivities = newArray;

  document.querySelector('.js-completed-button').innerHTML = `
    Completed (${completedActivities.length})
  `;

  saveCompletedToStorage();
};