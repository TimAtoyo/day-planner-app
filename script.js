var timeBlockRow = $(".task-row");
var currentDayEl = $("#currentDay");

// console.log(decerialisedTaksDeserialosed);

function updateTime() {
  var today = dayjs();
  var dateAndTime = today.format("dddd MMMM YYYY, HH:mm:ss");
  var hourOdDay = today.format("HH");
  currentDayEl.text(today);

  for (let i = 0; i < timeBlockRow.length; i++) {
    var inputNode = timeBlockRow[i].childNodes[3];
    var hour = inputNode.dataset.hour;
    console.log(inputNode);
    console.log(hour);
    if (hourOdDay < hour) {
      timeBlockRow.css("background-color", "#D3D3D3");
    } else if (hourOdDay >= hour && hourOdDay < hour) {
      timeBlockRow.css("background-color", "#90EE90");
    } else {
      timeBlockRow.css("background-color", "#013220");
    }
  }
}

setInterval(updateTime, 1000);
var taskRowBg = function () {
  // var hourOdDay = dayjs('HH');
  // console.log(hourOdDay);
  for (let i = 0; i < timeBlockRow.length; i++) {
    var inputNode = timeBlockRow[i].childNodes[3];
    var hour = inputNode.dataset.hour;
    // console.log(inputNode);
    // console.log(hour);
    // if (hour < hourOdDay){
    //   timeBlockRow.css("background-color", "grey");

    // }
  }
  console.log(timeBlockRow[0].childNodes[3]);
};

taskRowBg();
// Get task data from local storage

var decerialisedTaks = JSON.parse(localStorage.getItem("tasks"));
var saveTask = function (e) {
  e.preventDefault();

  // When button is clicked - take the input value and add it to local storage
  var inputValue = e.currentTarget.querySelector("input").value;
  var currentDataAtribute = parseInt(
    e.currentTarget.querySelector("input").dataset.hour
  );

  for (let i = 0; i < decerialisedTaks.length; i++) {
    if (currentDataAtribute === decerialisedTaks[i].hourOfTheDay) {
      // Add the current input to the propety of the decerialisedTaks array object
      decerialisedTaks[i].taskText = inputValue.trim();
      // Adds the value to local storage
    } else {
      console.log("IF NOT CLICKED SET TASKTEXT");
    }
  }
  localStorage.setItem("tasks", JSON.stringify(decerialisedTaks));
};

var undatesTasks = JSON.parse(localStorage.getItem("tasks"));

for (let i = 0; i < undatesTasks.length; i++) {
  // Sets the value fron local storage back to input
  if (undatesTasks[i].taskText !== undefined) {
    $("input")[i].value = undatesTasks[i].taskText;
  } else {
    $("input")[i].placeholder = "Enter a task here:";
  }
}

timeBlockRow.on("click", saveTask);
