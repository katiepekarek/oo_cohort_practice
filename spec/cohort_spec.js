var Cohort = require('../cohort');
var Student = require('../student');

describe('Cohort', function(){
  it ("allows you to add students", function(){
    var student1 = new Student("Andrew");
    var student2 = new Student("Emily");
    var cohort = new Cohort();

    cohort.addStudent(student1);

    expect(cohort.students).toEqual([student1]);

    cohort.addStudent(student2)
    expect(cohort.students).toEqual([student1, student2]);
  });

  it("allows you to set a cohort start date", function(){
    var cohort = new Cohort('7/20/2015');
    expect(cohort.startDate).toEqual('7/20/2015');
  });

  it("allows you to change the start date", function(){
    var cohort = new Cohort('7/20/2015');

    cohort.changeDate('8/01/2015');
    expect(cohort.startDate).toEqual('8/01/2015');
  });

  it ("allows you to print student names", function(){
    var student1 = new Student("Andrew");
    var student2 = new Student("Emily");
    var cohort = new Cohort();

    cohort.addStudent(student1);
    cohort.addStudent(student2);

    expect(cohort.studentNames()).toEqual(["Andrew", "Emily"]);
  });

  it ("allows you to print student names", function(){
    var student1 = new Student("Andrew", 435);
    var student2 = new Student("Emily", 1000);
    var cohort = new Cohort();

    cohort.addStudent(student1);
    expect(cohort.totalCommits()).toEqual(435);
    cohort.addStudent(student2);

    expect(cohort.totalCommits()).toEqual(1435);
  });

  it ("allows you to randomly pairs students", function(){
    var student1 = new Student("Andrew", 435);
    var student2 = new Student("Emily", 1000);
    var student3 = new Student("Dave", 670);
    var student4 = new Student("Teddi", 980);

    var cohort = new Cohort();
    cohort.addStudent(student1);
    cohort.addStudent(student2);
    cohort.addStudent(student3);
    cohort.addStudent(student4);

    expect(cohort.pairStudents()).toEqual([["Andrew", "Emily"], ["Dave", "Teddi"]]);
  });

  it ("allows you to delete students", function(){
    var student1 = new Student("Andrew", 435);
    var student2 = new Student("Emily", 1000);
    var cohort = new Cohort();

    cohort.addStudent(student1);
    expect(cohort.studentNames()).toEqual(["Andrew"]);
    cohort.addStudent(student2);
    expect(cohort.studentNames()).toEqual(["Andrew", "Emily"]);

    cohort.removeStudent(student1);
    expect(cohort.studentNames()).toEqual(["Emily"]);
  });

  
});
