function attachEvents() {
    const buttonOnLoad = document.getElementById("btnLoad");
    const btnCreate = document.getElementById("btnCreate");
    const ulPhonebook = document.getElementById("phonebook");

    const baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';

    buttonOnLoad.addEventListener("click", loadPhonebook)
    btnCreate.addEventListener("click", createContact);

    function loadPhonebook() {
        fetch(baseUrl + ".json")
            .then(response => response.json())
            .then(data => {
                if(!data) {
                    throw new Error();
                }

                ulPhonebook.innerHTML = "";
                let fragment = document.createDocumentFragment();

                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const person = data[key];
                        const name = person.person;
                        const number = person.phone;

                        let deleteBtn = document.createElement("button");
                        deleteBtn.textContent = "Delete";
                        deleteBtn.addEventListener("click", deleteEntrie);

                        let li = document.createElement("li");
                        li.innerHTML = `${name} ${number}`;
                        li.appendChild(deleteBtn);
                        fragment.appendChild;

                        fragment.appendChild(li);

                        function deleteEntrie() {
                            const url = `${baseUrl}/${key}.json`;

                            fetch(url, { method: "DELETE" })
                                .then(response => response.json())
                                .then(() => loadPhonebook())
                                .catch(err => {
                                    window.alert("Cannot delete contact");
                                })
                        }
                    }
                }

                ulPhonebook.appendChild(fragment);
            })
            .catch(err => {
                window.alert("No phone numbers in Phonebook!");
            })

    }

    function createContact() {
        const person = document.getElementById("person").value;
        const phone = document.getElementById("phone").value;

        if (person && phone) {

            let url = baseUrl + ".json";

            let currentContact = {
                person,
                phone
            };

            fetch(url, {
                method: "POST",
                body: JSON.stringify(currentContact)
            })
                .then(response =>  response.json());

        }

        document.getElementById("person").value = "";
        document.getElementById("phone").value = "";

        loadPhonebook();
    }
}

attachEvents();