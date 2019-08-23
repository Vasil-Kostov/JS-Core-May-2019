function listProcesor(input) {
    let obj = (function processor() {
        let arr = [];
        return {
            add: (str) => arr.push(str),
            remove: (str) => arr = arr.filter(s => s !== str),
            print: () => console.log(arr.join(","))
        }
    })();

    input.forEach(element => {
        let tokens = element.split(/\s+/g).filter(x => x !== "");
        obj[tokens[0]](tokens[1]);
    });
}