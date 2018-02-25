//This is the Crystal Collector Game 
//The intent is to make use of dot notation in organizing code
//Author: kourtney.reynolds@gmail.com

$(document).ready(function(){
    //Make variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //Make array for selecting gems randomly
    const $gemsGenerator = [
        '<img src="assets/images/blue-gem.jpg"/>',
        '<img src="assets/images/green-gem.jpg"/>',
        '<img src="assets/images/purple-gem.jpg"/>',
        '<img src="assets/images/purple2-gem.jpg"/>',
        '<img src="assets/images/red-gem.jpg"/>',
        '<img src="assets/images/tydie-gem.jpg"/>',
        '<img src="assets/images/white-gem.jpg"/>',
        '<img src="assets/images/white2-gem.jpg"/>',
    ];
    console.log($gemsGenerator)

    //Make a random object for guessing random number, gem images, gem random number
    var random = {
        num:    function() { //Generate Random number between 19-120
                    return(Math.floor((Math.random() * 120) + 19));
                },

        gemImg: function (myImgArr) {//Generate four Gems into an array
                    const gemArr = [];
                    for ( i = 0; i < 4; i++) {
                        gemArr.push(myImgArr[Math.floor((Math.random() * myImgArr.length))]);
                        };
                    return(gemArr);
                },

        gemNum: function() { //Generate Random number between 1-12
                    return(Math.floor((Math.random() * 12)));
                }
    };
    console.log(random.num());//expected
    console.log(random.gemImg($gemsGenerator));//expected
    console.log(random.gemNum());//expected


    //Make selectors for Random Number, Win, Losses, totalScore, Gems parent, Gems objects
    const $rNum = $("#randomNum").text(random.num());
    const $wins = $("#wins").text(wins);
    const $losses = $("#losses").text(losses);
    const $totalScore = $("#totalScore").text(totalScore);

    //After random.gemImg has generated and array of images, each of those images are appended to the gemBox div
    function $gemBox($arr) {
        for (i=0; i< $arr.length; i++){
            $(".gemBox").append($arr[i]);
            
        }
    };
    $gemBox(random.gemImg($gemsGenerator))
    console.log($gemBox(random.gemImg($gemsGenerator)));

    //Make functions for gameplay

    // function gamereset() {
    //      random.num()
    //      wins = 0
    //     loss=0
    //     totalScore=0
    // };
    // gamestart();
    // console.log(gamestart());





    // //On page load generate or on game restart
    // $(function () {

    //     //Random Number to guess
    //     //Gems from generator(function)
    //     //Gems generate random number(function)

    //     //On Gem Click
    //     //Add generated number to totalScore- if click===0 generate number 
    //     //Else add number to totalScore

    //     //Logical if
    //     // Check if totalScore === ranomNum increment wins
    //     //Game Restart
    //     // Check if totalScore > randomNum increment losses
    //     //Game Restart


    // });

    })