document.getElementById('logoutButton').addEventListener('click', function() {
    // Simulate the logout process
    alert('Logging out...');
    // Redirect to the login page after logging out
    window.location.href = 'login.html';
});

    
        document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');
    const message = document.getElementById("message");
    const signup = document.getElementById("sign"); 
   
    
    
    errorMessage.textContent = '';
    message.textContent = '';

   
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    
    if (password.length < 10) {
        message.textContent = 'Password must be at least 5 characters long.';
        message.style.color = '#dc3545'; 
    } else if (!/[A-Z]/.test(password)) {
        message.textContent = 'Password must contain at least one uppercase letter.';
        message.style.color = '#dc3545';
    } else if (!/[a-z]/.test(password)) {
        message.textContent = 'Password must contain at least one lowercase letter.';
        message.style.color = '#dc3545';
    } else {
        message.textContent = 'Password is valid!';
        message.style.color = '#28a745';
         
        signup.addEventListener("click",redirect());

        function redirect() {
        window.location.href = "login.html";
}
    }
     

   
});
     

    
