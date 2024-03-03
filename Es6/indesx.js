//Object to arrow Function Find Value
const getAge =(person)=>`${person.age} ${person.name}`;
const student={name:"Md abdur rahim" ,age:23};
const age = getAge(student);
console.log(age);