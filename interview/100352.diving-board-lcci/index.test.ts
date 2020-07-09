import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import {
  divingBoard as divingBoard1,
  divingBoard$1 as divingBoard,
} from "./index.ts";

log.info("面试题 16.11. Diving Board LCCI");

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 2
  k = 3
  Output:  {3,4,5,6}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 2, 3);
    asserts.assertEquals([3, 4, 5, 6], result);
  },
});

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 4
  k = 4
  Output:  {4,7,10,13,16}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 4, 4);
    asserts.assertEquals([4, 7, 10, 13, 16], result);
  },
});

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 4
  k = 10
  Output:  {10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 4, 10);
    asserts.assertEquals([10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40], result);
  },
});

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 20
  k = 10
  Output:  {10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 4, 10);
    asserts.assertEquals([10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40], result);
  },
});

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 1
  k = 6
  Output:  {6}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 1, 6);
    asserts.assertEquals([6], result);
  },
});

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 1
  k = 0
  Output:  {}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 1, 0);
    asserts.assertEquals([], result);
  },
});

Deno.test({
  name: `
  Input: 
  shorter = 1
  longer = 12
  k = 4
  Output:  {4,15,26,37,48}
  `,
  fn(): void {
    const result: number[] = divingBoard(1, 12, 4);
    asserts.assertEquals([4, 15, 26, 37, 48], result);
  },
});
