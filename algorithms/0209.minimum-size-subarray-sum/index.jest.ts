import { minSubArrayLen } from '.';

console.info(1, [1]);
console.info('-->>', minSubArrayLen(1, [1]), '\n');

console.info(2, [1]);
console.info('-->>', minSubArrayLen(2, [1]), '\n');

console.info(4, [1, 1, 1, 1, 2, 2]);
console.info('-->>', minSubArrayLen(4, [1, 1, 1, 1]), '\n');

console.info(7, [1, 1, 1, 1]);
console.info('-->>', minSubArrayLen(7, [1, 1, 1, 1]), '\n');

console.info(7, [2, 3, 1, 2, 5, 3]);
console.info('-->>', minSubArrayLen(7, [2, 3, 1, 2, 5, 3]), '\n');

console.info(9, [9, 3, 1, 2, 8, 3]);
console.info('-->>', minSubArrayLen(9, [9, 3, 1, 2, 8, 3]), '\n');

console.info(9, [1, 3, 1, 2, 8, 3, 9]);
console.info('-->>', minSubArrayLen(9, [1, 3, 1, 2, 8, 3, 9]), '\n');

console.info(2, [1, 4, 5, 6, 7, 8, 9]);
console.info('-->>', minSubArrayLen(2, [1, 4, 5, 6, 7, 8, 9]), '\n');
