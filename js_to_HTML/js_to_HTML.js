const arr1 = [1, 2, 3, 4];
function ForEach (arr, cb) {
    for (let i=0; i<arr.length; i++) {
        cb (arr[i]);
    }
}
function logger (item) {
    console.log (item)
}
ForEach(arr1, logger)

console.log(1)