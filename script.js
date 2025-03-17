function updateTime() {
  const now = new Date();
  const dateElement = document.getElementById('date-time');

  const options = { hour: 'numeric', minute: 'numeric', month: 'short', day: 'numeric', hour12: true };
  const formattedDateTime = now.toLocaleString('en-US', options);

  dateElement.textContent = formattedDateTime;
}

updateTime();
setInterval(updateTime, 1000);
