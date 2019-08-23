function spaceshipCrafting() {
	let titaniumCoreFound = parseInt(document.getElementById("titaniumCoreFound").value);
	let aluminiumCoreFound = parseInt(document.getElementById("aluminiumCoreFound").value);
	let magnesiumCoreFound = parseInt(document.getElementById("magnesiumCoreFound").value);
	let carbonCoreFound = parseInt(document.getElementById("carbonCoreFound").value);
	let lossesPercent = parseInt(document.getElementById("lossesPercent").value);

	let [barsPElement, shipsPElements] = document.getElementsByTagName("p");
	debugger;
	lossesPercent = lossesPercent / 100 / 4;
	titaniumCoreFound = titaniumCoreFound - Math.round(titaniumCoreFound * lossesPercent);
	aluminiumCoreFound = aluminiumCoreFound - Math.round(aluminiumCoreFound * lossesPercent);
	magnesiumCoreFound = magnesiumCoreFound - Math.round(magnesiumCoreFound * lossesPercent);
	carbonCoreFound = carbonCoreFound - Math.round(carbonCoreFound * lossesPercent);

	let titaniumBars = Math.round(titaniumCoreFound / 25);
	let aluminiumBars = Math.round(aluminiumCoreFound / 50);
	let magnesiumBars = Math.round(magnesiumCoreFound / 75);
	let carbonBars = Math.round(carbonCoreFound / 100);

	let theUndefinedShips = 0;
	let nullMasterShips = 0;
	let JSONCrewShips = 0;
	let falseFreetShips = 0;

	while (true) {
		let shipBuild = false;

		if (titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7) {
			theUndefinedShips++;
			titaniumBars -= 7;
			aluminiumBars -= 9;
			magnesiumBars -= 7;
			carbonBars -= 7;
			shipBuild = true;
		}
		if (titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5) {
			nullMasterShips++;
			titaniumBars -= 5;
			aluminiumBars -= 7;
			magnesiumBars -= 7;
			carbonBars -= 5;
			shipBuild = true;
		}
		if (titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2) {
			JSONCrewShips++;
			titaniumBars -= 3;
			aluminiumBars -= 5;
			magnesiumBars -= 5;
			carbonBars -= 2;
			shipBuild = true;
		}
		if (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
			falseFreetShips++;
			titaniumBars -= 2;
			aluminiumBars -= 2;
			magnesiumBars -= 3;
			carbonBars -= 1;
			shipBuild = true;
		}

		if (!shipBuild) {
			break;
		}
	}

	let shipsResult = [];

	if (theUndefinedShips) {
		shipsResult.push(`${theUndefinedShips} THE-UNDEFINED-SHIP`);
	}
	if (nullMasterShips) {
		shipsResult.push(`${nullMasterShips} NULL-MASTER`);
	}
	if (JSONCrewShips) {
		shipsResult.push(`${JSONCrewShips} JSON-CREW`);
	}
	if (falseFreetShips) {
		shipsResult.push(`${falseFreetShips} FALSE-FLEET`);
	}

	let barsResult = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;

	barsPElement.textContent = barsResult;
	
	if(theUndefinedShips || nullMasterShips || JSONCrewShips || falseFreetShips) {
		shipsPElements.textContent = `${shipsResult.join(", ")}`;
	}
}