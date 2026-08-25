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

console.log(getQuizSummary([8, 9, 7, 10]))
console.log(getQuizSummary([5, 5]))
console.log(getQuizSummary([]))

