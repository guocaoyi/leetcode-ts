import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { threeSum } from "./index.ts";

log.info("15. 3 Sum");

Deno.test({
  name: `
  Given array nums = [-1, -1, -1, -1, -1, 2]

  A solution set is:
  [
    [-1, -1, 2]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-1, -1, -1, -1, -1, 2]);
    asserts.assertEquals(result, [[-1, -1, 2]]);
  },
});

Deno.test({
  name: `
  Given array nums = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, -1, 2],
    [-1, 0, 1]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-1, 0, 1, 2, -1, -4]);
    asserts.assertEquals(result, [
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  },
});

Deno.test({
  name: `
  Given array nums = [-5, 3, 1, 2, 1, 4],

  A solution set is:
  [
    [-5, 1, 4],
    [-5, 2, 3],
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-5, 3, 1, 2, 1, 4]);
    asserts.assertEquals(result, [
      [-5, 1, 4],
      [-5, 2, 3],
    ]);
  },
});

Deno.test({
  name: `
  Given array nums = [[-15,1,14],[-15,13,2],[-15,12,3],[-15,10,5],[-15,6,9],[-15,7,8],[-14,0,14],[-14,1,13],[-14,12,2],[-14,10,4],[-14,5,9],[-14,6,8],[-14,7,7],[-1,-13,14],[-13,0,13],[-13,1,12],[-13,10,3],[-13,4,9],[-13,5,8],[-13,6,7],[-12,-2,14],[-1,-12,13],[-12,0,12],[-12,1,11],[-12,10,2],[-12,3,9],[-12,4,8],[-12,5,7],[-11,-3,14],[-11,-2,13],[-1,-11,12],[-11,0,11],[-11,1,10],[-11,2,9],[-11,3,8],[-11,4,7],[-11,5,6],[-10,-4,14],[-10,-3,13],[-10,-2,12],[-1,-10,11],[-10,0,10],[-10,1,9],[-10,2,8],[-10,3,7],[-10,4,6],[-10,5,5],[-5,-9,14],[-4,-9,13],[-3,-9,12],[-2,-9,11],[-1,-9,10],[-9,0,9],[-9,1,8],[-9,2,7],[-9,3,6],[-9,4,5],[-6,-8,14],[-5,-8,13],[-4,-8,12],[-3,-8,11],[-2,-8,10],[-1,-8,9],[-8,0,8],[-8,1,7],[-8,2,6],[-8,3,5],[-8,4,4],[-7,-7,14],[-6,-7,13],[-5,-7,12],[-4,-7,11],[-3,-7,10],[-2,-7,9],[-1,-7,8],[-7,0,7],[-7,1,6],[-7,2,5],[-7,3,4],[-6,-6,12],[-5,-6,11],[-4,-6,10],[-3,-6,9],[-2,-6,8],[-1,-6,7],[-6,0,6],[-6,1,5],[-6,2,4],[-6,3,3],[-5,-5,10],[-4,-5,9],[-3,-5,8],[-2,-5,7],[-1,-5,6],[-5,0,5],[-5,1,4],[-5,2,3],[-4,-4,8],[-3,-4,7],[-2,-4,6],[-1,-4,5],[-4,0,4],[-4,1,3],[-4,2,2],[-3,-3,6],[-2,-3,5],[-1,-3,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-1,-2,3],[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]],

  A solution set is:
  [
    [-5, 2, 3],
    [-5, 1, 4]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([
      -13,
      5,
      13,
      12,
      -2,
      -11,
      -1,
      12,
      -3,
      0,
      -3,
      -7,
      -7,
      -5,
      -3,
      -15,
      -2,
      14,
      14,
      13,
      6,
      -11,
      -11,
      5,
      -15,
      -14,
      5,
      -5,
      -2,
      0,
      3,
      -8,
      -10,
      -7,
      11,
      -5,
      -10,
      -5,
      -7,
      -6,
      2,
      5,
      3,
      2,
      7,
      7,
      3,
      -10,
      -2,
      2,
      -12,
      -11,
      -1,
      14,
      10,
      -9,
      -15,
      -8,
      -7,
      -9,
      7,
      3,
      -2,
      5,
      11,
      -13,
      -15,
      8,
      -3,
      -7,
      -12,
      7,
      5,
      -2,
      -6,
      -3,
      -10,
      4,
      2,
      -5,
      14,
      -3,
      -1,
      -10,
      -3,
      -14,
      -4,
      -3,
      -7,
      -4,
      3,
      8,
      14,
      9,
      -2,
      10,
      11,
      -10,
      -4,
      -15,
      -9,
      -1,
      -1,
      3,
      4,
      1,
      8,
      1,
    ]);
    asserts.assertEquals(result, [
      [-15, 1, 14],
      [-15, 2, 13],
      [-15, 3, 12],
      [-15, 4, 11],
      [-15, 5, 10],
      [-15, 6, 9],
      [-15, 7, 8],
      [-14, 0, 14],
      [-14, 1, 13],
      [-14, 2, 12],
      [-14, 3, 11],
      [-14, 4, 10],
      [-14, 5, 9],
      [-14, 6, 8],
      [-14, 7, 7],
      [-13, -1, 14],
      [-13, 0, 13],
      [-13, 1, 12],
      [-13, 2, 11],
      [-13, 3, 10],
      [-13, 4, 9],
      [-13, 5, 8],
      [-13, 6, 7],
      [-12, -2, 14],
      [-12, -1, 13],
      [-12, 0, 12],
      [-12, 1, 11],
      [-12, 2, 10],
      [-12, 3, 9],
      [-12, 4, 8],
      [-12, 5, 7],
      [-11, -3, 14],
      [-11, -2, 13],
      [-11, -1, 12],
      [-11, 0, 11],
      [-11, 1, 10],
      [-11, 2, 9],
      [-11, 3, 8],
      [-11, 4, 7],
      [-11, 5, 6],
      [-10, -4, 14],
      [-10, -3, 13],
      [-10, -2, 12],
      [-10, -1, 11],
      [-10, 0, 10],
      [-10, 1, 9],
      [-10, 2, 8],
      [-10, 3, 7],
      [-10, 4, 6],
      [-10, 5, 5],
      [-9, -5, 14],
      [-9, -4, 13],
      [-9, -3, 12],
      [-9, -2, 11],
      [-9, -1, 10],
      [-9, 0, 9],
      [-9, 1, 8],
      [-9, 2, 7],
      [-9, 3, 6],
      [-9, 4, 5],
      [-8, -6, 14],
      [-8, -5, 13],
      [-8, -4, 12],
      [-8, -3, 11],
      [-8, -2, 10],
      [-8, -1, 9],
      [-8, 0, 8],
      [-8, 1, 7],
      [-8, 2, 6],
      [-8, 3, 5],
      [-8, 4, 4],
      [-7, -7, 14],
      [-7, -6, 13],
      [-7, -5, 12],
      [-7, -4, 11],
      [-7, -3, 10],
      [-7, -2, 9],
      [-7, -1, 8],
      [-7, 0, 7],
      [-7, 1, 6],
      [-7, 2, 5],
      [-7, 3, 4],
      [-6, -6, 12],
      [-6, -5, 11],
      [-6, -4, 10],
      [-6, -3, 9],
      [-6, -2, 8],
      [-6, -1, 7],
      [-6, 0, 6],
      [-6, 1, 5],
      [-6, 2, 4],
      [-6, 3, 3],
      [-5, -5, 10],
      [-5, -4, 9],
      [-5, -3, 8],
      [-5, -2, 7],
      [-5, -1, 6],
      [-5, 0, 5],
      [-5, 1, 4],
      [-5, 2, 3],
      [-4, -4, 8],
      [-4, -3, 7],
      [-4, -2, 6],
      [-4, -1, 5],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-3, -3, 6],
      [-3, -2, 5],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -2, 4],
      [-2, -1, 3],
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  },
});

