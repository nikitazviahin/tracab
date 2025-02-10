## Answers
### 2. 1. The time complexity of this algorithm is O(n) as we do one iteration through the array without nested loops etc. All the other operations in the algorithm are O(n) or constants in terms of time complexity, but O(n) are not nested, therefore O(n) + O(n) + ... O(n) = O(n). Constants don't change the big o notation even if they are nested, therefore overall time complexity is O(n). The space complexity of this algorithm is O(n) due to necessity of storing the maxSequences values in array. As we have n elements in the array, in the worst case scenario we will have n elements in maxSequences array. That leaves us with:

 * Time complexity: O(n)
 * Space complexity: O(n)