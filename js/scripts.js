$(document).ready(function() {
  $('img[id^="delete_image"]').click(function() {
    if(window.confirm("Are you sure you want to delete this class?")){
      // THis is so janky but it works
      this.parentElement.parentElement.removeChild(this.parentElement);
    }
  });

  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyAanv4AEMqQEHad2VN47nEVTsLRw3qPmko',
    events: {
      googleCalendarId: '567gkvbf0672okp6oas1v7jfq8@group.calendar.google.com'
    },
    defaultView: 'agendaWeek',
    header: false,
    allDaySlot: false,
    hiddenDays: [0],
    columnHeaderFormat: 'dddd',
    minTime: '08:00:00',
    maxTime: '24:00:00'
  });
});