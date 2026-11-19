const decButton = document.getElementById("decID");
const resetButton = document.getElementById("resetID");
const incButton = document.getElementById("incID");
const countID = document.getElementById("countID");

let count = 0;

incButton.onclick = function(){
    count++;
    countID.textContent = count;
}

decButton.onclick = function(){
    count--;
    countID.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    countID.textContent = count;
}