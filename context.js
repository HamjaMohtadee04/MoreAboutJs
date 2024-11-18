//global variable / global context
let a =5;

function add(num1,num2){
    //functional variable or functional context
    const result = num1+ num2 + a
    return result
}
const sum = add(4,5)
console.log(sum)

//key note: global context vs functional context in js.
