//JSON  Stringfy and parse
const student ={
    id:1,name:"mdAbdurRahim",garde:"first-class"};

const json1 =JSON.stringify(student);
console.log(json1);
const json2 = JSON.parse(json1); //parse= recevie stringfy vaiable ()
console.log(json2);