export class Person {
    FirstName: String;
    LastName: String;



    constructor(firstName: String, lastName: String) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    // getfullname//
    getFullName(): string {
        return this.FirstName + " " + this.LastName;
    }
    // getter//
    getFirstName(): String {
        return this.FirstName;
    }
    //setter//
    setFirstName(firstName: String) {
        this.FirstName = firstName;
    }
    getLastName(): String {
        return this.LastName;
    }
    //setter//
    setLastName(lastName: String) {
        this.FirstName = lastName;
    }


}
//var ash = new Person("Ash", "Patel");

//document.getElementById("info").innerHTML = ash.getFullName().toString();
