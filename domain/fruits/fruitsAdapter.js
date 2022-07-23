const Adapter = require('../../abstract/domain/Adapter')
const FruitsMemoryRepository = require('./fruitsMemoryRepository')

class FrutisAdapter extends Adapter {
    constructor(mode) {
        super(mode)
        if (mode === 'test') {
            this.repository = new FruitsMemoryRepository()
        } else {
            throw new Error(`Not implemented mode ${mode}`)
        }
    }
}

module.exports = FrutisAdapter