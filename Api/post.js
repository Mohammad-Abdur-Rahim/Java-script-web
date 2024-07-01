function postShow(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>postShowOutput(data))
}
function postShowOutput(data){
    const postContainer=document.getElementById('post-container');
for (const post of data){
   
    const newDiv=document.createElement('div');
    newDiv.innerHTML=`
    
    <h4>User:${post.userId}</h4>
    <h5>Post: ${post.title}</h5>
    <p>Description:${post.body}</p>
    `
postContainer.appendChild(newDiv)
}
}