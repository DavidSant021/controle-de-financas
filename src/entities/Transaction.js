export default class Transaction {
    constructor ({description, value, type}) {
        this.id = Math.floor(Math.random() * 10000000)
        this.description = description
        this.value = value
        this.type = type
        this.createdAt = new Date()
    }
}