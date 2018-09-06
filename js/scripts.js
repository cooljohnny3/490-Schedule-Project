$(document).ready(function() {
  $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',
    header: false,
    allDaySlot: false,
    hiddenDays: [0],
    columnHeaderFormat: 'dddd'
  });
});