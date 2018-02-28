//This is the Crystal Collector Game 
//The intent is to make use of dot notation in organizing code
//Author: kourtney.reynolds@gmail.com

$(document).ready(function(){
    //Make variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //Make array for looping gems 
    const gemsGenerator = [
        '<img src="assets/images/blue-gem.jpg" id="blue" />',
        '<img src="assets/images/green-gem.jpg" id="green"/>', 
        '<img src="assets/images/purple-gem.jpg" id="purple"/>',
        '<img src="assets/images/tydie-gem.jpg" id="tydie"/>'
    ];
    console.log(gemsGenerator) 

    //Assign Random numbers to each image in the gems array

    for(i=0; i<gemsGenerator.length; i++){

      let imgBtn = $(this);

      imgBtn.addClass("gems");

      imgBtn.attr("data-img", gemsGenerator[i]);

      $(".gemBox").append(gemsGenerator[i]);

        console.log(this)
        

    }









    // //Make a random object for guessing random number, gem images, gem random number
    // var random = {
    //     num:    function() { // Number between 19-120
    //                 return(Math.floor((Math.random() * 120) + 19));
    //             },

    //     gemImg: function (myImgArr) {//Generate four Gems into an array
    //                 const gemArr = [];
    //                 for ( i = 0; i < 4; i++) {
    //                     gemArr.push(myImgArr[Math.floor((Math.random() * myImgArr.length))]);
    //                     };
    //                 return(gemArr);
    //             },

    //     gemNum: function() { // Four values between 1-12
    //                 // const values = [];
    //                 // for ( i = 0; i < 4; i++) {
    //                 //    values.push((
    //                       return(Math.floor((Math.random() * 12) + 1));
    //                 //     ));
    //                 //     };
    //                 // return(values)
    //             },
    //     gemBox: function $gemBox(arr) {
    //             //Generate the gem image divs that take an array of randomly chosen gems
    //                 for (i=0; i< arr.length; i++){
    //                     $(".gemBox").append(arr[i]);  
    //             }
    //     }
    

    // };
    // console.log(random.num());//expected
    // console.log(random.gemImg($gemsGenerator));//expected
    // console.log(random.gemNum());//expected
    // console.log(random.gemBox());

    // //Make selectors for Random Number, Win, Losses, totalScore, Gems parent, ems array
    // const $rNum = $("#randomNum").text(random.num());
    // const $wins = $("#wins").text(wins);
    // const $losses = $("#losses").text(losses);
    // const $totalScore = $("#totalScore").text(totalScore);

   
    // ////NEED HELP////
    // //Assign random gem values to each of the gem image divs
    // var gemBtn = random.gemBox(random.gemImg($gemsGenerator));
    // //I want to say for each gem div generated add a class called gem button
    // //so I can use that class to pass a random number from the random number array
   
    // //I want to associate a random value to this class however, if they all get this same class
    // //I am not sure how the number are going to be different without 
    //     // for(j=0; j< random.gemNum().length; j++){
    //     //     $(".gem-button").val(random.gemNum());    
    //     // // };
    // });

    // ////NEED HELP////
    // //On Gem Click
    // //     //Check to see if totalScore is equal to rNum
    // //     //Else add number to totalScore
    // $(".gem-button").on("click", function(){
    //     if ($totalScore == $rNum){
    //         wins++;
    //     }
    //     else if($totalScore< $rNum){
    //         $totalScore += $this.val();
    //     }
    //     else{
    //         losses++;
    //     }
    // }); 

    // //Make functions for gameplay

    // // function gamereset() {
    // //      random.num()
    // //      wins = 0
    // //     loss=0
    // //     totalScore=0
    // // };
    // // gamestart();
    // // console.log(gamestart());

    })