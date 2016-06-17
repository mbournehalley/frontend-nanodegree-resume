/*!
 * Melbourne Lipardo Resume
 * This is the resume and project i have built.
 *
 * Copyright 2016
 *
 */
// IIFE - Immediately Invoked Function Expression
(function( $, resume ){'use strict'

  var bio = {
    "name": "Melbourne Lipardo",
    "role": "Software Developer",
    "contacts": {
      "mobile": "650-804-4507",
      "email": "mbournehalley@gmail.com",
      "github": "mbournehalley",
      "location": "San Francisco"
    },
    "role": "Software Developer",
    "skills": ["Java", "Javascript", "HTML", "CSS"],
    "welcomeMessage": "Hello",
    "bioPic": "images/bourne.jpg"
  };

  var education = {
    "schools": [{
        "name": "San Jose State University",
        "location": "San Jose",
        "degree": "B.S" ,
        "majors": ["Software Engineering"],
        "dates": "2014"
      },{
        "name": "De Anza College",
        "location": "Cupertino",
        "degree": "Associate" ,
        "majors": ["Computer Information"],
        "dates": "2012"
      }]
  };

  var projects = {
    "projects": [{
        "title": "string",
        "dates": "string (works with a hyphen between them)",
        "description": "string",
        "images": "array with string urls"
      }]
  };

  var work = {
     "jobs": [{
         "employer": "Accenture",
         "title": "Software Engineer Associate",
         "location": "San Franciso",
         "dates": "In progress",
         "description": "string"
       }, {
         "employer": "Zoomsystems",
         "title": "Software Engineer Intern",
         "location": "San Franciso",
         "dates": "2014",
         "description": "string"
       }]
  };

  /**
  * @description Its displays the bio object
  * @param none
  * @param none
  */
  bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
  }

  /**
  * @description It displays education object
  * @param none
  * @param none
  */
  education.display = function() {
    for(var school in education.schools) {
      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formattedDates = HTMLworkDates.replace("%data%", education.schools[school].dates);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);

      education.schools[school].majors.forEach(function(val) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", val);

        $(".education-entry:last").append(formattedMajor);
      });
    }
  }

  /**
  * @description It display the work object
  * @param none
  * @param none
  */
  work.display = function() {
    for(var job in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].employer);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  }

  // functions to access private variables
  resume.getBio = function() { return bio; };
  resume.getEducation = function() { return education; }
  resume.getWork = function() { return work; }
  resume.getProject = function() { return projects; }

  $("#main");
  $("#main").append(internationalizeButton);
  $("#mapDiv").append(googleMap);

  /**
  * @description It initaliaze/activates the functions.
  * @param none
  * @param none
  */
  function initialize() {
    bio.display();
    education.display();
    work.display();
  }

  initialize();

})(window.jQuery, window.resume = window.resume || {});