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

  saveCompletedToStorage();
}

/*function sortArray() {
  let itemAdded = false;
  const newArray = [];

  completedActivities.forEach((object) => {

    if (!itemAdded) {
      newArray.push(object);
      itemAdded = true;

    } else {

      newArray.forEach((newObject, i) => {

        console.log(object.date, newObject.date)
        console.log(i);

        if (object.date <= newObject.date) {

          console.log(`${object.date} is less than or equal to ${newObject.date}`)
          newArray.splice(i, 0, object);

        } else if ( object.date > newObject.date && (newArray.length - 1) === i) {

          newArray.push(object);

        } else {

          console.log(`${object.date} is greater than ${newObject.date}`)
        }
      })
    }
  }) 
  console.log(newArray);
}

sortArray();*/