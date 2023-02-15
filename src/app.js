/*
    Kiss Albert Bence
    2023.02.15
    SZOFT I-1/E
*/


const A = document.querySelector("#a")
const B = document.querySelector("#b")
const C = document.querySelector("#c")
const Button = document.querySelector("#button")
const Terfogat = document.querySelector("#terfogat")
alert("Kiss Albert 2023.02.15 SZOFT I-1/E")

Button.addEventListener('click', () => {
    console.log("mukodik")
    //console.log("mukodik")
    let a =Number(A.value)
    let b=Number(B.value)
    let c=Number(C.value)
    let terfogat=terfog(a,b,c)
    console.log(terfogat)
   Terfogat.value=terfogat
})
function terfog(a,b,c){
   
    let terfogat = a*b*c
    return terfogat
}
