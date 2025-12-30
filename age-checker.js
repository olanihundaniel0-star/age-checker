const email = document.getElementById('email');
const submit = document.getElementById('submit');
const res = document.getElementById('res');

submit.onclick = function() {
  const input = email.value.trim();
  
  // Clear previous result classes
  res.className = '';
  
  // Validate input
  if (!input) {
    res.textContent = "Please enter your age";
    res.classList.add('error');
    return;
  }
  
  const age = Number(input);
  
  // Check if valid number
  if (isNaN(age) || age < 0) {
    res.textContent = "Please enter a valid age";
    res.classList.add('error');
    return;
  }
  
  // Age validation logic
  if (age === 12) {
    res.textContent = "You are exactly 12 years old, still not enough brodie";
    res.classList.add('error');
  }
  else if (age < 18) {
    res.textContent = "You are not old enough to sign up.";
    res.classList.add('error');
  }
  else {
    res.textContent = "Welcome aboard!";
    res.classList.add('success');
  }
}
