
function MaxValue(shares) {
  // Your code here:
  let min = Math.min(...shares);
  let minIndex = shares.indexOf(min);
  let newArr = shares.slice(minIndex);
  let max = Math.max(...newArr);
  return max - min;
}

module.exports = MaxValue;
