const net = require("net");
const files = require("./files.js");

const PORT = 8080;

const server = net.createServer(socket => {
  socket.on("data", chunk => {
    // read incoming data
    // console.log("data");
    // parse the string
    // grab the right file
    const get = chunk.toString().split("\n")[0];
    console.log(get);
    // const getUpdate =
    //   chunk.toString().split("/")[0] + chunk.toString().splice();
    // console.log(getUpdate);

    // write outgoing data
    if (get.includes("GET / ")) {
      console.log(
        `HTTP/1.1 200 OK \nServer: nginx/1.4.6 (Ubuntu)\nDate: Wed, 08 Jul 2020 22:31:15 GMT\nContent-Type: text/html: charset=utf-8\nContent-Length: ${
          files.index.length
        }\nConnection: keep-alive\n\n${files.index}`
      );
      socket.write(
        `HTTP/1.1 200 OK \nServer: nginx/1.4.6 (Ubuntu)\nDate: Wed, 08 Jul 2020 22:31:15 GMT\nContent-Type: text/html: charset=utf-8\nContent-Length: ${
          files.index.length
        }\nConnection: keep-alive\n\n${files.index}`
      );
      socket.end();
    } else if (get.includes("helium")) {
      socket.write(
        `HTTP/1.1 200 OK \nServer: nginx/1.4.6 (Ubuntu)\nDate: Wed, 08 Jul 2020 22:31:15 GMT\nContent-Type: text/html: charset=utf-8\nContent-Length: ${
          files.helium.length
        }\nConnection: keep-alive\n\n${files.helium}`
      );
      socket.end();
    } else if (get.includes("hydrogen")) {
      socket.write(
        `HTTP/1.1 200 OK \nServer: nginx/1.4.6 (Ubuntu)\nDate: Wed, 08 Jul 2020 22:31:15 GMT\nContent-Type: text/html: charset=utf-8\nContent-Length: ${
          files.hydrogen.length
        }\nConnection: keep-alive\n\n${files.hydrogen}`
      );
      socket.end();
    } else if (get.includes("css")) {
      socket.write(
        `HTTP/1.1 200 OK \nServer: nginx/1.4.6 (Ubuntu)\nDate: Wed, 08 Jul 2020 22:31:15 GMT\nContent-Type: css/html: charset=utf-8\nContent-Length: ${
          files.styles.length
        }\nConnection: keep-alive\n\n${files.styles}`
      );
      socket.end();
    } else {
      socket.write(
        `HTTP/1.1 200 OK \nServer: nginx/1.4.6 (Ubuntu)\nDate: Wed, 08 Jul 2020 22:31:15 GMT\nContent-Type: text/html: charset=utf-8\nContent-Length: ${
          files._404.length
        }\nConnection: keep-alive\n\n${files._404}`
      );
      socket.end();
    }
  });

  socket.on("end", () => {
    // handle client disconnect
  });

  socket.on("error", err => {
    // handle error in connection
    if (err) {
      console.log("Error with connection");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
