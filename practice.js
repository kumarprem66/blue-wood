var distinctAverages = function(nums) {
    let count = [];
    while(nums.length>0){
        let min = Infinity;
        let max = -Infinity;

        for(let i=0;i<nums.length;i++){
            if(nums[i]>max){
                max = nums[i];
            }
            if(nums[i]<min){
                min = nums[i];
            }
        }

        let M = nums.indexOf(max);
        
        let m = nums.indexOf(min);
        if(max!=min){
            nums.splice(M,1);
            nums.splice(m,1);

        }else{
            nums.splice(m,1);
        }
        // if(M>-1){
            // nums.splice(M,1);
        // }
        // if(m>-1){
            // nums.splice(m,1);
        // }
       
        console.log(min,max);
        console.log(nums);
        console.log("M "+M +", m "+m)
        let avg = (max+min)/2;

       if(!count.includes(avg)){
        count.push(avg);
       }
        
        if(nums.length==1){
            break;
        }

    }
    return count.length;
     
};

let arr = [4,1,4,0,3,5];
let res = distinctAverages(arr);
console.log(res);