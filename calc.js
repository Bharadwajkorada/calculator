function refreshpage(){
    location.reload();
}
var k="";
function fun0(){
    k+="0";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun1(){
    k+="1";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun2(){
    k+="2";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun3(){
    k+="3";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun4(){
    k+="4";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun5(){
    k+="5";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun6(){
    k+="6";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun7(){
    k+="7";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun8(){
    k+="8";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fun9(){
    k+="9";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function funp(){
    check(k);
    k+="+";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function fund(){
    check(k);
    k+="/";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function funm(){
    check(k);
    k+="X";
    let v=document.getElementById("answer");
    v.innerText=k;
}
function funs(){
    check(k);
    k+="-";
    let v=document.getElementById("answer");
    v.innerText=k;
}
// let c=0;
function fune(){
    k=solve(k);
    console.log(k);
    let v=document.getElementById("answer");
    v.innerText=k;
}
function check(t){
    let j=0;
    for(let i of t){
        if(i=='-' ||i=='+' ||i=='X' ||i=='/'){
            j++;
        }
    }   
    if(j==0){
        return t;
    }
    else{
        fune(t);
    }
}
function solve(s){
    if(s=="1+"){
        let ab=document.getElementById("answer");
        ab.style.backgroundColor="red";
        return "neversettle!"
    }
    var x="";
    var y="";
    var z="";
    let one=0;
    for(let i of s){
        if(i=='+' || i=='-' || i=='X' || i=='/'){
            y=i;
            one=1;
        }
        else{
            if(one==1){
                z+=i;
            }
            else{
                x+=i;
            }
        }
    }
    let xn=Number(x);
    let yn=Number(z);
    let an=0;
    console.log(xn);console.log(yn);
    if(y=='+'){
        an=xn+yn;
    }
    else if(y=='/'){
        an=xn/yn;
    }
    else if(y=='X'){
        an=xn*yn;
    }
    else if(y=='-'){
        an=xn-yn;
    } 
    console.log(an);
    return an.toString();
}
// 23+55
// let ab=document.querySelector("h1");
// let cd=document.querySelector("#big");
// ab.addEventListener("click",()=>{
//     cd.style.display="block";
//     ab.style.cursor="none";
// })