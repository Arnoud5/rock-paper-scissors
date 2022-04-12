console.log('hello world!')

function computerPlay(){
    let comp = Math.floor(Math.random()*10);
    if(comp==0||comp==1||comp==2){
        console.log("comp rock");
        return "rock";
    } else if (comp==3||comp==4||comp==5){
        console.log("comp paper")
        return "paper";
    } else if(comp==6||comp==7||comp==8||comp==9){
        console.log("comp scissor")
        return "scissor";
    }
}

function playRound(playerSelect,computerSelect){
    console.log("Human => "+playerSelect+"\ncomputer => "+computerSelect);

    let a = playerSelect.toLowerCase();
    if(a== "rock" && computerSelect == "rock"){
        console.log("tie");
        return "tie";
    } else if (a == "rock" && computerSelect == "paper"){
        console.log("lost");
        return "lost";
    } else if (a == "rock" && computerSelect == "scissor") {
        console.log("win");
        return "win";
    } else if (a == "paper" && computerSelect == "paper"){
        console.log("tie");
        return "tie";
    } else if (a == "paper"&& computerSelect == "rock"){
        console.log("win");
        return "win";
    } else if (a == "paper" && computerSelect == "scissor"){
        console.log("lost");
        return "lost";
    } else if(a == "scissor" && computerSelect =="scissor"){
        console.log("tie");
        return "tie";
    } else if (a == "scissor"&& computerSelect == "rock") {
        console.log("lost");
        return "lost";
    } else if (a == "scissor"&& computerSelect == "paper"){
        console.log("win");
        return "win"
    } else{
        return "pick rock, paper or scissor";
    }
            
}

function game(){
    for(let i=0;i<5;i++){
        let sign = prompt("pick paper, scisor or rock!");
        let computer = computerPlay();
        playRound(sign,computer);        
    }
}

game();