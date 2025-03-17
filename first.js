// function refresh(){
//     location.reload();
// }
// let k=0;
// let x=document.querySelectorAll(".box");
// function check(){
    
//     if(
//         (x[0].textContent === x[1].textContent && x[1].textContent === x[2].textContent) ||
//         (x[3].textContent === x[4].textContent && x[4].textContent === x[5].textContent) ||
//         (x[6].textContent === x[7].textContent && x[7].textContent === x[8].textContent) ||
//         (x[0].textContent === x[4].textContent && x[4].textContent === x[8].textContent) ||
//         (x[2].textContent === x[4].textContent && x[4].textContent === x[6].textContent) ||
//         (x[0].textContent === x[3].textContent && x[3].textContent === x[6].textContent) ||
//         (x[1].textContent === x[4].textContent && x[4].textContent === x[7].textContent) ||
//         (x[2].textContent === x[5].textContent && x[5].textContent === x[8].textContent)
//     ){
//         if(k==0){
//             alert("A won the match!");
//         }
//         else{
//             alert("B won the match!");
//         }
//         refresh();
//     }
// }
// x.forEach((box) => {
//     box.addEventListener("click", () => {
//       if (k == 0) {
//         box.innerText = "O" ;
//         k = 1;
//       } else {
//         box.innerText = "X";
//         k = 0;
//       }
//       // x.disabled=true;
//       check();
//     });
//   });