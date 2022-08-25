var arrTimeZones = [
    { timeZone: 'Asia/Dubai' },
    { timeZone: 'Asia/Kabul' },
    { timeZone: 'Australia/Melbourne' },
    { timeZone: 'Australia/Sydney' },
    { timeZone: 'Europe/Paris' },
    { timeZone: 'Europe/London' },
    { timeZone: 'Asia/Hong_Kong' },
    { timeZone: 'Asia/Kolkata' },
    { timeZone: 'Europe/Rome' },
    { timeZone: 'Asia/Tokyo' },
    { timeZone: 'Asia/Colombo' },
    { timeZone: 'Asia/Macau' },
    { timeZone: 'Asia/Kuala_Lumpur' },
    { timeZone: 'Europe/Amsterdam' },
    { timeZone: 'Asia/Kathmandu' },
    { timeZone: 'America/Panama' },
    { timeZone: 'Asia/Karachi' },
    { timeZone: 'Asia/Qatar' },
    { timeZone: 'Europe/Moscow' },
    { timeZone: 'Asia/Singapore' },
    { timeZone: 'Asia/Bangkok' },
    { timeZone: 'America/New_York' },
    { timeZone: 'America/Chicago' },
    { timeZone: 'America/Los_Angeles' },
];

var arrId = [
    "timeDubai",
    "timeKabul",
    "timeMelbourne",
    "timeSydney",
    "timeParis",
    "timeLondon",
    "timeHong_Kong",
    "timeKolkata",
    "timeRome",
    "timeTokyo",
    "timeColombo",
    "timeMacau",
    "timeKuala_Lumpur",
    "timeAmsterdam",
    "timeKathmandu",
    "timePanama",
    "timeKarachi",
    "timeQatar",
    "timeMoscow",
    "timeSingapore",
    "timeBangkok",
    "timeNew_York",
    "timeChicago",
    "timeLos_Angeles"
]

let a
let date
let time
const divClock = document.getElementById("clocks");
let divElement

const optionsDate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const optionsTime = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}

for (let i = 0; i < arrId.length; i++) {
    setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString('en-US', { ...optionsDate, ...arrTimeZones[i] });
        time = a.toLocaleTimeString('en-US', { ...optionsTime, ...arrTimeZones[i] });
        document.getElementById(arrId[i]).innerHTML = time + " on " + date;
    }, 100);
    
    let divChild = document.createElement('div')
    divElement =
        `<div class="jumbotron">` +
        `<h1 class="display-4">Current ${arrTimeZones[i].timeZone} Time is: <br><span id=${arrId[i]}></span></h1>` +
        `<p class="lead">This is your <b>${arrTimeZones[i].timeZone}</b> Time.</p>` +
        `<hr class="my-4">` +
        `<p>We are here to show you the time for different countries.</p>` +
        `<a class="btn btn-primary btn-lg" href="#" role="button">Browse Times</a>` +
        `</div>`;
    divChild.innerHTML = divElement
    divClock.appendChild(divChild)
}