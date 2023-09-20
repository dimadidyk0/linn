function solution(matrix) {
  const layerCount = Math.ceil(matrix.length / 2);

  const layers = [];
  let currentMatrix = matrix;

  for (let i = 0; i < layerCount; i++) {
    const { layer, matrix } = removeLayer(currentMatrix);
    layers.push(layer);
    currentMatrix = matrix;
  }

  return buildMatrix(layers);
}

function removeLayer(matrix) {
  return matrix.reduce(
    (acc, list, index, { length }) => {
      if ([0, length - 1].includes(index)) {
        return {
          layer: [...acc.layer, ...list],
          matrix: acc.matrix,
        };
      }

      list.forEach((num, numIndex, { length: listLength }) => {
        if ([0, listLength - 1].includes(numIndex)) {
          acc.layer.push(num);
        } else if (numIndex === 1) {
          acc.matrix.push([num]);
        } else {
          acc.matrix[acc.matrix.length - 1].push(num);
        }
      });

      return acc;
    },
    { layer: [], matrix: [] }
  );
}

function sortNumbers(a, b) {
  return a - b;
}

function buildMatrix(layers) {
  const result = [];
  for (let i = layers.length - 1; i >= 0; i--) {
    const sortedLayer = layers[i].sort(sortNumbers);
    const elementsAmountInList = result.length + 2;

    sortedLayer.forEach((number, index) => {
      const sideAmount = elementsAmountInList - 2;
      const layerLength = sortedLayer.length;

      const shouldUnshiftArray = index === 0;
      const shouldPushArray =
        index === elementsAmountInList + sideAmount;
      const isInFirstArray = index < elementsAmountInList;
      const isInLastArray =
        layerLength - elementsAmountInList - sideAmount < index &&
        index < layerLength - sideAmount;
      const isInRightSide =
        index >= elementsAmountInList &&
        index < layerLength - elementsAmountInList - sideAmount;

      if (shouldUnshiftArray) {
        result.unshift([number]);
      } else if (shouldPushArray) {
        result.push([number]);
      } else if (isInFirstArray) {
        result[0].push(number);
      } else if (isInLastArray) {
        result[elementsAmountInList - 1].unshift(number);
      } else if (isInRightSide) {
        result[index - elementsAmountInList + 1].push(number);
      } else {
        result[layerLength - index].unshift(number);
      }
    });
  }

  return result;
}

const matrix = [
  [9, 7, 4, 5],
  [1, 6, 2, -6],
  [12, 20, 2, 0],
  [-5, -6, 7, -2],
];

console.log(solution(matrix));
