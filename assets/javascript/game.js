//This is the Crystal Collector Game 
//The intent is to make use of dot notation in organizing code
//Author: kourtney.reynolds@gmail.com

$(document).ready(function(){
    //Funcs
  

        function randomNum(){
            return( Math.floor(Math.random()*12)+1);
        };
        function guessNum(){
            return(Math.floor((Math.random() * 120) + 19))
        };

        let wins = 0;
        let losses = 0;
        let random = guessNum();
        // let totalScore = 0;
        //Make array for looping gems 
        let gemsArr = [
            'blue-gem.jpg',
            'green-gem.jpg', 
            'purple-gem.jpg',
            'tydie-gem.jpg'
        ];

        function gemBuild(){
            for(i=0; i <gemsArr.length; i++){
            $("<img>").attr({
                    'src':"assets/images/"+gemsArr[i],
                    'alt':"Gem Images",
                    'class':"gem",
                    "data-value":parseInt(randomNum())
                }).appendTo($(".gemBox"));
    
            };
        };
        
        function reset(){
            random = guessNum();
            $(".gemBox").empty();
            $('#num').text(random);
            gemBuild();

            
            $(".gem").on("click",function(){
                if(random > 0){
                    random -= parseInt($(this).data("value"));
                    $("#num").text(random);
        
                }else if(random === 0){
                    alert("You win!");
                    wins ++;
                    $("#win").text(wins);
                    reset(); //call recursively to keep going
                }else{
                    alert("You lose");
                    losses ++;
                    reset(); 
                    $("#loss").text(losses);
                    
                }
                console.log(random);
        
            });
        }

    reset(); 
       
});

//Notes leaving the main body onclick outside of reset()
//did not allow the game to restart


