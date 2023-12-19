// // A $( document ).ready() block.
// $(document).ready(function () {
//   var timeBlocksContainerEl = $(".container");
//   var currentDayEl = $("#currentDay");

const { event, Event } = require("jquery");

//   // console.log(timeBlockTasksDeserialosed);

//   function updateTime() {
//     var today = dayjs().format("dddd MMMM YYYY, HH:mm:ss");
//     currentDayEl.text(today);
//   }

//   setInterval(updateTime, 1000);


//   var timeBlockTasks = [
//     {
//       hourOfTheDay: 9,
//       taskText: document.getElementById("1").value,
//     },
//     {
//       hourOfTheDay: 10,
//       taskText: document.getElementById("2").value,
//     },
//     {
//       hourOfTheDay: 11,
//       taskText: document.getElementById("3").value,
//     },
//     {
//       hourOfTheDay: 12,
//       taskText: document.getElementById("4").value,
//     },
//     {
//       hourOfTheDay: 13,
//       taskText: document.getElementById("5").value,
//     },
//     {
//       hourOfTheDay: 14,
//       taskText: document.getElementById("6").value,
//     },
//     {
//       hourOfTheDay: 15,
//       taskText: document.getElementById("7").value,
//     },
//     {
//       hourOfTheDay: 16,
//       taskText: document.getElementById("8").value,
//     },
//     {
//       hourOfTheDay: 17,
//       taskText: document.getElementById("9").value,
//     },
//   ];
//   function saveTask(e) {
//     e.preventDefault()
//     // When user click the Inputfield take the value & add it to the local storage
//     //
//     // Take the value from the the input-field
//     if (e.target.classList[0] === "fa-regular" ) {
 
//       // console.log(e.target.getAttribute('id', '1').value);

//       var timeBlockTasksSerialised = JSON.stringify(timeBlockTasks);

//       localStorage.setItem("timeBlocks", timeBlockTasksSerialised);

//       var timeBlockTasksDeserialosed = JSON.parse(
//         localStorage.getItem("timeBlocks")
//       );
//       console.log("Im an Icon");
//       var inputValueFromIcon =
//         e.target.parentElement.previousElementSibling.value;
//       console.log(inputValueFromIcon);
//       var hourOfTheDayInput = parseInt(
//         e.target.parentElement.previousElementSibling.getAttribute("data-hour")
//       );
//       console.log(hourOfTheDayInput);
//       console.log(timeBlockTasksDeserialosed[0].hourOfTheDay);

//       for (let i = 0; i < timeBlockTasksDeserialosed.length; i++) {
//         if (hourOfTheDayInput === timeBlockTasksDeserialosed[i].hourOfTheDay) {
//           console.log(`In the loop condition and this is the index ${i}`);
//           timeBlockTasksDeserialosed[i].taskText = inputValueFromIcon;
//           localStorage.setItem(
//             "timeBlocks",
//             JSON.stringify(timeBlockTasksDeserialosed)
//           );
//           //
//         } 
   
//         // console.log(inputValue);
//       }
//     }
  
//     else if ( e.target.classList[1] === "save-btn") {
//     // console.log(e.target.getAttribute('id', '1').value);

//     var timeBlockTasksSerialised = JSON.stringify(timeBlockTasks);

//     localStorage.setItem("timeBlocks", timeBlockTasksSerialised);

//     var timeBlockTasksDeserialosed = JSON.parse(
//       localStorage.getItem("timeBlocks")
//     );
//     console.log("Im an btn");
//     var inputValueFromIcon =
//       e.target.parentElement.previousElementSibling.value;
//     console.log(inputValueFromIcon);
//     var hourOfTheDayInput = parseInt(
//       e.target.parentElement.previousElementSibling.getAttribute("data-hour")
//     );
//     console.log(hourOfTheDayInput);
//     console.log(timeBlockTasksDeserialosed[0].hourOfTheDay);

//     for (let i = 0; i < timeBlockTasksDeserialosed.length; i++) {
//       if (hourOfTheDayInput === timeBlockTasksDeserialosed[i].hourOfTheDay) {
//         console.log(`In the loop condition and this is the index ${i}`);
//         timeBlockTasksDeserialosed[i].taskText = inputValueFromIcon;
//         localStorage.setItem(
//           "timeBlocks",
//           JSON.stringify(timeBlockTasksDeserialosed)
//         );
//         //
//       } else {
//         console.log(`Not In the loop condition and this is the index ${i}`);
//       }
//     }
    
// function setInputValues(){
// var i = 0;
// var timeBlocksDec = JSON.parse(localStorage.getItem("timeBlocks"));
// var input = document.getElementsByTagName("input");
//   while ( i <  document.getElementsByTagName("input").length) {
//     input[i].value = timeBlocksDec[i].taskText;
//     console.log(input[i].value);
//     // location.reload();
//     i++
//   }
  
// }
// setInputValues()
// console.log(e.target.classList[1]);
//   }

//   timeBlocksContainerEl.on("click", saveTask);
// }});


/**
 * @param event {event}
 */
  var timeBlocksContainerEl = $(".container");
  var currentDayEl = $("#currentDay");

  // console.log(timeBlockTasksDeserialosed);

  function updateTime() {
    var today = dayjs().format("dddd MMMM YYYY, HH:mm:ss");
    currentDayEl.text(today);
  }


    var timeBlockTasks = [
    {
      hourOfTheDay: 9,
      taskText: document.getElementById("1").value,
    },
    {
      hourOfTheDay: 10,
      taskText: document.getElementById("2").value,
    },
    {
      hourOfTheDay: 11,
      taskText: document.getElementById("3").value,
    },
    {
      hourOfTheDay: 12,
      taskText: document.getElementById("4").value,
    },
    {
      hourOfTheDay: 13,
      taskText: document.getElementById("5").value,
    },
    {
      hourOfTheDay: 14,
      taskText: document.getElementById("6").value,
    },
    {
      hourOfTheDay: 15,
      taskText: document.getElementById("7").value,
    },
    {
      hourOfTheDay: 16,
      taskText: document.getElementById("8").value,
    },
    {
      hourOfTheDay: 17,
      taskText: document.getElementById("9").value,
    },
  ];
  setInterval(updateTime, 1000);

  var saveTask = function (event){
    // console.log(`I clicked on some thing`);

    e.preventDefault()
   
  }

  timeBlocksContainerEl.on("click", saveTask);