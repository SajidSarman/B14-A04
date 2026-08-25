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

console.log(getBatteryStatus(10))
console.log(getBatteryStatus(35))
console.log(getBatteryStatus(75))
console.log(getBatteryStatus(100))