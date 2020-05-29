
function sayHello(person: string): string {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
// interface//
interface IEmployee {
    FirstName: String;
    LastName: String;
    Age?: number;
    PhoneNo?: number;
    State?: String;
    Zipcode?: number;
    Occupation?: String;
    HourlyWage?: number;
    hours?: number;
    weeklyIncome?: number;

}



class Employee implements IEmployee {
    FirstName: String;
    LastName: String;
    Age: number;
    PhoneNo: number;
    State: String;
    Zipcode: number;
    Occupation: String;
    HourlyWage: number;
    hours: number = 40;
    weeklyIncome: number;

    degrees: string[] = [];

    constructor(firstName: String, lastName: String, age?: number, phoneNo?: number, state?: String, zipcode?: number, occupation?: String, hourlyWage?: number) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.PhoneNo = phoneNo;
        this.Age = age;
        this.State = state;
        this.Zipcode = zipcode;
        this.Occupation = occupation;
        this.HourlyWage = hourlyWage;


    }
    printInfo1(): String {
        return this.FirstName + " " + this.LastName + " is " + this.Age + " years old.";
    }
    printContactInfo(): String {
        return this.FirstName + " " + this.LastName + " has phonenumber " + this.PhoneNo;
    }
    printLocation(): String {
        return this.FirstName + " " + this.LastName + " is leavng in " + this.State + " , " + this.Zipcode;
    }
    printDetails(): String {
        return this.FirstName + " " + this.LastName + " is " + this.Age + " years old. <br>She lives in " +
            this.State + "," + this.Zipcode + "." + " <br>She is " + this.Occupation + ".";
    }
    // method to calculate weekly wages//
    calculateWeekWage(hours: number) {
        if (hours) {
            return this.weeklyIncome = hours * this.HourlyWage;
        } else {
            return this.weeklyIncome = 40 * this.HourlyWage;
        }
        return this.weeklyIncome;
    }
    printIncome(): String {
        return this.FirstName + " has weekly income  " + this.calculateWeekWage(35) + " $ .";
    }
    // getfullname//
    getFullName(): string {
        return this.FirstName + " " + this.LastName;
    }
    // function addcert() to add new certificates or degrees//
    addCerts(...degrees: string[]) {
        this.degrees.push(...degrees);
        return "Degrees : " + this.degrees.join(",");
    }
    // method to implement //
    static createEmp(Options: IEmployee): Employee {
        return new Employee("New Employee : " + Options.FirstName, Options.LastName);
    }

}
var ash = new Employee("Ash", "Patel", 32, 2344565656, "NC", 34534, "Teacher", 12);

document.getElementById("info").innerHTML = ash.printInfo1().toString();
//var ash = new Per son("Ash", "Patel", 32, 2344565656, "NC", 34534, "Teacher");
document.getElementById("infoNo").innerHTML = ash.printContactInfo().toString();
document.getElementById("infoLo").innerHTML = ash.printLocation().toString();
document.getElementById("infoDetail").innerHTML = ash.printDetails().toString();
document.getElementById("incomeInfo").innerHTML = ash.printIncome().toString();
document.getElementById("deg").innerHTML = ash.addCerts("Bsc", "Msc");
document.getElementById("emp").innerHTML = Employee.createEmp({ FirstName: "Peter", LastName: "James" }).getFullName();