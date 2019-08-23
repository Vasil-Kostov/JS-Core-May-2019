function solve() {
    const spanInfo = document.querySelector("#info > span.info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    let currentStopId = "depot";
    let currentStop;
    const baseUrl = `https://judgetests.firebaseio.com/schedule/`;

    function depart() {
        const url = baseUrl + currentStopId + ".json";
        fetch(url)
            .then(r => r.json())
            .then(data => {
                currentStop = data;
                spanInfo.textContent = `Next stop ${currentStop.name}`;
                departBtn.setAttribute("disabled", true);
                arriveBtn.disabled = false;                
            })
            .catch(() => {
                spanInfo.textContent = "Error"
            })
    }

    function arrive() {
        spanInfo.textContent = `Arriving at ${currentStop.name}`;
        currentStopId = currentStop.next;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();