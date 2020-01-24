const supertest = require('supertest')
const server = require('./index')
const db = require('./data/config')

// beforeEach(async () => {
//     await db.seed.run()
// })

test('welcome route', async () => {
    const res = await supertest(server).get('/')
    // status code
    expect(res.status).toBe(200)
    // data format
    expect(res.type).toBe('application/json')
    // data
    expect(res.body.message).toBe('We are the Crystal Gems!')
})