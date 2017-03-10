$(function () {

    var students = [
        "Hank Hill",
        "Rusty Shackleford",
        "Darbly Duberdink",
        "Daffy Duck",
        "Danny Hurley",
        "Maren Woodruff"
    ];

    function displayNextStudent() {
        var nextStudentIndex = Math.floor(Math.random() * students.length);
        var nextStudent = students[nextStudentIndex];

        $("#student-name").html(nextStudent);

        return nextStudentIndex;
    }

    function removeStudentFromList(studentIndexToRemove) {
        students.splice(studentIndexToRemove, 1);
    }

    $("#next-student-button").on("click", function () {
        var studentIndexToRemove = displayNextStudent();

        removeStudentFromList(studentIndexToRemove);
    });


});