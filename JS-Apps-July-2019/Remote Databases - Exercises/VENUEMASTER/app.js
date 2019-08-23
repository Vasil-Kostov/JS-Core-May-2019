const kinveyUsername = "guest";
const kinveyPassword = "pass";
const kinveyAppKey = "kid_BJ_Ke8hZg";

const baseUrl = `https://baas.kinvey.com`;

let elements = {
    btnGetVenues: document.getElementById("getVenues"),
    inputDate: document.getElementById("venueDate"),
    divInfo: document.getElementById("venue-info"),
}

elements.btnGetVenues.addEventListener("click", getVenues);

function getVenues() {

    const date = elements.inputDate.value;
    if (date) {
        let getVenuesIdsUrl = `${baseUrl}/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`;

        const headers = {
            method: "POST",
            credentials: "include",
            Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-Type": "application/json",
            },
        }

        fetch(getVenuesIdsUrl, headers)
            .then(handler)
            .then(data => loadVenues(data))
            .catch(err => {
                console.log(err);
            })

    } else {
        window.alert("Please enter date!");
    }
}

function loadVenues(ids) {
    elements.divInfo.innerHTML = "";

    for (const id of ids) {
        let venueUrl = `${baseUrl}/appdata/kid_BJ_Ke8hZg/venues/${id}`;

        const headers = {
            method: "GET",
            credentials: "include",
            Authorization: "Kinvey " + localStorage.getItem("authToken"),
            headers: {
                "Content-Type": "application/json",
            },
        }

        fetch(venueUrl, headers)
            .then(handler)
            .then(data => showVenue(data))
            .catch(err => console.log(err))
    }
}

function showVenue(venue) {
    let divWraper = document.createElement("div");
    divWraper.setAttribute("class", "venue");
    divWraper.setAttribute("id", venue._id);

    divWraper.innerHTML = `
    <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
    <div class="venue-details" style="display: none;">
        <table>
            <tr>
                <th>Ticket Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
            <tr>
                <td class="venue-price">${venue.price} lv</td>
                <td><select class="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></td>
                <td><input data-id="${venue._id}" class="purchase" type="button" value="Purchase"></td>
            </tr>
        </table>
        <span class="head">Venue description:</span>
        <p class="description">${venue.description}</p>
        <p class="description">Starting time: ${venue.startingHour}</p>
    </div>`

    const buttons = Array.from(divWraper.getElementsByTagName("input"));
    buttons[0].addEventListener("click", showInfo);
    buttons[1].addEventListener("click", confirmPurchiseForm)

    elements.divInfo.appendChild(divWraper);
}

function confirmPurchiseForm(event) {
    const id = event.target.getAttribute("data-id");
    const div = document.getElementById(id);
    const qty = Number(div.getElementsByTagName("select")[0].value);
    const price = Number(div.querySelector("td.venue-price").textContent.split(" ")[0]);
    const name = div.querySelector("span.venue-name").textContent;

    elements.divInfo.innerHTML = `
    <span class="head">Confirm purchase</span>
    <div class="purchase-info">
        <span>${name}</span>
        <span>${qty} x ${price}</span>
        <span>Total: ${qty * price} lv</span>
        <input type="button" value="Confirm">
    </div>`;

    elements.divInfo.querySelector("input").addEventListener("click", () => {
        confirmPurchise(id, qty)
    });

}

function confirmPurchise(id, qty) {

    const url = `${baseUrl}/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${qty}`
    const headers = {
        method: "POST",
        credentials: "include",
        Authorization: "Kinvey " + localStorage.getItem("authToken"),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(url, headers)
        .then(handler)
        .then(data => {
            elements.divInfo.innerHTML = "You may print this page as your ticket." + data.html;
        })
        .catch(err => console.log(err));
}

function showInfo(event) {
    let button = event.target;
    let divDetails = event.target.parentNode.parentNode.querySelector("div.venue-details");
    if (button.value === "More info") {
        button.value = "Hide info";
        divDetails.style.display = "block";
    } else {
        button.value = "More info";
        divDetails.style.display = "none";
    }
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong! Error: ${response.statusText}`);
    }

    return response.json();
}