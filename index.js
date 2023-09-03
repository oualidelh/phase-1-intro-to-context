function createEmployeeRecord(employeeInfo) {
    const [firstName, familyName, title, payPerHour] = employeeInfo;

    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}
function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(employeeData => {
        return createEmployeeRecord(employeeData);
    });
}
function createTimeInEvent(employeeRecord, string) {
    const [date, hour] = string.split(" ");

    const timeInEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10),
    };
    employeeRecord.timeInEvents.push(timeInEvent);

    return employeeRecord;
}
function createTimeOutEvent(employeeRecord, string) {
    const [date, hour] = string.split(" ");

    const timeOutEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10),
    };
    employeeRecord.timeOutEvents.push(timeOutEvent);

    return employeeRecord;
}
function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);

    if (timeInEvent && timeOutEvent) {
        const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
        return hoursWorked;
    }

    return 0;
}
function wagesEarnedOnDate(employeeRecord, date) {
    return (hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour);
}
function allWagesFor(employeeRecord) {

}
let employees = [sRecord, rRecord]
function allWagesFor(employeeRecord) {
    const dates = employeeRecord.timeInEvents.map(event => event.date);
    const totalWages = dates.reduce((total, date) => {
        return total + wagesEarnedOnDate(employeeRecord, date);
    }, 0);

    return totalWages;
}
function calculatePayroll(employees) {
    let calculatePayroll = 0;
    employees.forEach(employee => calculatePayroll += allWagesFor(employee));
    return calculatePayroll;
}