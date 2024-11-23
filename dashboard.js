// Get the user data from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Redirect to login page if user is not logged in
if (!user) {
    window.location.href = 'login.html';  // Redirect to the login page if no user is found
}

// Show different sections based on user role
if (user.role === 'admin') {
    document.querySelector('.sidebar').style.display = 'block'; // Show admin menu
} else if (user.role === 'hod') {
    // Show restricted HOD options
    document.querySelector('.sidebar').style.display = 'block';
    document.getElementById('logsSection').style.display = 'none'; // Hide logs for HOD
} else if (user.role === 'security') {
    // Show restricted Security options
    document.querySelector('.sidebar').style.display = 'block';
    document.getElementById('logsSection').style.display = 'none'; // Hide logs for Security
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';  // Redirect to login page after logout
}

// Handle section visibility
function showGatePasses() {
    document.getElementById('gatePassesSection').style.display = 'block';
    document.getElementById('reportsSection').style.display = 'none';
    document.getElementById('logsSection').style.display = 'none';
}

function showReports() {
    document.getElementById('gatePassesSection').style.display = 'none';
    document.getElementById('reportsSection').style.display = 'block';
    document.getElementById('logsSection').style.display = 'none';
}

function showLogs() {
    document.getElementById('gatePassesSection').style.display = 'none';
    document.getElementById('reportsSection').style.display = 'none';
    document.getElementById('logsSection').style.display = 'block';
}
