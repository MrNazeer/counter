let doc = document;
let outPut = doc.querySelector(".content");
let count = 0;
let plus = doc.querySelector(".btn3");
let minus = doc.querySelector(".btn1");
let reSet = doc.querySelector(".btn2");

plus.addEventListener("click",() =>{
    let a = parseInt(outPut.innerHTML);
    a= a+1;
    outPut.innerHTML = a;
    
})

minus.addEventListener("click",() =>{
    let a = parseInt(outPut.innerHTML);
    a = a-1;
    outPut.innerHTML = a;
})

reSet.addEventListener("click",() =>{
    outPut.innerHTML = 0;
})
