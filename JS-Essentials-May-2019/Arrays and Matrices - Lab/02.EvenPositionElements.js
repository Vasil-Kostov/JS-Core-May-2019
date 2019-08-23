function evenPositionElements(input) {
   return input.filter((e, index) => index % 2 === 0).join(" ");
}