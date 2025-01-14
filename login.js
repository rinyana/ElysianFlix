
// Toggle password visibility
function togglePassword() {
    var passwordField = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon').children[0];
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Form validation before submitting
function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var messageBox = document.getElementById('form-message');

    messageBox.innerHTML = '';

    if (!email || !password) {
        messageBox.innerHTML = '<i class="fa fa-exclamation-circle"></i> Both fields are required.';
        return false;
    }

    messageBox.innerHTML = 'Form submitted successfully!';
    messageBox.style.color = 'green'; 
    setTimeout(function() {
        alert('Welcome! You have successfully logged in.');
        window.location.href = 'homepage.html'; 
    });
    return false; 
}
