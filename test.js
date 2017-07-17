const supertest = require('supertest')
const expect = require('chai').expect
const app = require('./app')
const db = require('./database')

describe('All tests', () => {
  let agent

  before(async () => {
    await db.sequelize.sync({force: true})
    await app.start()
    agent = supertest(app.server)
  })

  describe('HTTP: GET /', () => {
    it('Get Hello World', async () => {
      const response = await agent.get('/')
      expect(response.body.hi).to.eql('Hello World')
    })
  })

  describe('HTTP: GET /users', () => {
    it('Get Users', async () => {


      console.log(db.sequelize.models)

      await db.sequelize.models.user.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
      })

      await db.sequelize.models.user.create({
        username: 'tony',
        birthday: new Date(1989, 6, 20)
      })

      const response = await agent.get('/users')
      expect(response.body.length).to.eql(2)
    })
  })

})