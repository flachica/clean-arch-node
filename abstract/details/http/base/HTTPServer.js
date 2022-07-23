const AnimalsAdapter = require('../../../../domain/animals/animalsAdapter')
const FruitsAdapter = require('../../../../domain/fruits/fruitsAdapter')

class HTTPServer {
    constructor(mode, entities, port) {
        this.mode = mode
        this.entities = entities
        this.port = port
    }
    
    addRoutes() {
        let validated = false
        if (this.entities.includes('animals')) {
            validated = true
            const animalsAdapter = new AnimalsAdapter(this.mode)
            this.httpServer.get('/animals', async function (request, response) {
                const result = await animalsAdapter.getAll(request)
                response.send(result)
            })
        }

        if (this.entities.includes('fruits')) {
            validated = true
            const fruitsAdapter = new FruitsAdapter(this.mode)
            this.httpServer.get('/fruits', async function (request, response) {
                const result = await fruitsAdapter.getAll(request)
                response.send(result)
            })
        }
        if (!validated) {
            throw new Error('You must include one entity to be served')
        }
    }

    async start() {
        this.addRoutes()
    }
}

module.exports = HTTPServer