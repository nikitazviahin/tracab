function findLongestConsecutiveRange(arr) {
  if (arr.length === 0) return [0, 0];

  let maxLen = 1;
  let maxStart = 0;
  let currentLen = 1;
  let currentStart = 0;
  let direction = 0;

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];

    if (diff === 1 || diff === -1) {
      const isSameDirection = direction === 0 || direction === diff;

      if (isSameDirection) {
        currentLen++;
        direction = diff;
      } else {
        if (currentLen > maxLen) {
          maxLen = currentLen;
          maxStart = currentStart;
        }
        currentStart = i - 1;
        currentLen = 2;
        direction = diff;
      }
    } else {
      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxStart = currentStart;
      }
      currentStart = i;
      currentLen = 1;
      direction = 0;
    }
  }

  if (currentLen > maxLen) {
    maxLen = currentLen;
    maxStart = currentStart;
  }

  return [maxStart, maxLen];
}

console.log(findLongestConsecutiveRange([]));
console.log(findLongestConsecutiveRange([1]));
console.log(findLongestConsecutiveRange([1, 2]));
console.log(findLongestConsecutiveRange([1, 1, 2]));
console.log(findLongestConsecutiveRange([1, 2, 3, 1, 2, 3]));
console.log(findLongestConsecutiveRange([1, 2, 3, -10, -9, -8, -7, 0, 1, 2]));
console.log(findLongestConsecutiveRange([1, 1, 2, 3, 1, 2, 3]));
console.log(findLongestConsecutiveRange([1, 2, 3, 4, 3, 2, 1, 0, -2]));
