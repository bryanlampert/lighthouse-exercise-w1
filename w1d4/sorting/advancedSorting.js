var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 50 },
  { id: 4, name: "alex",     age: 100 },
  { id: 4, name: "bruce",     age: 30 },
];

//sorting by age
students.sort(function(sm, lg) {
  return lg.age - sm.age;
});

//sorting by names
students.sort(function(fn,comp) {
  var nameFn = fn.name.toLowerCase();
  var nameComp = comp.name.toLowerCase();
  if (nameFn < nameComp) {
    return -1;
  }
  if (nameFn > nameComp) {
    return 1;
  }

  return 0;

});

console.log(students);