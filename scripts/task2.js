// function solution(array) {
//   const allNumbers = array.join("").split("");
//   const numbersMap = allNumbers.reduce((acc, num) => {
//     return {
//       ...acc,
//       [num]: acc[num] ? acc[num] + 1 : 1,
//     };
//   }, {});
//   const mostPopularNumberAmount = Math.max(
//     ...Object.values(numbersMap)
//   );

//   return Object.entries(numbersMap)
//     .filter(([num, amount]) => amount === mostPopularNumberAmount)
//     .map(([num]) => Number(num));
// }

function solution(array) {
  const allNumbers = array.join("");
  const map = {};
  let maxAmount = 0;
  const result = [];

  for (let i = 0; i < allNumbers.length; i++) {
    const key = allNumbers[i];
    map[key] = map[key] ? map[key] + 1 : 1;

    if (maxAmount < map[key]) maxAmount = map[key];
  }

  for (const property in map) {
    const amount = map[property];
    if (amount !== maxAmount) continue;

    result.push(Number(property));
  }

  return result;
}

console.log(solution([1, 11, 1, 2])); // [1]
console.log(solution([25, 2, 3, 57, 38, 41])); // [2,3,5]
