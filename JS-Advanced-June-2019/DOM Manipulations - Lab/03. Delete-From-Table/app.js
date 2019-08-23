function deleteByEmail() {
    const emalToDelete = document.querySelector("label input").value;
    const tbodyElement = document.querySelector("#customers tbody");
    const result = document.getElementById("result");
    debugger;
    let emailsIndex = getEmailsIndex();

    for (const trEle of Array.from(tbodyElement.children)) {
        if (trEle.children[emailsIndex].innerHTML === emalToDelete) {
          tbodyElement.removeChild(trEle);
          result.textContent = "Delited";
          return;
        }
    }

    result.textContent = "Not found.";


    function getEmailsIndex() {
        const thElementsInTHEAD = document.querySelector("thead tr");
        index = 0;
        for (const thEle of Array.from(thElementsInTHEAD.children)) {
            if (thEle.innerHTML === "Email") {
                return index;
            }
           
            index++;
        }
    }
    
}