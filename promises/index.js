try {
  const data = await fetch_1("https://63664aa3046eddf1bafce140.mockapi.io/api/v1/goods", {
    method: "GET",
    body: {
      createdAt: "2022-12-09T11:51:02.071Z",
      description: "description 19++",
      id: "19",
      mainImage: "mainImage 19++",
      price: 69,
      title: "title 19",
    },
    headers: {

    }
  });
  console.log(data);
} catch (err){
//  console.log(err)
}
console.log("lol")

//
// fetch("https://63664aa3046eddf1bafce140.mockapi.io/api/v1/goods")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));


function fetch_1(url, options = {}) {
  const succesStatuses = [200, 201];
  const method = options.method ?? "GET";
  const body = options.body ?? {};
  const headers = options.headers ?? {};
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  
  return new Promise((resolve, reject) => {
    xhr.addEventListener("load", (resp) => {
      if (succesStatuses.includes(xhr.status)) {
        resolve(JSON.parse(resp.target.responseText));
      }
      else {
        reject(`Error: ${resp.target.statusText}`);
      }
    });
    xhr.addEventListener("error", (err) => {
      reject(`Invoke terrible error: ${err}`);
    });
    xhr.send(JSON.stringify(body));
  })
}

