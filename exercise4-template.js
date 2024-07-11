/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
    let output=[];
    let array_temp=[];
    let sum=0;
    let temp=0;
    for (let index = 0; index < arr.length-1; index++) {
        array_temp=[];
        temp=arr[index];
        array_temp.push(arr[index]);
        for (let i = index+1; i < arr.length; i++) {
            temp=temp+arr[i];
            array_temp.push(arr[i]);
            if (temp > sum){
                sum=temp;
                output=[];
                output.push(array_temp);
                output.push(sum);
            }
        }        
    }
    return output;
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
