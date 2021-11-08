function rotateAnArray(array , k){
    if(array.length === 0){
        return null
    }
    if(array.length === 1){
        return array;
    }
    
const rotatedArray = new Array(array.length).fill(0);
    
 for(let i = 0; i< array.length; i++){
   const index = (i+k)%array.length;
   rotatedArray[index] = array[i];
 }

return "["+rotatedArray+"]"


}

const nums = [1, 2, 3, 4, 5]
console.log("expected [4,5,1,2,3]----"+ rotateAnArray(nums , 2));

const nums1 = [1, 2, 3, 4, 5]
console.log("expected [5,1,2,3,4]----"+ rotateAnArray(nums1 , 1));

const nums2 =[];
console.log("expected null ---"+rotateAnArray(nums2, 2));

const nums3 =[1];
console.log("expected 1 ---"+rotateAnArray(nums3, 2));