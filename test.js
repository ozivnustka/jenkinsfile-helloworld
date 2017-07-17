const supertest = require('supertest')
const expect = require('chai').expect
const app = require('./app')

describe('Hello World', () => {
  let agent

  before(async () => {
    await app.start()
    agent = supertest(app.server)
  })

  describe('HTTP: GET /', () => {
    it('Get Hello World', async () => {
      const response = await agent.get('/')
      expect(response.body.hi).to.eql('Hello World')
    })
  })

})