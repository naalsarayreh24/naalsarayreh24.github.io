const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (
        fullName === "" ||
        email === "" ||
        country === "" ||
        comments === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    if (!document.getElementById("email").checkValidity()) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Your form was submitted successfully!");
    form.reset();
});