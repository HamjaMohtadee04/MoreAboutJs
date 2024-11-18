// console.log(1)
// console.log(2)
// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => console.log(json))
// setTimeout(()=>{
//     console.log('lazy logged')
// },4000)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

const { reject } = require("async")

// function doSomething(){
//     console.log(3)
// }


const myLoader =()=>{
    return new Promise((resolve,reject) =>{
        const success = Math.random();
        if(success<=0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
myLoader()
.then(data => console.log('resolved data',data))
.catch(err => console.log('rejected with value',err))

fetch('')
.then(res =>res.json())
.then(data=>console.log(data))
.catch(err => console.log(err))

async function loadData() {
    const res = await fetch('')
    const data = res.json();
    console.log(data)
}
const taskloader = async() =>{
    const res = await fetch('')
}
loadData();
