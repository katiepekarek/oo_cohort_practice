function Cohort(date){
  this.startDate = date;
  this.students = [];
};

Cohort.prototype.addStudent = function(student){
  this.students.push(student);
};

Cohort.prototype.changeDate = function(date){
  this.startDate = date;
};

Cohort.prototype.studentNames = function(){
  return this.students.map(function(student){ return student.name;
  });
};

Cohort.prototype.totalCommits = function(){
  results = 0;
  this.students.forEach(function(student){
    results += student.commits;
  });
  return results;
};

Cohort.prototype.pairStudents = function(){
  results = [];
  for (var i = 0; i < this.students.length; i+=2){
    results.push([this.students[i].name, this.students[i+1].name])
  }
  return results;
};

Cohort.prototype.removeStudent = function(studentToRemove){
  results = [];

  this.students.forEach(function(student){
    if (studentToRemove != student){
      results.push(student);
    }
  });
  this.students = results;

  //this.students.splice(this.students.indexOf(studentToRemove), 1);
};

module.exports = Cohort;
