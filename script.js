// Simulate an admin user (you can replace this with real authentication logic)
let isAdmin = true;  // Set to true to simulate an admin user

// Show/hide Gate Pass Logs section based on admin status
window.onload = function() {
    if (isAdmin) {
        document.getElementById('adminPanel').style.display = 'block';  // Show the admin panel for logs
    }
};

function toggleLogVisibility() {
    const logSection = document.getElementById('logsSection');
    const isVisible = logSection.style.display === 'block';
    logSection.style.display = isVisible ? 'none' : 'block';
}

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const form = document.getElementById('gatePassForm');
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    // Check for authorization
    if (!formObject.gm && !formObject.security && !formObject.hod) {
        alert('You must have at least one level of authorization.');
        return;
    }

    // Create log entry
    const logTable = document.getElementById('logTable').getElementsByTagName('tbody')[0];
    const newRow = logTable.insertRow();
    
    newRow.innerHTML = `
        <td>${formObject.passNo}</td>
        <td>${formObject.name}</td>
        <td>${formObject.items}</td>
        <td>${formObject.reason}</td>
        <td>${formObject.returnBy}</td>
        <td>${formObject.timeOut}</td>
        <td>${formObject.timeIn}</td>
        <td>${formObject.gm ? 'GM Authorized' : formObject.security ? 'Security Authorized' : 'HOD Authorized'}</td>
    `;
    
    // Clear the form after submission
    form.reset();
}
