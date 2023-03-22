const intersection = function(nums1, nums2) {
    let map1=new Map(),map2=new Map(),res=[]
    for(let n of nums1){
        if(map1.has(n)) map1.set(n,map1.get(n)+1)
        else map1.set(n,1)
    }
    for(let n of nums2){
        if(map2.has(n)) map2.set(n,map2.get(n)+1)
        else map2.set(n,1)
    }
    console.log(map1,map2)
    if(map1.size<map2.size){
        for(let [key,value] of map1){
            if(map2.has(key)) res.push(key)
        }
    }else{
        for(let [key,value] of map2){
            if(map1.has(key)) res.push(key)
        }
    }
    return res
};
console.log(intersection([1,2,2,1],[2,2]))