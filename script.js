// Get references to the DOM elements
const hoursTop = document.getElementById("hours-top");
const hoursBottom = document.getElementById("hours-bottom");

const minutesTop = document.getElementById("minutes-top");
const minutesBottom = document.getElementById("minutes-bottom");

const secondsTop = document.getElementById("seconds-top");
const secondsBottom = document.getElementById("seconds-bottom");

const current_date = document.getElementById("date");

function updateDate(){
    const a = new Date();
    const day_index = a.getDay();
    const date = a.getDate();
    const month = a.getMonth();
    const year = a.getFullYear();
    current_date.textContent = `${date.toString().padStart(2, '0')} / ${(month+1).toString().padStart(2, '0')} / ${year}`;
}

updateDate();

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});



// Function to update the flip animation
function flip(cardTop, cardBottom, newValue) {
    cardTop.innerText = newValue;
    cardBottom.innerText = newValue;

    const flipCard = cardTop.parentElement;

    flipCard.classList.add('active');
    setTimeout(() => {
        flipCard.classList.remove('active');
    }, 800);  // Match the animation duration
}

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update hours
    if (hoursTop.innerText !== hours) {
        flip(hoursTop, hoursBottom, hours);
    }

    // Update minutes
    if (minutesTop.innerText !== minutes) {
        flip(minutesTop, minutesBottom, minutes);
    }

    // Update seconds
    if (secondsTop.innerText !== seconds) {
        flip(secondsTop, secondsBottom, seconds);
    }
}

// Start the clock
setInterval(updateClock,updateDate, 1000);
