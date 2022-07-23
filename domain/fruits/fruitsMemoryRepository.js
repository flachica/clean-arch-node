const Repository = require('../../abstract/domain/Repository')

class FruitsMemoryRepository extends Repository {
    async getAll() {
        return ['Apple', 'Orange', 'Banana']
    }
}

module.exports = FruitsMemoryRepository