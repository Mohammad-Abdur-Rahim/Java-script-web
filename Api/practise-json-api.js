const student={
    name:'md',
    age:22,
    id:['qqq','uuu','jjj'],
};
const objToJson =JSON.stringify(student);
console.log(objToJson);

const jsonToObj = JSON.parse(objToJson);
console.log(jsonToObj);


