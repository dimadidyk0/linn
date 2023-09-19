function solution(array) {
  try {
    const binaryNumberStr = array.reduce(
      (acc, decimal) => `${decimalToEightBinaryStr(decimal)}${acc}`,
      ""
    );
    return parseInt(binaryNumberStr, 2);
  } catch (err) {
    console.log(`Error during executing '${solution.name}'`, err);
  }
}

console.log(solution([24, 85, 0])); // 21784

function decimalToEightBinaryStr(decimal) {
  const MAX_BIT_AMIUNT = 8;
  const numberAsAString = String(decimalToBinary(decimal));
  const prefix = "0".repeat(MAX_BIT_AMIUNT - numberAsAString.length); // value "101" => will have "00000" as prefix

  return `${prefix}${numberAsAString}`.slice(MAX_BIT_AMIUNT * -1); // shorter versions insted of if/else statements
}

function decimalToBinary(dec) {
  return (dec >>> 0).toString(2);
}
