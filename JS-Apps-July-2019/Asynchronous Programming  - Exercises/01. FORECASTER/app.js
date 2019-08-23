function attachEvents() {
    const divForecasts = document.getElementById("forecast");

    let todaysForecastDivTemplate = document.createElement("div");
    todaysForecastDivTemplate.setAttribute("class", "forecasts");
    
    let upcomingForcastsDivTemplate = document.createElement("div")
    upcomingForcastsDivTemplate.setAttribute("class", "forecast-info");


    let locationInfo;
    let todaysForecast;
    let upcomingForecast;

    const symbols = {
        "Sunny": "☀",
        "Partly sunny": "⛅",
        "Overcast": "☁",
        "Rain": "☂",
        "Degrees": "°"
    }

    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", getLocationInfo);
    
    function appendForecasts(){
        appendTodaysForecast();
        appandUpcomingForecast();
        
        divForecasts.style.display = "block";
    }
    
    function appandUpcomingForecast(){
        document.getElementById("upcoming").innerHTML = `<div class="label">Three-day forecast</div>`;

        let upcomingDivElement = upcomingForcastsDivTemplate.cloneNode(true);

        for (const key in upcomingForecast.forecast) {
            if (upcomingForecast.forecast.hasOwnProperty(key)) {
                const element = upcomingForecast.forecast[key];
                
                let outerSpan = document.createElement("span");
                outerSpan.setAttribute("class", "upcoming");
                outerSpan.innerHTML = `
                <span class="symbol">${symbols[element.condition]}</span>
                <span class="forecast-data">${element.low}${symbols.Degrees}/${element.high}${symbols.Degrees}</span>
                <span class="forecast-data">${element.condition}</span>`;

                upcomingDivElement.appendChild(outerSpan);
            }
        }

        document.getElementById("upcoming").appendChild(upcomingDivElement);
    }

    function appendTodaysForecast(){
        const currentSymbol = symbols[todaysForecast.forecast.condition];
        const lowDegrece = todaysForecast.forecast.low;
        const highDegrece = todaysForecast.forecast.high;

        todaysForecastDivTemplate.innerHTML = `
        <span class="condition symbol">${currentSymbol}</span>
            <span class="condition">
                <span class="forecast-data">${todaysForecast.name}</span>
                <span class="forecast-data">${lowDegrece}${symbols.Degrees}/${highDegrece}${symbols.Degrees}</span>
                <span class="forecast-data">${todaysForecast.forecast.condition}</span>
            </span>
        </span>`;

        document.getElementById("current").appendChild(todaysForecastDivTemplate);
    }

    function getLocationInfo() {
        const locationName = document.getElementById("location").value;
        fetch("https://judgetests.firebaseio.com/locations.json")
            .then(handler)
            .then(data => {
                locationInfo = data.filter(o => o.name === locationName)[0];
            })
            .then(getTodaysForecast)
            .catch(err => {
                window.alert("Error! Unsupported location!")
            })
    }

    function getTodaysForecast() {
        fetch(`https://judgetests.firebaseio.com/forecast/today/${locationInfo.code}.json`)
            .then(handler)
            .then(data => {
                todaysForecast = data;
            })
            .then(getUpcomingForecast);
    }

    function getUpcomingForecast() {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${locationInfo.code}.json`)
            .then(handler)
            .then(data => {
                upcomingForecast = data;
            })
            .then(appendForecasts);
    }

    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`)
        }

        return response.json();
    }
}

attachEvents();