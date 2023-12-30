function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = 30 * hours + minutes / 2;
    const minuteRotation = 6 * minutes;
    const secondRotation = 6 * seconds;

   
    hour.style.transition = 'transform 0.5s ease-in-out';
    minute.style.transition = 'transform 0.5s ease-in-out';
    second.style.transition = 'transform 0.5s ease-in-out';

    
    const centerX = clockContainer.offsetWidth / 2;
    const centerY = clockContainer.offsetHeight / 2;

  
    hour.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
}


setInterval(updateClock, 1000);

const clockContainer = document.getElementById('clockContainer');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');



document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("noticeModal");
    var okButton = document.getElementById("okButton");
    var mainContent = document.getElementById("mainContent");

   
    modal.style.display = "flex";

    okButton.addEventListener("click", function () {
        modal.style.display = "none";
        mainContent.style.display = "block";
        mainContent.classList.remove("hidden");
    });
});
