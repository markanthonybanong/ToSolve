/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that 
 they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element
 twice.

 Input: nums = [7,11,15,2], target = 9
 Output: [0,1]
 Output: Because nums[0] + nums[1] == 9, we return [0, 1]. 
*/



function getIndices(numbers: number[], targetNum: number): number[]{
    const indices: number[] = [];
    let sumOfTwo: number    = 0;
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = index+1; index1 < numbers.length; index1++) {
            sumOfTwo = numbers[index] + numbers[index1];
            if(sumOfTwo === targetNum) {
                indices.push(index);
                indices.push(index1);
                break;
            }   
        }
        if(sumOfTwo === targetNum){
            break;
        }
   
    }
    return indices;
}

console.log(getIndices([7,11,15,2], 9));





