  var timeBlocksContainerEl = $(".container");
  var currentDayEl = $("#currentDay");

  // console.log(timeBlockTasksDeserialosed);

  function updateTime() {
    var today = dayjs().format("dddd MMMM YYYY, HH:mm:ss");
    currentDayEl.text(today);
  }

  setInterval(updateTime, 1000);


  //  data strudture. 
  
