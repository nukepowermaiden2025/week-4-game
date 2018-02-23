
//Make selectors for Random Number, Win, Losses, Score, Gems parent, Gems objects
var $rNum = $("#randomNum");
const $wins = $("#wins");
const $loss = $("#losses");
const $scor = $("score");
const $gems = $(".gemBox");

//Make object for selecting gems randomly
const $gemsGeneratorObj = {
    $g1:$(<img src="../images/blue-gem.jpg" alt="blue gem"/>),
    $g2:$(<img src="../images/green-gem.jpg" alt="green gem"/>),
    $g3:$(<img src="../images/purple-gem.jpg" alt="purple gem"/>),
    $g4:$(<img src="../images/purple2-gem.jpg" alt="purple2 gem"/>),
    $g5:$(<img src="../images/red-gem.jpg" alt="red gem"/>),
    $g6:$(<img src="../images/tydie-gem.jpg" alt="tydie gem"/>),
    $g7:$(<img src="../images/white-gem.jpg" alt="white gem"/>),
    $g8:$(<img src="../images/white2-gem.jpg" alt="white2 gem"/>),
};

console.log($gemsGeneratorObj)

//Make functions for randomNum, gemsGenerator, gemsRandomNum, gameplay

function gamestart(){  
    randomNum();
    $wins.val(0);
    $loss.val(0);
    $score.val(0);
    $gems = $(".gemBox");

};

function randomNum(){  //Generate Random number between 19-120
    let x = Math.floor((Math.random() * 120) + 19);
    $rNum.val(x);
};

function gemsGenerator(){

};


function gemsGenerator(gemsGeneratorObj){

};

function gemsRandomNum(){

};


//On page load generate or on game restart
$(function(){

//Random Number to guess
    //Gems from generator(function)
    //Gems generate random number(function)

//On Gem Click
    //Add generated number to score- if click===0 generate number 
    //Else add number to score

//Logical if
    // Check if Score === ranomNum increment wins
        //Game Restart
    // Check if Score > randomNum increment losses
        //Game Restart

 
 });




