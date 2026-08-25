function calculateWeeklyTotal(expenses: number[]): number {
    let total: number = expenses.reduce((accm, elem) => accm + elem, 0)
    
    return total
}

// for(const expense of expenses) {
//     total = total + expense
// }
console.log(calculateWeeklyTotal([200, 450, 100]))
console.log(calculateWeeklyTotal([1000, 250]))
console.log(calculateWeeklyTotal([]))