function range(firstnumber, secondnumber) {
  let tab = [];

  if (firstnumber === secondnumber) {
    return [firstnumber];
  }
  if (firstnumber < secondnumber) {
    for (let i = firstnumber; i <= secondnumber; i++) {
      tab.push(i);
    }
    return tab;
  }
  if (firstnumber > secondnumber) {
    for (let i = firstnumber; i >= secondnumber; i--) {
      tab.push(i);
    }
    return tab;
  }
}

console.log(range(4, 1));
// Do not remove last lines, it is for tests
module.exports = range;
