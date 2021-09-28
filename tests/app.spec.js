const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it('responds with "Hello world!"', (done) => {
        request(app).get('/').expect({"message":"Hello world!"}, done)
    })
})