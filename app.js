// let a = 10
// const b =10
// // b = 20

// function call(){
//     let a = 100
//     let salary = 30000
//     salary = null
//     console.log(b)

// }
// call()
// console.log(a)

// let a = "user 1"
// //concatenation 
// console.log("Welcome "+ a +" in smit ")
// console.log(`Welcome ${a}  in smit `)


// if(a>11){
//     console.log("a is greater ")

// }
// else{
//     console.log("11 is greater ")
// }
// pure js 
// html
// {

// }
// let a = 10
// let b = "test"
// a>11 || b == "test" ?
// console.log("a is greater ")
// :
// console.log("11 is greater")

// let a = "3"
// let b =3
// let c= 3
// c > a && c>b ?
// console.log("C is greater ")
// :
// a>c && a>b ?
// console.log("a is greater ")
// :
// b>c && b>a ?
// console.log("b is greater ")
// :
// console.log("equal")

// 'string'
// let username ="smit"
// username  ? 
// console.log("hjello")
// :
// console.log("test user ")
// call1()
// function call1(){
//     console.log("hello")
// }
// function call1(){
//     console.log("hello")
// }
// call()
// let call=()=>{
//     console.log("hello1234")
// }


// let a = 4
// let b = 10
// 
// const sum=(a,b=3)=>{
//     let  add  = a+b
//     return add
// }
// console.log(sum(a)) //4 ,7
// console.log(sum(a,b)) //7,14

// const sum =(a,b) => a+b 
// console.log(sum(a,b))  // 14
// let a1,b2 =sum(a,b) 
// console.log(a1)
// console.log(b2)

// ... spread array 
// let arr1 =[1,2,3,4]
// let data = [2,3,4]
// let newArr = ["new data",...arr1,"test",...data,45,67]
// console.log(newArr)

//destructing 
// var objectname = {
//     name :"test",
//     age:"20",
//     center:"smit"
// }
// const name1 =  objectname.name
// const age1 =  objectname.age
// const center1 =  objectname.center

// const {age} = objectname
// console.log(age)

// console.log(a.name)
// console.log(a.center)

// var arr = [
//     {
//         name: "asad",
//         center: "new center"
//     },
//     {
//         name: "ali",
//         center: "smit"
//     }]
// var { center } = arr[1]
// console.log(center)

// const [arr, setarr] = useArray([{

// }])

// map

// callBackfunction
// High order Fucntion

// const calculator=(a,b)=>{
//     let res = Sum(a,b)
//     let result2 = Multi(a,b)
//     console.log(res)
//     console.log(result2)

// }

// const Sum=(a,b)=> a+b

// const Multi=(a,b)=> a*b

// calculator(4,5)

// map
// let arr =[1,4,65,78]


// arr.map((index,data)=>{
//     console.log('value : '+index)
//     console.log(`index : ${data}`)
// })
let Data = document.getElementById("userData")
let userData = [
    {
        name:"ali",
        salary : 50000,
        exp : "1 year",
        img: "https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain"
    },
    {
        name:"ASAD",
        salary : 60000,
        exp : "4 year",
        img: "https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain"
    },
    {
        name:"ali",
        salary : 40000,
        exp : "2 year",
        img: "https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain"
    }
]

userData.map((val,ind)=>{
    Data.innerHTML+=`
    <div style='width:50%;height:40%;margin: auto;border:2px solid red;padding:2px;margin-top:5px'>
    <img src=${val.img} />    
    <h1>User name ${val.name}</h1>
    <h3>Salary : ${val.salary}</h3>
    <h3>Experience : ${val.exp}</h3>
    </div>
    `
})




















