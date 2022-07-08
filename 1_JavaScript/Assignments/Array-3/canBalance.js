function canBalance(nums){
    first = 0;
    second = 0;
      
    for(i = 0; i < nums.length; i++)
        second += nums[i];
              
    for(i = 0; i <= nums.length - 2; i++) {
        first += nums[i];
        second -= nums[i];
                            
        if(first == second)
            return true;
    }
                                          
    return false;
}

let a = canBalance([1, 1, 1, 2, 1]); //→ true
let b = canBalance([2, 1, 1, 2, 1]); //→ false
let c = canBalance([10, 10]); //→ true

console.log(a);
console.log(b);
console.log(c);