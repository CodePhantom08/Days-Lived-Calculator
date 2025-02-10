document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let dob = document.getElementById("dob").value;

        if (name === "" || dob === "") {
            event.preventDefault();
            alert("Please fill in all fields.");
        }
    });
});
