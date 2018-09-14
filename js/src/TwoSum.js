/**
 * 方案一：两次列表遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

/**
* 方案二：两次哈希遍历
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = function(nums, target) {
    const map = {};
    nums.forEach((i, k) => map[i] = k);
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (x in map && map[x] != i) {
            return [i, map[x]]
        }
    }
};

/**
* 方案二：两次哈希遍历(优化)
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = function(nums, target) {
    const map = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < length; i++) {
        const x = target - nums[i];
        if (x in map && map[x] != i) {
            return [i, map[x]]
        }
    }
};

/**
 * 方案三：一次哈希遍历(优化)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */
const twoSum = function(nums, target) {
    const map = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const x = target - nums[i];
        if (x in map && map[x] != i) {
            return [map[x], i]
        }
        map[nums[i]] = i;
    }
};