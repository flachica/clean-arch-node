const HTTPServer = require('./base/HTTPServer')

class FastifyServer extends HTTPServer {
  constructor (mode, entities, port) {
    super(mode, entities, port)
    this.httpServer = require('fastify')({ logger: true })    
  }

  async start() {
    try {
      super.start()
      await this.httpServer.listen({ port: this.port })
      this.httpServer.log.info('Fastify Running')
    } catch (err) {
      this.httpServer.log.error(err)
      process.exit(1)
    }
  }
}
module.exports = FastifyServer