function countClumps(nums){
    count = 0;
      i = 0;
        
      while(i < nums.length) {
          val = nums[i];
          i++;
          length = 1;
          while(i < nums.length && nums[i] == val) {
              i++;
              length++;
          }
                                              
          if(length > 1)
              count++;
      }
                                                            
      return count;
}

let a = countClumps([1, 2, 2, 3, 4, 4]); //→ 2
let b = countClumps([1, 1, 2, 1, 1]); //→ 2
let c = countClumps([1, 1, 1, 1, 1]); //→ 1

console.log(a);
console.log(b);
console.log(c);