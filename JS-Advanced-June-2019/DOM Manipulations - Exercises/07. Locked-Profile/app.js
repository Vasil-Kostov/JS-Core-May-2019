function lockedProfile() {
 
    function show() {
        let profile = this.parentNode;
        let hidenDiv = profile.getElementsByTagName("div")[0];
        let unlockRE = profile.getElementsByTagName("input")[1];
        
        if (unlockRE.checked){
            if (this.textContent === "Show more") {
                hidenDiv.style.display = "block";
                this.textContent = "Hide it";
            } else if (this.textContent === "Hide it") {
                hidenDiv.style.display = "none"
                this.textContent = "Show more";
            }
        }
    }

    let profilesElements = Array.from(document.getElementsByClassName("profile"));

    profilesElements.forEach(p => {
        let buttonEle = p.lastElementChild;
        buttonEle.addEventListener("click", show)
    });
}