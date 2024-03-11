let boxes=document.querySelectorAll(".box");
let resetgame=document.getElementById("reset");
let newgame=document.getElementById("new");
let winner=document.getElementById("msg");

let count=true;
let winningpattern =[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
]
 boxes.forEach(function(box){
    box.addEventListener("click",function(){
        if (count){
            box.innerHTML="o";
            box.style.fontSize="40px";
            box.style.color="darkblue";
            count=false;
        }
     else{
        box.innerHTML="x";
        box.style.color="darkblue";
        box.style.fontSize="40px";
        box.style.background="white";
        count=true;
     }
     box.disabled=true;
     winning();
    })
 })
 function disableboxes(){
    for(let box of boxes){
        box.disabled=true;

    }
 }

 function winning(){
    for (let pattern of winningpattern){
  let p1=boxes[pattern[0]].innerHTML;
  let p2=boxes[pattern[1]].innerHTML;
  let p3=boxes[pattern[2]].innerHTML;

  if(p1!="" && p2!="" && p3!=""){
    
    if(p1==p2 && p2==p3){
        winner.innerHTML="Yeah!!! you won";
        disableboxes();

    }
    
  }
   }
 }
 reset.addEventListener("click",function(){
 for(let box of boxes){
    box.disabled=false;
    box.innerHTML="";
    box.style.color="";
    box.style.background="";
    msg.innerHTML="";
    let count=true;

 }})
newgame.addEventListener("click",function(){
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
        box.style.color="";
        box.style.background="";
        msg.innerHTML="";
        let count=true;
}})