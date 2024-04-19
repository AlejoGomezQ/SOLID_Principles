//Bad implementation

class JavascriptStudent {
    learnJavascript() {
        console.log('Learn Javascript');
    }   
}

class AngularStudent {
    learnAngular() {
        console.log('Learn Angular');
    }   
}

class Teacher {
    private student: JavascriptStudent;

    constructor(student: JavascriptStudent) {
        this.student = new JavascriptStudent();
    }

    teachJavascript() {
        this.student.learnJavascript();
    }
}

//Good implementation

class Student {
    learn(): void {
        console.log('Learn');
    }
}

class ReactStudent extends Student {
    learn() {
        console.log('Learn React');
    }
}

class GoStudent extends Student {
    learn() {
        console.log('Learn Go');
    }
}

class GoodTeacher {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    teach() {
        this.student.learn();
    }
}

const reactStudent = new ReactStudent();
const goStudent = new GoStudent();

const goodTeacher = new GoodTeacher(reactStudent);