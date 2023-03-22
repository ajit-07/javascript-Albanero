const thirdMax = function(nums) {
    let fmax=-1*Infinity,smax=-1*Infinity,tmax=-1*Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i]>fmax){
            tmax=smax
            smax=fmax
            fmax=nums[i]
        }else if(nums[i]>smax && nums[i]!=fmax){
            tmax=smax
            smax=nums[i]
        }else if(nums[i]>tmax && nums[i]!=fmax && nums[i]!=smax){
            tmax=nums[i]
        }
    }
    console.log(fmax,smax,tmax)
    if(tmax==-1*Infinity){
        return fmax
    }else return tmax
};
console.log(thirdMax([3,2,1]))