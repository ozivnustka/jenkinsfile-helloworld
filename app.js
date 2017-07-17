const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = {
    hi: 'Hello World'
  }
})


app.start = async () => {
  app.server = app.listen(3000)
}

if (require.main === module) {
  app.start()
}

module.exports = app
