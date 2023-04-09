class Reminder {
    static reminderObj
    constructor(message, interval) {
        if (Reminder.reminderObj)
            return Reminder.reminderObj
        this.Message = message
        this.Interval = interval
        this.reminder
        Reminder.reminderObj = this
    }
    getReminderMessage() {
        let counter = 0
        return this.reminder = setInterval(() => {
            counter++
            alert(`${this.Message} ${counter}`)
        }, this.Interval * 1000)
    }
    stopReminderMessage() {
        return clearInterval(this.reminder)
    }
    changeReminderMessage(message) {
        return this.Message = message
    }

    toString() {
        return `${this.message}<br>`
    }
}

let reminder1 = new Reminder('Hello', 3)
reminder1.getReminderMessage()

setTimeout(() => {
    reminder1.changeReminderMessage('Bye')
}, 15000);

setTimeout(() => {
    reminder1.stopReminderMessage()    
}, 30000);