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
    "skills": ["Javascript", "HTML", "CSS", "jQuery"],
    "welcomeMessage": "BE AWSOME",
    "biopic": "images/fry.jpg"
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

  var DATA = "%data%",
      HASHTAG = "#";

  /**
   * @description Its displays the bio object
   * @param none
   * @param none
   */
  bio.display = function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name),
        formattedRole = HTMLheaderRole.replace(DATA, bio.role),
        formatedHTMLmobile = HTMLmobile.replace(DATA, bio.contacts.mobile),
        formatedHTMLemail =HTMLemail.replace(DATA, bio.contacts.email),
        formatedHTMLgithub =HTMLgithub.replace(DATA, bio.contacts.github),
        formatedHTMLlocation = HTMLlocation.replace(DATA, bio.contacts.location),
        formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage),
        formatedHTMLbioPic = HTMLbioPic.replace(DATA, bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formatedHTMLbioPic);
    $("#header").append(formattedWelcomeMessage);
    $("#header").append(HTMLskillsStart);

    $("#topContacts").append(formatedHTMLmobile);
    $("#topContacts").append(formatedHTMLemail);
    $("#topContacts").append(formatedHTMLgithub);
    $("#topContacts").append(formatedHTMLlocation);

    $("#footerContacts").append(formatedHTMLmobile);
    $("#footerContacts").append(formatedHTMLemail);
    $("#footerContacts").append(formatedHTMLgithub);
    $("#footerContacts").append(formatedHTMLlocation);



    bio.skills.forEach(function(skill) {
      var formatedHTMLskill = HTMLskills.replace(DATA, skill);
      $("#skills").append(formatedHTMLskill);
    });
  };

  /**
   * @description It displays education object
   * @param none
   * @param none
   */
  education.display = function() {
    //Schools array
    education.schools.forEach(function(school) {
      var formattedSchoolName = HTMLschoolName.replace(DATA, school.name),
          formattedDegree = HTMLschoolDegree.replace(DATA, school.degree),
          formattedSchoolNameDegree = formattedSchoolName + formattedDegree,
          formattedLocation = HTMLschoolLocation.replace(DATA, school.location),
          formattedDates = HTMLworkDates.replace(DATA, school.dates);

      formattedSchoolNameDegree = formattedSchoolNameDegree.replace(HASHTAG, school.url);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);

      school.majors.forEach(function(major) {
        var formattedMajor = HTMLschoolMajor.replace(DATA, major);
        $(".education-entry:last").append(formattedMajor);
      });
    }); // /.Schools array

    $("#education").append(HTMLonlineClasses);
    // School onlineCourses
    education.onlineCourses.forEach(function(course) {
      var formattedHTMLonlineTitle = HTMLonlineTitle.replace(DATA, course.title),
          formattedHTMLonlineSchool= HTMLonlineSchool.replace(DATA, course.school),
          formattedSchoolOnlineDegree = formattedHTMLonlineTitle + formattedHTMLonlineSchool,
          formattedHTMLonlineDates = HTMLonlineDates.replace(DATA, course.dates),
          formattedHTMLonlineUrl = HTMLonlineURL.replace(DATA, course.url);

      formattedHTMLonlineUrl = formattedHTMLonlineUrl.replace(HASHTAG, course.url);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolOnlineDegree);
      $(".education-entry:last").append(formattedHTMLonlineDates);
      $(".education-entry:last").append(formattedHTMLonlineUrl);
    }); // /.School onlineCourses
  };

  /**
   * @description It display the projects object
   * @param none
   * @param none
   */
  projects.display = function() {
    projects.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace(DATA, project.title),
          formattedDates = HTMLprojectDates.replace(DATA, project.dates),
          formattedDescription = HTMLprojectDescription.replace(DATA, project.description);

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      project.images.forEach(function(img) {
        var formattedImage = HTMLprojectImage.replace(DATA, img);
        $(".project-entry:last").append(formattedImage);
      });
    });
  };

  /**
   * @description It display the work object
   * @param none
   * @param none
   */
  work.display = function() {
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace(DATA, job.employer),
          formattedTitle = HTMLworkTitle.replace(DATA, job.title),
          formattedEmployerTitle = formattedEmployer + formattedTitle,
          formattedDates = HTMLworkDates.replace(DATA, job.dates),
          formattedDescription = HTMLworkDescription.replace(DATA, job.description);

      formattedEmployerTitle = formattedEmployerTitle.replace(HASHTAG, job.url);
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    });
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