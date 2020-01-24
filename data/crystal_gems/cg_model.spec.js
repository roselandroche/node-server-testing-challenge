const db = require('../config')
const cgModel = require('./cg_model')

beforeEach(async () => {
    await db.seed.run()
})

describe('cgModel', () => {
    test('list', async () => {
        const res = await cgModel.list()
        expect(res).toHaveLength(4)
        expect(res[0].name).toBe('Garnet')
    })
    test('findById', async () => {
        const res = await cgModel.findById(1)
        expect(res.name).toBe('Garnet')
        expect(res.id).toBe(1)
    })
    test('insert', async () => {
        await cgModel.insert({ name: 'Lapis Lazuli' })
        const added = await cgModel.list()
        expect(added).toHaveLength(5)
        expect(added[4].name).toBe('Lapis Lazuli')
    })
    test('remove', async () => {
        await cgModel.remove(1)
        const gems = await cgModel.list()
        expect(gems).toHaveLength(3)
        console.log(gems)
    })
})