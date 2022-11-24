var saveBtn = document.querySelector('#saveBtn')

var hr9El = document.getElementById('hour-9');
var hr10El = document.getElementById('hour-10');
var hr11El = document.getElementById('hour-11');
var hr12El = document.getElementById('hour-12');
var hr1El = document.getElementById('hour-1');
var hr2El = document.getElementById('hour-2');
var hr3El = document.getElementById('hour-3');
var hr4El = document.getElementById('hour-4');
var hr5El = document.getElementById('hour-5');

var hr9 = dayjs().hour(9).hour();
var hr10 = dayjs().hour(10).hour();
var hr11 = dayjs().hour(11).hour();
var hr12 = dayjs().hour(12).hour();
var hr1 = dayjs().hour(13).hour();
var hr2 = dayjs().hour(14).hour();
var hr3 = dayjs().hour(15).hour();
var hr4 = dayjs().hour(16).hour();
var hr5 = dayjs().hour(17).hour();

console.log(hr1)

var today = dayjs()
$('#currentDay').text(today.format('dddd MMM D, YYYY'));
console.log(today);

var currentHour = dayjs().hour();
console.log(currentHour)

var hoursArray = [hr9, hr10, hr11, hr12, hr1, hr2, hr3, hr4, hr5,];
console.log(hoursArray)

var hoursEl = [hr9El, hr10El, hr11El, hr12El, hr1El, hr2El, hr3El, hr4El, hr5El,];
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

});

for (var i = 0; i < hoursArray.length; i ++) {
  console.log(hoursArray[i]);
  if (hoursArray[i] < currentHour) {
    hoursEl[i].classList.add('past');
    hoursEl[i].classList.remove('present');
    hoursEl[i].classList.remove('future');
  }

  else if (hoursArray[i] > currentHour) {
    hoursEl[i].classList.add('future');
    hoursEl[i].classList.remove('past');
    hoursEl[i].classList.remove('present');
  }  else {
    hoursEl[i].classList.add('present');
    hoursEl[i].classList.remove('past');
    hoursEl[i].classList.remove('future');
  }
}

var userInput = document.querySelector('textarea')
//
$('.saveBtn').on('click', function() {
  var text = $(this).siblings('.description').val();
  var events = $(this).parents().attr('id');
  console.log(events);
  localStorage.setItem(events, text)
  console.log(text)
  console.log(this)
})

$('#hour-9').children('.description').val(localStorage.getItem('hour-9'))
$('#hour-10').children('.description').val(localStorage.getItem('hour-10'))
$('#hour-11').children('.description').val(localStorage.getItem('hour-11'))
$('#hour-12').children('.description').val(localStorage.getItem('hour-12'))
$('#hour-1').children('.description').val(localStorage.getItem('hour-1'))
$('#hour-2').children('.description').val(localStorage.getItem('hour-2'))
$('#hour-3').children('.description').val(localStorage.getItem('hour-3'))
$('#hour-4').children('.description').val(localStorage.getItem('hour-4'))
$('#hour-5').children('.description').val(localStorage.getItem('hour-5'))
