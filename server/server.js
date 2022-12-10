const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.headers.accept.includes("json")) {
    fs.readFile('./index.html', (err, html) => {
      if (err) {
        res.statusCode = 505;
        res.end();
        throw err;
      }
      res.write(html);
      res.end();
    });
  } else {
    res.statusCode = 201;
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server started!");
});
