class Adapter {
    async getAll() {
        const result = await this.repository.getAll()
        return result
    }
}

module.exports = Adapter