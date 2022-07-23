const Adapter = require('../../abstract/domain/Adapter')
const AnimalsMemoryRepository = require('./animalsMemoryRepository')

class AnimalsAdapter extends Adapter {
    constructor(mode) {
        super(mode)
        if (mode === 'test') {
            this.repository = new AnimalsMemoryRepository()
        } else {
            throw new Error(`Not implemented mode ${mode}`)
        }
    }
}

module.exports = AnimalsAdapter