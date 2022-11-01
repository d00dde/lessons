function map (arr, cb){
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        result[i] = cb(arr[i], i, arr)
    }
    return result
}


const source = [99, 109, 5676, 999, 13];
const mapArr = map(source, (item, index, arr) => {
    return `${item} ${index} [${arr}]`;
})


function filter (arr, cb) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}

const filterArr = filter(source, (item, index, arr) => {
    return item>100
})
console.log(filterArr)