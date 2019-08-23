const kinveyUsername = "guest";
const kinveyPassword = "guest";
const kinveyAppKey = "kid_SySIibQGS";

const baseUrl = `https://baas.kinvey.com/appdata/${kinveyAppKey}/students`;

let nextId = 1;

const elements = {
    createBtn: document.getElementById("create"),
    inputFirstName: document.getElementById("firstName"),
    inputLastName: document.getElementById("lastName"),
    inputFacultyNum: document.getElementById("facultyNumber"),
    inputGrade: document.getElementById("grade"),
    tBody: document.getElementsByTagName("tbody")[0],
    tHeadTdElemnets: document.getElementsByTagName("thead")[0]
        .getElementsByTagName("tr")[0]
        .children,
}

elements.createBtn.addEventListener("click", addStudent);

Array.from(elements.tHeadTdElemnets)
    .forEach(e => e.addEventListener("click", sortingCriteria));

function addStudent(event) {
    event.preventDefault();

    if (elements.inputFirstName.value 
        && elements.inputLastName.value 
        && Number(elements.inputFacultyNum.value)
        && Number(elements.inputGrade.value)) {

        const student = {
            "id": nextId,
            "firstName": elements.inputFirstName.value,
            "lastName": elements.inputLastName.value,
            "facultyNumber": elements.inputFacultyNum.value,
            "grade": elements.inputGrade.value,
        }

        const headers = {
            method: "POST",
            body: JSON.stringify(student),
            credentials: "include",
            Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-Type": "application/json",
            },
        }

        fetch(baseUrl, headers)
            .then(handler)
            .then(clearInputFields)
            .then(sortingCriteria())
            .catch(err => {
                console.log(err);
            });

    } else {
        window.alert(`In order to add new student, please provide correct information!

        Faculty Number and Grade should be numbers :))`)
    }
    
}

function loadStudents(sortCriteria) {

    const headers = {
        method: "GET",
        credentials: "include",
        Authorization: "Kinvey " + localStorage.getItem("authToken"),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(baseUrl, headers)
        .then(handler)
        .then(data => {
            elements.tBody.innerHTML = "";

            if (sortCriteria !== "id") {
                if (sortCriteria === "facultyNumber") {
                    data.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
                } else if (sortCriteria === "grade") {
                    data.sort((a, b) => b[sortCriteria] - a[sortCriteria]);
                } else {
                    data.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
                }
            }

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const student = data[key];

                    if (student.id >= nextId) {
                        nextId = student.id + 1;
                    }

                    let tr = document.createElement('tr');

                    tr.innerHTML = `
                        <td>${student.id}</td>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.facultyNumber}</td>
                        <td>${student.grade}</td>`;

                    elements.tBody.appendChild(tr);
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
}

function sortingCriteria(event) {

    let sortArgument;

    if (event) {
        sortArgument = event.target.textContent;
    }

    let sortCriteria = "";
    switch (sortArgument) {
        case "First Name":
            sortCriteria = "firstName";
            break;
        case "Last Name":
            sortCriteria = "lastName";
            break;
        case "Faculty Number":
            sortCriteria = "facultyNumber";
            break;
        case "Grade":
            sortCriteria = "grade";
            break;
        default:
            sortCriteria = "id";
            break;
    }

    loadStudents(sortCriteria);
};

function clearInputFields(){
    elements.inputFirstName.value = "";
    elements.inputLastName.value = "";
    elements.inputFacultyNum.value = "";
    elements.inputGrade.value = "";
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong! Error: ${response.statusText}`);
    }

    return response.json();
}

sortingCriteria();