let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=(Math.floor(Math.random()*3));
    return options[randidx];

}
const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw,Play again.";
    msg.style.backgroundColor="black";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        userscore++;
        userscorepara.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        compscore++;
        compscorepara.innerText=compscore;
        msg.style.backgroundColor="red";

    }
}
const playGame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compchoice=gencompchoice();
    console.log("computerchoice=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else {
    let userwin=true;
   if(userchoice==="rock"){
    userwin=compchoice==="paper"? false:true;
   }
   else if(userchoice==="paper"){
    userwin=compchoice==="scissors"? false:true;
   }
   else{
    userwin=compchoice==="rock"? false:true;
   }
showwinner(userwin,userchoice,compchoice);

   }

    }
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("Choice was clicked",userchoice);
        playGame(userchoice);

    });
    
});