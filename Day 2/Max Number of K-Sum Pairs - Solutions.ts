// 2 pass, O(2n) time, O(n) space

function maxOperations(nums: number[], k: number): number {
    const a = {}
    let opt = 0
    for(let i=0; i<nums.length; i++){
        a[nums[i]] ? a[nums[i]] +=1 : a[nums[i]] = 1 
    }
    for(let i=0; i<nums.length; i++){
        a[nums[i]] -=1
        if(a[nums[i]] >=0 && a[k - nums[i]]>0){
            opt++
            a[k - nums[i]] -=1
        }  
    }
    return opt
};


// can this be done in single pass??

function best(nums: number[], k: number): number {
    const a = {}
    let opt = 0
    for(let i=0; i<nums.length; i++){
        if(a[k - nums[i]]>0){
            opt++
            a[k - nums[i]] -=1
            a[nums[i]] ? a[nums[i]] -=1 : a[nums[i]] = -1
        }
        a[nums[i]] ? a[nums[i]] +=1 : a[nums[i]] = 1
    }
    return opt
}