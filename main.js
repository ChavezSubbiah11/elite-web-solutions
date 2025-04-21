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
  const countDownDate = new Date("June 30, 2026 00:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

        const countdown = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;
          
            if (distance < 0) {
              clearInterval(countdown);
              document.getElementById("countdown").innerHTML = "🚀 We're Live!";
              return;
            }
          
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            document.getElementById("countdown").innerHTML =
              `${days}d ${hours}h ${minutes}m ${seconds}s`;
          }, 1000);
          

  document.getElementById('days').innerText = Math.floor(gap / day);
  document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
  document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
  document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
}, 1000);
