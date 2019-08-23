function solve() {
  let siteElements = document.getElementsByClassName("link-1");
  console.log(typeof siteElements);

  for (let siteElement of siteElements) {
    siteElement.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget;
      let p = currentTarget.getElementsByTagName('p')[0];
      let content = p.textContent;
      
      let tokens = content.split(' ');
      let clicks = Number(tokens[1]);
      clicks++;
      tokens[1] = clicks;
      p.textContent = tokens.join(" ");
    })
  }
}