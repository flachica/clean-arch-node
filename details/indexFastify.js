const FastifyServer = require('../abstract/details/http/FastifyServer')
const server1 = new FastifyServer('test', ['animals'], 3000)
server1.start()

const server2 = new FastifyServer('test', ['fruits'], 3001)
server2.start()