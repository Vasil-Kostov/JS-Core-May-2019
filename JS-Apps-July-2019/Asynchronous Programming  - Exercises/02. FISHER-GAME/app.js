function attachEvents() {
    let catchDivTemplate = document.createElement("div");
    catchDivTemplate.setAttribute("class", "catch");
    catchDivTemplate.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" />
    <hr>
    <label>Weight</label>      
    <input type="number" class="weight" />
    <hr>
    <label>Species</label>
    <input type="text" class="species" />
    <hr>
    <label>Location</label>
    <input type="text" class="location" />
    <hr>
    <label>Bait</label>
    <input type="text" class="bait" />
    <hr>
    <label>Capture Time</label>
    <input type="number" class="captureTime" />
    <hr>
    <button class="update">Update</button>
    <button class="delete">Delete</button>`;

    const buttons = {
        load: document.querySelector("button.load"),
        add: document.querySelector("button.add"),
    };

    const elements = {
        divCatches: document.getElementById("catches"),
    }

    buttons.load.addEventListener("click", loadCatches);
    buttons.add.addEventListener("click", createCatch);

    function createCatch() {
        let addFieldset = document.querySelector("fieldset#addForm");

        let data = Array.from(addFieldset.children)
            .filter((element) => element.tagName === "INPUT")
            .reduce((acc, curr) => {
                acc[curr.className] = curr.value;
                curr.value ="";
                return acc;
            }, {});

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                if(element === ""){
                    window.alert("Fill all fields to create new catch");
                    return;
                }
            }
        }

        let headers = {
            method: "POST",
            body: JSON.stringify(data)
        }

        fetch("https://fisher-game.firebaseio.com/catches.json", headers)
            .then(handler)
            .then(loadCatches)
    }

    function loadCatches() {
        fetch("https://fisher-game.firebaseio.com/catches.json")
            .then(handler)
            .then(showCatches)
    }

    function showCatches(data) {
        elements.divCatches.innerHTML = "";

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                let currentCatch = catchDivTemplate.cloneNode(true);
                currentCatch.setAttribute("data-id", key);

                currentCatch.querySelector("input.angler").value = element.angler;
                currentCatch.querySelector("input.weight").value = element.weight;
                currentCatch.querySelector("input.species").value = element.species;
                currentCatch.querySelector("input.location").value = element.location;
                currentCatch.querySelector("input.bait").value = element.bait;
                currentCatch.querySelector("input.captureTime").value = element.captureTime;

                currentCatch.querySelector("button.update").addEventListener("click", updateCatch);
                currentCatch.querySelector("button.delete").addEventListener("click", deleteCatch);

                elements.divCatches.appendChild(currentCatch);
            }
        }


    }

    function updateCatch(event) {
        let catchId = event.currentTarget.parentNode.getAttribute('data-id');
        let catchDiv = event.currentTarget.parentNode;

        let data = Array.from(catchDiv.children)
            .filter((element) => element.tagName === "INPUT")
            .reduce((acc, curr) => {
                acc[curr.className] = curr.value;

                return acc;
            }, {});

        let headers = {
            method: "PUT",
            body: JSON.stringify(data)
        }
        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, headers)
            .then(handler)
            .then(loadCatches)
    }

    function deleteCatch(event) {
        let catchId = event.currentTarget.parentNode.getAttribute('data-id');
        let catchDiv = event.currentTarget.parentNode;

        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, { method: "DELETE" })
            .then(handler)
            .then(() => {
                catchDiv.remove();
            })
    }

    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`)
        }

        return response.json();
    }
}

attachEvents();

