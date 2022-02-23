function computerPlay(){
    let comp = Math.floor(Math.random()*10);
    if(comp==0||comp==1||comp==2){
        return "rock";
    } else if (comp==3||comp==4||comp==5){
        return "paper";
    } else if(comp==6||comp==7||comp==8||comp==9){
        return "scissor";
    }
}

function battle(playerSelect,computerSelect){
    console.log("Human => "+playerSelect+"\ncomputer => "+computerSelect);

    let a = playerSelect.toLowerCase();
    if(a== "rock" && computerSelect == "rock"){
        return "tie";
    } else if (a == "rock" && computerSelect == "paper"){
        return "lost";
    } else if (a == "rock" && computerSelect == "scissor") {
        return "win";
    } else if (a == "paper" && computerSelect == "paper"){
        return "tie";
    } else if (a == "paper"&& computerSelect == "rock"){
        return "win";
    } else if (a == "paper" && computerSelect == "scissor"){
        return "lost";
    } else if(a == "scissor" && computerSelect =="scissor"){
        return "tie";
    } else if (a == "scissor"&& computerSelect == "rock") {
        return "lost";
    } else if (a == "scissor"&& computerSelect == "paper"){
        return "win"
    } else{
        return "pick rock, paper or scissor";
    }
            
}

function game(){
    for(let i=0;i<5;i++){
        let sign = prompt("pick paper, scisor or rock!");
        let computer = computerPlay();
        return (battle(sign,computer));        
    }
}

game();