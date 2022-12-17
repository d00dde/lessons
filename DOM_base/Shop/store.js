const storage = {
    products: [],
};

export const store = {
    set: (key, value) => {
        storage[key] = value;
        console.log(storage)
    },
    get: (name) => {
        return storage[name];
    }
};

