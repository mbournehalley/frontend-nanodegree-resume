/*!
 * Melbourne Lipardo Resume
 * This is the resume and project i have built.
 *
 * Copyright 2016
 *
 */
// IIFE - Immediately Invoked Function Expression
(function($, resume) {
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
        "bioPic": "images/bourne.jpg"
    };

    var education = {
        "schools": [{
            "name": "San Jose State University",
            "location": "San Jose",
            "degree": "B.S",
            "majors": ["Software Engineering"],
            "dates": "2014"
        }, {
            "name": "De Anza College",
            "location": "Cupertino",
            "degree": "Associate",
            "majors": ["Computer Information"],
            "dates": "2012"
        }]
    };

    var projects = {
        "projects": [{
            "title": "Classic Arcade Frogger",
            "dates": "2016",
            "description": "A classic arcade games implemented using JavaScript",
            "images": "images/arcade-frogger.jpg"
        }]
    };

    var work = {
        "jobs": [{
            "employer": "Accenture",
            "title": "Software Engineer Associate",
            "location": "San Franciso",
            "dates": "Present",
            "description": "Developed an automation tool application that transfers customer data and updates their database utilizing HTML, CSS, Javascript and AngularJS on the front-end."
        }, {
            "employer": "Zoomsystems",
            "title": "Software Engineer Intern",
            "location": "San Franciso",
            "dates": "2014",
            "description": "Evaluated and reported software issues, bugs and variances using Jira software involving program functionality and content of software developers"
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
    };

    /**
     * @description It displays education object
     * @param none
     * @param none
     */
    education.display = function() {
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                var formattedDates = HTMLworkDates.replace("%data%", education.schools[school].dates);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedSchoolNameDegree);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append(formattedLocation);

                for (var major in education.schools[school].majors) {
                    if (education.schools[school].majors.hasOwnProperty(major)) {
                        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);

                        $(".education-entry:last").append(formattedMajor);
                    }
                }
            }
        }
    };

    /**
     * @description It display the projects object
     * @param none
     * @param none
     */
    projects.display = function() {
        for (var project in projects.projects) {
            if (projects.projects.hasOwnProperty(project)) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedDescription);
                $(".project-entry:last").append(formattedImage);
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
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].employer);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

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