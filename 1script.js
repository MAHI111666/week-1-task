// Set the event date and time
const eventDate = new Date("January 30, 2025 10:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is finished
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-container").innerHTML = "<h1>The event has started!</h1>";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);