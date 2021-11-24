//UC1
const IS_ABSENT = 0
{
let empCheck = Math.floor(Math.random()*10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present");
}
}
//uc2

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;
{
function getWorkingHours(empCheck){
    switch (empCheck) {
        case is_part_time:
            emphr = part_time_hours;
            break;
        case is_Full_time:
            emphr = full_time_hours;
            break;
        default:
            emphr = 0;
    }
}

empCheck = Math.floor(Math.random() * 10) % 3;
let emphr = getWorkingHours(empCheck);
}
// uc 4
{
const NUM_OF_WORKING_DAYS =20;
let emphr = 0;
for(let day=0;day<Num_of_working_days;day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    emphr+=getWorkingHours(empCheck);
}

let empWage=emphr*wage_per_hour;

console.log("Total hrs: "+emphr+" Emp wage "+empWage);
}
// uc 5
{
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS =10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Num_of_working_days){
    totalWorkingDays++;
    let empCheck =  Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 -TOTAL DAYS:" + totalWorkingDays + "Total Hrs:"+totalEmpHrs +"Emp Wages:");
}