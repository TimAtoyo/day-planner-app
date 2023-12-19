var timeBlockTasks = [
    {
      hourOfTheDay: 9,
    },
    {
      hourOfTheDay: 10,
    },
    {
      hourOfTheDay: 11,
    },
    {
      hourOfTheDay: 12,
    },
    {
      hourOfTheDay: 13,
    },
    {
      hourOfTheDay: 14,
    },
    {
      hourOfTheDay: 15,
    },
    {
      hourOfTheDay: 16,
    },
    {
      hourOfTheDay: 17,
    },
  ];


 var getTasks = JSON.parse(localStorage.getItem('tasks'))
  if (getTasks === undefined || getTasks.length === 0) {
    localStorage.setItem('tasks', JSON.stringify(timeBlockTasks))
} else {
    console.log('The array is not empty.');
}
