
// const resp = await fetch("https://63664aa3046eddf1bafce140.mockapi.io/api/v1/goods");
// const data = await resp.json();
// console.log(data);
//
// fetch("https://63664aa3046eddf1bafce140.mockapi.io/api/v1/goods")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://63664aa3046eddf1bafce140.mockapi.io/api/v1/goods");

xhr.addEventListener("load", (resp) => {
  if (xhr.status === 200) {
    console.log(JSON.parse(resp.target.responseText));
  }
  else {
    console.log(`Error: ${resp.target.statusText}`);
  }
});

xhr.addEventListener("error", (err) => {
  console.log(`Invoke terrible error: ${err}`);
});

xhr.send();


function fetch_1(url) {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        json: () => {
          return new Promise((res_1) => {
            res_1(1323)
          })
        }
      });
    }, 200)
  })
}
