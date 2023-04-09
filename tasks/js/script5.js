class Information {
    #author
    #birthYear
    #description
    constructor(author, birthYear, description) {
        this.Author = author
        this.BirthYear = birthYear
        this.Description = description
    }
    get Author() {
        return this.#author
    }
    set Author(val) {
        if (val.length === 0)
            throw new Error('This field ca\'t be empty')
        this.#author = val
    }
    get BirthYear() {
        return this.#birthYear
    }
    set BirthYear(val) {
        if (val < 0)
            throw new Error('Incorrect value')
        this.#birthYear = val
    }
    get Description() {
        return this.#description
    }
    set Description(val) {
        if (val.length === 0)
            throw new Error('This field ca\'t be empty')
        this.#description = val
    }
    toString() {
        return `Author: ${this.Name}`
    }
}

class Publisher {
    #name
    #registrationNum
    #foundationDate
    constructor(name, registrationNum, foundationDate) {
        this.Name = name
        this.RegistrationNum = registrationNum
        this.FoundationDate = foundationDate
    }
    get Name() {
        return this.#name
    }
    set Name(val) {
        if (val.length === 0)
            throw new Error('This field ca\'t be empty')
        this.#name = val
    }
    get RegistrationNum() {
        return this.#registrationNum
    }
    set RegistrationNum(val) {
        if (val <= 0)
            throw new Error('Incorrect value')
        this.#registrationNum = val
    }
    get FoundationDate() {
        return this.#foundationDate
    }
    set FoundationDate(val) {
        if (val < 0)
            throw new Error('Incorrect value')
        this.#foundationDate = val
    }
    toString() {
        return `Publisher: ${this.Name}`
    }
}

class Book {
    #title
    #genre
    constructor(information, title, genre, publisher) {
        this.information = information
        this.Title = title
        this.Genre = genre
        this.publisher = publisher
    }
    get Title() {
        return this.#title
    }
    set Title(val) {
        if (val.length === 0)
            throw new Error('This field ca\'t be empty')
        this.#title = val
    }
    get Genre() {
        return this.#genre
    }
    set Genre(val) {
        if (val.length === 0)
            throw new Error('This field ca\'t be empty')
        this.#genre = val
    }
}

class Library {
    constructor(bookList) {
        this.bookList = bookList
    }
    addBooksToAllBooksList(bookList) {
        for (const element of bookList) {
            this.bookList.push(element)
        }
        return this.bookList
    }
    removeBookFromBookList(bookTitle) {
        this.bookList = this.bookList.filter(item => item.Title !== bookTitle)
    }
    getSectionDetective() {
        let sectionDetective = []
        sectionDetective.push(this.bookList.filter(item => item.Genre === 'detective'))
        return sectionDetective
    }
    getSectionThriler() {
        let sectionThriler = []
        sectionThriler.push(this.bookList.filter(item => item.Genre === 'thriler'))
        return sectionThriler
    }
    getSectionRomantic() {
        let sectionRomantic = []
        sectionRomantic.push(this.bookList.filter(item => item.Genre === 'romantic'))
        return sectionRomantic
    }
    getSectionDocumental() {
        let SectionDocumental = []
        SectionDocumental.push(this.bookList.filter(item => item.Genre === 'documental'))
        return SectionDocumental
    }
    getSectionDrama() {
        let sectionDrama = []
        sectionDrama.push(this.bookList.filter(item => item.Genre === 'drama'))
        return sectionDrama
    }
    isBookinBookList(bookTitle) {
        for (const element of this.bookList) {
            if (element.Title === bookTitle)
            alert('Книга есть в наличии')                                     
        }
        //this.bookList.filter(item => {if (item.Title === bookTitle) alert('Книга есть в наличии')})        
    }
    getBookByTitle(bookTitle) {
        return this.bookList.filter(item => item.Title === bookTitle)
    }
    getBookByAuthor (author) {
        return this.bookList.filter(item => item.information.Author === author)
    }
    getBookByPublisher (publisher) {
        return this.bookList.filter(item => item.publisher.Name === publisher)
    }
    toString () {
        let bookNameList = []
        for (const element of this.bookList) {
            bookNameList.push(element.Title)
        }
        return `<p>${bookNameList}</p>`        
    }
}
let bookList = [
    new Book(new Information('Philip Anselmo', 1967, 'killing in the name of'), 'Vulgar display of power', 'detective', new Publisher('Electra', 11111, 1936)),
    new Book(new Information('Vinie Paul', 1963, 'the beast and the beauty'), 'Far beyond driven', 'thriler', new Publisher('Sony', 22222, 1947)),
    new Book(new Information('Rex Brown', 1964, 'you wanna get shot'), 'Reinventing the steel', 'detective', new Publisher('Universal', 33333, 1930)),
    new Book(new Information('Dimbag Darell', 1963, 'love is all we need'), 'Cowboys from hell', 'romantic', new Publisher('Roadrunner', 44444, 1970)),
    new Book(new Information('Rob Flynn', 1994, 'Criminal pulp fiction'), 'Burn my eyes', 'documental', new Publisher('Electra', 11111, 1936)),
    new Book(new Information('Kurt Cobain', 1991, 'Nevermind the bollocks'), 'Nevermind', 'drama', new Publisher('Sub Pop', 55555, 1985)),
]

let bookList2 = [
    new Book(new Information('Max Cavalera', 1971, 'chaos A. D. tanks on the streets'), 'Arise', 'documental', new Publisher('Sony', 22222, 1947)),
    new Book(new Information('James Hetfield', 1964, 'for whom the bell tolls'), 'Muster of pupets', 'romantic', new Publisher('MF', 66666, 1979)),
    new Book(new Information('Chino Moreno', 19710, 'the best summer'), 'Adrenalin', 'thriler', new Publisher('Universal', 33333, 1930)),
]

let library = new Library(bookList)
library.addBooksToAllBooksList(bookList2)
library.removeBookFromBookList('Far beyond driven')
console.log(library.getBookByTitle('Burn my eyes'))
console.log(library.getBookByAuthor('Dimbag Darell'))
console.log(library.getBookByPublisher('Electra'))
console.log(library.removeBookFromBookList('Muster of pupets'))
console.log(library.getSectionDetective())
console.log(library.getSectionThriler())
console.log(library.getSectionRomantic())
console.log(library.getSectionDocumental())
console.log(library.getSectionDrama())
library.isBookinBookList('Arise')

console.log(library)
document.write(library)









