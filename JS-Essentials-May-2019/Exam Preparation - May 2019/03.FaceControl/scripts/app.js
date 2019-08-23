function getData() {
	let inputArr = JSON.parse(document.getElementsByTagName("textarea")[0].value);
	let [peopleInPElement, blacklistPelement, peopleOutPElement] = document.getElementsByTagName("p");

	let peopleIn = [];
	let peopleOut = [];
	let blacklist = [];

	for (let person of inputArr) {
		if (inputArr.indexOf(person) === inputArr.length - 1) {
			break;
		}

		let [firstName, lastName, action] = Object.values(person);
		person = JSON.stringify({firstName, lastName});

		if (action === "peopleIn"
			&& !(blacklist.includes(person))) {
			peopleIn.push(person);
		} else if (action === "peopleOut"
			&& peopleIn.includes(person)) {
			let index = peopleIn.indexOf(person);
			peopleIn.splice(index, 1);
			peopleOut.push(person);
		} else if (action === "blacklist") {
			if (peopleIn.includes(person)) {
				let index = peopleIn.indexOf(person);
				peopleIn.splice(index, 1);
				peopleOut.push(person);
			}

			blacklist.push(person);
		}
	}

	let [criteria, action] = Object.values(inputArr[inputArr.length - 1]);
	
	if (action === "peopleIn") {
	 	peopleIn = sortPeople(peopleIn, criteria);
	} else if (action === "peopleOut") {
		peopleOut = sortPeople(peopleOut, criteria);
	} else if (action === "blacklist") {
		blacklist = sortPeople(blacklist, criteria);
	}
	

	peopleInPElement.innerHTML = peopleIn.join(" ");
	peopleOutPElement.innerHTML = peopleOut.join(" ");
	blacklistPelement.innerHTML = blacklist.join(" ");

	function sortPeople(people, criteria) {
		let arr = [];
		for (const person of people) {
			arr.push(JSON.parse(person));			
		}
		if (criteria === "firstName") {
			arr.sort((a, b) => a.firstName.localeCompare(b.firstName));
		} else if (criteria === "lastName") {
			arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
		}
		let result = [];
		for (const person of arr) {
			result.push(JSON.stringify({"firstName": person.firstName, "lastName": person.lastName}));			
		}
		return result;
	}
}