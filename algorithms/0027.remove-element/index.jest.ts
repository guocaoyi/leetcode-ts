import { removeElement } from '.';

let a: number[] = [];
let filter = 1;
let len = removeElement(a, filter);
console.info('-->', a, `filter ${filter}, ant len is ${len}\n`);

a = [0];
filter = 1;
len = removeElement(a, filter);
console.info('-->', a, `filter ${filter}, ant len is ${len}\n`);

a = [1];
filter = 1;
len = removeElement(a, filter);
console.info('-->', a, `filter ${filter}, ant len is ${len}\n`);

a = [1, 1, 1, 1, 1, 1];
filter = 1;
len = removeElement(a, filter);
console.info('-->', a, `filter ${filter}, ant len is ${len}\n`);

a = [1, 1, 1, 1, 1, 1, 1];
filter = 2;
len = removeElement(a, filter);
console.info('-->', a, `filter ${filter}, ant len is ${len}\n`);

a = [1, 2, 32, 4, 5, 6, 7, 8, 9];
filter = 32;
len = removeElement(a, filter);
console.info('-->', a, `filter ${filter}, ant len is ${len}\n`);
