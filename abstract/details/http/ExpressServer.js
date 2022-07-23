const HTTPServer = require('./base/HTTPServer')

class ExpressServer extends HTTPServer {
  constructor (mode, entities, port) {
    super(mode, entities, port)
    this.httpServer = new require('express')()
  }

  async start() {
    try {
      super.start()
      this.httpServer.listen(this.port, () => {
        console.log(`Example app listening ${JSON.stringify(this.entities)} on port ${this.port}`)
      })      
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
module.exports = ExpressServer





