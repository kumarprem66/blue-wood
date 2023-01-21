var removeElement = function(nums, val) {
    let count = 0;
     for(let i=0;i<nums.length;i++){
         if(nums[i]==val){
             nums[i] = "-";
         }
     }
     return nums;
};

let arr = [0,1,2,2,3,0,4,2];
let res = removeElement(arr,2);
console.log(res); 