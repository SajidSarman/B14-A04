//Problem-01: Battery Level Status

function getBatteryStatus(percentage: number): string {

if(percentage >= 0 && percentage <= 20){

return "Low"

} else if (percentage >= 21 && percentage <=50) {

return "Medium"

} else if (percentage >= 51 && percentage <=90) {

return "High"

}


return "Full";

}

//Problem-02: Table Booking Confirmation

interface BookingInfo {

name: string

guests: number

time: string

}

function formatBookingConfirmation(booking: BookingInfo): string {

return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`

}

//Problem-03: Weekly Expense Tracker

function calculateWeeklyTotal(expenses: number[]): number {

let total: number = expenses.reduce((accm, elem) => accm + elem, 0)


return total

}

//Problem-04: Traffic Light Action

type Light = "red" | "yellow" | "green"

function getTrafficAction(light: Light): string {

if (light === "red") {

return "Stop"

} else if (light === "yellow") {

return "Slow Down"

}

return "Go"

}

//Problem-05: Quiz Score Summary

interface Obj {

total: number

average: number

}

function getQuizSummary(scores: number[]): Obj {

if(scores.length === 0) {

return {total: 0, average: 0}

}

let totalScore: number = 0

for(const score of scores) {

totalScore += score

}

return {total: totalScore, average: totalScore / scores.length}

}