document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.opacity = 0.8;
      });
      link.addEventListener('mouseout', () => {
        link.style.opacity = 1;
      });
    });
  });
  
  // Countdown
const countDate = new Date("April 21, 2025 00:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  document.getElementById('days').innerText = Math.floor(gap / day);
  document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
  document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
  document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
}, 1000);
