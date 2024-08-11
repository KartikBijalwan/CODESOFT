let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");


// 2 Players 
    // Player 1 = X
       // Playe r2  = 0

let Player1 = true ;


const Patterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];


boxes.forEach((btn) => {
    btn.addEventListener("click",() => {
     console.log("Button Clicked");
     if(Player1){
        btn.innerText = "X";
        Player1 = false;
     } else {
        btn.innerText = "0";
        Player1 = true;
     }
     btn.disabled = true;

     checkWinner();
   });
});

const checkWinner = ()  => {
   for (let winPatterns of Patterns) {
    let pos1 = boxes[winPatterns[0]].innerText;
    let pos2 = boxes[winPatterns[1]].innerText;
    let pos3 = boxes[winPatterns[2]].innerText;
    
    if(pos1 != "" && pos2 != "" && pos3 !="") {
      if(pos1 == pos2 && pos2 == pos3) {
         console.log("winner is",pos1 );
      }
    }
   }
};


