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
    return item > 100;
})

const users = [
    { name: "lol", age: 5, height: 158, gender: "male" },
    { name: "vas", age: 15, height: 178, gender: "male" },
    { name: "top", age: 18, height: 128, gender: "female" },
    { name: "frt", age: 27, height: 108, gender: "male" },
    { name: "ewq", age: 14, height: 198, gender: "female" },
    { name: "vvbgh", age: 10, height: 148, gender: "male" },
    { name: "sdfs", age: 12, height: 138, gender: "male" },
    { name: "sdfsf", age: 8, height: 188, gender: "female" },
];

const heightStudy = users.filter((user, index, arr) => {
    return user.height > 140;
});

const htmlUsers = users.map((user) => {
    return `
        <div class="card ${user.gender}">
          <h2>${user.name}</h2>
          <p>age: ${user.age}</p>
          <p>height: ${user.height}</p>
        </div>
    `;
});

document.body.insertAdjacentHTML("beforeend", htmlUsers.join(""));

console.log(users.map((user) => user.name));



