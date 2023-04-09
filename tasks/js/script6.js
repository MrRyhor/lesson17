class MultiChecker {
    constructor(minVal, maxVal) {
        this.firstNum = MultiChecker.getRandomNum(minVal, maxVal)
        this.secondNum = MultiChecker.getRandomNum(minVal, maxVal)
        this.operation = '*'
        this.userAnswer = this.getUserAnswer()
        this.correctAnswer = this.getCorrectAnswer()
    }

    static getRandomNum(minVal, maxVal) {
        return minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
    }
    getUserAnswer() {
        return parseInt(prompt(`${this.firstNum} * ${this.secondNum} = ?`))
    }
    getCorrectAnswer() {
        return this.firstNum * this.secondNum
    }
    toString() {
        return `${this.firstNum}, ${this.secondNum}, ${this.operation}, ${this.userAnswer}, ${this.correctAnswer}`
    }
}

class AddChecker {
    constructor(minVal, maxVal) {
        this.firstNum = this.getRandomNum(minVal, maxVal)
        this.secondNum = this.getRandomNum(minVal, maxVal)
        this.operation = '+'
        this.userAnswer = this.getUserAnswer()
        this.correctAnswer = this.getCorrectAnswer()
    }

    getRandomNum(minVal, maxVal) {
        return MultiChecker.getRandomNum(minVal, maxVal)
    }
    getUserAnswer() {
        return parseInt(prompt(`${this.firstNum} + ${this.secondNum} = ?`))
    }
    getCorrectAnswer() {
        return this.firstNum + this.secondNum
    }
    toString() {
        return `${this.firstNum}, ${this.secondNum}, ${this.operation}, ${this.userAnswer}, ${this.correctAnswer}`
    }
}

class TestManager {
    static minInterval = 1
    static maxInterval = 5
    static minVal = 1
    static maxVal = 2
    
    static getRandomInterval() {
        return TestManager.minInterval + Math.floor(Math.random() * TestManager.maxInterval)
    }
    static getRandomTask() {
        let randomTask = TestManager.minVal + Math.floor(Math.random() * TestManager.maxVal)
        if (randomTask === 1)
            return new MultiChecker(1, 10)
        else
            return new AddChecker(1, 10)
    }
    static getTaskNTime(val) {
        let ressArr = []
        let res
        for (let i = 0; i < val; i++) {
            setTimeout(() => {
                res = TestManager.getRandomTask()
                document.write(`${JSON.stringify(res)}<br>`)
                ressArr.push(res)
            }, TestManager.getRandomInterval() * 1000)
        }
        return ressArr
    }    
}

class History {
    static historyObj
    constructor(val) {
        if (History.historyObj)
            return History.historyObj
        this.historyArr = TestManager.getTaskNTime(val)
        History.historyObj = this
    }    
}

let history = new History (4)
let history2 = new History (6)
console.log(history)
console.log(history2)


