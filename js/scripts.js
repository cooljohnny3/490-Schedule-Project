$(document).ready(function() {
  $('img[id^="delete_image"]').click(function() {
    if(window.confirm("Are you sure you want to delete this class?")){
      // THis is so janky but it works
      this.parentElement.parentElement.removeChild(this.parentElement);
    }
  });

  $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',
    header: false,
    allDaySlot: false,
    hiddenDays: [0],
    columnHeaderFormat: 'dddd'
  });
});