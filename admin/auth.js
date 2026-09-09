// Authentication and Admin Functions

// Simple authentication system (client-side demo)
// In production, this should be handled server-side with proper security

const DEFAULT_ADMIN = {
    username: 'admin',
    password: 'Tabitha@2024', // In production, use hashed passwords
};

// Form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear previous error
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';
    
    // Validate credentials
    if (username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password) {
        // Successful login
        sessionStorage.setItem('admin_logged_in', 'true');
        sessionStorage.setItem('admin_username', username);
        
        if (document.getElementById('remember').checked) {
            localStorage.setItem('admin_username', username);
        }
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.classList.add('show');
    }
});

// Check if user is logged in
function checkAdminAuth() {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    if (!isLoggedIn) {
        // Redirect to login if not authenticated
        if (window.location.pathname.includes('dashboard')) {
            window.location.href = 'login.html';
        }
    }
}

// Logout function
function adminLogout() {
    sessionStorage.removeItem('admin_logged_in');
    sessionStorage.removeItem('admin_username');
    window.location.href = 'login.html';
}

// Check auth on page load for dashboard
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAdminAuth);
} else {
    checkAdminAuth();
}
