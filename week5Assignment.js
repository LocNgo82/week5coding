
// This program maintains  a list of students for a course.
// class Menu contains a course object that has name, max class size, and room number.
class Menu {
    // constructor of the menu
    constructor() {
        let name = prompt('Enter course name:');  // ask a user to enter the course name
        let maxSize = prompt('Enter max class size:');  // ask a user to enter the maximum class size
        let room = prompt('Enter room number:');  // ask a user to enter the room number
        this.course = new Course(name, maxSize, room); // create a course object
    }
    // start the menu options
    start() {
        let selection = this.showMainMenuOptions();  // display the menu
        while (selection != 0) {  // execute the function based on a user input
            switch (selection) {
                case '1':  // add student function
                    this.addStudent();
                    break;
                case '2': // display student function
                    this.displayStudent();
                    break;
                case '3':  // delete student function
                    this.deleteStudent();
                    break;
                case '4':  // display course info
                    let s1 = this.displayCourse();
                    this.display(s1);
                    break;
                case '5':  // display all students in a course
                    let s2 = this.displayAllStudent();
                    this.display(s2);
                    break;
                default:
                    selection = 0;  // if user input is not 1 to 4, set the selection to 0 and repeat the loop
            }
            selection = this.showMainMenuOptions();  // repeat the menu display

        }
    }
    // show the menu options to the user
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) add student
            2) display student
            3) delete student
            4) display course
            5) dipslay student list
        `);
    }
    
    // display weather to the browser or to the console.  Use for debug the code
    display(str) {        
        if (typeof window != 'undefined') {  // if it's on a browser, use the alert function to display the string
            alert(str);
        }
        else {  // if it's on a console, use console log to display the string
            console.log(str);
        }
    }

    // print out all the students in a course
    displayAllStudent() {
        let allStudents = "";
        for (let student of this.course.studentList) {
            allStudents += `Name: ${student.name} Id: ${student.id}\n`;
        }
        return allStudents;
    }

    // prompt the user to enter the student name and id
    // if there is an error for adding the student, display the error message
    addStudent() {
        let name = prompt('Enter student name:');
        let id = prompt('Enter student id:');
        let student = new Student(name, id);
        try {
            this.course.addStudent(student);
        }
        catch (err) {
            this.display(err.message);
        }
    }

    // prompt the user to enter the student name
    // if the student name is not found, display the error message
    // else display the student information
    displayStudent() {
        let name = prompt('Enter student name:');
        try {
            this.display(this.course.displayStudent(name));
        }
        catch (err) {
            this.display(err.message);
        }
    }
    // prompt the user to enter the student name
    // if the student name is not found, display the error message
    // else delete student function is successful
    deleteStudent() {
        let name = prompt('Enter student name:');
        try {
            this.course.deleteStudent(name);
        }
        catch (err) {
            this.display(err.message);
        }
    }

    // create a course information string
    // return the string at the end
    displayCourse() {
        let str = `Course: ${this.course.courseName}\n`;
        str += `Room: ${this.course.room}\n`;
        str += `Max size: ${this.course.maxSize}\n`;
        str += `Registered students: ${this.course.studentList.length}\n`;
        return str;
    }
    

  }  // class menu


// this is a course class that maintain the course name, maximum class size, room number, and student list
class Course {
    constructor(courseName, maxSize, room) {
        this.courseName = courseName;                
        this.maxSize = maxSize;
        this.room = room;
        this.studentList = [];
    }

    // add a student to the course
    // if a student is already existed in the course, throw an error message
    // else if the class is full, also throw an error message.
    // otherwise, add the student to the course.
    addStudent(student) {
        let pos = this.studentList.findIndex( x => x.name === student.name);
        if (pos >= 0) {
            throw new Error(`${student.name} is already existed.`);
        }
        if (this.studentList.length < this.maxSize) {
            this.studentList.push(student);                        
        }
        else {
            throw new Error(`This course ${this.courseName} is full.`);
        }
    }
    // delete a student form the course
    // if a student is not found in the course, throw an error message
    // otherwise, delete the student from the course.
    deleteStudent(studentName) {
        let pos = this.studentList.findIndex( x => x.name === studentName);
        // console.log(pos);
        if (pos >= 0) {
            this.studentList.splice(pos, 1);
        }
        else {
            throw new Error(`Student ${studentName} not found.`);
        }
        
    }

    // find a student from the student list
    // if a student exist in the student list, create a string with student name and id, return the string at the end
    // else if a student does not exist, throw an error message
    displayStudent(studentName) {
        let pos = this.studentList.findIndex( x => x.name === studentName);
        let astudent = "";
        // console.log(pos);
        if (pos >= 0) {
            astudent = `Name: ${this.studentList[pos].name}; Id: ${this.studentList[pos].id}`;            
        }
        else {
            throw new Error(`Student ${studentName}; not found.`);
        }
        return astudent;
    }
    
  } // class Course
  
  // This is a student class that contains student name and id
  class Student {
    constructor(name, id) {  
        this.name = name;
        this.id = id;
    }
  }  // class Student

// start the program
let menu = new Menu();  // create a menu object
menu.start(); // start the prompt
  



