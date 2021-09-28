const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it('responds with "Hello world!"', (done) => {
        request(app).get('/').expect(json({message: 'Hello world!'}), done)
    })
})

describe('GET /users', () => {
    it('responds with "No user in the system"', (done) => {
        request(app).get('/users').expect('No user in the system', done)
    })
})