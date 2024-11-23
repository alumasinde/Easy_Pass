// Simulate a database with some users and roles
const usersDatabase = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'hod', password: 'hod123', role: 'hod' },
    { username: 'security', password: 'security123', role: 'security' }
];

// Show the login form
function showLogin() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) loginForm.style.display = 'block';
    if (signupForm) signupForm.style.display = 'none';
}

// Show the signup form
function showSignup() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'block';
}

// Handle login
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername')?.value;
    const password = document.getElementById('loginPassword')?.value;

    if (!username || !password) return;

    // Simulating role assignment (Replace with server-side validation)
    let role;
    switch (username) {
        case 'admin':
            role = 'admin';
            break;
        case 'gm':
            role = 'gm';
            break;
        case 'hod':
            role = 'hod';
            break;
        case 'security':
            role = 'security';
            break;
        default:
            const loginError = document.getElementById('loginError');
            if (loginError) loginError.style.display = 'block';
            return;
    }

    // Save role to localStorage for session handling
    localStorage.setItem('role', role);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('role');

    if (!role) {
        alert('Unauthorized access. Please log in.');
        if (!window.location.href.includes('?redirected=true')) {
            window.location.href = 'login.html?redirected=true';
        }
        return;
    }

    // Show elements based on role
    const levelTwo = document.getElementById('levelTwo');
    const levelThree = document.getElementById('levelThree');

    if (role === 'admin') {
        if (levelTwo) levelTwo.style.display = 'block';
        if (levelThree) levelThree.style.display = 'block';
    } else if (role === 'gm') {
        if (levelThree) levelThree.style.display = 'block';
    } else if (role === 'hod' || role === 'security') {
        if (levelTwo) levelTwo.style.display = 'block';
    }
});

function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}

// Handle signup
function signupUser(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername')?.value;
    const password = document.getElementById('signupPassword')?.value;
    const role = document.getElementById('role')?.value;

    if (!username || !password || !role) return;

    if (usersDatabase.some(u => u.username === username)) {
        const signupError = document.getElementById('signupError');
        if (signupError) signupError.style.display = 'block';
    } else {
        usersDatabase.push({ username, password, role });
        alert('Signup successful! You can now login.');
        showLogin();
    }
}
