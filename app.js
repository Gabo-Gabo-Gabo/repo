// async function getTodos(){
//     const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const data = await resp.json()
//     console.log(data);
// }   

// getTodos()

async function getUser(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/10 ")
    const data = await resp.json()
    console.log(data);
}   
getUser()







































