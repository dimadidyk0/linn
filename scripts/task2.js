function solution(array) {
  const allNumbers = array.join("").split("");
  const numbersMap = allNumbers.reduce((acc, num) => {
    return {
      ...acc,
      [num]: acc[num] ? acc[num] + 1 : 1,
    };
  }, {});
  const mostPopularNumberAmount = Math.max(
    ...Object.values(numbersMap)
  );

  return Object.entries(numbersMap)
    .filter(([num, amount]) => amount === mostPopularNumberAmount)
    .map(([num]) => Number(num));
}

console.log(solution([1, 11, 1, 2])); // [1]
console.log(solution([25, 2, 3, 57, 38, 41])); // [2,3,5]
