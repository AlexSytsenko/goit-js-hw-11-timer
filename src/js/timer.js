const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};


const timer = {
    start() {

        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();

            // console.log('startTime:', startTime);
            // console.log('currentTime:', currentTime);

            const deltaTime = currentTime - startTime;
            console.log(deltaTime);

            updateClockface(deltaTime);
        }, 1000);
    }
};

timer.start();

function updateClockface(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;

    console.log(`${days}:${hours}:${mins}:${secs}`);
}

function pad(value) {

    return String(value).padStart(2, '0');
}