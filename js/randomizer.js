$(function () {

    var students = [
        "Alex Gadd",
        "Aylin McGinnis",
        "Blake Smith",
        "Brandon King",
        "Jibril	Sulaiman II",
        "Charles Wilkinson",
        "Dan Milo",
        "David Hernquist",
        "Dee Davis",
        "Erin Martin",
        "Felicia Garcia",
        "Harry Karambizi",
        "Hassan Masroor",
        "Jacob Butler",
        "Josh Seipel",
        "Joy Sutton",
        "Julian	Ireland Chandler",
        "Lanchana Shivananda",
        "Liam Robinson",
        "Maggie Kinney",
        "Matt Atkins",
        "Michael Torres",
        "Neil Morris",
        "Peter Colella",
        "Randy Galeano",
        "Ray Meibaum",
        "Rush Myers",
        "Sungmin Ro"
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