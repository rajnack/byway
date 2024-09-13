

// Show custom alert
function showAlert(message) {
  document.getElementById('alert-message').innerText = message;
  document.getElementById('custom-alert').style.display = 'block';
}

// Hide custom alert
document.getElementById('close-alert').addEventListener('click', function() {
  document.getElementById('custom-alert').style.display = 'none';
});

document.getElementById('test-button').addEventListener('click', function() {
    showAlert('Button clicked!');
});

document.getElementById('button-log').addEventListener('click', function(event) {
    event.preventDefault();
    showAlert('You are logged in');
});

document.getElementById('button-sign').addEventListener('click', function(event) {
    event.preventDefault();
    showAlert('Thank you for signing up');
});







  


