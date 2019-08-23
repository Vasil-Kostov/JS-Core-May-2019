function towntToJSON(input){
    let towns = [];

    for(let line of input.splice(1)) {
        let tokens = line.split('|');
        tokens =  tokens.filter(e => e !== "");
        let townObj = { Town: tokens[0].trim(), Latitude: Number(tokens[1].trim()), Longitude: Number(tokens[2].trim())};
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}
towntToJSON(['| Town | Latitude | Longitude |','| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']);