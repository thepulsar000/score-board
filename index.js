
// RESET SCORE
let scoreEl = document.getElementById("score1");
let scoreE2 = document.getElementById("score2");
let count = 0;

// ADD ONE
function addOne(){
    count = count + 1;
    console.log(count)
    scoreEl.textContent = count;
    // count = 0;
}

// ADD TWO
function addTwo(){
    count = count + 2;
    console.log(count)
    scoreEl.textContent = count;
    // count = 0;
}

//ADD THREE
function addThree(){
    count = count + 3;
    console.log(count)
    scoreEl.textContent = count;
    // count = 0;
}

//RESET
function resetScore1(){
    count = 0
    console.log(count)
    scoreEl.textContent = count;
}

//GUEST----------------------------

function addOne2(){
    count = count + 1;
    console.log(count)
    scoreE2.textContent = count;
    // count = 0;
}

// ADD TWO
function addTwo2(){
    count = count + 2;
    console.log(count)
    scoreE2.textContent = count;
    // count = 0;
}

//ADD THREE
function addThree2(){
    count = count + 3;
    console.log(count)
    scoreE2.textContent = count;
    // count = 0;
}

//RESET
function resetScore2(){
    count = 0
    console.log(count)
    scoreE2.textContent = count;
}