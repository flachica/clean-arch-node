const ExpressServer = require('../abstract/details/http/ExpressServer')
const server1 = new ExpressServer('test', ['animals'], 3000)
server1.start()

const server2 = new ExpressServer('test', ['fruits'], 3001)
server2.start()