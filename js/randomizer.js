$(function () {

    var students = [
        "Hank Hill",
        "Rusty Shackleford",
        "Darbly Duberdink",
        "Daffy Duck",
        "Danny Hurley",
        "Maren Woodruff"
    ];

    var nextStudentIndex = Math.floor(Math.random() * students.length);
    var nextStudent = students[nextStudentIndex];

    $("#student-name").html(nextStudent);
});