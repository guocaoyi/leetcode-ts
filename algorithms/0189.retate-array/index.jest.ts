import { rotate } from '.';

let nums: number[] = [1];
let k: number = 5;
console.info('-->', [1]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 0;
console.info('-->', [1, 2, 3, 4, 5]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 2;
console.info('-->', [4, 5, 1, 2, 3]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 4;
console.info('-->', [2, 3, 4, 5, 1]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 5;
console.info('-->', [1, 2, 3, 4, 5]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 7;
console.info('-->', [4, 5, 1, 2, 3]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 10;
console.info('-->', [1, 2, 3, 4, 5]);
console.info('-->', rotate(nums, k), '\n');

nums = [1, 2, 3, 4, 5];
k = 18;
console.info('-->', [3, 4, 5, 1, 2]);
console.info('-->', rotate(nums, k), '\n');
