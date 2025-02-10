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