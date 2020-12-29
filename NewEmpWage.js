const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
if(empCheck == IS_ABSENT){
    console.log("UC1- Employee is ABSENT");
} else{
    console.log("UC1 - Employee is PRESENT");
}