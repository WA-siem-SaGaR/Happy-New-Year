// Get the button and message elements
const giftBtn = document.getElementById('giftBtn');
const celebrationMessage = document.getElementById('celebrationMessage');

// Add event listener to the button
giftBtn.addEventListener('click', function() {
  // Show the celebration message when the button is clicked
  celebrationMessage.style.display = 'block';
  // Hide the button after it is clicked
  giftBtn.style.display = 'none';
});
