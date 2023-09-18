function solution(array) {
  try {
    const binaryArray = array.reduce(
      (acc, decimal) => [decimalToEightBinaryStr(decimal), ...acc],
      []
    );

    return parseInt(binaryArray.join(""), 2);
  } catch (err) {
    console.log(`Error during executing '${solution.name}'`, err);
  }
}

console.log(solution([24, 85, 0])); // 21784

function decToBin(dec) {
  return (dec >>> 0).toString(2);
}

function decimalToEightBinaryStr(decimal) {
  const MAX_BIT_AMIUNT = 8;
  const numberAsAString = String(decToBin(decimal));

  return `${"0".repeat(
    MAX_BIT_AMIUNT - numberAsAString.length
  )}${numberAsAString}`.slice(MAX_BIT_AMIUNT * -1);
}
