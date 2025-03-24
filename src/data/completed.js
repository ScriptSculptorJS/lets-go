// Gets user's previous completed activities from their local storage or creates an empty array
export let completedActivities = JSON.parse(localStorage.getItem('completed')) || [];

// Stores user's current completed array into local storage
export function saveCompletedToStorage() {
  localStorage.setItem('completed', JSON.stringify(completedActivities));
}

// Adds activity to completed array and places it in array based on date completed
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

      }
    });

    
  }
  
  completedActivities = newArray;

  // Updates number of completed activities
  document.querySelector('.js-completed-button').innerHTML = `
    Completed (${completedActivities.length})
  `;

  saveCompletedToStorage();
};