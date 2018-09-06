// this example assumes jQuery integration for ease of use
// and a <div> element with the ID of "course-results"

// query all CompSci courses
var url = 'https://api.metalab.csun.edu/curriculum/api/2.0/courses/comp';
$(document).ready(function() {
	// perform a shorthand AJAX call to grab the information
	$.get(url, function(data) {
		// iterate over the returned courses
		var courses = data.courses;
		$(courses).each(function(index, course) {
			// append each course to the content of the element
			$('#course-results').append(
        '<details><summary>' + course.subject + ' ' + course.catalog_number + ': ' + course.title + '</summary><p>' + course.description + '</p><a href="#">View Courses</a></details>'
      );
		});
	});
});