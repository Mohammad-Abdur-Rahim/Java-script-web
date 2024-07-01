 function json(){
       //JSON placeholder 
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())  //Convert json data
.then(json => console.log(json))  //show output data 
      }