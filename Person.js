function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNo, state, zipcode, occupation, hourlyWage) {
        this.hours = 40;
        this.degrees = [];
        this.FirstName = firstName;
        this.LastName = lastName;
        this.PhoneNo = phoneNo;
        this.Age = age;
        this.State = state;
        this.Zipcode = zipcode;
        this.Occupation = occupation;
        this.HourlyWage = hourlyWage;
    }
    Employee.prototype.printInfo1 = function () {
        return this.FirstName + " " + this.LastName + " is " + this.Age + " years old.";
    };
    Employee.prototype.printContactInfo = function () {
        return this.FirstName + " " + this.LastName + " has phonenumber " + this.PhoneNo;
    };
    Employee.prototype.printLocation = function () {
        return this.FirstName + " " + this.LastName + " is leavng in " + this.State + " , " + this.Zipcode;
    };
    Employee.prototype.printDetails = function () {
        return this.FirstName + " " + this.LastName + " is " + this.Age + " years old. \nShe lives in " +
            this.State + "," + this.Zipcode + ".\n She is " + this.Occupation + ".";
    };
    // method to calculate weekly wages//
    Employee.prototype.calculateWeekWage = function (hours) {
        return hours * this.HourlyWage;
    };
    Employee.prototype.printIncome = function () {
        return this.FirstName + " has weekly income  " + this.calculateWeekWage(40) + " $ .";
    };
    // getfullname//
    Employee.prototype.getFullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    // function addcert() to add new certificates or degrees//
    Employee.prototype.addCerts = function () {
        var _a;
        var degrees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            degrees[_i] = arguments[_i];
        }
        (_a = this.degrees).push.apply(_a, degrees);
        //  for (var i = 0; i < degrees.length; i++) {
        //console.log(degrees[i]);
        //  }
        return "Degrees : " + this.degrees.join(",");
    };
    // method to implement //
    Employee.createEmp = function (Options) {
        return new Employee(Options.FirstName, Options.LastName);
    };
    return Employee;
}());
var ash = new Employee("Ash", "Patel", 32, 2344565656, "NC", 34534, "Teacher", 12);
document.getElementById("info").innerHTML = ash.printInfo1().toString();
//var ash = new Per son("Ash", "Patel", 32, 2344565656, "NC", 34534, "Teacher");
document.getElementById("infoNo").innerHTML = ash.printContactInfo().toString();
document.getElementById("infoLo").innerHTML = ash.printLocation().toString();
document.getElementById("infoDetail").innerHTML = ash.printDetails().toString();
document.getElementById("incomeInfo").innerHTML = ash.printIncome().toString();
document.getElementById("deg").innerHTML = ash.addCerts("Bsc", "Msc");
document.getElementById("emp").innerHTML = Employee.createEmp({ FirstName: "Peter", LastName: "James" }).getFullName();
