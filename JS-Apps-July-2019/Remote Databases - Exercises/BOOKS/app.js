const kinveyUsername = "guest";
const kinveyPassword = "guest";
const kinveyAppKey = "kid_SySIibQGS";

const baseUrl = `https://baas.kinvey.com/appdata/${kinveyAppKey}/books`;

const elements = {
    btnLoadBooks: document.getElementById("loadBooks"),
    btnSubmit: document.getElementById("submit"),
    btnEdit: document.getElementById("edit"),
    btnCancel: document.getElementById("cancel"),
    inputTitle: document.getElementById("title"),
    inputAuthor: document.getElementById("author"),
    inputIsbn: document.getElementById("isbn"),
    h3Form: document.getElementsByTagName("h3")[0],
    tbody: document.getElementById("books"),
}

elements.btnLoadBooks.addEventListener("click", loadBooks);
elements.btnSubmit.addEventListener("click", createBook);
elements.btnEdit.addEventListener("click", editBoook);
elements.btnCancel.addEventListener("click", cancelEdit);

function loadBooks() {
    const headers = {
        credentials: "include",
        Authorization: "Kinvey " + localStorage.getItem("authToken"),
    }

    fetch(baseUrl, headers)
        .then(handler)
        .then(data => {
            elements.tbody.innerHTML = "";

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];

                    let tr = document.createElement("tr");
                    tr.setAttribute("id", element._id)
                    tr.innerHTML = `
                        <td>${element.title}</td>
                        <td>${element.author}</td>
                        <td>${element.isbn}</td>
                        <td>
                            <button value="${element._id}">Edit</button>
                            <button value="${element._id}">Delete</button>
                        </td>`;

                    tr.getElementsByTagName("button")[0].addEventListener("click", () => editBookForm(element._id));
                    tr.getElementsByTagName("button")[1].addEventListener("click", () => deleteBook(element._id));
                    elements.tbody.appendChild(tr);
                }
            }

        })
        .catch(err => {
            console.log(err);
        })
}

function deleteBook(bookId) {
    let deleteUrl = `${baseUrl}/${bookId}`

    let headers = {
        method: "DELETE",
        credentials: "include",
        Authorization: "Kinvey " + localStorage.getItem("authToken"),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(deleteUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => {
            console.log(err);
        });
}

function cancelEdit(event) {
    event.preventDefault();
    fromEditToSubmitForm();
}

function editBoook(event) {
    event.preventDefault();
    let dataBaseId = event.target.value;

    let title =  elements.inputTitle.value;
    let author =  elements.inputAuthor.value;
    let isbn =  elements.inputIsbn.value;

    if (title && author && isbn) {
        const bookData = {
            title,
            author,
            isbn,
        };
    
        const editUrl = `${baseUrl}/${dataBaseId}`;
    
        const headers = {
            method: "PUT",
            body: JSON.stringify(bookData),
            credentials: "include",
            Authorization: "Kinvey " + localStorage.getItem("authToken"),
            headers: {
                "Content-Type": "application/json"
            },
        };
    
        fetch(editUrl, headers)
            .then(handler)
            .then(loadBooks)
            .then(fromEditToSubmitForm)
            .catch(err => {
                console.log(err);
            })
    } else {
        window.alert("Error: You need to fill all book fields to edit the book!")
    }
}

function editBookForm(bookId) {
    let dataToEdit = document.getElementById(bookId).getElementsByTagName("td");

    elements.h3Form.textContent = "EDIT BOOK";

    elements.inputTitle.value = dataToEdit[0].textContent;
    elements.inputAuthor.value = dataToEdit[1].textContent;
    elements.inputIsbn.value = dataToEdit[2].textContent;

    elements.btnSubmit.style.display = "none";
    elements.btnEdit.style.display = "block";
    elements.btnCancel.style.display = "block";

    elements.btnEdit.value = bookId;
}

function fromEditToSubmitForm() {
    elements.h3Form.textContent = "FORM";

    clearElements(elements.inputTitle, elements.inputAuthor, elements.inputIsbn);

    elements.btnSubmit.style.display = "block";
    elements.btnEdit.style.display = "none";
    elements.btnCancel.style.display = "none";
}

function createBook(event) {
    event.preventDefault();

    let title = elements.inputTitle.value;
    let author = elements.inputAuthor.value;
    let isbn = elements.inputIsbn.value;

    if (title && author && isbn) {
        const headers = {
            method: "POST",
            body: JSON.stringify({ title, author, isbn }),
            credentials: "include",
            Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-Type": "application/json",
            },
        }

        fetch(baseUrl, headers)
            .then(handler)
            .then(loadBooks)
            .catch(err => {
                console.log(err);
            });

        clearElements(elements.inputTitle, elements.inputAuthor, elements.inputIsbn);
    } else {
        window.alert("Error: You need to fill all book fields to crate a book!")
    }
}

function clearElements(...arguments) {
    arguments.forEach(element => {
        element.value = "";
    })
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went rong! Error: ${response.statusText}`);
    }

    return response.json();
}