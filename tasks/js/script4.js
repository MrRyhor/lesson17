class Product {
    #name
    #units
    #quantity
    constructor(name, units, quantity, producer) {
        this.Name = name
        this.Units = units
        this.Quantity = quantity
        this.producer = producer
    }
    get Name() {
        return this.#name
    }
    set Name(val) {
        if (val.length === 0)
            throw new Error('This field can\'t be empty')
        this.#name = val
    }
    get Units() {
        return this.#units
    }
    set Units(val) {
        if (val.length === 0)
            throw new Error('This field can\'t be empty')
        return this.#units = val
    }
    get Quantity() {
        return this.#quantity
    }
    set Quantity(val) {
        if (val < 0){
            document.write('<p><span>This quantity is more than we have in stock</span></p>')
            throw new Error('Incorrect value')
        }
        this.#quantity = val
    }
    toString() {
        return `Name: ${this.Name}, Qnt = ${this.Quantity} ${this.Units}`
    }
    static getFilterByProductName(product, nameVal) {
        if (product.Name === nameVal)
            return product.Name
    }
    static getFilterByProducerName(product, producerName) {
        if (product.producer.Name === producerName)
            return product.producer.Name
    }
}

class Producer {
    #name
    #registrationNum
    constructor(name, registrationNum) {
        this.Name = name
        this.RegistrationNum = registrationNum
    }
    get Name() {
        return this.#name
    }
    set Name(val) {
        if (val.length === 0)
            throw new Error('This field can\'t be empty')
        this.#name = val
    }
    get RegistrationNum() {
        return this.#registrationNum
    }
    set RegistrationNum(val) {
        if (val === 0)
            throw new Error('This field can\'t be empty')
        this.#registrationNum = val
    }
    toString() {
        return `Producer name: ${this.Name}`
    }
}

class Warehouse {
    constructor([]) {
        this.productList = []
    }
    addProduct(product) {
        return this.productList.push(product)
    }
    toShipProduct(productName, productQnt) {
        for (const element of this.productList) {
            if (element.Name === productName)
                if (element.Quantity > 0) {
                    element.Quantity -= productQnt                   
                }
        }
        return this.productList
    }

    getFilterByProductName(productName) {
        return this.productList.filter(element => element.Name === productName)
    }
    getFilterByProducerName(producerName) {
        return this.productList.filter(element => element.producer.Name === producerName)
    }
    toString() {
        for (const element of this.productList) {
            document.write(`<p>${element.Name} - ${element.Quantity} ${element.Units}<br></p>`)            
        }                        
    }
}

let producer1 = new Producer('ABC', 11111)
let producer2 = new Producer('DEF', 22222)
let producer3 = new Producer('GHI', 33333)
let producer4 = new Producer('JKL', 44444)
let producer5 = new Producer('PQR', 55555)
let producer6 = new Producer('PQR', 66666)

let product1 = new Product('item1', 'pcs', 35, producer1)
let product2 = new Product('item2', 'pcs', 28, producer2)
let product3 = new Product('item3', 'pcs', 40, producer3)
let product4 = new Product('item4', 'pcs', 31, producer4)
let product5 = new Product('item5', 'pcs', 35, producer5)
let product6 = new Product('item6', 'pcs', 42, producer6)

let warehouse = new Warehouse([])
warehouse.addProduct(product1)
warehouse.addProduct(product2)
warehouse.addProduct(product3)
warehouse.addProduct(product4)
warehouse.addProduct(product5)
warehouse.addProduct(product6)

document.write(`<p>${warehouse.getFilterByProductName('item2')}</p>`)
document.write(`<p>${warehouse.getFilterByProducerName('PQR')}</p>`)
console.log(warehouse)
warehouse.toShipProduct('item2', 14)
warehouse.toShipProduct('item5', 35)
warehouse.toString()






