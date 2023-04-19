import http from "node:http";

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>anasayfa</h2>")
  } else if (url === "/iletisim"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>iletisim</h2>")
  } else if (url === "/hakkimda"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>hakkimda sayfasi</h2>")
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write("<h2>404 sayfa bulunmadi</h2>")
  }
  console.log("istek gönderildi");
  res.end();
});

const port = 5001;

server.listen(port, () => {
  console.log(`sunucu port ${port} de başlatildi`);
});
