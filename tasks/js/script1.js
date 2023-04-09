class Counter {
    static counterPositiveNum = 0
    static counterNegativeNum = 0
    static counterLokingNum = 0

    static getCountOfPositiveNum(initData) {
        for (const element of initData) {
            if (element > 0) Counter.counterPositiveNum++
        }
        return Counter.counterPositiveNum
    }

    static getCountOfNegativeNum(initData) {
        for (const element of initData) {
            if (element < 0) Counter.counterNegativeNum++
        }
        return Counter.counterNegativeNum
    }

    static getCountOfLookingNum(initData, lookingNum) {
        for (const element of initData) {
            if (element === lookingNum) Counter.counterLokingNum++
        }
        return Counter.counterLokingNum
    }
}

const data = [2, 12, -4, 7, -15, -2, 10, 4, -1, 14, 2]

document.write(`<p>Count of positive num = ${Counter.getCountOfPositiveNum(data)}</p>`)
document.write(`<p>Count of negative num = ${Counter.getCountOfNegativeNum(data)}</p>`)
document.write(`<p>Count of looking num = ${Counter.getCountOfLookingNum(data, 2)}</p>`)
