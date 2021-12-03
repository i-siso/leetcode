// time complexity O(n), space O(1)
// since the array will be of length n, total sum is n(n+1)/2, and to find
// missing number, we simple substract the array sum from the total sum
// combining the total - sum, we get  sum += i+1-nums[i]

function missingNumber(nums: number[]): number {
    let sum = 0
    for(let i=0; i<nums.length; i++){
        sum += i+1-nums[i]
    }
    return  sum
};