/*!
 * Melbourne Lipardo Resume
 * This is the resume and project i have built.
 *
 * Copyright 2016
 *
 */
// IIFE - Immediately Invoked Function Expression
(function ($, resume) {
  'use strict';

  var bio = {
    "name": "Melbourne Lipardo",
    "role": "Software Developer",
    "contacts": {
      "mobile": "650-804-4507",
      "email": "mbournehalley@gmail.com",
      "github": "mbournehalley",
      "location": "San Francisco"
    },
    "skills": ["Java", "Javascript", "HTML", "CSS", "AngularJS", "jQuery"],
    "welcomeMessage": "Hello",
    "biopic": "images/bourne.jpg"
  };

  var education = {
    "schools": [{
      "name": "San Jose State University",
      "location": "San Jose",
      "degree": "B.S",
      "majors": ["Software Engineering"],
      "dates": "2014",
      "url":"http://bsse.sjsu.edu/"
    }, {
      "name": "De Anza College",
      "location": "Cupertino",
      "degree": "Associate",
      "majors": ["Computer Information"],
      "dates": "2012",
      "url":"https://www.deanza.edu/"
    }],
    "onlineCourses": [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "Present",
      "url": "https://www.udacity.com/"
    }]   
  };

  var projects = {
    "projects": [{
      "title": "Classic Arcade Frogger",
      "dates": "2016",
      "description": "A classic arcade games implemented using JavaScript",
      "images": ["images/arcade-frogger.jpg"]
    }]
  };

  var work = {
    "jobs": [{
      "employer": "Accenture",
      "title": "Software Engineer Associate",
      "location": "San Franciso",
      "dates": "Present",
      "description": "Developed an automation tool application that transfers customer data and updates their database utilizing HTML, CSS, Javascript and AngularJS on the front-end.",
      "url": "https://www.accenture.com/us-en"
    }, {
      "employer": "Zoomsystems",
      "title": "Software Engineer Intern",
      "location": "San Franciso",
      "dates": "2014",
      "description": "Evaluated and reported software issues, bugs and variances using Jira software involving program functionality and content of software developers",
      "url": "http://www.zoomsystems.com/"
    }]
  };

  var DATA = "%data%", HASHTAG = "#";

  /**
   * @description Its displays the bio object
   * @param none
   * @param none
   */
  bio.display = function() {
      var formattedName = HTMLheaderName.replace(DATA, bio.name),
        formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
  };

  /**
   * @description It displays education object
   * @param none
   * @param none
   */
  education.display = function() {
    //Schools array
    for (var school in education.schools) {
      if (education.schools.hasOwnProperty(school)) {
        var formattedSchoolName = HTMLschoolName.replace(DATA, education.schools[school].name),
          formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[school].degree),
          formattedSchoolNameDegree = formattedSchoolName + formattedDegree, 
          formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[school].location),
          formattedDates = HTMLworkDates.replace(DATA, education.schools[school].dates);

        formattedSchoolNameDegree = formattedSchoolNameDegree.replace(HASHTAG, education.schools[school].url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolNameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        for (var major in education.schools[school].majors) {
          if (education.schools[school].majors.hasOwnProperty(major)) {
              var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[school].majors[major]);
              $(".education-entry:last").append(formattedMajor);
          }
        }
      }
    } // /.Schools array
    $("#education").append(HTMLonlineClasses);
    // School onlineCourses
    for (var online in education.onlineCourses) {
      if (education.onlineCourses.hasOwnProperty(online)) {
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[online].title),
          formattedHTMLonlineSchool= HTMLonlineSchool.replace(DATA, education.onlineCourses[online].school),
          formattedSchoolOnlineDegree = formattedHTMLonlineTitle + formattedHTMLonlineSchool, 
          formattedHTMLonlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[online].dates),
          formattedHTMLonlineUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[online].url);
        
        formattedHTMLonlineUrl = formattedHTMLonlineUrl.replace(HASHTAG, education.onlineCourses[online].url);   
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolOnlineDegree);
        $(".education-entry:last").append(formattedHTMLonlineDates);
        $(".education-entry:last").append(formattedHTMLonlineUrl);
      }
    } // /.School onlineCourses

  };

  /**
   * @description It display the projects object
   * @param none
   * @param none
   */
  projects.display = function() {
    for (var project in projects.projects) {
      if (projects.projects.hasOwnProperty(project)) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[project].title),
          formattedDates = HTMLprojectDates.replace(DATA, projects.projects[project].dates),
          formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[project].description);
         
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        for (var img in projects.projects[project].images) {
          if (projects.projects[project].images.hasOwnProperty(img)) {
            var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    }
  };

  /**
   * @description It display the work object
   * @param none
   * @param none
   */
  work.display = function() {
    for (var job in work.jobs) {
      if (work.jobs.hasOwnProperty(job)) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer),
          formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[job].employer),
          formattedEmployerTitle = formattedEmployer + formattedTitle,
          formattedDates = HTMLworkDates.replace(DATA, work.jobs[job].dates),
          formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);

        formattedEmployerTitle = formattedEmployerTitle.replace(HASHTAG, work.jobs[job].url);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  };

  // functions to access private variables
  resume.getBio = function() {
    return bio;
  };
  resume.getEducation = function() {
    return education;
  };
  resume.getWork = function() {
    return work;
  };

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
    projects.display();
    work.display();
  }

  initialize();

})(window.jQuery, window.resume = window.resume || {});