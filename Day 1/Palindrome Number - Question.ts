const brute = function(num: number) : boolean {
    if(num < 0)
        return false
    const arr = Array.from(String(num), Number)
    for(let i=0; i<arr.length/2; i++){
        if(arr[i] !== arr[arr.length-1-i])
            return false
    }
    return true
}