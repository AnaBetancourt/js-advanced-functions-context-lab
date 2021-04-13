/* Your Code Here */
const createEmployeeRecord = function(employeeInfo){
    const record = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
}

const  createEmployeeRecords = function(recordsArray){
    return recordsArray.map(record => {
        return createEmployeeRecord(record)
    })
}

const  createTimeInEvent = function(dateTime){
    const dateHour = dateTime.split(' ')

    this.timeInEvents.push({
        type: "TimeIn", 
        date: dateHour[0], 
        hour: parseInt(dateHour[1])
    })
    return this
}

const  createTimeOutEvent = function(dateTime){
    const dateHour = dateTime.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut", 
        date: dateHour[0], 
        hour: parseInt(dateHour[1])
    })
    return this
}

const hoursWorkedOnDate = function(date){
    const timeInSplit = this.timeInEvents.find(event => event.date === date).hour.toString().split('')
    const timeOutSplit = this.timeOutEvents.find(event => event.date === date).hour.toString().split('')

    const clockIn = parseInt(timeInSplit.filter(num => num > 0).join(''))
    const clockOut = parseInt(timeOutSplit.filter(num => num > 0).join(''))
    
    return clockOut - clockIn
}

const  wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

const findEmployeeByFirstName = function(employees, name){
    return employees.find(employee => employee.firstName === name)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}