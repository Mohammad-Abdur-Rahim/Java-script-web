function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=>outDataSho(json))
}
function outDataSho(json){
    console.log(json)
}