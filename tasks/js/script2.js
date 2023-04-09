class CompanyAuto {
    #name
    #auto
    #registrationNum
    static currentAutoObj
    constructor (name, auto, registrationNum) {
        if (CompanyAuto.currentAutoObj)
        return CompanyAuto.currentAutoObj

        this.Name = name
        this.Auto = auto
        this.RegistrationNum = registrationNum

        CompanyAuto.currentAutoObj = this
    }
    get Name () {
        return this.#name
    }
    set Name (val){
        if (val.length === 0)
        throw new Error ('Can\'t be empty')
        this.#name = val
    }
    get Auto() {
        return this.#auto
    }
    set Auto (val) {
        if (val.length === 0)
            throw new Error('Can\'t be empty')
        this.#auto = val
    }
    get RegistrationNum() {
        return this.#registrationNum
    }
    set RegistrationNum(val) {
        if (val.length === 0 || val.length > 8)
            throw new Error('Can\'t be empty')
        this.#registrationNum = val
    }

    toString() {
        return `Name = ${this.Name}, Auto = ${this.Auto}, Registration Num = ${this.RegistrationNum}`
    }
}

let auto1 = new CompanyAuto('John Wick', 'Fiat', 'AO3224OA')
document.write(`<p>${auto1}</p>`)
let auto2 = new CompanyAuto('Brad Pit', 'Polonez', 'TE1213KA')
document.write(`<p>${auto2}</p>`)
let auto3 = new CompanyAuto('Anthony Keadis', 'Renault', 'EE1213AE')
document.write(`<p>${auto3}</p>`)
