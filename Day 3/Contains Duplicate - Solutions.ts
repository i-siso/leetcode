
function containsDuplicate(nums: number[]): boolean {
    const a ={}
    for(let i=0; i<nums.length; i++){
        if(a[nums[i]])
            return true
        a[nums[i]] = 1
    }
    return false
};