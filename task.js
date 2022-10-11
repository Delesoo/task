//Task 1
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
  facName: "Volkswagen Wolfsburg Plant",
  calculateWorkload: function () {},
  formatArray: function (name) {},
};

let factoryEmployees = {
  employees: [
    { name: "John", timeSpent: 1 },
    { name: "Sam", timeSpent: 3 },
    { name: "Maria", timeSpent: 2 },
    { name: "Dan", timeSpent: 4 },
    { name: "Lorelai", timeSpent: 5 },
  ],
  employeeNum: this.employees.length,
};

let workloadData = {
  employeeWeeklyWorkload: [
    { name: "John", workload: 40 },
    { name: "Sam", workload: 25 },
    { name: "Maria", workload: 28 },
    { name: "Dan", workload: 30 },
    { name: "Lorelai", workload: 31 },
  ],
};

//Task 2

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 

*/

function sumOfNumbers(firstNum, secondNum, thirdNum){
  return firstNum + secondNum + thirdNum;
}

let summary = sumOfNumbers.apply(null, [65, 130, 420]);
console.log(summary);

// //Task 3

const Vehicle = {
  name: "Vehicle",
  type: "vehicle",
  start: function () {
    return `starting the ${this.name} ${this.type}`;
  },
  stop: function () {
    return `stopped the ${this.name} ${this.type}`;
  },
};

 const car = {
    name: "Nissan",
    type: "GTR",
 }

 let startcar = Vehicle.start.bind(car);
let stopcar = Vehicle.stop.bind(car);
 
 console.log(startcar());
 console.log(stopcar());

/* 
    შექმენით ახალი ობიექტი car რომელსაც ექნება ორი key name და type , გამოიძახეთ start და stop მეთოდები 
    ამ ობიექტისთვის
*/

//Task 4

//გამოიყენეთ Math და apply მაქსიმალური მნიშვნელობის დასათვლელად მასივიდან

function maxValue (one, two, three, four){
  return Math.max(one, two, three, four);
}

let calcmaxValue = maxValue.apply(null,[4,31,10,20]);

console.log(calcmaxValue);
