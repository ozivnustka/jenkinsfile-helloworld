const Koa = require('koa');
const Router = require('koa-router');
const db = require('./database')

const router = new Router();
const app = new Koa();

router.get('/users', async (ctx) => {
  const users = await db.sequelize.models.user.findAll()
  ctx.body = users
});

router.get('/', (ctx) => {
  ctx.body = {
    hi: 'Hello World'
  }
});

app.use(router.routes())

app.start = async () => {
  app.server = app.listen(3000)
}

if (require.main === module) {
  app.start()
}

module.exports = app
