/*

*/

function fix34(nums){
    i = 0;
    while(i < nums.length && nums[i] != 3)
        i++;
              
    j = i + 1;
                  
    while(j < nums.length && nums[j] != 4)
        j++;
                            
    while(i < nums.length) {
        if(nums[i] == 3) {
            temp = nums[i+1];
            nums[i+1] = nums[j];
            nums[j] = temp;
                                                          
            while(j < nums.length && nums[j] != 4)
                j++;
        }
        i++;
    }

    return nums;
}

let a = fix34([1, 3, 1, 4]); //→ 1,3,4,1
let b = fix34([1, 3, 1, 4, 4, 3, 1]); //→ 1,3,4,1,1,3,4
let c = fix34([3, 2, 2, 4]); //→ 3,4,2,2

console.log(a);
console.log(b);
console.log(c);