/**
 * Two Sum
 * Given an array of integers, return indices of the two numbers such that 
 * they add up to a specific target.You may assume that each input would have 
 * exactly one solution,and you may not use the same element twice.
 * @param 
 *  nums = [2, 7, 11, 15], target = 9,
 *  nums[0] + nums[1] = 2 + 7 = 9,
 * @return [0, 1].
 */
class TowSum {

    /**
     * 方案一：两次列表遍历
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    onTwiceBubble = (nums, target) => {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j]
                }
            }
        }
    }

    /**
    * 方案二：两次哈希遍历
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
    onTwiceIteratorHash = (nums, target) => {
        const map = {};
        const length = nums.length;
        // 使用Array.forEach在性能上会有点损耗(测试用例:61ms到59ms)
        for (let i = 0; i < length; i++) {
            map[nums[i]] = i;
        }
        for (let i = 0; i < length; i++) {
            const x = target - nums[i];
            if (x in map && map[x] != i) {
                return [i, map[x]]
            }
        }
    }

    /**
     * 方案三：一次哈希遍历
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]} 
     */
    onIteratorHash = (nums, target) => {
        const map = {};
        const length = nums.length;
        for (let i = 0; i < length; i++) {
            const x = target - nums[i];
            if (x in map && map[x] != i) {
                return [map[x], i]
            }
            map[nums[i]] = i;
        }
    }

}
