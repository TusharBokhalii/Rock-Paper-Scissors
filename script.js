let userScore = 0;
let ComScore = 0;

let Choice = document.querySelectorAll(".choice");

let Computers = () => {
    let Array = ["Rock","Paper","Scissors"]
    let rand =  Math.floor(Math.random()*3);
    return Array[rand];
}

let test = document.querySelector(".Winner").querySelector("p");
let y_score = document.querySelector("#Y-score");
let C_score = document.querySelector("#C-score");


let Showing = (win,u,c)=>{
    if(win){
        y_score.innerText = ++userScore;
        test.innerText = `You Wins! Your ${u} beats ${c}`;
        test.style.backgroundColor = "green";
    }else{
        C_score.innerText = ++ComScore;
        test.innerText = `You Loss! ${c} beats your ${u}`;
        test.style.backgroundColor = "red";
    }
}

let Plays = (User)=>{
    let Com = Computers();
    if(User==Com){
         test.innerText  = "Game Draw!";
         test.style.backgroundColor = "darkblue";
    }else
    {
        let userWin = true;
        if(User==="Rock"){
            userWin = Com === "Paper" ? false : true ;
        } else if(User==="Paper"){
            userWin = Com === "Scissors" ? false : true ;
        }else {
            userWin = Com === "Rock" ? false : true ;
        }
        Showing(userWin,User,Com);
    }
    console.log(User);
    console.log(Com);
    
    
}

Choice.forEach((el)=>{
    el.addEventListener("click",()=>{
        test.innerText  = "Play Yore Move";
        let userChoice = el.getAttribute("id")
        Plays(userChoice);
    });
});