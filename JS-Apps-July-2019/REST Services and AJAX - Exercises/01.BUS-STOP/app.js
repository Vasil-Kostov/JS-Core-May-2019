function getInfo() {
    const resultDivStopName = document.getElementById("stopName");
    const resultUlBuses = document.getElementById("buses");

    const stopId = document.getElementById("stopId").value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then((r) => r.json())
        .then((data) => {
            resultDivStopName.textContent = data.name;
            resultUlBuses.innerHTML = "";
            
            let fragment = document.createDocumentFragment();
            
            Object.entries(data.buses)
                .forEach(([busNumber, timeToArivel]) => {
                    let li = document.createElement("li");
                    li.textContent = `Bus ${busNumber} arrives in ${timeToArivel}`;
                    fragment.appendChild(li);
            })

            resultUlBuses.appendChild(fragment);
        })
        .catch(error => {
            resultDivStopName.textContent = "Error";
            stopId.value = "";
        }); 
}