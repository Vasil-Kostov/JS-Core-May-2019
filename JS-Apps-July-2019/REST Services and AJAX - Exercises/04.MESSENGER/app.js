function attachEvents() {
    const refreshBtn = document.getElementById("refresh");
    const sendBtn = document.getElementById("submit");
    const textarea = document.getElementById("messages");

    const url = "https://rest-messanger.firebaseio.com/messanger.json";

    refreshBtn.addEventListener("click", refreshMessages);
    sendBtn.addEventListener("click", sendMessage);

    function refreshMessages() {
        textarea.textContent = "";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];
                        textarea.textContent += `${element.author}: ${element.content}\n`;
                    }
                }
            })
            .catch(err => {
                window.alert("Can't load the messages");
            });
    }

    function sendMessage() {
        const author = document.getElementById("author").value;
        const content = document.getElementById("content").value;

        if (author && content) {
            const messageObject = {
                author,
                content
            }

            fetch(url, {
                method: "POST",
                body: JSON.stringify(messageObject)
            })
                .then(response => response.json())
                .then(() => {
                    refreshMessages()
                    document.getElementById("author").value = "";
                    document.getElementById("content").value = "";
                })
                .catch(err => {
                    window.alert("Error! Message wasn't send");
                });


        } else {
            window.alert("Error! Name or message is empty!")
        }
    }
}

attachEvents();