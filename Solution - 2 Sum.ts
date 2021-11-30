// brute force
// requires O(n^2) time, O(1) space
const bruteForce = function (nums: number[], target:number) :number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target)
                return [i, j];
        }
    }
    return null
};

// optimization using hash map
// requires O(n) time, O(n) space

const optimization = function (nums: number[], target:number) :number[] {
    let a = {}
    nums.map((val,idx)=>{
        a[val] = idx
    })
    for (let i = 0; i < nums.length; i++) {
        let compl = target - nums[i]
        if (a[compl] && a[compl] !== i)
            return [i, a[compl]];
    }    
    return null
}


// best pass
// requires O(n) time, O(1) space

const bestSoln = function (nums: number[], target:number) :number[] {
    let a = {}
    for (let i = 0; i < nums.length; i++) {
        let compl = target - nums[i]
        if (a[compl] >= 0)
            return [i, a[compl]];
        a[nums[i]] = i
    }  
    return null
}