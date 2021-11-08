function reverseArray(array) {
    if(array.length === 0){
        return null;
    }
    if(array.length === 1){
        return array;
    }
    
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--

    }
    return array;
}

const nums = [1, 2, 3, 4, 5];
console.log("expected : 5,4,3,2,1---" + reverseArray(nums));

const nums1 = [];
console.log("expected : null----" + reverseArray(nums1));

const nums2 = [1];
console.log("expected : 1---" + reverseArray(nums2));