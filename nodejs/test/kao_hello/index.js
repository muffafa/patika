const Koa = require('koa');
const app = new Koa();
const port = 3000;

// response
app.use((ctx) => {
  if (ctx.path === "/") {
    ctx.body = "<h1>İndex sayfasina hoşgeldiniz</h1>";
  } else if (ctx.path === "/about") {
    ctx.body = "<h1>Hakkimda sayfasina hoşgeldiniz</h1>";
  } else if (ctx.path === "/contact") {
    ctx.body = "<h1>Iletisim sayfasina hoşgeldiniz</h1>";
  } 
});

app.on('error', (err, ctx) => {
    log.error('server error', err, ctx)
});

app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalişmaya başladi...`);
});