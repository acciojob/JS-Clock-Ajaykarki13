// Function to update the clock
function updateClock() {
  // Get the current time
  const now = new Date();

  // Get the hour, minute, and second
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation angles for the hour, minute, and second hands
  const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteAngle = (minutes / 60) * 360;
  const secondAngle = (seconds / 60) * 360;

  // Rotate the hour, minute, and second hands
  const hourHand = document.getElementsByClassName("hour-hand")[0];
  hourHand.style.transform = `rotate(${hourAngle}deg)`;

  const minuteHand = document.getElementsByClassName("min-hand")[0];
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;

  const secondHand = document.getElementsByClassName("second-hand")[0];
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
