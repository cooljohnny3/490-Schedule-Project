var url = 'https://api.metalab.csun.edu/curriculum/api/2.0/classes/comp-100';
$(document).ready(function() {
	// perform a shorthand AJAX call to grab the information
	$.get(url, function(data) {
    var courses = data.classes;
    // Top description
    $('#info').append(
      '<p>'+courses[0].subject+' '+courses[0].catalog_number+'</p><p>'+courses[0].title+'</p><p>'+courses[0].description+'</p>'
    );
    // Section list
		$(courses).each(function(index, course) {
      if((meeting = course.meetings[0]) && (instructor = course.instructors[0].instructor)) {
        $('#sections').append(
          '<div id="section"><button id="add_button" onClick="location.href=`index.html`">Add</button><p>Section ' + (index+1) + 
          '</p><p>Class#: ' + course.class_number + 
          '</p><p>Instructor: ' + instructor +
          '</p><p>Room: ' + meeting.location + 
          '</p><p>Start: ' + meeting.start_time + 
          '</p><p>End: ' + meeting.end_time + 
          '</p><p> Day(s): ' + meeting.days +
          '</p></div>'
        );
      }
		});
  });
});