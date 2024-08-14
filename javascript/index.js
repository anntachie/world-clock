function updateLaxTime(){
let laxElement = document.querySelector("#lax");
let laxDateElement = laxElement.querySelector(".date")
let laxTimeElement = laxElement.querySelector(".time")
let laxTime = moment().tz("America/Los_Angeles");
laxDateElement.innerHTML= laxTime.format("MMMM Do, YYYY");
laxTimeElement.innerHTML= laxTime.format("h:mm:ss [<small>]A[</small>]");
}
updateLaxTime();
setInterval(updateLaxTime,1000);

function updateParisTime(){
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date")
let parisTimeElement = parisElement.querySelector(".time")
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML= parisTime.format("MMMM Do, YYYY");
parisTimeElement.innerHTML= parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateDamascusTime(){
    let DamascusElement = document.querySelector("#damascus");
    let DamascusDateElement = DamascusElement.querySelector(".date")
    let DamascusTimeElement = DamascusElement.querySelector(".time")
    let DamascusTime = moment().tz("Asia/Damascus");
    DamascusDateElement.innerHTML= DamascusTime.format("MMMM Do, YYYY");
    DamascusTimeElement.innerHTML= DamascusTime.format("h:mm:ss [<small>]A[</small>]");
    }
    updateDamascusTime();
    setInterval(updateDamascusTime, 1000);

function updateCity (event)
{let cityTimeZone = event.target.value;
if (cityTimeZone === "current"){cityTimeZone = moment.tz.guess();}

    let cityName = cityTimeZone.replace("_","").split("/")[1];

    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    let homepage = document.querySelector("#homepage");
    if (homepage) {homepage.innerHTML = '<a href = "index.html"> Return to homepage </a>';}
    citiesElement.innerHTML = `<div class="city" > 
    <div class="city-date">
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
</div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
</div>

${homepage.innerHTML}`;
}


let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change" , updateCity);
