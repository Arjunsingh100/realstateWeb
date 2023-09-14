let arr = [1, 3, 3, 4, 2, 2, 0, 0, 6, 7, 7, 6, 6, 5];
function duplicate(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i]);
        for (let j = 0; j < newarr.length; j++) {
            if (arr[i] === newarr[j]) {
                newarr.pop(newarr[j]);
            }

        }
    }
    return newarr;
}
let result=duplicate(arr);
console.log(result);