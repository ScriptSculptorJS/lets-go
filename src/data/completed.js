export const completedActivities = [{
  name: 'Improve your touch typing',
  date: '02-24-2025'
}, {
  name: 'Listen to a new music genre',
  date: '03-01-2025'
}, {
  name: "Plan a vacation you've always wanted to take",
  date: '01-05-2025'
}]

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