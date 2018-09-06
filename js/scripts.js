$(document).ready(function() {
  $('img[id^="delete_image"]').click(function() {
    window.confirm("Are you sure you want to delete this class?");
    console.log(this);
  });

  $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',
    header: false,
    allDaySlot: false,
    hiddenDays: [0],
    columnHeaderFormat: 'dddd'
  });
});