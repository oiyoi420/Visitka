document.getElementById("burger2").addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("open");
});
 
 const plus = document.getElementById("butplus");
 const minus = document.getElementById("butminus");
 const mult = document.getElementById("butmult");
 const div = document.getElementById("butdiv");

 const sin = document.getElementById("butsin");
 const cos = document.getElementById("butcos");
 const tg = document.getElementById("buttg");
 const ctg = document.getElementById("butctg");

 
 let first = document.getElementById("first");
 let second = document.getElementById("second");
 let num = document.getElementById("num");
 
 const result = document.getElementById("result");
 
 let res = 0;
 let trigres = 0;
 
 function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "error";
            break;
    }
    result.textContent = res;
 }

function trig(mark) {
    const num = parseFloat(first.value) || 0;
    switch(mark) {
        case "sin":
            val = Math.sin(num);
            break;
        case "cos":
            val = Math.cos(num);
            break;
        case "tg":
            val = (num % Math.PI) === (Math.PI/2) ? "error" : Math.tan(num);
            break;
        case "ctg":
            val = (num % Math.PI) === 0 ? "error" : 1/(Math.tan(num));
            break;
    }
    result.textContent = trigres;
}

 plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
 });
 
 minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
 });
 
 mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
 });
 
 div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
});

sin.addEventListener("click", (event) => {
    event.preventDefault()
    trig("sin");
 });

 cos.addEventListener("click", (event) => {
    event.preventDefault()
    trig("cos");
 });

 tg.addEventListener("click", (event) => {
    event.preventDefault()
    trig("tg");
 });
 
 ctg.addEventListener("click", (event) => {
    event.preventDefault()
    trig("ctg");
 });