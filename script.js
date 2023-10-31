const header=document.getElementById('header');
const form=document.getElementById('form');
const input=document.getElementById('input');
const scoreEl=document.getElementById('score');
const num1= Math.ceil( Math.random()*10);
const num2= Math.ceil( Math.random()*10);
header.innerText=`what is ${num1} multiply by ${num2}?`;
const correctAns=num1*num2;
let score=JSON.parse(localStorage.getItem('score'));
if(!score){
    score=0;
}
scoreEl.innerText=`score: ${score}`

form.addEventListener('submit',()=>{
const userAns=+input.value;
if(userAns===correctAns){
   score++;
   score=updatelocalstorage()

}
else{
    score--;
   score=updatelocalstorage()   
}
})
function updatelocalstorage(){
localStorage.setItem("score",JSON.stringify(score))

}