// run with the --allow-read or --allow-all flag
// Deno.test({
//   name: `
//   Given array nums = [82597,-9243,62390,83030,-97960,-26521...] (3000)

//   A solution set is:
//   [
//     [ -99927, 2246, 97681 ], [ -99927, 12687, 87240 ], [ -99927, 14861, 85066 ],
//     [ -99927, 17307, 82620 ], [ -99927, 24208, 75719 ], [ -99927, 25014, 74913 ],
//     [ -99927, 27134, 72793 ], [ -99927, 33447, 66480 ], [ -99927, 37446, 62481 ],
//     [ -99927, 40680, 59247 ], [ -99851, 10093, 89758 ], [ -99851, 11474, 88377 ],
//     [ -99851, 13483, 86368 ], [ -99851, 14367, 85484 ], [ -99851, 14848, 85003 ],
//     [ -99851, 16659, 83192 ], [ -99851, 21412, 78439 ], [ -99851, 21779, 78072 ],
//     [ -99851, 28095, 71756 ], [ -99851, 33686, 66165 ], [ -99851, 34153, 65698 ],
//     [ -99851, 35241, 64610 ], [ -99851, 35368, 64483 ], [ -99851, 39726, 60125 ],
//     [ -99851, 40887, 58964 ], [ -99851, 42518, 57333 ], [ -99851, 48050, 51801 ],
//     [ -99822, 21, 99801 ], [ -99822, 12582, 87240 ], [ -99822, 12741, 87081 ],
//     [ -99822, 13200, 86622 ], [ -99822, 28007, 71815 ], [ -99822, 34348, 65474 ],
//     [ -99822, 34557, 65265 ], [ -99822, 35805, 64017 ], [ -99822, 36095, 63727 ],
//     [ -99822, 46773, 53049 ], [ -99637, 4508, 95129 ], [ -99637, 11276, 88361 ],
//     [ -99637, 21395, 78242 ], [ -99637, 21638, 77999 ], [ -99637, 32506, 67131 ],
//     [ -99637, 37179, 62458 ], [ -99637, 37906, 61731 ], [ -99637, 39522, 60115 ],
//     [ -99637, 49277, 50360 ], [ -99583, 46, 99537 ], [ -99583, 6822, 92761 ],
//     [ -99583, 8838, 90745 ], [ -99583, 12642, 86941 ], [ -99583, 18593, 80990 ],
//     [ -99583, 26585, 72998 ], [ -99583, 32289, 67294 ], [ -99583, 33132, 66451 ],
//     [ -99583, 34323, 65260 ], [ -99583, 37179, 62404 ], [ -99583, 40699, 58884 ],
//     [ -99583, 41704, 57879 ], [ -99583, 44727, 54856 ], [ -99583, 49088, 50495 ],
//     [ -99555, 2099, 97456 ], [ -99555, 10151, 89404 ], [ -99555, 13033, 86522 ],
//     [ -99555, 19553, 80002 ], [ -99555, 20497, 79058 ], [ -99555, 22451, 77104 ],
//     [ -99555, 31349, 68206 ], [ -99555, 31495, 68060 ], [ -99555, 32138, 67417 ],
//     [ -99555, 34102, 65453 ], [ -99555, 39105, 60450 ], [ -99555, 40551, 59004 ],
//     [ -99555, 46482, 53073 ], [ -99525, 1897, 97628 ], [ -99525, 8990, 90535 ],
//     [ -99525, 9541, 89984 ], [ -99525, 23552, 75973 ], [ -99525, 31015, 68510 ],
//     [ -99525, 31679, 67846 ], [ -99525, 34312, 65213 ], [ -99525, 35041, 64484 ],
//     [ -99525, 35845, 63680 ], [ -99525, 37179, 62346 ], [ -99525, 44249, 55276 ],
//     [ -99525, 48049, 51476 ], [ -99524, -394, 99918 ], [ -99524, 6184, 93340 ],
//     [ -99524, 9612, 89912 ], [ -99524, 22062, 77462 ], [ -99524, 25327, 74197 ],
//     [ -99524, 33686, 65838 ], [ -99524, 34311, 65213 ], [ -99524, 35041, 64483 ],
//     [ -99524, 41779, 57745 ], [ -99524, 43457, 56067 ], [ -99524, 43770, 55754 ],
//     [ -99524, 46475, 53049 ], [ -99524, 46991, 52533 ], [ -99508, 3649, 95859 ],
//     [ -99508, 5852, 93656 ],
//     ... 16158 more items
//   ]
//   `,
//   fn(): void {
//     const data = rj.readJsonSync(path.join("./", "mock.json"));
//     const result: number[][] = threeSum(data as number[]);
//     const std_result = rj.readJsonSync(path.join("./", "mock_result.json"));
//     asserts.assertEquals(
//       result,
//       std_result,
//     );
//   },
// });
