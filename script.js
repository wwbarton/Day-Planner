// var now = moment();

// var currentDate = now.format("dddd, MMM Do YYYY");

// $("#currentDay").text("Today's Date: " + currentDate);

// $(document).ready(function () {
//   hourArr = $(".hour").toArray();
//   for (i = 0; i < hourArr.length; i++) {
//     $(hourArr[i])
//       .siblings("textarea")
//       .text(localStorage.getItem($(hourArr[i]).attr("data-time")));
//   }
// });

// for (i = 0; i < 9; i++) {
//   var rowBlock = $("<div>").addClass("row");

//   var timeBlock = $("<div>")
//     .addClass("hour col-md-2")
//     .text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
//   timeBlock.attr(
//     "data-time",
//     moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA")
//   );

//   var taskBlock = $("<textarea>").addClass("col-md-9");

//   var saveButton = $("<button>")
//     .addClass("saveBtn col-md-1")
//     .html('<i class="fas fa-save"></i>');
//   $(".container").append(rowBlock);
//   $(rowBlock).append(timeBlock);
//   $(timeBlock).after(taskBlock);
//   $(taskBlock).after(saveButton);

//   if (now.isSame(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
//     $(taskBlock).addClass("present");
//   } else if (
//     now.isBefore(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")
//   ) {
//     $(taskBlock).addClass("future");
//   } else if (
//     now.isAfter(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")
//   ) {
//     $(taskBlock).addClass("past");
//   }
// }

// $(".saveBtn").on("click", function () {
//   localStorage.setItem(
//     $(this).siblings("div.hour").attr("data-time"),
//     $(this).siblings("textarea").val()
//   );
// });
var timeBlocks = $(".container");

var timeDisplay = moment().format("MMMM Do YYYY");

var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

var saveButton = document.querySelectorAll("button");

var timeList = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

var idTime = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

for (var i = 0; i < timeList.length; i++) {
  var newRow = $("<div class='row time-block'>").attr("id", idTime[i]);
  var newDiv2 = $("<div class='hour col-1'>");
  var newDiv = $("<textarea class='col-10'>");
  var newButt = $("<button type='button' class='saveBtn col-1 far fa-save'>");

  timeBlocks.append(newRow);

  newDiv2.text(timeList[i]);
  newRow.append(newDiv2);

  newDiv.text();
  newRow.append(newDiv);

  newButt.text();
  newRow.append(newButt);
}

localStorageFunction();

function localStorageFunction() {
  $("textarea")[0].value = localStorage.getItem("textarea1");
  $("textarea")[1].value = localStorage.getItem("textarea2");
  $("textarea")[2].value = localStorage.getItem("textarea3");
  $("textarea")[3].value = localStorage.getItem("textarea4");
  $("textarea")[4].value = localStorage.getItem("textarea5");
  $("textarea")[5].value = localStorage.getItem("textarea6");
  $("textarea")[6].value = localStorage.getItem("textarea7");
  $("textarea")[7].value = localStorage.getItem("textarea8");
  $("textarea")[8].value = localStorage.getItem("textarea9");
}

$("button").on("click", function (event) {
  event.preventDefault();
  var textArea1 = $("textarea")[0].value;
  var textArea2 = $("textarea")[1].value;
  var textArea3 = $("textarea")[2].value;
  var textArea4 = $("textarea")[3].value;
  var textArea5 = $("textarea")[4].value;
  var textArea6 = $("textarea")[5].value;
  var textArea7 = $("textarea")[6].value;
  var textArea8 = $("textarea")[7].value;
  var textArea9 = $("textarea")[8].value;

  localStorage.setItem("textarea1", textArea1);
  localStorage.setItem("textarea2", textArea2);
  localStorage.setItem("textarea3", textArea3);
  localStorage.setItem("textarea4", textArea4);
  localStorage.setItem("textarea5", textArea5);
  localStorage.setItem("textarea6", textArea6);
  localStorage.setItem("textarea7", textArea7);
  localStorage.setItem("textarea8", textArea8);
  localStorage.setItem("textarea9", textArea9);
});

function hourUpdater() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split(" ")[0]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdater();

var checkTime = setInterval(hourUpdater, 15000);
