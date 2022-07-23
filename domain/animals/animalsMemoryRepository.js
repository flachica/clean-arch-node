const Repository = require('../../abstract/domain/Repository')

class AnimalsMemoryRepository extends Repository {
    async getAll() {
        return ['Cat', 'Dog', 'Monkey']
    }
}

module.exports = AnimalsMemoryRepository