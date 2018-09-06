// this example assumes jQuery integration for ease of use
// and a <div> element with the ID of "course-results"

// query all CompSci courses
var url = 'https://api.metalab.csun.edu/curriculum/api/2.0/classes/comp-100';
$(document).ready(function() {
	// perform a shorthand AJAX call to grab the information
	$.get(url, function(data) {
		// iterate over the returned courses
    var courses = data.classes;
		$(courses).each(function(index, course) {
      if((meeting = course.meetings[0]) && (instructor = course.instructors[0])) {
        $('#sections').append(
          '<details id="section"><summary>' + course.catalog_number + instructor + course.title + '</summary><p>' + course.class_number + " " + meeting.location + " " + meeting.start_time + " " + meeting.end_time + " " + meeting.days + '</p><a href="#">View Courses</a></details>'
        );
      }
		});
	});
});