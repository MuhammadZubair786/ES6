// let window1 = 
// let password = document.getElementById("Password")
// let errortText = document.getElementById("errortext")

// function ChecKPassword(){
//     console.log(password.value)
//     let capitalMatch = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]/
//     let smallMatch =  /^(?=.*[a-z])[A-Za-z\d@$!%*?&]/
//     if(capitalMatch.test(password.value)==false){
//         errortText.innerText = "Must Enter Capital letter "
//     }
//     else if(smallMatch.test(password.value)==false){
//         errortText.innerText = "Must Enter Small letter "
//     }
//     else{
//         errortText.style.color="green"
//         errortText.innerText="Correct"
//     }


// }

// function newPopUp(){
// let windowContent  =`
// // <h1 style='color:red;text-align:center'>Hello user </h1>
// <h2>Please Login </h2>
// ` 

// window.open("","win1","height=200,width=300,top=100,left=10").document.write(windowContent)

// let window = 
// let makeWindow = window.open("","win1","height=200,width=300,top=400,left=500")
// makeWindow.location.href="https://www.google.com/"
// let password = "abc123123"
// let CaptialPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
// let checkcaptial =  CaptialPattern.test(password)

// let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&]{8,10}$/
// let check = pattern.test(password)
// console.log(checkcaptial)
// }

// var array = [23, 45, 23, 56, 67, 55, 3000000, 34, 22, 12, 18, 19, 17, 80]
// var newArray = array.filter((value) => {
//     return value >= 23 && value<=80

// })
// console.log(newArray)

// let  userName = ["asad","Ali","saqib","noor","imAd"]
// let newarray =  userName.filter((val)=>val.toLowerCase()[0].indexOf("a")!=-1)
// console.log(newarray)

// var userDept = [
//     {
//         name :"ali",
//         dept : "IT"
//     },
//     {
//         name :"NOOR",
//         dept : "HR"
//     },
//     {
//         name :"SAQIB",
//         dept : "WEB"
//     },
//     {
//         name :"ASAD",
//         dept : "IT"
//     }
// ]

// let newarray = userDept.filter((val)=>val.name.toLowerCase().indexOf("a")!=-1)
// console.log(newarray)

// let newArray =[8,2,3]
// let checkArray = newArray.reduce((pre,current)=>pre+current,1)
// console.log(checkArray) 

// 1,8=>1+8=>9
// 9,2=>9+2=>11
// 11

// let arr1 = [[2,3]]
// let arr2 = [[1,2]]
// let arr3 = arr1.concat(arr2) // [[2,3],[1,2]]
// console.log(arr3)

let arr = [[1,2],[1,2,5,1],[3,4,5,6,1],[8,6,5]]  // 
let newarray= arr.reduce((pre,current)=> pre.concat(current),[])
console.log(newarray)

for(var i=0;i<newarray.length;i++){
    var check = false
    for(var j = i+1;j<newarray.length;j++){
        if(newarray[i]==newarray[j]){
            
         check = true
          break

        }
    }
    if(check){
    newarray.splice(i,1)
    i=i-1
    


    }
  
}
console.log(newarray)

