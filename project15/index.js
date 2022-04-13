const countDown = () => {
    let dewDate = new Date('jul 8, 2021').getTime();
    let now = new Date().getTime();
    let differents = dewDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let daysLeft = Math.floor(differents / days);
    let hoursLeft = Math.floor((differents % days) / hours);
    let minLeft = Math.floor((differents % hours) / minutes);
    let secLeft = Math.floor((differents % minutes) / seconds);

    hoursLeft < 10 ? '0' : hoursLeft;
    minLeft < 10 ? "0" : minLeft;
    secLeft < 10 ? "0" : secLeft;

    document.getElementById('days').innerText = daysLeft;
    document.getElementById('hours').innerText = hoursLeft;
    document.getElementById('minutes').innerText = minLeft;
    document.getElementById('seconds').innerText = secLeft;
}
setInterval(countDown, 1000);