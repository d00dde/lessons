const arr_1 = [1, 2, 4, 5, 6];

function forEach (arr, cb) {
    for ( let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

function logger (item, idx, arr) {
    console.log (item, " ", idx, arr);
}

forEach (arr_1, logger);
arr_1.forEach(logger)
