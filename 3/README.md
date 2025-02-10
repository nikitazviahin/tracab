## Answers
### 3.1

```
/**
 * Eliminate any duplicate numbers in provided array
 * and return only distinct values in the same order.
 *
 * Example:
 * eliminateDuplicates([1, 2, 2, 3, 4, 4, 4, 5]) === [1, 2, 3, 4, 5]
 */
function eliminateDuplicates(arrayOfNumbers) {
  const deduplicated = [];
  arrayOfNumbers.forEach((number) => {
    if (deduplicated.indexOf(number) < 0) {
      deduplicated.push(number);
    }
  });
  return deduplicated;
}
```

### The main problem with this code is the usage of indexOf method inside a loop. Under the hood, indexOf uses the linear search, which has O(n) in worst case scenario. Therefore we get O(n + m) time complexity for the algorithm where n is the size of deduplicated and m is the size of arrayOfNumbers. In case of big amounts of data, we will have performance issues. One way to get rid of this problem is to find alternative for the usage of indexOf. In JS we can use Set() for this purpose. The method set.has() is of O(1) time complexity, but has O(n) space complexity. Therefore we lose in space complexity to get rid of nested (quadratic in our case) computations, which will be more necessary in most cases.

```
function eliminateDuplicates(arrayOfNumbers) {
  const deduplicated = [];
  const alreadyAdded = new Set();

  arrayOfNumbers.forEach(number => {
    if (!alreadyAdded.has(number)) {
      deduplicated.push(number);
      alreadyAdded.add(number);
    }
  });

  return deduplicated;
}
```

### 3.2

```
/**
 * Replace a part of the text in string at range [from-to]
 * with replacement text.
 *
 * Example:
 * replaceText('hello', 2, 3, 'world') === 'heworldlo'
 */
function replaceText(text, from, to, replacement) {
  return text.substring(0, from) + replacement + text.substring(to);
}
```

### The main logic of this code snippet seems correct to me. Nevertheless, there are potential problems related to parameters validation. In case when we get empty parameters, malformed parameters or parameters outside of range of our string indexes, we may have unexpected result and bugs. To get rid of it we can just add the validation for the parameters and error handling.

```
function replaceText(text, from, to, replacement) {
  if (from < 0 || to < 0 || from >= text.length || to > text.length || from > to) {
    throw new Error('Invalid range');
  }

  return text.substring(0, from) + replacement + text.substring(to);
}
```