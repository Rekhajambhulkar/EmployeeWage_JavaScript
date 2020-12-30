const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
} 

function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empdailyWageArr = new Array();
let empDailyWagemap = new Map();
let empDailyHrsmap = new Map();

while(totalWorkingDays <= MAX_HRS_IN_MONTH && 
    totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10 ) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs
        empdailyWageArr.push(calDailyWage(empHrs));
        empDailyHrsmap.set(totalWorkingDays, empHrs);
        empDailyWagemap.set(totalWorkingDays, calDailyWage(empHrs));
}

let empWage = calDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hour: "+ totalEmpHrs + " Emp Wage:" + empWage);

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empdailyWageArr.forEach(sum);
console.log("UC7A - Total days: " + totalWorkingDays + " total Hrs:" + totalEmpHrs + " Emp wage:" + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
} 
console.log("UC7A - Emp Wage reduce:" + empdailyWageArr.reduce(totalWages, 0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empdailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily wage Map");
console.log(mapDayWithWageArr);

//UC7C - Show Days when full wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily wage filter when fulltime wage Earned");
console.log(fullDayWageArr);

//UC7D - Find the first occurence when full Time wage was earned using Finf Function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on day:" + mapDayWithWageArr.find(findFulltimeWage));

//UC7E - Check if Every Element od full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7C - check all Element have Full Time Wage: " + fullDayWageArr.every(isAllFullTimeWage));

//UCF - Check if theere is any part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F - Check if thre is any part time wage:" + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G - Number of Days Emp Worked:" + empdailyWageArr.reduce(totalDaysWorked, 0));

//UC8A - Map function
console.log("UC8A - EMP wage map totalHrs: " + Array.from(empDailyWagemap.values()).reduce(totalWages, 0));

//UC9 Arrow function
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let totalHours = Array.from(empDailyHrsmap.values())
                        .reduce(findTotal, 0);
let totalSalary = empdailyWageArr
                    .filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow: " + "Total Hours:" + 
            totalHours + " Total Wage:" + totalSalary);

            let noWorkingDays = new Array();
            let partWorkingDays = new Array();
            let fullWorkingDays  = new Array();
            empDailyHrsmap.forEach( (value, key, map) => {
                if(value == 8) fullWorkingDays.push(key);
                else if(value == 4) partWorkingDays.push(key);
                else noWorkingDays.push(key);
            });
            console.log("full Working Days:" + fullWorkingDays);
            console.log("Part Working Days:" + partWorkingDays);
            console.log("No Working Days:" + noWorkingDays);

