$(function () {

<<<<<<< HEAD
    function displayNextStudentName() {
        var nextStudentIndex = Math.floor(Math.random() * students.length);
        var nextStudent = students[nextStudentIndex];

        $("#student-name").html(nextStudent.name);

        return nextStudentIndex;
    }

    function removeStudentFromList(studentIndexToRemove) {
        students.splice(studentIndexToRemove, 1);
    }

    $("#next-student-button").on("click", function () {
        var studentIndex = displayNextStudentName();

        removeStudentFromList(studentIndex);
    });

    var students = [
        { name: "Aylin McGinnis" },
        { name: "Blake Smith" },
        { name: "Brandon King" },
        { name: "Jibril Sulaiman II" },
        { name: "Ryan Wilkinson" },
        { name: "Dan Milo" },
        { name: "David Hernquist" },
        { name: "Dee Davis" },
        { name: "Erin Martin" },
        { name: "Felicia Garcia" },
        { name: "Harry Karambizi" },
        { name: "Hassan Masroor" },
        { name: "Josh Seipel" },
        { name: "Joy Sutton" },
        { name: "Julian Ireland Chandler" },
        { name: "Lanchana Shivananda" },
        { name: "Liam Robinson" },
        { name: "Maggie Kinney" },
        { name: "Matt Atkins" },
        { name: "Michael Torres" },
        { name: "Neil Morris" },
        { name: "Peter Colella" },
        { name: "Randy Galeano" },
        { name: "Ray Meibaum" },
        { name: "Rush Myers" },
        { name: "Sungmin Ro" }
    ];

});
