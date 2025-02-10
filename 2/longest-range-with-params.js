function findLongestConsecutiveRange(arr, step = 1, requiredNum = null) {
  if (arr.length === 0) return [0, 0];

  let maxLen = 1;
  let maxStart = 0;
  let currentLen = 1;
  let currentStart = 0;
  let direction = 0;
  let containsRequiredNum = requiredNum === null ? true : arr[0] === requiredNum;

  if (requiredNum !== null && !arr.includes(requiredNum)) return [0, 0];

  let maxSequences = [];

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];

    if (diff === step || diff === -step) {
      const isSameDirection = direction === 0 || direction === diff / step;

      if (isSameDirection) {
        currentLen++;
        direction = diff / step;
      } else {
        if (currentLen > maxLen && containsRequiredNum) {
          maxLen = currentLen;
          maxStart = currentStart;
          maxSequences = [[maxStart, maxLen]];
        } else if (currentLen === maxLen && containsRequiredNum) {
          maxSequences.push([currentStart, currentLen]);
        }
        currentStart = i - 1;
        currentLen = 2;
        direction = diff / step;
        containsRequiredNum = arr[i - 1] === requiredNum || arr[i] === requiredNum;
      }
      if (arr[i] === requiredNum) {
        containsRequiredNum = true;
      }
    } else {
      if (currentLen > maxLen && containsRequiredNum) {
        maxLen = currentLen;
        maxStart = currentStart;
        maxSequences = [[maxStart, maxLen]];
      } else if (currentLen === maxLen && containsRequiredNum) {
        maxSequences.push([currentStart, currentLen]);
      }
      currentStart = i;
      currentLen = 1;
      direction = 0;
      containsRequiredNum = arr[i] === requiredNum;
    }
  }

  if (currentLen > maxLen && containsRequiredNum) {
    maxLen = currentLen;
    maxStart = currentStart;
    maxSequences = [[maxStart, maxLen]];
  } else if (currentLen === maxLen && containsRequiredNum) {
    maxSequences.push([currentStart, currentLen]);
  }

  if (maxSequences.length > 0) {
    const firstMaxSequence = maxSequences[0];

    if (requiredNum !== null) {
      let sequenceContainsRequiredNum = false;
      for (let i = firstMaxSequence[0]; i < firstMaxSequence[0] + firstMaxSequence[1]; i++) {
        if (arr[i] === requiredNum) {
          sequenceContainsRequiredNum = true;
          break;
        }
      }

      if (sequenceContainsRequiredNum) {
        return firstMaxSequence;
      } else {
        return [0, 0];
      }
    }

    return firstMaxSequence;
  }

  return [0, 0];
}

console.log(findLongestConsecutiveRange([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 2, 5)); // [0, 5]
console.log(findLongestConsecutiveRange([10, 20, 30, 40, 25, 15, 5, -5], 10, 25)); // [4, 4]
console.log(findLongestConsecutiveRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 5)); // [0, 9]
console.log(findLongestConsecutiveRange([100, 90, 80, 70, 60, 50, 40], 10, 60)); // [0, 9]
console.log(findLongestConsecutiveRange([10, 20, 30, 40, 50], 10, 35)); // [-1, 1] (35 not present)
console.log(findLongestConsecutiveRange([5, 10, 15, 20, 25, 30, 35], 5, 20)); // [0, 7]
console.log(findLongestConsecutiveRange([3, 6, 9, 12, 15], 3, 9)); // [0, 5]
